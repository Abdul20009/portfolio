"use client";
import { useState } from "react";
import { ArrowUpRight, FolderGit2, Star } from "lucide-react";
import { GithubIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Tilt, Magnetic } from "./Effects";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  githubLink: string;
  status: string;
  category: "Mobile" | "Backend" | "SDK" | "Web";
  featured?: boolean;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "OpenPay NG",
    description:
      "Published TypeScript payment SDK unifying Paystack, Flutterwave and Bachs behind one interface. Normalized statuses, payments/transfers/refunds, signature-verified webhooks with Postgres-backed idempotency + stateless fallback. Validated live against Paystack & Flutterwave sandboxes with Vitest + Docker.",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Paystack", "Flutterwave", "Bachs"],
    link: "https://github.com/Abdul20009",
    githubLink: "https://github.com/Abdul20009",
    status: "npm · Live",
    category: "SDK",
    featured: true,
    gradient: "from-[#0f6e56] via-[#1d9e75] to-[#4cc38a]",
  },
  {
    title: "WikiRide API",
    description:
      "Multi-tenant white-label ride-share backend: fleet, rides, pricing, hubs, tokens, coupons, geofences, maintenance. JWT + rotating refresh, RBAC from seeded catalog, tenant scoping, Zod + Helmet + rate limiting, Pino logging, Vitest/Supertest.",
    tags: ["TypeScript", "Express", "MongoDB", "RBAC", "Open Source"],
    link: "https://github.com/Abdul20009",
    githubLink: "https://github.com/Abdul20009",
    status: "Open source",
    category: "Backend",
    gradient: "from-[#1241a8] via-[#1a56db] to-[#7c3aed]",
  },
  {
    title: "SmartRemit",
    description:
      "Cross-border remittance client at SMARTROB: multi-currency transfers, live FX previews, recipient management, real-time status. KYC/compliance onboarding for 3,000+ verified users, biometrics + E2E encryption. 4.6★ App Store.",
    tags: ["Flutter", "BLoC", "KYC", "Fintech"],
    link: "https://play.google.com/store/apps/details?id=com.fincura.billpayment",
    githubLink: "https://github.com/Abdul20009",
    status: "Live",
    category: "Mobile",
    gradient: "from-[#0a5c8a] via-[#0284c7] to-[#22d3ee]",
  },
  {
    title: "Jellupay",
    description:
      "Digital wallet serving 8,000+ active users at peak: P2P, airtime, data, electricity, cable TV, real-time balances + history. OTP + fingerprint/Face ID + JWT sessions, spending analytics dashboard that cut support load.",
    tags: ["Flutter", "Node.js", "Paystack"],
    link: "https://play.google.com/store/apps/details?id=com.fincura.billpayment",
    githubLink: "https://github.com/Abdul20009",
    status: "Live",
    category: "Mobile",
    gradient: "from-[#7c2d12] via-[#c2410c] to-[#f59e0b]",
  },
  {
    title: "Fincura + P Cash",
    description:
      "Fincura: bill payments for 5,000+ users in launch quarter + auto-crediting referral engine. P Cash: agent banking for 4,000+ users — P2P, agent withdrawals, top-ups, filtered statements, push alerts.",
    tags: ["Flutter", "Push", "Referrals"],
    link: "https://play.google.com/store/apps/details?id=com.fincura.billpayment",
    githubLink: "https://github.com/Abdul20009",
    status: "Live",
    category: "Mobile",
    gradient: "from-[#5a00a8] via-[#7c3aed] to-[#c084fc]",
  },
  {
    title: "RichList Events + Nikklar",
    description:
      "RichList (freelance, sole engineer): event discovery, tiered tickets, e-tickets, reminders — 30+ events, 600+ bookings. Nikklar: fibre subscriptions for 2,500+ customers + Deals e-commerce (1,200+ orders in 2 months) with SSO.",
    tags: ["Flutter", "Node.js", "E-commerce"],
    link: "https://github.com/Abdul20009",
    githubLink: "https://github.com/Abdul20009",
    status: "Live",
    category: "Mobile",
    gradient: "from-[#0f172a] via-[#334155] to-[#1a56db]",
  },
];

const filters = ["All", "Mobile", "Backend", "SDK"] as const;

