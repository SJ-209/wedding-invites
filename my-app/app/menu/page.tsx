import Image from "next/image";

export default function MenuPage() {
  return (
    <main className="flex flex-1 justify-center bg-[#faf0e6] px-4 pt-6 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8 sm:pt-10 sm:pb-16">
      <h1 className="sr-only">Menu</h1>
      <Image
        src="/images/menu2.PNG"
        alt="Wedding menu, including starters, mains, sides, dessert and evening food."
        width={1024}
        height={1536}
        priority
        className="h-auto w-full max-w-2xl"
        sizes="(max-width: 768px) 100vw, 672px"
      />
    </main>
  );
}
