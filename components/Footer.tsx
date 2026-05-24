"use client";
export default function Footer() {
  return (
    <footer
      style={{
        padding: "clamp(20px, 4vw, 28px) clamp(20px, 5vw, 40px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "12px",
        background: "var(--surface-2)",
        borderTop: "0.5px solid var(--border)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "15px",
          fontWeight: 700,
          letterSpacing: "-0.3px",
        }}
      >
        H<span style={{ color: "var(--blue)" }}>.</span>A
      </div>
      <p style={{ fontSize: "12px", color: "var(--text-tertiary)", textAlign: "center" }}>
        © {new Date().getFullYear()} Hamzat Abdulrahman. All rights reserved.
      </p>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {[
          { label: "GitHub", href: "https://github.com/Abdul20009" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulrahman-hamza-564135309/" },
          { label: "X", href: "https://x.com/coolray09" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "12px",
              color: "var(--text-tertiary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-tertiary)")}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
