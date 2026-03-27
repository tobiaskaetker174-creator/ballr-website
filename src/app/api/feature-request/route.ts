import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, feature, problem, usecase } = body;

  if (!email || !feature) {
    return NextResponse.json({ error: "Email and feature are required" }, { status: 400 });
  }

  const { error } = await supabase.from("ballr_feature_requests").insert({
    name, email, feature, problem, usecase,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
