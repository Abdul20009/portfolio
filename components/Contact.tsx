"use client";
import { useState } from "react";
import { Mail, Phone, Send, MapPin, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const socials = [
  { label: "Email", value: "abdulrahmanhamza270@gmail.com", href: "mailto:abdulrahmanhamza270@gmail.com", icon: Mail },
  { label: "Phone / WhatsApp", value: "+234 814 857 6107", href: "tel:+2348148576107", icon: Phone },
  { label: "LinkedIn", value: "abdulrahman-hamza", href: "https://www.linkedin.com/in/abdulrahman-hamza-564135309/", icon: LinkedinIcon },
  { label: "GitHub", value: "Abdul20009", href: "https://github.com/Abdul20009", icon: GithubIcon },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("abdulrahmanhamza270@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your site"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:abdulrahmanhamza270@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="animate-drift absolute -left-32 top-20 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(26,86,219,0.1),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something together"
          description="Open to freelance, full-time roles and collaborations. Tell me about your product, website or idea — I respond fast."
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          {/* left: form */}
          <Reveal variant="left">
            <form
              onSubmit={submit}
              className="rounded-3xl border border-black/[0.07] bg-[#f7f7fa] p-6 sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-[#5a5a6e]">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-[#9898a8] focus:border-[#1a56db]/60 focus:ring-4 focus:ring-[#1a56db]/10"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-[#5a5a6e]">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-[#9898a8] focus:border-[#1a56db]/60 focus:ring-4 focus:ring-[#1a56db]/10"
                  />
                </label>
              </div>
              <label className="mt-4 block">
                <span className="mb-1.5 block text-[12px] font-semibold uppercase tracking-wider text-[#5a5a6e]">Project details</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What do you want to build? Timeline? Budget range?"
                  className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition-all placeholder:text-[#9898a8] focus:border-[#1a56db]/60 focus:ring-4 focus:ring-[#1a56db]/10"
                />
              </label>
              <button
                type="submit"
                className="group mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#1a56db] px-6 py-3.5 text-sm font-medium text-white shadow-[0_14px_30px_-12px_rgba(26,86,219,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#1241a8]"
              >
                Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <p className="mt-3 text-center text-[12px] text-[#9898a8]">
                Opens your email app — no spam, ever.
              </p>
            </form>
          </Reveal>

          {/* right */}
          <div className="flex flex-col gap-4">
            <Reveal variant="right" delay={80}>
              <div className="rounded-3xl bg-[#0b0b12] p-6 text-white sm:p-8">
                <div className="flex items-center gap-2 text-[12px] font-medium text-[#4cc38a]">
                  <span className="h-2 w-2 animate-[pulse-dot_2s_ease-in-out_infinite] rounded-full bg-[#4cc38a]" />
                  Actively looking · replies within 24h
                </div>
                <h3 className="font-display mt-3 text-2xl font-bold tracking-tight">Available for remote contracts</h3>
                <p className="mt-2 text-[14px] font-light leading-relaxed text-white/60">
                  Lagos (UTC+1) · full working-day overlap with European teams. Fintech, payments, mobile + backend.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 text-[12.5px] font-medium transition-colors hover:border-white/30"
                  >
                    {copied ? <Check className="h-4 w-4 text-[#4cc38a]" /> : <Copy className="h-4 w-4" />}
                    {copied ? "Copied!" : "Copy email"}
                  </button>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-4 py-2.5 text-[12.5px] text-white/70">
                    <MapPin className="h-4 w-4" /> Lagos, Nigeria · GMT+1
                  </span>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {socials.map((s, i) => (
                <Reveal key={s.label} delay={i * 70} variant="scale">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-lift group flex items-center gap-3 rounded-2xl border border-black/[0.07] bg-white p-4"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7f7fa] text-[#3a3a4a] transition-colors group-hover:bg-[#1a56db] group-hover:text-white">
                      <s.icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10.5px] font-semibold uppercase tracking-wider text-[#9898a8]">{s.label}</span>
                      <span className="block truncate text-[13px] font-medium">{s.value}</span>
                    </span>
                    <span className="ml-auto text-[#9898a8] transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
