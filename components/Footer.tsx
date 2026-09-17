"use client";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.07] bg-[#f7f7fa] px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg font-bold tracking-tight">
            H<span className="text-gradient">.</span>A
          </span>
          <span className="hidden text-[12px] text-[#9898a8] sm:inline">
            © {new Date().getFullYear()} Hamzat Abdulrahman · Full-Stack & Mobile Engineer · Lagos (UTC+1)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {[
            { icon: GithubIcon, href: "https://github.com/Abdul20009", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://www.linkedin.com/in/abdulrahman-hamza-564135309/", label: "LinkedIn" },
            { icon: XIcon, href: "https://x.com/coolray09", label: "X" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#5a5a6e] transition-all hover:-translate-y-0.5 hover:border-[#1a56db]/40 hover:text-[#1a56db]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href="#about"
            aria-label="Back to top"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#0a0a0f] text-white transition-all hover:-translate-y-1 hover:bg-[#1a56db]"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-4 max-w-6xl text-[12px] text-[#9898a8] sm:hidden">
        © {new Date().getFullYear()} Hamzat Abdulrahman. All rights reserved.
      </p>
    </footer>
  );
}
