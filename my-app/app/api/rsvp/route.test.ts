import { POST } from "./route";

describe("POST /api/rsvp", () => {
  it("returns ok: true", async () => {
    const request = new Request("http://localhost/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName: "Test Guest" }),
    });

    const response = await POST(request);
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ ok: true });
  });
});
