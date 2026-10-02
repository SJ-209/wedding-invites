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
  const childrenAged11To13 = Number(body.childrenAged11To13 || 0);
  const childrenAged2To10 = Number(body.childrenAged2To10 || 0);

  await sql`ALTER TABLE rsvps ADD COLUMN IF NOT EXISTS children_aged_11_to_13 integer NOT NULL DEFAULT 0`;
  await sql`ALTER TABLE rsvps ADD COLUMN IF NOT EXISTS children_aged_2_to_10 integer NOT NULL DEFAULT 0`;

  await sql`
  INSERT INTO rsvps (
    full_name,
    family_side,
    adults,
    children_under_11,
    children_aged_11_to_13,
    children_aged_2_to_10,
    children_under_2,
    meal_preference,
    no_preference_count,
    chicken_meal_count,
    vegan_meal_count,
    allergies
  )
  VALUES (
    ${body.fullName},
    ${body.familySide},
    ${body.adults},
    ${childrenAged2To10},
    ${childrenAged11To13},
    ${childrenAged2To10},
    ${body.childrenUnder2},
    ${body.mealPreference},
    ${body.noPreferenceCount},
    ${body.chickenMealCount},
    ${body.veganMealCount},
    ${body.allergies}
  )
`;

  return NextResponse.json({ ok: true });
}
