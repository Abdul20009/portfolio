"use client";
import { Briefcase, Rocket, Code2, GraduationCap, Download } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Briefcase,
    period: "2023 — 2025",
    role: "Flutter Mobile Developer (Contract) · SMARTROB Technologies",
    desc: "Contract engineer across five fintech products + e-commerce companion. Set clean-architecture boundaries and state-management standards, defined REST API contracts with the backend team (cut revision cycles ~40%), mentored juniors, owned versioning and App Store/Play submissions, and wrote widget tests over critical flows.",
    tags: ["SmartRemit 4.6★", "Jellupay 8k+", "P Cash 4k+", "Fincura 5k+", "Nikklar 2.5k+"],
    current: false,
  },
  {
    icon: Rocket,
    period: "Freelance",
    role: "Sole Engineer · RichList Event Discovery & Booking",
    desc: "Scoping, backend API design, Flutter client, payment integration and handover. Event discovery with category filtering, tiered tickets, e-tickets and push reminders — 30+ events, 600+ bookings, delivered on timeline.",
    tags: ["Flutter", "Node.js", "Payments"],
    current: true,
  },
  {
    icon: Code2,
    period: "Open source",
    role: "Author · OpenPay NG + WikiRide API",
    desc: "OpenPay NG: published TypeScript SDK unifying Paystack, Flutterwave, Bachs — normalized model, verified webhooks, Postgres idempotency, Vitest + Docker. WikiRide API: multi-tenant Express/Mongo ride-share SaaS with JWT rotation, RBAC, Zod, Pino.",
    tags: ["TypeScript", "npm", "MongoDB"],
    current: false,
  },
  {
    icon: GraduationCap,
    period: "2024 — Present",
    role: "Yaba College of Technology · ND, Mechatronics Engineering",
    desc: "National Diploma in progress alongside full-time engineering work — systems thinking that feeds back into reliable mobile/backend architecture.",
    tags: ["Mechatronics", "Lagos"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#f7f7fa] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionHeading
            eyebrow="Career path"
            title="Experience that compounds"
            description="3+ years owning features end to end — joining existing codebases, working remotely with PMs, designers and backend teams."
          />
          <Reveal delay={150}>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a0a0f] px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#1a56db]"
              >
                Work with me
              </a>
              <a
                href="mailto:abdulrahmanhamza270@gmail.com?subject=CV%20request"
                className="inline-flex items-center gap-2 rounded-full border border-black/12 bg-white px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-black/30"
              >
                <Download className="h-4 w-4" /> Request CV
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { k: "Remittance", v: "SmartRemit · 3k+ KYC'd" },
                { k: "Wallets", v: "Jellupay · 8k peak" },
                { k: "Agent banking", v: "P Cash · 4k users" },
                { k: "E-commerce", v: "1.2k orders / 2 mo" },
              ].map((c) => (
                <div key={c.k} className="rounded-2xl border border-black/[0.07] bg-white p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#1a56db]">{c.k}</div>
                  <div className="mt-1 text-[13px] font-medium text-[#3a3a4a]">{c.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative pl-8">
          <div className="timeline-line absolute bottom-4 left-[13px] top-2 w-[2px] rounded-full" />
          <div className="flex flex-col gap-5">
            {items.map((it, i) => (
              <Reveal key={it.role} delay={i * 100} variant={i % 2 ? "right" : "left"}>
                <div
                  className={`card-lift relative rounded-2xl border bg-white p-6 sm:p-7 ${
                    it.current ? "border-[#1a56db]/30 shadow-[0_18px_45px_-20px_rgba(26,86,219,0.45)]" : "border-black/[0.07]"
                  }`}
                >
                  <span
                    className={`absolute -left-8 top-7 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-white ${
                      it.current ? "border-[#1a56db] text-[#1a56db]" : "border-black/10 text-[#5a5a6e]"
                    }`}
                  >
                    {it.current && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1a56db]/20" />
                    )}
                    <it.icon className="relative h-3.5 w-3.5" />
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                        it.current ? "bg-[#1a56db] text-white" : "bg-black/[0.05] text-[#5a5a6e]"
                      }`}
                    >
                      {it.period}
                    </span>
                    {it.current && (
                      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#1d9e75]">
                        <span className="h-1.5 w-1.5 animate-[pulse-dot_2s_ease-in-out_infinite] rounded-full bg-[#1d9e75]" />
                        Available now
                      </span>
                    )}
                  </div>
                  <h3 className="font-display mt-3 text-[16.5px] font-bold tracking-tight">{it.role}</h3>
                  <p className="mt-2 text-[14px] font-light leading-[1.7] text-[#5a5a6e]">{it.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {it.tags.map((t) => (
                      <span key={t} className="rounded-full bg-[#f7f7fa] px-2.5 py-1 text-[11px] font-medium text-[#5a5a6e]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
