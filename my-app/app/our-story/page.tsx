import { Source_Serif_4 } from "next/font/google";
import Image from "next/image";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const paragraphs = [
  "It all started when Kri was posted to 5 Rifles in Germany. On 27 April 2014, she arrived at the battalion and, somehow, news of the new Asian girl arriving travelled fast.",
  "What Kri probably did not expect was for that news to travel all the way from Germany to the UK, where Sam was on his Recce Commander course. He was not even in Germany, but somehow he had already heard about the new Asian girl who had arrived at battalion. Military gossip clearly travelled faster than anything else.",
  "So Sam slipped into Kri’s Facebook DMs with the exact words: “Heyy! How are you? I noticed you joined our battalion… so thought I’d say hi. Oh and I’m Sam 😊”",
  "Looking back, it was not exactly the most dramatic romantic opening, but it did the job. A few days of talking turned into their first date, which was a run. Kri ended up besting Sam, which he has probably spent the years since trying to forget. We like to think that was either the moment he fell in love or the moment he realised he had met his match.",
  "A few days later, Sam took Kri to Red Card Green Card for a lovely meal. Somewhere between the food, the laughter and the conversation, things started to get a little more serious, and their love story began.",
  "Since then, life has taken them on quite an adventure. Between postings, exercises and deployments, they have travelled to over 15 countries together and collected more memories than they could ever fit into a photo album.",
  "It has not always been easy. For several years they had to make a long distance relationship work because of their postings and deployments. Through the miles, missed calls, busy days and everything else life threw at them, they always found their way back to each other. They have also supported one another through their careers, celebrating the good days and getting each other through the difficult ones.",
  "In 2021, after five years of making the distance work, they finally managed to get postings a little closer together, with Kri in Chepstow and Sam in Hereford. It was not quite next door, but it certainly felt like an improvement.",
  "A year later, life changed again when Kri was diagnosed with cancer. Sam became her primary carer and stood beside her throughout her battle, caring for her, supporting her and being there through the hardest days. It was a difficult chapter, but it also showed just how strong they are together.",
  "These days, life is a little less about military postings and a little more about home, family and a certain four legged member of the household. They adopted Ozzy, who quickly made himself at home alongside their other boy, Spencer.",
  "Now happily settled in their home in Hereford, Kri and Sam are looking forward to the next chapter of their story. After everything they have been through, they know that the best adventures are the ones they take together.",
];

function StoryMark() {
  return (
    <div
      className="mt-14 flex items-center justify-center gap-4 text-[#c2b29a]"
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-[#c2b29a]" />
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          d="M12 20s-6.5-4.1-6.5-9.1C5.5 8 7.4 6.4 9.4 6.4c1.2 0 2.2.6 2.6 1.5.4-.9 1.4-1.5 2.6-1.5 2 0 3.9 1.6 3.9 4.5C18.5 15.9 12 20 12 20Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M12 8.2c.4-1.6 1.2-2.8 2.2-3.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="h-px w-12 bg-[#c2b29a]" />
    </div>
  );
}

export default function OurStoryPage() {
  return (
    <main
      className={`${sourceSerif.className} flex-1 bg-[#faf0e6] px-5 pt-6 pb-[max(4rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-10`}
    >
      <article className="mx-auto w-full max-w-2xl">
        {/* Kri and Sam together */}
        <Image
          src="/images/krisam.jpg"
          alt="Kri and Sam"
          width={1024}
          height={1536}
        />
        {/* <div className="mt-3 aspect-[4/5] w-full border border-[#e4dcd2] bg-[#f7f3ee] sm:aspect-[3/2]" /> */}

        <div className="mt-8 border-t border-[#e4dcd2] pt-10 sm:mt-10 sm:pt-12">
          <p className="text-[11px] font-medium tracking-[0.28em] text-[#b3a89c] uppercase">
            The beginning
          </p>
          <h1 className="mt-3 text-[2.65rem] leading-[1.05] font-normal tracking-[-0.02em] text-[#1c1c1c] sm:text-6xl">
            Our Story
          </h1>
          <div className="mt-8 space-y-6 text-[1.125rem] leading-[1.7] text-[#1c1c1c] sm:mt-10 sm:text-xl sm:leading-[1.75]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <StoryMark />
        </div>
      </article>
    </main>
  );
}
