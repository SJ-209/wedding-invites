import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const events = [
  {
    time: "1:30 PM",
    dateTime: "2027-06-23T13:30",
    title: "Guests & Registrar Arrive",
    marked: true,
  },
  {
    time: "2:00 PM",
    dateTime: "2027-06-23T14:00",
    title: "Ceremony",
    marked: false,
  },
  {
    time: "2:30 PM",
    dateTime: "2027-06-23T14:30",
    title: "Drinks Reception & Bar Opens",
    marked: true,
  },
  {
    time: "4:00 PM",
    dateTime: "2027-06-23T16:00",
    title: "Wedding Breakfast",
    marked: false,
  },
  {
    time: "6:30 PM",
    dateTime: "2027-06-23T18:30",
    title: "Speeches & Toasts",
    marked: false,
  },
  {
    time: "8:00 PM",
    dateTime: "2027-06-23T20:00",
    title: "Cake Cutting & First Dance",
    marked: false,
  },
  {
    time: "9:30 PM",
    dateTime: "2027-06-23T21:30",
    title: "Evening Food Served",
    marked: false,
  },
  {
    time: "11:45 PM",
    dateTime: "2027-06-23T23:45",
    title: "Carriages",
    marked: true,
  },
] as const;

function Diamond() {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className="h-2.5 w-2.5 text-[#c2b29a]"
    >
      <path
        d="M6 0.4 7.15 4.85 11.6 6 7.15 7.15 6 11.6 4.85 7.15 0.4 6 4.85 4.85Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function TheDayPage() {
  return (
    <main
      className={`${sourceSerif.className} flex-1 bg-[#faf0e6] px-4 pt-8 pb-[max(3rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-12`}
    >
      <div className="mx-auto w-full max-w-3xl">
        <p className="text-[11px] font-medium tracking-[0.28em] text-[#b3a89c] uppercase">
          The plan
        </p>
        <h1 className="mt-3 text-[2.65rem] leading-[1.05] font-normal tracking-[-0.02em] text-[#1c1c1c] sm:text-6xl">
          Order of the day
        </h1>
        <ol className="mt-10 border-t border-[#e4dcd2] sm:mt-14">
          {events.map((event) => (
            <li
              key={event.dateTime}
              className="grid grid-cols-[0.7rem_4.6rem_1fr] items-start gap-x-2 border-b border-[#e4dcd2] py-5 sm:grid-cols-[1rem_6.5rem_1fr] sm:gap-x-6 sm:py-6"
            >
              <span className="flex justify-center pt-1.5">
                {event.marked ? <Diamond /> : null}
              </span>
              <time
                dateTime={event.dateTime}
                className="pt-1 text-[0.9rem] tracking-wide text-[#a3988c] sm:pt-0.5 sm:text-lg"
              >
                {event.time}
              </time>
              <p className="text-[1.2rem] leading-snug text-[#1a1a1a] sm:text-[1.75rem]">
                {event.title}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
