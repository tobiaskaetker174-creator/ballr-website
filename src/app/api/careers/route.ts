import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();
  const { type, ...data } = body;

  if (type === "organizer") {
    const { name, email, city, motivation, experience } = data;
    if (!name || !email || !city) {
      return NextResponse.json({ error: "Name, email and city are required" }, { status: 400 });
    }
    const { error } = await supabase.from("ballr_organizer_applications").insert({
      name, email, city, motivation, experience,
    });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  } else if (type === "franchise") {
    const { name, email, city, company, plans, budget } = data;
    if (!name || !email || !city) {
      return NextResponse.json({ error: "Name, email and city are required" }, { status: 400 });
    }
    const { error } = await supabase.from("ballr_franchise_inquiries").insert({
      name, email, city, company, plans, budget,
    });
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  } else {
    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  }

  return NextResponse.json({ success: true });
}
