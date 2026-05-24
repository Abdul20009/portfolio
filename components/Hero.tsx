"use client";
export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 40px 80px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(160deg, #f7f7fa 0%, #ffffff 60%)",
      }}
    >
      {/* Background grid decoration */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      {/* Blue accent blob */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "-80px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,86,219,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", maxWidth: "860px" }}>
        {/* Badge */}
        <div
          className="animate-fade-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "12px",
            fontFamily: "var(--font-body)",
            padding: "6px 14px",
            background: "var(--surface)",
            border: "0.5px solid var(--border)",
            borderRadius: "99px",
            color: "var(--text-secondary)",
            marginBottom: "28px",
            letterSpacing: "0.2px",
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
            }}
          />
          Available for freelance & full-time roles · Lagos, Nigeria
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-1"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(44px, 7vw, 80px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            color: "var(--text-primary)",
            marginBottom: "28px",
          }}
        >
          Flutter & Web
          <br />
          <span style={{ color: "var(--blue)" }}>Developer</span>
          <span style={{ color: "var(--text-tertiary)" }}>.</span>
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up-2"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            fontWeight: 300,
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "520px",
            marginBottom: "40px",
          }}
        >
          I&apos;m Hamzat Abdulrahman — a solo developer building fast, clean mobile apps
          and websites for businesses and startups. Full-stack capable, from Flutter to Node.js.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-3" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "64px" }}>
          <a
            href="#projects"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 28px",
              background: "var(--blue)",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--blue-dark)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--blue)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View my work
          </a>
          <a
            href="#contact"
  style={{
    fontFamily: "var(--font-body)",
    fontSize: "14px",
    fontWeight: 500,
    padding: "12px 28px",
    background: "transparent",
    color: "var(--text-primary)",
    borderRadius: "8px",
    textDecoration: "none",
    border: "0.5px solid rgba(10,10,15,0.2)",
    transition: "border-color 0.2s, transform 0.15s",
    display: "inline-block",
  }}
  onMouseEnter={(e) => {
    (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,10,15,0.5)";
    (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
  }}
  onMouseLeave={(e) => {
    (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,10,15,0.2)";
    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
  }}
>
  Get in touch
</a>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-up-4"
          style={{
            display: "flex",
            gap: "0",
            borderTop: "0.5px solid var(--border)",
            paddingTop: "32px",
          }}
        >
          {[
            { num: "5+", label: "Years experience" },
            { num: "20+", label: "Projects delivered" },
            { num: "4", label: "Tech stacks" },
          ].map((s, i) => (
            <div
              key={s.label}
              style={{
                paddingRight: "48px",
                marginRight: "48px",
                borderRight: i < 2 ? "0.5px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-1px",
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: "13px", color: "var(--text-tertiary)", marginTop: "2px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
