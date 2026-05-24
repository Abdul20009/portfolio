"use client";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online store with product listings, cart management, order tracking, and Paystack payment integration. Built for Nigerian sellers and buyers.",
    tags: ["Next.js", "Node.js", "MongoDB", "Paystack", "Cloudinary"],
    link: "https://github.com/Abdul20009",
    status: "Live",
    accent: "#e8f0fe",
    accentText: "#1241a8",
  },
  {
    title: "Fintech App",
    description:
      "A mobile-first financial application handling wallet management, transfers, and transaction history. Designed with security and simplicity for everyday users.",
    tags: ["Flutter", "Node.js", "MongoDB", "Paystack"],
    link: "https://github.com/Abdul20009",
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
    status: "Live",
    accent: "#e8f0fe",
    accentText: "#1241a8",
  },
  {
    title: "Business Websites — Freelance",
    description:
      "Custom websites for small local businesses in Lagos with no online presence. Clients identified via Google Maps outreach and converted through WhatsApp.",
    tags: ["Next.js", "HTML/CSS", "SEO", "Responsive"],
    link: "https://github.com/Abdul20009",
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
        padding: "100px 40px",
        background: "var(--surface)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ marginBottom: "56px" }}>
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "16px" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 42px)",
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
              }}
            >
              View all on GitHub →
            </a>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
            gap: "16px",
          }}
        >
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--surface)",
                border: "0.5px solid var(--border)",
                borderRadius: "14px",
                padding: "26px 28px",
                textDecoration: "none",
                color: "inherit",
                display: "block",
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.3px",
                  }}
                >
                  {p.title}
                </h3>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      padding: "3px 10px",
                      borderRadius: "99px",
                      background: p.accent,
                      color: p.accentText,
                    }}
                  >
                    {p.status}
                  </span>
                  <span style={{ fontSize: "16px", color: "var(--text-tertiary)" }}>↗</span>
                </div>
              </div>

              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "18px",
                  fontWeight: 300,
                }}
              >
                {p.description}
              </p>

              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}