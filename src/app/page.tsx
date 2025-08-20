import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-start sm:items-start">
        <h1 className="text-4xl font-bold mb-4 text-left max-w-2xl mx-auto">
          Hi, I&apos;m Rishikesh.
        </h1>

        <SocialLinks />

        <p className="text-lg max-w-2xl mx-auto text-left mt-4">
          I&apos;m a full stack mobile app developer with hands on experience in
          cross platform & Native app development. I like exploring backend
          engineering & I also like swimming, cycling & running.
        </p>

        {/* <div className="pt-4">
          <p className="text-3xl pb-4">Projects</p>

          <Link href={"Projects/MobileApps"}>
            <div className="flex flex-row border-2 border-emerald-500 rounded-2xl p-4 ">
              <p>Mobile Apps</p>
              <Image
                src="/twitter.svg"
                width={50}
                height={50}
                alt="Mobile apps logo"
              />
            </div>
          </Link>

          <Link href={"Projects/ChromeExtns"}>
            <div className="border-2 border-emerald-500 rounded-2xl p-4">
              <p>Chrome Extensions</p>
            </div>
          </Link>
        </div> */}
      </main>

      <footer className="row-start-3 flex items-center justify-center"></footer>
    </div>
  );
}
