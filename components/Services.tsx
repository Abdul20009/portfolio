"use client";
const services = [
  {
    icon: "📱",
    title: "Mobile app development",
    desc: "Cross-platform Flutter apps for Android and iOS. From MVP to production — clean architecture, smooth UX, and real integrations like payments and media.",
    bullets: ["Flutter / Dart", "Android & iOS", "Paystack & API integration"],
  },
  {
    icon: "🌐",
    title: "Web design & development",
    desc: "Clean, fast websites for businesses that need an online presence. I build sites that actually convert — not just look good.",
    bullets: ["Next.js / React / Vue", "Responsive & SEO-ready", "Custom designs"],
  },
  {
    icon: "⚙️",
    title: "Backend & API development",
    desc: "Scalable Node.js backends with well-designed REST APIs, MongoDB databases, authentication, and third-party service integrations.",
    bullets: ["Node.js / Express", "MongoDB", "Auth & webhooks"],
  },
  {
    icon: "🤖",
    title: "AI bot development",
    desc: "Custom AI chatbots deployed on WhatsApp and Telegram using Claude or OpenAI. Automate customer support, lead capture, or any workflow.",
    bullets: ["Telegram & WhatsApp", "Claude / OpenAI APIs", "Python / FastAPI"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "100px 40px",
        background: "var(--surface-2)",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Header */}
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
            What I offer
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "var(--text-primary)",
            }}
          >
            Services
          </h2>
        </div>

        {/* Services grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))",
            gap: "16px",
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "var(--surface)",
                border: "0.5px solid var(--border)",
                borderRadius: "14px",
                padding: "28px 30px",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(26,86,219,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>{s.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "10px",
                  letterSpacing: "-0.2px",
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  marginBottom: "18px",
                  fontWeight: 300,
                }}
              >
                {s.desc}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {s.bullets.map((b) => (
                  <div
                    key={b}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--blue)",
                        flexShrink: 0,
                      }}
                    />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
