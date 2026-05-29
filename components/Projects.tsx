"use client";

const projects = [
  {
    title: "DevBudget",
    description:
      "A free tool that helps developers estimate monthly infrastructure costs across 25+ popular services — at any user scale. Features Africa Mode that flags services with card restrictions or signup blockers for African developers.",
    tags: ["React", "Vite", "Node.js", "Open Source"],
    link: "https://devbudget.vercel.app",
    githubLink: "https://github.com/Abdul20009/devbudget",
    status: "Live",
    accent: "#e6f9f2",
    accentText: "#0F6E56",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product listings, cart management, order tracking, and Paystack payment integration. Built for Nigerian sellers and buyers.",
    tags: ["Next.js", "Node.js", "MongoDB", "Paystack", "Cloudinary"],
    link: "https://hrexclusivelounge.lovable.app/",
    githubLink: "https://github.com/Abdul20009",
    status: "Live",
    accent: "#e8f0fe",
    accentText: "#1241a8",
  },
  {
    title: "Fintech App — SMARTROB",
    description:
      "A mobile-first financial application handling wallet management, transfers, and transaction history. Built during my time at SMARTROB Technologies. Designed with security and simplicity for everyday users.",
    tags: ["Flutter", "Node.js", "MongoDB", "Paystack"],
    link: "https://play.google.com/store/apps/details?id=com.fincura.billpayment",
    githubLink: "https://github.com/Abdul20009",
    status: "Live",
    accent: "#e6f9f2",
    accentText: "#0F6E56",
  },
  {
    title: "Full-stack Mobile App",
    description:
      "End-to-end mobile application with Flutter frontend, Node.js/Express backend, MongoDB database, Cloudinary for media, and Paystack payment integration.",
    tags: ["Flutter", "Node.js", "MongoDB", "Cloudinary", "Paystack"],
    link: "https://github.com/Abdul20009",
    githubLink: "https://github.com/Abdul20009",
    status: "Live",
    accent: "#e8f0fe",
    accentText: "#1241a8",
  },
  {
    title: "Business Websites — Freelance",
    description:
      "Custom websites for small local businesses in Lagos with no online presence. Clients identified via Google Maps outreach and converted through WhatsApp.",
    tags: ["Next.js", "HTML/CSS", "SEO", "Responsive"],
    link: "https://soul-food-yaba.lovable.app/",
    githubLink: "https://github.com/Abdul20009",
    status: "Live",
    accent: "#e8f0fe",
    accentText: "#1241a8",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 80px)",
        background: "var(--surface)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "clamp(32px, 5vw, 56px)" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "var(--blue)",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            What I&apos;ve built
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(26px, 5vw, 42px)",
                fontWeight: 700,
                letterSpacing: "-1px",
                color: "var(--text-primary)",
              }}
            >
              Featured projects
            </h2>
            <a
              href="https://github.com/Abdul20009"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "var(--blue)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontWeight: 500,
                whiteSpace: "nowrap",
              }}
            >
              View all on GitHub →
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "16px",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.title}
              style={{
                background: "var(--surface)",
                border: "0.5px solid var(--border)",
                borderRadius: "14px",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 32px rgba(26,86,219,0.1)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,86,219,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "10px",
                  gap: "8px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(15px, 2vw, 17px)",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.3px",
                    flex: 1,
                  }}
                >
                  {p.title}
                </h3>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    padding: "3px 10px",
                    borderRadius: "99px",
                    background: p.accent,
                    color: p.accentText,
                    flexShrink: 0,
                  }}
                >
                  {p.status}
                </span>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "16px",
                  fontWeight: 300,
                  flex: 1,
                }}
              >
                {p.description}
              </p>

              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "11px",
                      padding: "3px 10px",
                      borderRadius: "99px",
                      background: "var(--surface-2)",
                      border: "0.5px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "8px" }}>
                <a
                  href={p.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    padding: "6px 14px",
                    borderRadius: "99px",
                    border: "0.5px solid var(--border)",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Code ↗
                </a>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "12px",
                    color: p.accentText,
                    textDecoration: "none",
                    padding: "6px 14px",
                    borderRadius: "99px",
                    background: p.accent,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Live Site ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}