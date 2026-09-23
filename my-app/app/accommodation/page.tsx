import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const stays = [
  {
    name: "The Devonshire Arms Hotel & Spa",
    detail: "0.8 miles away",
    href: "https://thedevonshirearms.co.uk/stay/",
    link: "Visit hotel",
  },
  {
    name: "Meadowcroft at Bolton Abbey",
    detail: "1.6 miles · sleeps 8",
    href: "https://www.instagram.com/meadowcroft.at.boltonabbey/",
    link: "View details",
  },
  {
    name: "Norwood Cottage",
    detail: "1.9 miles · sleeps 4",
    href: "https://norwoodcottage.co.uk",
    link: "Visit website",
  },
  {
    name: "The Bolthole, Deerstones Cottage",
    detail: "2 miles · sleeps 2",
    note: "Booking via Airbnb",
  },
  {
    name: "Olicana Park",
    detail: "2.7 miles · luxury cabins & cottages",
    href: "https://olicanapark.co.uk",
    link: "Visit website",
  },
  {
    name: "Craven Heifer",
    detail: "3 miles · pub with rooms",
    href: "https://cravenheifer-addingham.co.uk",
    link: "Visit website",
  },
] as const;

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-3.5 w-3.5">
      <path
        d="M4 12 12 4M7 4h5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AccommodationPage() {
  return (
    <main
      className={`${sourceSerif.className} flex-1 bg-[#faf0e6] px-5 pt-10 pb-[max(4rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-14`}
    >
      <div className="mx-auto w-full max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.28em] text-[#b3a89c] uppercase">
          Where to stay
        </p>
        <h1 className="mt-3 text-[2.65rem] leading-[1.05] font-normal tracking-[-0.02em] text-[#1c1c1c] sm:text-6xl">
          Accommodation
        </h1>
        <p className="mt-6 max-w-xl text-[1.15rem] leading-[1.65] text-[#1c1c1c] sm:mt-8 sm:text-xl sm:leading-[1.7]">
          We have gathered a few nearby options to make your stay easy. The
          venue&apos;s accommodation directory includes hotels, pubs with rooms,
          cottages and campsites. Distances below are from The Tithe Barn.
        </p>
        <ul className="mt-8 space-y-4 sm:mt-10">
          {stays.map((stay) => (
            <li
              key={stay.name}
              className="border border-[#d9d0c4] bg-[#f7f3ee] px-6 py-7 sm:px-8 sm:py-8"
            >
              <h2 className="text-[1.65rem] leading-tight text-[#1c1c1c] sm:text-3xl">
                {stay.name}
              </h2>
              <p className="mt-3 text-lg text-[#1c1c1c] sm:text-xl">
                {stay.detail}
              </p>
              {"href" in stay ? (
                <a
                  href={stay.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.18em] text-[#1c1c1c] uppercase underline underline-offset-4"
                >
                  {stay.link}
                  <ExternalIcon />
                </a>
              ) : (
                <p className="mt-5 text-base text-[#1c1c1c]">{stay.note}</p>
              )}
            </li>
          ))}
        </ul>
        <a
          href="https://crippsandco.com/the-tithe-barn/other-location-accommodation"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-[1.35rem] leading-snug text-[#1c1c1c] underline decoration-1 underline-offset-4 sm:text-2xl"
        >
          See the full accommodation list from The Tithe Barn
          <ExternalIcon />
        </a>
      </div>
    </main>
  );
}
