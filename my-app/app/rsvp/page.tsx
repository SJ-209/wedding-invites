// import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
// import Image from "next/image";
import RsvpForm from "../rsvp-form";

// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   weight: ["500", "600"],
// });

// const script = Great_Vibes({
//   subsets: ["latin"],
//   weight: "400",
// });

// const labelClass =
//   "text-[0.68rem] leading-relaxed font-medium tracking-[0.16em] text-[#1c1c1c] uppercase sm:text-sm sm:tracking-[0.28em]";

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col overflow-x-hidden bg-[#f7f3ee]">
      <main className="flex w-full flex-col items-center px-4 pt-4 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-16 md:px-16 md:pb-24">
        {/* <Image
          className="mt-6 h-auto w-full max-w-3xl rounded-lg drop-shadow-lg sm:mt-8"
          src="/images/invite-rear-2.PNG"
          alt="Wedding Invitation Back"
          width={3000}
          height={100}
          sizes="(max-width: 768px) 100vw, 768px"
        /> */}
        <div className="w-full max-w-3xl">
          <RsvpForm />
        </div>
      </main>
    </div>
  );
}
