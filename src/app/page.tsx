import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-start sm:items-start">
        <h1 className="text-4xl font-bold mb-4 text-left max-w-2xl mx-auto">
          Hi, I&apos;m Rishikesh.
        </h1>
        <ul className="flex items-start gap-6">
          <li>
            <a
              className="inline-flex items-center gap-2 hover:underline hover:underline-offset-4"
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
          </li>
          <li>
            <a
              className="inline-flex items-center gap-2 hover:underline hover:underline-offset-4"
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
          </li>
          <li>
            <a
              className="inline-flex items-center gap-2 hover:underline hover:underline-offset-4"
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
          </li>
        </ul>
        <p className="text-lg max-w-2xl mx-auto text-left mt-4">
          I&apos;m a full stack mobile app developer with hands on experience in
          cross platform & Native app development. I like exploring backend
          engineering & I also like swimming, cycling & running.
        </p>
      </main>

      <footer className="row-start-3 flex items-center justify-center"></footer>
    </div>
  );
}
