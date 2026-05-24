"use client";
const socials = [
  {
    label: "Email",
    value: "abdulrahmanhamza270@gmail.com",
    href: "mailto:abdulrahmanhamza270@gmail.com",
    icon: "✉️",
  },
  {
    label: "LinkedIn",
    value: "abdulrahman-hamza",
    href: "https://www.linkedin.com/in/abdulrahman-hamza-564135309/",
    icon: "💼",
  },
  {
    label: "GitHub",
    value: "Abdul20009",
    href: "https://github.com/Abdul20009",
    icon: "🐙",
  },
  {
    label: "X / Twitter",
    value: "@coolray09",
    href: "https://x.com/coolray09",
    icon: "𝕏",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 80px)",
        background: "var(--surface)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Header */}
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
            Get in touch
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "var(--text-primary)",
              maxWidth: "540px",
            }}
          >
            Let&apos;s build something together
          </h2>
        </div>

        {/* Two-column layout — stacks on mobile */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(24px, 5vw, 48px)",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontSize: "clamp(14px, 2vw, 15px)",
                fontWeight: 300,
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "28px",
              }}
            >
              I&apos;m open to freelance projects, full-time developer roles, and interesting
              collaborations. If you have something in mind — a product, a website, an idea —
              let&apos;s talk. I respond quickly.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 18px",
                    background: "var(--surface-2)",
                    border: "0.5px solid var(--border)",
                    borderRadius: "10px",
                    textDecoration: "none",
                    transition: "transform 0.15s, border-color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(26,86,219,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  <span style={{ fontSize: "20px", flexShrink: 0 }}>{s.icon}</span>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontSize: "11px", color: "var(--text-tertiary)", marginBottom: "1px" }}>
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.value}
                    </div>
                  </div>
                  <span style={{ marginLeft: "auto", fontSize: "14px", color: "var(--text-tertiary)", flexShrink: 0 }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — status card */}
          <div>
            <div
              style={{
                background: "var(--surface-2)",
                border: "0.5px solid var(--border)",
                borderRadius: "16px",
                padding: "clamp(20px, 3vw, 32px)",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  color: "var(--green)",
                  marginBottom: "12px",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--green)",
                    animation: "pulse-dot 2s ease-in-out infinite",
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                Actively looking
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(17px, 2.5vw, 20px)",
                  fontWeight: 700,
                  letterSpacing: "-0.3px",
                  marginBottom: "8px",
                }}
              >
                Available for hire
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "24px",
                  fontWeight: 300,
                }}
              >
                Open to freelance projects and full-time roles. Based in Lagos — available remotely worldwide.
              </p>
              <a
                href="mailto:abdulrahmanhamza270@gmail.com"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "12px",
                  background: "var(--blue)",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                  textAlign: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--blue-dark)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--blue)")}
              >
                Send me an email →
              </a>
            </div>

            <div
              style={{
                background: "var(--blue)",
                borderRadius: "16px",
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <span style={{ fontSize: "22px", flexShrink: 0 }}>📍</span>
              <div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginBottom: "2px" }}>
                  Based in
                </div>
                <div style={{ fontSize: "14px", fontWeight: 500, color: "#fff" }}>
                  Lagos, Nigeria · Available remotely
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
