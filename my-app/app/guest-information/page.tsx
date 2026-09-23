import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const notes = [
  {
    title: "Unplugged ceremony",
    uppercase: true,
    body: "We kindly request an unplugged ceremony. Please keep mobile phones, cameras and other electronic devices switched off and out of sight from the beginning of the ceremony until the conclusion of the drinks reception.",
  },
  {
    title: "Gifts",
    uppercase: false,
    body: "Your presence at our wedding is the greatest gift we could ask for. However, should you wish to honour us with a gift, a contribution towards our future adventures together would be sincerely appreciated.",
  },
] as const;

function Diamond() {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className="mx-auto h-2.5 w-2.5 text-[#c2b29a]"
    >
      <path
        d="M6 0.4 7.15 4.85 11.6 6 7.15 7.15 6 11.6 4.85 7.15 0.4 6 4.85 4.85Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function GuestInformationPage() {
  return (
    <main
      className={`${sourceSerif.className} flex-1 bg-[#faf0e6] px-5 pt-10 pb-[max(4rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-14`}
    >
      <div className="mx-auto w-full max-w-2xl text-center">
        <p className="text-[11px] font-medium tracking-[0.28em] text-[#b3a89c] uppercase">
          Extra details
        </p>
        <h1 className="mt-3 text-[2.65rem] leading-[1.08] font-normal tracking-[-0.02em] text-[#1c1c1c] sm:text-6xl">
          A Few Notes for the Day
        </h1>
        <ul className="mt-8 space-y-4 text-left sm:mt-10">
          {notes.map((note) => (
            <li
              key={note.title}
              className="border border-[#d9d0c4] bg-[#f7f3ee] px-6 py-8 text-center sm:px-10 sm:py-10"
            >
              <Diamond />
              <h2
                className={`mt-4 text-[1.65rem] leading-tight text-[#1c1c1c] sm:text-3xl ${
                  note.uppercase ? "tracking-[0.08em] uppercase" : ""
                }`}
              >
                {note.title}
              </h2>
              <p className="mt-4 text-[1.05rem] leading-[1.7] text-[#1c1c1c] sm:text-lg">
                {note.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
