import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold mb-4 text-center max-w-2xl mx-auto">
          Mobile app dev with hands on expereince in Flutter, React native. I
          vibe code chrome extensions
        </h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://x.com/RustyRishii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/twitter.svg"
            alt="Twitter/X icon"
            width={16}
            height={16}
          />
          Twitter
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/RustyRishii"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Window icon"
            width={20}
            height={20}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/rishikesh-bidkar-3452a1202/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Linkedin icon"
            width={20}
            height={20}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
