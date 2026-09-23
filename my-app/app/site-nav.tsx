import Link from "next/link";

const items = [
  { href: "/", label: "Invitation", lines: ["Invitation"] },
  { href: "/our-story", label: "Our Story", lines: ["Our", "Story"] },
  { href: "/the-day", label: "The Day", lines: ["The", "Day"] },
  { href: "/dress-code", label: "Dress Code", lines: ["Dress", "Code"] },
  { href: "/travel", label: "Travel", lines: ["Travel"] },
  {
    href: "/guest-information",
    label: "Guest Information",
    lines: ["Guest", "Information"],
  },
  { href: "/rsvp", label: "RSVP", lines: ["RSVP"] },
] as const;

export default function SiteNav() {
  return (
    <header className="w-full bg-[#faf0e6] px-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6 md:px-10">
      <nav
        aria-label="Sections"
        className="mx-auto w-full max-w-6xl border border-[#c5bfb4] p-[5px]"
      >
        <ul className="grid grid-cols-3 items-center gap-x-1 gap-y-2 border border-[#c5bfb4] px-2 py-3 sm:flex sm:justify-between sm:gap-4 sm:px-5 sm:py-4 md:px-8">
          {items.map((item) => (
            <li key={item.href} className="flex justify-center">
              <Link
                href={item.href}
                aria-label={item.label}
                className="flex min-h-11 flex-col items-center justify-center px-[0.12em] text-center text-[10px] font-normal uppercase leading-[1.25] tracking-[0.12em] whitespace-nowrap text-[#1c1c1c] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1c1c] sm:px-[0.16em] sm:text-xs sm:tracking-[0.16em] md:text-[15px] md:tracking-[0.2em]"
              >
                {item.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
