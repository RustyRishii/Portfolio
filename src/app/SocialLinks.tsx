import React from "react";
import Image from "next/image";

export default function SocialLinks() {
  return (
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
  );
}
