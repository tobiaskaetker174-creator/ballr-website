import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import crypto from "crypto";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function hashIP(ip: string): string {
  return crypto.createHash("sha256").update(ip + "ballr-salt-2026").digest("hex").slice(0, 16);
}

export async function GET() {
  const { data, error } = await supabase
    .from("ballr_city_vote_counts")
    .select("city_name, vote_count")
    .order("vote_count", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ cities: data });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { city } = body;

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 });
  }

  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for")?.split(",")[0] || headersList.get("x-real-ip") || "unknown";
  const ipHash = hashIP(ip);

  // Try to insert vote (unique constraint will prevent duplicates)
  const { error: voteError } = await supabase.from("ballr_city_votes").insert({
    city_name: city,
    ip_hash: ipHash,
  });

  if (voteError) {
    if (voteError.code === "23505") {
      return NextResponse.json({ error: "Already voted for this city" }, { status: 409 });
    }
    return NextResponse.json({ error: voteError.message }, { status: 500 });
  }

  // Increment count: read current, then update
  const { data: current } = await supabase
    .from("ballr_city_vote_counts")
    .select("vote_count")
    .eq("city_name", city)
    .single();

  if (current) {
    await supabase
      .from("ballr_city_vote_counts")
      .update({ vote_count: current.vote_count + 1 })
      .eq("city_name", city);
  }

  return NextResponse.json({ success: true });
}
