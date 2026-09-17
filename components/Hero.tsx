"use client";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Mail,
  Smartphone,
  Globe,
  Server,
  Bot,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";

const ROLES = ["Fintech Apps", "Payment SDKs", "Backend APIs", "Mobile Wallets"];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 38 : 78;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const onScroll = () => setStarted(true);
    const t = setTimeout(() => setStarted(true), 900);
    window.addEventListener("scroll", onScroll, { once: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!started) return;
    const dur = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

const floatingBadges = [
  { icon: Smartphone, label: "Flutter", x: "-8%", y: "12%", d: "0s", rot: "-6deg" },
  { icon: Globe, label: "TypeScript", x: "82%", y: "8%", d: "1.2s", rot: "5deg" },
  { icon: Server, label: "Node.js", x: "78%", y: "62%", d: "0.6s", rot: "-4deg" },
  { icon: Bot, label: "Paystack", x: "-10%", y: "68%", d: "1.8s", rot: "4deg" },
];

const marqueeItems = [
  "Flutter", "React", "Next.js", "TypeScript", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Paystack", "Flutterwave", "Bachs", "Docker",
];

export default function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="about" className="relative overflow-hidden pt-16">
      {/* backdrop */}
      <div className="hero-grid absolute inset-0 opacity-70" />
      <div className="animate-drift absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(26,86,219,0.14),transparent_65%)]" />
      <div className="animate-drift absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_65%)]" style={{ animationDelay: "-6s" }} />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-10 pt-12 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-20">
        {/* LEFT */}
        <div>
          <div className="animate-fade-up inline-flex flex-wrap items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3.5 py-1.5 text-[11.5px] font-medium text-[#5a5a6e] shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1d9e75] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1d9e75]" />
            </span>
            Available for remote contract work
            <span className="hidden items-center gap-1 text-[#9898a8] sm:inline-flex">
              <MapPin className="h-3.5 w-3.5" /> Lagos (UTC+1) · EU overlap
            </span>
          </div>

          <p className="animate-fade-up-1 mt-6 flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-[#5a5a6e]">
            <Sparkles className="h-4 w-4 text-[#1a56db]" /> Hello, I&apos;m Hamzat Abdulrahman
          </p>

          <h1 className="animate-fade-up-1 font-display mt-3 text-[clamp(42px,8vw,76px)] font-extrabold leading-[0.98] tracking-[-0.03em] text-[#0a0a0f]">
            I build
            <br />
            <span className="text-gradient">{typed}</span>
            <span className="ml-1 inline-block h-[0.9em] w-[3px] animate-[blink_1s_steps(1)_infinite] bg-[#1a56db] align-middle" />
            <br />
            that ship<span className="text-[#9898a8]">.</span>
          </h1>

          <p className="animate-fade-up-2 mt-6 max-w-xl text-[15.5px] font-light leading-[1.75] text-[#5a5a6e] sm:text-[17px]">
            Full-stack & mobile engineer with 3+ years building production fintech —
            remittance, wallets, bill payments and agent banking shipped to live users
            on the App Store and Google Play. Flutter clients, Node.js/TypeScript
            backends, payments and webhooks. Author of OpenPay NG and WikiRide API.
          </p>

          <div className="animate-fade-up-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[#1a56db] px-7 py-3.5 text-sm font-medium text-white shadow-[0_14px_30px_-12px_rgba(26,86,219,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#1241a8] hover:shadow-[0_18px_36px_-12px_rgba(26,86,219,0.8)]"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/70 px-7 py-3.5 text-sm font-medium text-[#0a0a0f] backdrop-blur transition-all hover:-translate-y-0.5 hover:border-black/30"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="ml-1 flex items-center gap-2">
              {[
                { icon: GithubIcon, href: "https://github.com/Abdul20009" },
                { icon: LinkedinIcon, href: "https://www.linkedin.com/in/abdulrahman-hamza-564135309/" },
                { icon: XIcon, href: "https://x.com/coolray09" },
                { icon: Mail, href: "mailto:abdulrahmanhamza270@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#5a5a6e] transition-all hover:-translate-y-1 hover:border-[#1a56db]/40 hover:text-[#1a56db]"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              ))}
            </div>
          </div>

          {/* stats */}
          <div className="animate-fade-up-4 mt-10 grid max-w-lg grid-cols-3 divide-x divide-black/[0.08] rounded-2xl border border-black/[0.07] bg-white/70 backdrop-blur">
            {[
              { v: 3, s: "+", l: "Years shipping fintech" },
              { v: 7, s: "", l: "Products live" },
              { v: 20, s: "k+", l: "End users served" },
            ].map((st) => (
              <div key={st.l} className="px-4 py-4 text-center sm:px-6">
                <div className="font-display text-[clamp(22px,4vw,30px)] font-bold tracking-tight">
                  <CountUp to={st.v} suffix={st.s} />
                </div>
                <div className="mt-0.5 text-[11px] uppercase tracking-[0.08em] text-[#9898a8] sm:text-xs">
                  {st.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — portfolio card */}
        <div className="animate-scale-in relative mx-auto w-full max-w-[400px] lg:max-w-none">
          {floatingBadges.map((b) => (
            <div
              key={b.label}
              className="animate-float-soft absolute z-20 flex items-center gap-2 rounded-2xl border border-black/10 bg-white/90 px-3.5 py-2.5 shadow-[0_16px_35px_-18px_rgba(0,0,0,0.35)] backdrop-blur"
              style={{ left: b.x, top: b.y, animationDelay: b.d, ["--float-rot" as string]: b.rot }}
            >
              <b.icon className="h-4 w-4 text-[#1a56db]" />
              <span className="text-xs font-semibold">{b.label}</span>
            </div>
          ))}

          <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-[#0b0b12] p-7 text-white shadow-[0_40px_80px_-30px_rgba(10,10,18,0.6)]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(26,86,219,0.5),transparent_65%)]" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.45),transparent_65%)]" />

            <div className="relative flex items-center gap-4">
              <div className="font-display flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a56db] to-[#7c3aed] text-xl font-extrabold">
                HA
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[15px] font-semibold">
                  Hamzat Abdulrahman <BadgeCheck className="h-4 w-4 text-[#4cc38a]" />
                </div>
                <div className="text-[12.5px] text-white/60">Full-Stack & Mobile Engineer</div>
              </div>
              <span className="ml-auto flex items-center gap-1.5 rounded-full bg-[#1d9e75]/15 px-3 py-1 text-[11px] font-medium text-[#4cc38a]">
                <span className="h-1.5 w-1.5 animate-[pulse-dot_2s_ease-in-out_infinite] rounded-full bg-[#4cc38a]" />
                Open
              </span>
            </div>

            <div className="relative mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-4 font-mono text-[12px] leading-[1.7]">
              <div className="mb-3 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div><span className="text-[#8b8bff]">const</span> <span className="text-white">dev</span> <span className="text-white/50">=</span> <span className="text-[#7ee2a8]">{"{"}</span></div>
              <div className="pl-4">stack: [<span className="text-[#ffd479]">&quot;Flutter&quot;</span>, <span className="text-[#ffd479]">&quot;TypeScript&quot;</span>],</div>
              <div className="pl-4">sdk: <span className="text-[#ffd479]">&quot;openpay-ng&quot;</span>,</div>
              <div className="pl-4">ships: <span className="text-[#8b8bff]">true</span> <span className="text-[#7ee2a8]">{"}"}</span></div>
            </div>

            <div className="relative mt-4 flex items-center justify-between rounded-2xl bg-white/[0.06] px-4 py-3 text-[12px] text-white/70">
              <span>Lagos · Remote · EU hours overlap</span>
              <span className="flex items-center gap-1 text-white"><MapPin className="h-3.5 w-3.5" /> GMT+1</span>
            </div>
          </div>
        </div>
      </div>

      {/* marquee */}
      <div className="relative border-y border-black/[0.07] bg-white/70 py-3.5 backdrop-blur">
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-8 pr-8">
            {[...marqueeItems, ...marqueeItems].map((m, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap text-[13px] font-medium uppercase tracking-[0.14em] text-[#9898a8]">
                {m} <span className="text-[#1a56db]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
