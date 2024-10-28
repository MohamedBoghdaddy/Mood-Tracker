import Image from "next/image";
import Main from "../Components/Main";
import Hero from "../Components/Home/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <Main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.svg" // Replace with your logo path
          alt="Mood-Tracker logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by tracking your mood with{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li>Track your mood and see your emotional trends instantly.</li>
        </ol>
        <Hero />
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href="/get-started">
            <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
              Start Tracking
            </a>
          </Link>
          <Link href="/docs">
            <a className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
              Learn More
            </a>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href="/about">
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            <Image
              aria-hidden
              src="/icons/file.svg" // Replace with actual icon path
              alt="File icon"
              width={16}
              height={16}
            />
            About
          </a>
        </Link>
        <Link href="/examples">
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            <Image
              aria-hidden
              src="/icons/window.svg" // Replace with actual icon path
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
        </Link>
        <Link href="/contact">
          <a className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            <Image
              aria-hidden
              src="/icons/globe.svg" // Replace with actual icon path
              alt="Globe icon"
              width={16}
              height={16}
            />
            Contact Us →
          </a>
        </Link>
      </footer>
    </Main>
  );
}
