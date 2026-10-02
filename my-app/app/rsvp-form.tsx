"use client";

import { Source_Serif_4 } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const fieldClass =
  "mt-2 w-full border border-[#d9d0c4] bg-[#f7f3ee] px-3 py-3 text-base text-[#1c1c1c] outline-none placeholder:text-[#b3a89c] focus:border-[#1c1c1c]";

const countFieldClass =
  "w-36 shrink-0 border border-[#d9d0c4] bg-[#f7f3ee] px-3 py-3 text-base text-[#1c1c1c] outline-none placeholder:text-[#b3a89c] focus:border-[#1c1c1c] sm:w-44";

const labelClass = "block text-lg font-normal text-[#1c1c1c]";

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
  const [hideForm, setHideForm] = useState(false);
  const thanksRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (status !== "saved") return;
    thanksRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "center",
    });
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timeout = window.setTimeout(
      () => setHideForm(true),
      reduceMotion ? 0 : 900,
    );
    return () => window.clearTimeout(timeout);
  }, [status]);

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
      childrenAged11To13: Number(formData.get("childrenAged11To13") || 0),
      childrenAged2To10: Number(formData.get("childrenAged2To10") || 0),
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
    <div className={`${sourceSerif.className} flex w-full flex-col`}>
      {status === "saved" && (
        <p
          ref={thanksRef}
          className="page-fade text-lg text-[#1c1c1c] text-center"
          role="status"
        >
          Thank you, your RSVP has been received. We look forward to seeing you
          there.
        </p>
      )}
      {hideForm ? null : (
        <form
          className={`flex w-full flex-col ${status === "saved" ? "rsvp-fade-out" : ""}`}
          onSubmit={handleSubmit}
          aria-hidden={status === "saved"}
          inert={status === "saved"}
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
            <strong>Full name</strong>
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
            <strong>Side of the family</strong>
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

          <div className="mt-10 border-t border-[#e4dcd2] pt-10">
            <p className="text-[11px] font-medium tracking-[0.28em] text-[#b3a89c] uppercase">
              Guest numbers
            </p>
            <h2 className="mt-3 text-[2.15rem] leading-tight font-normal tracking-[-0.02em] text-[#1c1c1c]">
              How many are attending?
            </h2>
            <p className="mt-3 text-lg text-[#1c1c1c]">
              Please include yourself.
            </p>

            <div className="mt-8 flex flex-col gap-7 border-b border-[#e4dcd2] pb-8">
              <div className="flex items-center justify-between gap-4">
                <label htmlFor="adults" className={labelClass}>
                  <strong>Adults (aged 14+)</strong>
                </label>
                <input
                  id="adults"
                  type="number"
                  name="adults"
                  min={1}
                  required
                  placeholder="e.g. 2"
                  className={countFieldClass}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <label htmlFor="childrenAged11To13" className={labelClass}>
                    <strong>Children aged 11 – 13</strong>
                  </label>
                  <p className="mt-2 text-sm leading-snug text-[#1c1c1c]">
                    If any child aged 11 – 13 would prefer the children&apos;s
                    menu, please include them in the 2 – 10 category instead.
                  </p>
                </div>
                <input
                  id="childrenAged11To13"
                  type="number"
                  name="childrenAged11To13"
                  min={0}
                  placeholder="e.g. 1"
                  className={countFieldClass}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label htmlFor="childrenAged2To10" className={labelClass}>
                  <strong>Children aged 2 – 10</strong>
                </label>
                <input
                  id="childrenAged2To10"
                  type="number"
                  name="childrenAged2To10"
                  min={0}
                  placeholder="e.g. 1"
                  className={countFieldClass}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <label htmlFor="childrenUnder2" className={labelClass}>
                  <strong>Children under 2</strong>
                </label>
                <input
                  id="childrenUnder2"
                  type="number"
                  name="childrenUnder2"
                  min={0}
                  placeholder="e.g. 1"
                  className={countFieldClass}
                />
              </div>
            </div>
          </div>

          <p className="mt-10 text-[11px] font-medium tracking-[0.28em] text-[#b3a89c] uppercase">
            Dietary requirements
          </p>
          <h2 className="mt-3 text-[2.15rem] leading-tight font-normal tracking-[-0.02em] text-[#1c1c1c]">
            Meal Preferences
          </h2>
          <p className="mt-3 text-lg leading-snug text-[#1c1c1c]">
            Please select the option that best describes the meal preferences
            for you and your guests.
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

          {status === "error" && (
            <p className="mt-6 text-lg text-[#1c1c1c]">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "saving" || status === "saved"}
            className="mt-8 min-h-12 w-full bg-[#1c1c1c] px-5 text-[0.72rem] font-medium tracking-[0.22em] text-[#f7f3ee] uppercase transition-opacity hover:opacity-80 disabled:opacity-60"
          >
            {status === "saving" ? "Sending..." : "Submit RSVP"}
          </button>
        </form>
      )}
    </div>
  );
}
