import { Source_Serif_4 } from "next/font/google";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export default function DressCodePage() {
  return (
    <main
      className={`${sourceSerif.className} flex min-h-[calc(100svh-8.5rem)] flex-1 flex-col bg-[#242422] px-6 pt-16 pb-[max(4rem,env(safe-area-inset-bottom))] sm:min-h-[calc(100svh-7rem)] sm:px-8 sm:pt-24`}
    >
      <div className="mx-auto w-full max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.28em] text-[#a39e94] uppercase">
          Dress code
        </p>
        <h1 className="mt-4 text-[2.75rem] leading-[1.05] font-normal tracking-[-0.02em] text-[#f6f1e8] sm:text-6xl">
          Formal Day
          <br />
          Attire
        </h1>
        <div className="mt-10 max-w-xl space-y-6 text-[1.15rem] leading-[1.65] text-[#f3eee6] sm:mt-12 sm:text-xl sm:leading-[1.7]">
          <p>
            <strong>Ladies:</strong> You are invited to wear elegant occasion
            wear, with hats or fascinators if you wish.
            <br />
          </p>
          <p>
            <strong>Gentlemen:</strong> You are kindly requested to wear a
            lounge suit or formal suit.
            <br />
          </p>
          <p>
            <strong>For Military Guests:</strong> Those of you who are serving
            are warmly invited to wear Service Dress or Mess Dress.
          </p>
        </div>
      </div>
    </main>
  );
}
