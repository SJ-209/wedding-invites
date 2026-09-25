"use client";

import { Source_Serif_4 } from "next/font/google";
import { useState } from "react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const fieldClass =
  "mt-2 w-full border border-[#d9d0c4] bg-[#f7f3ee] px-3 py-3 text-base text-[#1c1c1c] outline-none placeholder:text-[#b3a89c] focus:border-[#1c1c1c]";

const labelClass =
  "block text-[0.68rem] font-medium tracking-[0.18em] text-[#1c1c1c] uppercase";

const mealOptions = [
  {
    value: "no-preference",
    title: "No preference",
    description: "All dishes are suitable.",
  },
  {
    value: "chicken",
    title: "Chicken",
    description: "Only chicken and vegan dishes are suitable.",
  },
  {
    value: "vegan",
    title: "Vegan",
    description: "Plant based (Vegan) dishes only.",
  },
  {
    value: "mixed",
    title: "Mixed preferences",
    description:
      "Please specify the meal preferences for each guest below. For example: 2 no preference, 1 chicken, 1 vegan.",
  },
] as const;

const mixedMeals = [
  { name: "noPreferenceCount", title: "No preference" },
  { name: "chickenMealCount", title: "Chicken Meal" },
  { name: "veganMealCount", title: "Vegan Meal" },
] as const;

export default function RsvpForm() {
  const [mealPreference, setMealPreference] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    const formData = new FormData(event.currentTarget);
    const noPreference = Number(formData.get("noPreferenceCount") || 0);
    const chickenMeal = Number(formData.get("chickenMealCount") || 0);
    const veganMeal = Number(formData.get("veganMealCount") || 0);
    const payload = {
      fullName: formData.get("fullName"),
      familySide: formData.get("familySide"),
      adults: Number(formData.get("adults")),
      childrenUnder11: Number(formData.get("childrenUnder11") || 0),
      childrenUnder2: Number(formData.get("childrenUnder2") || 0),
      mealPreference,
      noPreferenceCount: mealPreference === "mixed" ? noPreference : 0,
      chickenMealCount: mealPreference === "mixed" ? chickenMeal : 0,
      veganMealCount: mealPreference === "mixed" ? veganMeal : 0,
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
      className={`${sourceSerif.className} flex w-full flex-col`}
      onSubmit={handleSubmit}
    >
      <p className="text-[11px] font-medium tracking-[0.28em] text-[#b3a89c] uppercase">
        RSVP
      </p>
      <h1 className="mt-3 text-[2.65rem] leading-[1.05] font-normal tracking-[-0.02em] text-[#1c1c1c]">
        Your Details
      </h1>
      <p className="mt-3 text-lg text-[#1c1c1c]">
        Please let us know a few details below.
      </p>

      <label className={`${labelClass} mt-8`}>
        Full name
        <input
          type="text"
          name="fullName"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={fieldClass}
        />
      </label>

      <label className={`${labelClass} mt-5`}>
        Side of the family
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

      <label className={`${labelClass} mt-5`}>
        Number of adults
        <input
          type="number"
          name="adults"
          min={1}
          required
          placeholder="e.g. 2"
          className={fieldClass}
        />
      </label>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <label className={labelClass}>
          Children under 11
          <input
            type="number"
            name="childrenUnder11"
            min={0}
            placeholder="e.g. 1"
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Children under 2
          <input
            type="number"
            name="childrenUnder2"
            min={0}
            placeholder="e.g. 1"
            className={fieldClass}
          />
        </label>
      </div>

      <p className="mt-10 text-[11px] font-medium tracking-[0.28em] text-[#b3a89c] uppercase">
        Dietary requirements
      </p>
      <h2 className="mt-3 text-[2.15rem] leading-tight font-normal tracking-[-0.02em] text-[#1c1c1c]">
        Meal Preferences
      </h2>
      <p className="mt-3 text-lg leading-snug text-[#1c1c1c]">
        Please select the option that best describes the meal preferences for
        you and your guests.
      </p>

      <fieldset className="mt-5 flex flex-col gap-3">
        <legend className="sr-only">Meal preferences</legend>
        {mealOptions.map((option) => {
          const selected = mealPreference === option.value;
          return (
            <div
              key={option.value}
              className={`border px-4 py-4 ${
                selected ? "border-[#1c1c1c]" : "border-[#d9d0c4]"
              }`}
            >
              <label className="flex items-start gap-3">
                <input
                  type="radio"
                  name="mealPreference"
                  value={option.value}
                  required
                  checked={selected}
                  onChange={() => setMealPreference(option.value)}
                  className="mt-1 size-5 accent-[#1c1c1c]"
                />
                <span>
                  <span className="block text-lg text-[#1c1c1c]">
                    {option.title}
                  </span>
                  <span className="mt-1 block text-base leading-snug text-[#4a4a4a]">
                    {option.description}
                  </span>
                </span>
              </label>
              {option.value === "mixed" && selected && (
                <div className="mt-4 flex flex-col gap-3 pl-8">
                  {mixedMeals.map((meal) => (
                    <label
                      key={meal.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <span className="text-lg font-medium text-[#1c1c1c]">
                        {meal.title}
                      </span>
                      <input
                        type="number"
                        name={meal.name}
                        min={0}
                        required
                        placeholder="0"
                        className="w-20 border border-[#d9d0c4] bg-[#f7f3ee] px-3 py-2 text-center text-base text-[#1c1c1c] outline-none placeholder:text-[#b3a89c] focus:border-[#1c1c1c]"
                      />
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </fieldset>

      <p className="mt-10 text-[11px] font-medium tracking-[0.28em] text-[#b3a89c] uppercase">
        Allergies
      </p>
      <h2 className="mt-3 text-[2.15rem] leading-tight font-normal tracking-[-0.02em] text-[#1c1c1c]">
        Any allergies?
      </h2>
      <p className="mt-3 text-lg text-[#1c1c1c]">
        If yes, please list them below.
      </p>
      <label className="sr-only" htmlFor="allergies">
        Allergies
      </label>
      <input
        id="allergies"
        type="text"
        name="allergies"
        placeholder="e.g. nuts, shellfish, etc."
        className={fieldClass}
      />

      {status === "saved" && (
        <p className="mt-6 text-lg text-[#1c1c1c]">
          Thank you, your RSVP has been received. We look forward to seeing you
          there.
        </p>
      )}
      {status === "error" && (
        <p className="mt-6 text-lg text-[#1c1c1c]">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "saving"}
        className="mt-8 min-h-12 w-full bg-[#1c1c1c] px-5 text-[0.72rem] font-medium tracking-[0.22em] text-[#f7f3ee] uppercase transition-opacity hover:opacity-80 disabled:opacity-60"
      >
        {status === "saving" ? "Sending..." : "Submit RSVP"}
      </button>
    </form>
  );
}
