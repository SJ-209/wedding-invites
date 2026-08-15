import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("RSVP received:", body);

  return NextResponse.json({ ok: true });
}