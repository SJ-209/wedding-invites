import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const labelClass =
  "text-[0.68rem] leading-relaxed font-medium tracking-[0.16em] text-[#1c1c1c] uppercase sm:text-sm sm:tracking-[0.28em]";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col overflow-x-hidden bg-[#f7f3ee]">
      <section className="relative flex min-h-[calc(100svh-8.5rem)] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[calc(100svh-7rem)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 border border-[#d9d0c4] sm:inset-5"
        />
        <div
          className={`${cormorant.className} relative flex max-w-xl flex-col items-center`}
        >
          {/* <Image src="/images/leaf.png" alt="Leaf" width={300} height={300} /> */}
          <p className={labelClass}>Together with their families</p>
          <h1
            className={`${script.className} mt-6 text-6xl leading-none text-[#1a1a1a] sm:mt-8 sm:text-8xl`}
          >
            Kri &amp; Sam
          </h1>
          <p className={`${labelClass} mt-8 sm:mt-10`}>
            <span className="sm:hidden">
              Wednesday,
              <br />
              the twenty-third of June
            </span>
            <span className="hidden sm:inline">
              Wednesday, the twenty-third of June
            </span>
            <br />
            Two thousand and twenty-seven
          </p>
          <p
            className={`${labelClass} mt-6 max-w-[16.5rem] sm:mt-8 sm:max-w-xl`}
          >
            The Tithe Barn
            <br />
            Bolton Abbey
            <br />
            Skipton, North Yorkshire
          </p>
          <Link
            href="/the-day"
            className="mt-12 inline-flex items-center gap-3 border border-[#1c1c1c]/45 px-7 py-3 text-[0.68rem] font-medium tracking-[0.24em] text-[#1c1c1c] uppercase transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1c1c] sm:mt-14"
          >
            Explore our day
            <span aria-hidden="true">↓</span>
          </Link>
          <Image
            src="/images/tithe.PNG"
            alt="Building"
            width={600}
            height={400}
          />
        </div>
      </section>
      {/* <main className="flex w-full flex-col items-center px-4 pt-4 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-16 md:px-16 md:pb-24">
        <Image
          className="mt-6 h-auto w-full max-w-3xl rounded-lg drop-shadow-lg sm:mt-8"
          src="/images/invite-rear-2.PNG"
          alt="Wedding Invitation Back"
          width={3000}
          height={100}
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <div className="w-full max-w-3xl">
          <RsvpForm />
        </div>
      </main> */}
    </div>
  );
}
