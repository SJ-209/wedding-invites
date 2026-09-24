import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const taxis = [
  {
    name: "Dalesman Central Taxis",
    phone: "01756 794444",
    tel: "+441756794444",
  },
  {
    name: "Station Taxis Skipton",
    phone: "01756 700777",
    tel: "+441756700777",
  },
  {
    name: "Skipton & Craven Taxis",
    phone: "01756 701122",
    tel: "+441756701122",
  },
] as const;

export default function TravelPage() {
  return (
    <main
      className={`${sourceSerif.className} flex-1 bg-[#faf0e6] px-5 pt-10 pb-[max(4rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-14`}
    >
      <div className="mx-auto w-full max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.28em] text-[#b3a89c] uppercase">
          Getting there
        </p>
        <h1 className="mt-3 text-[2.65rem] leading-[1.05] font-normal tracking-[-0.02em] text-[#1c1c1c] sm:text-6xl">
          Travel &amp; Taxis
        </h1>
        <p className="mt-6 max-w-xl text-[1.15rem] leading-[1.65] text-[#1c1c1c] sm:mt-8 sm:text-xl sm:leading-[1.7]">
          Complimentary parking is available at The Tithe Barn. Should you wish
          to travel by taxi, we recommend the following local services:
        </p>
        <ul className="mt-8 border border-[#d9d0c4] sm:mt-10">
          {taxis.map((taxi) => (
            <li
              key={taxi.tel}
              className="border-b border-[#d9d0c4] px-6 py-8 text-center last:border-b-0 sm:py-10"
            >
              <p className="text-[1.65rem] leading-tight text-[#1c1c1c] sm:text-3xl">
                {taxi.name}
              </p>
              {/* <Image
                src="/images/clover2.png"
                alt=""
                width={250}
                height={150}
                className="mx-auto mt-4 h-5 w-auto"
              /> */}
              <a
                href={`tel:${taxi.tel}`}
                className="mt-3 inline-block text-lg tracking-[0.08em] text-[#1c1c1c] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1c1c1c] sm:text-xl"
              >
                {taxi.phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
