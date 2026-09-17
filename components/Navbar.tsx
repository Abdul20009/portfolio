"use client";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, y / h) : 0);

      // simple scroll-spy
      const ids = links.map((l) => l.href.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-[120] h-[2.5px] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[#1a56db] via-[#7c3aed] to-[#1a56db] transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-white/85 backdrop-blur-xl border-b border-black/[0.07] shadow-[0_8px_30px_-18px_rgba(0,0,0,0.25)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#about" className="font-display text-xl font-bold tracking-tight text-[#0a0a0f]">
            H<span className="text-gradient">.</span>A
            <span className="ml-2 hidden rounded-full border border-black/10 bg-white px-2.5 py-1 align-middle text-[10px] font-medium uppercase tracking-[0.14em] text-[#5a5a6e] sm:inline-block">
              Portfolio
            </span>
          </a>

          <div className="desktop-nav hidden items-center gap-7 md:flex">
            {links.map((l) => {
              const id = l.href.slice(1);
              return (
                <a
                  key={l.label}
                  href={l.href}
                  className={`link-underline text-[13.5px] font-medium transition-colors ${
                    active === id ? "active text-[#0a0a0f]" : "text-[#5a5a6e] hover:text-[#0a0a0f]"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          <div className="desktop-nav hidden md:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[#0a0a0f] px-5 py-2.5 text-[13px] font-medium text-white transition-all hover:bg-[#1a56db] hover:shadow-[0_10px_25px_-10px_rgba(26,86,219,0.7)]"
            >
              Hire me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            className="mobile-menu-btn flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-menu fixed left-0 right-0 top-16 z-[99] overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[480px] border-b border-black/[0.07]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: `${i * 30}ms` }}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-300 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              } ${active === l.href.slice(1) ? "bg-[#e8f0fe] text-[#1241a8]" : "text-[#3a3a4a] hover:bg-black/[0.04]"}`}
            >
              {l.label}
              <span className="text-[#9898a8]">→</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#1a56db] px-4 py-3.5 text-sm font-medium text-white"
          >
            Hire me <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  );
}
