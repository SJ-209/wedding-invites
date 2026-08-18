"use client";

import { useState } from "react";

const fieldClass =
  "mt-2 min-h-11 w-full rounded-lg border border-black/[.08] bg-[#faf0e6] px-3 py-2.5 text-base text-[#585858] outline-none transition-colors focus:border-black/40";

const labelClass = "block text-base font-medium leading-snug text-[#585858]";

export default function RsvpForm() {
  const [hasDietaryRequirements, setHasDietaryRequirements] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: formData.get("fullName"),
      familySide: formData.get("familySide"),
      adults: Number(formData.get("adults")),
      childrenUnder11: Number(formData.get("childrenUnder11")),
      childrenUnder2: Number(formData.get("childrenUnder2")),
      dietaryRequirements: formData.get("dietaryRequirements"),
      mealOption: formData.getAll("mealOption"),
      allergies: formData.get("allergies"),
    };
    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Request failed");
      }
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="mt-8 flex w-full max-w-full flex-col gap-5 sm:mt-12 sm:gap-6"
      onSubmit={handleSubmit}
    >
      <label className={labelClass}>
        What is your full name?
        <input
          type="text"
          name="fullName"
          required
          autoComplete="name"
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        What side of the family are you from?
        <select
          name="familySide"
          required
          defaultValue=""
          className={fieldClass}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Kri">Kri</option>
          <option value="Sam">Sam</option>
        </select>
      </label>

      <label className={labelClass}>
        How many adults including yourself?
        <input
          type="number"
          name="adults"
          min={1}
          required
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        How many children under 11?
        <input
          type="number"
          name="childrenUnder11"
          min={0}
          required
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        How many children under 2?
        <input
          type="number"
          name="childrenUnder2"
          min={0}
          required
          className={fieldClass}
        />
      </label>

      <fieldset>
        <legend className={labelClass}>
          Do you or your guest have any dietary requirements?
        </legend>
        <div className="mt-3 flex gap-8">
          <label className="flex min-h-11 items-center gap-2 text-base text-black">
            <input
              type="radio"
              name="dietaryRequirements"
              value="yes"
              required
              checked={hasDietaryRequirements === "yes"}
              onChange={() => setHasDietaryRequirements("yes")}
              className="size-5"
            />
            Yes
          </label>
          <label className="flex min-h-11 items-center gap-2 text-base text-black">
            <input
              type="radio"
              name="dietaryRequirements"
              value="no"
              required
              checked={hasDietaryRequirements === "no"}
              onChange={() => setHasDietaryRequirements("no")}
              className="size-5"
            />
            No
          </label>
        </div>
      </fieldset>

      {hasDietaryRequirements === "yes" && (
        <fieldset>
          <legend className={labelClass}>
            Are you eating the chicken or vegan option?
          </legend>
          <div className="mt-3 flex flex-col gap-1">
            <label className="flex min-h-11 items-center gap-2 text-base text-black">
              <input
                type="checkbox"
                name="mealOption"
                value="chicken"
                className="size-5"
              />
              Chicken
            </label>
            <label className="flex min-h-11 items-center gap-2 text-base text-black">
              <input
                type="checkbox"
                name="mealOption"
                value="vegan"
                className="size-5"
              />
              Vegan
            </label>
          </div>
        </fieldset>
      )}

      <label className={labelClass}>
        Do you or your guest have any allergies? If so, please list them.
        <input type="text" name="allergies" className={fieldClass} />
      </label>

      {status === "saved" && (
        <p>
          Thank you, your RSVP has been received, we look forward to seeing you
          there!
        </p>
      )}
      {status === "error" && <p>Something went wrong. Please try again.</p>}

      <button
        type="submit"
        disabled={status === "saving"}
        className="mt-2 min-h-12 w-full rounded-full bg-foreground px-5 text-base font-medium text-background transition-colors hover:bg-[#383838] sm:w-auto"
      >
        {status === "saving" ? "Sending..." : "Submit RSVP"}
      </button>
    </form>
  );
}
