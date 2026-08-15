import Image from "next/image";
import RsvpForm from "./rsvp-form";

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center bg-zinc-50 font-sans overflow-x-hidden">
      <main className="flex w-full max-w-3xl flex-col items-center bg-white px-4 py-8 pt-[max(2rem,env(safe-area-inset-top))] pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8 sm:py-16 md:px-16 md:py-24">
        <Image
          className="h-auto w-full max-w-full rounded-lg drop-shadow-lg"
          src="/images/invite-front.JPG"
          alt="Wedding Invitation Front"
          width={1500}
          height={750}
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <Image
          className="mt-6 h-auto w-full max-w-full rounded-lg drop-shadow-lg sm:mt-8"
          src="/images/invite-rear.JPG"
          alt="Wedding Invitation Back"
          width={3000}
          height={100}
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <RsvpForm />
      </main>
    </div>
  );
}
