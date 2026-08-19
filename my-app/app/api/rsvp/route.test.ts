jest.mock("@neondatabase/serverless", () => ({
  neon: () => jest.fn().mockResolvedValue([]),
}));

import { POST } from "./route";

describe("POST /api/rsvp", () => {
  const originalUrl = process.env.DATABASE_URL;

  beforeAll(() => {
    process.env.DATABASE_URL = "postgres://test";
  });

  afterAll(() => {
    process.env.DATABASE_URL = originalUrl;
  });

  it("returns ok: true", async () => {
    const request = new Request("http://localhost/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: "Test Guest",
        familySide: "Sam",
        adults: 2,
        childrenUnder11: 0,
        childrenUnder2: 0,
        dietaryRequirements: "no",
        mealOption: [],
        allergies: "",
      }),
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ ok: true });
  });
});
