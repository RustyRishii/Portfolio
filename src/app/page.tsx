import SocialLinks from "./SocialLinks";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-start sm:items-start">
        <h1 className="text-4xl font-bold mb-4 text-left max-w-2xl mx-auto">
          Hi, I&apos;m Rishikesh.
        </h1>

        <SocialLinks />

        <p className="text-lg max-w-2xl mx-auto text-left mt-4">
          I&apos;m a <span className="font-bold" >software engineer</span> with hands on experience in
          cross platform & Native app development. I like  exploring <span className="font-bold">Cloud/Infrastructure</span> & I also like swimming & cycling.
        </p>

        {/* <p className="mt-8 text-3xl font-bold">Projects</p>

        <div className="mt-4 flex gap-8 items-center">
          <p className=" text-xl font-bold relative cursor-pointer group hover:text-emerald-500">
            <span className="relative z-10">Chrome extension</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className=" text-xl font-bold relative cursor-pointer group hover:text-emerald-500">
            <span className="relative z-10">Mobile apps</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </p>
          <p className=" text-xl font-bold relative cursor-pointer group hover:text-emerald-500">
            <span className="relative z-10">Web apps</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
          </p>
        </div> */}
      </main>

      <footer className="row-start-3 flex items-center justify-center"></footer>
    </div>

  );
}