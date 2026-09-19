"use client";
import { Smartphone, Globe, Server, CreditCard, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { Tilt } from "./Effects";

const services = [
  {
    icon: Smartphone,
    num: "01",
    title: "Mobile engineering",
    desc: "Production Flutter apps on the App Store and Play — clean architecture, BLoC/Provider, biometrics, push, offline storage, widget tests, release engineering.",
    bullets: ["Flutter / Dart", "BLoC & Provider", "Store submissions"],
    accent: "bg-[#e8f0fe] text-[#1241a8]",
  },
  {
    icon: Server,
    num: "02",
    title: "Backend & APIs",
    desc: "Node.js/TypeScript backends with contract-first REST design, JWT + rotating refresh, RBAC, Zod validation, rate limiting, Pino logging, Vitest/Supertest.",
    bullets: ["Node.js / Express", "JWT + RBAC", "Postgres / MongoDB"],
    accent: "bg-[#e6f9f2] text-[#0F6E56]",
  },
  {
    icon: CreditCard,
    num: "03",
    title: "Payment integration",
    desc: "My specialty: Paystack, Flutterwave, Bachs and Stripe — normalized models, transfers/refunds, signature-verified webhooks, idempotency, KYC/compliance flows.",
    bullets: ["Paystack / Flutterwave", "Webhooks + idempotency", "KYC flows"],
    accent: "bg-[#fef3e8] text-[#a85a00]",
  },
  {
    icon: Globe,
    num: "04",
    title: "Web frontends",
    desc: "React/Next.js + TypeScript marketing sites, dashboards and SaaS frontends that consume the APIs I document — handoff-ready for product teams.",
    bullets: ["React / Next.js", "TypeScript", "API handoff docs"],
    accent: "bg-[#f0e8fe] text-[#5a00a8]",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0b0b12] px-5 py-20 text-white sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 sm:mb-14 max-w-2xl">
          <p className="font-display mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7ea4ff]">
            <span className="inline-block h-[1.5px] w-6 bg-[#7ea4ff]" /> What I offer
          </p>
          <h2 className="font-display text-[clamp(28px,5vw,44px)] font-bold leading-[1.05] tracking-[-0.02em]">
            Services designed to <span className="text-gradient">ship value</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] font-light leading-relaxed text-white/60">
            Contract-friendly: own a feature end to end, join your codebase, overlap EU hours from Lagos (UTC+1).
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 110} variant={i % 2 ? "rotate" : "blur"}>
              <Tilt max={6} className="h-full">
                <div className="card-sheen group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:border-[#1a56db]/50 hover:bg-white/[0.06] hover:shadow-[0_25px_60px_-20px_rgba(26,86,219,0.5)] sm:p-8">
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(26,86,219,0.25),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="animate-drift absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.accent} transition-all duration-500 group-hover:scale-115 group-hover:-rotate-12 group-hover:shadow-lg`}>
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-sm font-bold text-white/25 transition-colors group-hover:text-white/60">
                      /{s.num}
                    </span>
                  </div>
                  <h3 className="font-display relative mt-5 text-[19px] font-bold tracking-tight">{s.title}</h3>
                  <p className="relative mt-2.5 text-[14px] font-light leading-[1.7] text-white/60">{s.desc}</p>
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <span key={b} className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[11.5px] font-medium text-white/75 transition-colors group-hover:border-white/25">
                        {b}
                      </span>
                    ))}
                  </div>
                  <a href="#contact" className="relative mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#7ea4ff] transition-all hover:gap-2.5 hover:text-white">
                    Start a project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
