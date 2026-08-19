import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    return NextResponse.json(
      { ok: false, error: "Missing DATABASE_URL" },
      { status: 500 },
    );
  }

  const body = await request.json();
  const sql = neon(databaseUrl);

  await sql`
    INSERT INTO rsvps (
      full_name,
      family_side,
      adults,
      children_under_11,
      children_under_2,
      dietary_requirements,
      meal_option,
      allergies
    )
    VALUES (
      ${body.fullName},
      ${body.familySide},
      ${body.adults},
      ${body.childrenUnder11},
      ${body.childrenUnder2},
      ${body.dietaryRequirements},
      ${body.mealOption},
      ${body.allergies}
    )
  `;

  return NextResponse.json({ ok: true });
}
