"use client";
import { useEffect, useRef, useState } from "react";
import { Smartphone, Server, Atom, Database, CreditCard, FlaskConical, Cloud, GitBranch } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Flutter / Dart", category: "Mobile", icon: Smartphone, level: 92, desc: "BLoC & Provider, biometrics, push, offline" },
  { name: "React / Next.js", category: "Frontend", icon: Atom, level: 88, desc: "TypeScript, ES6+, production web apps" },
  { name: "Node.js / Express", category: "Backend", icon: Server, level: 90, desc: "REST design, JWT, RBAC, WebSockets" },
  { name: "PostgreSQL / MongoDB", category: "Database", icon: Database, level: 85, desc: "Postgres, Mongo, MySQL, Firestore" },
  { name: "Paystack / Flutterwave", category: "Payments", icon: CreditCard, level: 94, desc: "Bachs, Stripe, webhooks, idempotency, KYC" },
  { name: "Vitest / Supertest", category: "Testing", icon: FlaskConical, level: 82, desc: "Zod, Pino, widget tests, rate limiting" },
  { name: "Cloudinary / Vercel", category: "Cloud", icon: Cloud, level: 84, desc: "Media, deploys, Render, Docker" },
  { name: "Git / GitHub / GitLab", category: "Tools", icon: GitBranch, level: 89, desc: "Code review, release engineering" },
];

function SkillBar({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setW(level);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [level]);
  return (
    <div ref={ref} className="h-1.5 overflow-hidden rounded-full bg-black/[0.07]">
      <div
        className="bar-shimmer h-full rounded-full bg-gradient-to-r from-[#1a56db] to-[#7c3aed] transition-[width] duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ width: `${w}%` }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#f7f7fa] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What I work with"
            title="Skills & technologies"
            description="The exact stack from 3+ years of production fintech — Flutter clients, TypeScript backends, payments and hardened APIs."
          />
          <Reveal delay={150} className="mb-10 hidden gap-2 sm:mb-14 lg:flex">
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-[#5a5a6e]">
              <span className="h-2 w-2 animate-[pulse-dot_2s_ease-in-out_infinite] rounded-full bg-[#1d9e75]" />
              Author: OpenPay NG · WikiRide API
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={(i % 4) * 90} variant="blur">
              <div className="card-lift card-sheen glow-border group h-full rounded-2xl border border-black/[0.07] bg-white p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f0fe] text-[#1241a8] transition-all duration-500 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:bg-[#1a56db] group-hover:text-white group-hover:shadow-[0_10px_25px_-10px_rgba(26,86,219,0.7)]">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-black/[0.04] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-[#5a5a6e] transition-colors group-hover:bg-[#e8f0fe] group-hover:text-[#1241a8]">
                    {s.category}
                  </span>
                </div>
                <div className="font-display text-[15px] font-bold tracking-tight">{s.name}</div>
                <div className="mb-3 mt-1 text-[12.5px] text-[#9898a8]">{s.desc}</div>
                <SkillBar level={s.level} />
                <div className="mt-2 text-right text-[11px] font-semibold text-[#1a56db]">{s.level}%</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