export default function Projects() {
  const [tab, setTab] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => tab === "All" || p.category === tab);
  const [featured, ...rest] = tab === "All" ? projects : list;

  const showFeatured = tab === "All";
  const grid = showFeatured ? rest : list;

  return (
    <section id="projects" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="What I've built"
            title="Featured projects"
            description="Production fintech, published SDKs and open-source backends — every one tied to real users and live releases."
          />
          <Reveal delay={120} variant="blur" className="mb-10 sm:mb-14">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setTab(f)}
                  className={`rounded-full px-4 py-2 text-[12.5px] font-medium transition-all duration-300 active:scale-95 ${
                    tab === f
                      ? "scale-105 bg-[#0a0a0f] text-white shadow-lg"
                      : "border border-black/10 bg-white text-[#5a5a6e] hover:-translate-y-0.5 hover:border-black/25 hover:text-black hover:shadow-md"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {showFeatured && featured && (
          <Reveal variant="zoom">
            <Tilt max={5}>
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card-lift card-sheen glow-border group mb-5 grid overflow-hidden rounded-3xl border border-black/[0.07] lg:grid-cols-2"
              >
                <div className={`relative flex min-h-[260px] flex-col justify-between bg-gradient-to-br p-8 text-white sm:p-10 ${featured.gradient}`}>
                  <div className="hero-grid absolute inset-0 opacity-20" />
                  <div className="animate-drift absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
                  <div className="relative flex items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider backdrop-blur">
                      <Star className="h-3.5 w-3.5 animate-[spinSlow_4s_linear_infinite]" /> Featured · npm
                    </span>
                    <span className="animate-pop-in rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-medium backdrop-blur">
                      {featured.status}
                    </span>
                  </div>
                  <div className="tilt-pop relative">
                    <FolderGit2 className="mb-4 h-10 w-10 opacity-80 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12" />
                    <div className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                      {featured.title}
                    </div>
                    <div className="mt-2 text-sm text-white/80">Unified payment SDK for Nigerian providers</div>
                  </div>
                </div>
                <div className="flex flex-col justify-center bg-white p-8 sm:p-10">
                  <p className="text-[15px] font-light leading-[1.75] text-[#5a5a6e]">{featured.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.tags.map((t, ti) => (
                      <span key={t} style={{ transitionDelay: `${ti * 20}ms` }} className="rounded-full border border-black/10 bg-[#f7f7fa] px-3 py-1 text-[11.5px] font-medium text-[#3a3a4a] transition-all hover:-translate-y-0.5 hover:border-[#1a56db]/40 hover:text-[#1241a8]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex gap-3">
                    <span className="btn-sheen inline-flex items-center gap-1.5 rounded-full bg-[#1a56db] px-5 py-2.5 text-[13px] font-medium text-white transition-all group-hover:bg-[#1241a8] group-hover:shadow-[0_12px_28px_-10px_rgba(26,86,219,0.8)]">
                      View project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-black/12 px-5 py-2.5 text-[13px] font-medium transition-colors group-hover:border-black/30">
                      <GithubIcon className="h-4 w-4" /> Code
                    </span>
                  </div>
                </div>
              </a>
            </Tilt>
          </Reveal>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {grid.map((p, i) => (
            <Reveal key={p.title + tab} delay={(i % 3) * 100} variant={i % 2 ? "rotate" : "blur"}>
              <Tilt max={7} className="h-full">
                <div className="card-lift card-sheen glow-border group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
                  <div className={`relative h-36 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                    <div className="hero-grid absolute inset-0 opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-4 left-5 font-display text-lg font-bold text-white/95 transition-transform duration-300 group-hover:-translate-y-1">
                      {p.title}
                    </div>
                    <span className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wider text-white backdrop-blur transition-transform duration-300 group-hover:scale-105">
                      {p.category}
                    </span>
                    <ArrowUpRight className="absolute bottom-4 right-4 h-5 w-5 text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-125 group-hover:text-white" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="flex-1 text-[13.8px] font-light leading-[1.7] text-[#5a5a6e]">{p.description}</p>
                    <div className="mb-4 mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-[#f7f7fa] px-2.5 py-1 text-[11px] font-medium text-[#5a5a6e] transition-colors group-hover:bg-[#e8f0fe]/60">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 border-t border-black/[0.06] pt-4">
                      <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#5a5a6e] transition-transform hover:-translate-y-0.5 hover:text-black">
                        <GithubIcon className="h-3.5 w-3.5" /> Code
                      </a>
                      <span className="text-black/15">·</span>
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#1a56db] transition-transform hover:-translate-y-0.5 hover:text-[#1241a8]">
                        Live <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={100} variant="blur">
          <Magnetic strength={18}>
            <a
              href="https://github.com/Abdul20009"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sheen inline-flex items-center gap-2 rounded-full border border-black/12 px-6 py-3 text-sm font-medium transition-all hover:-translate-y-1 hover:border-black/30 hover:shadow-xl"
            >
              <GithubIcon className="h-4 w-4" /> View all on GitHub <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
