"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Services", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 40px",
        height: "64px",
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "0.5px solid var(--border)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "20px",
          fontWeight: 700,
          color: "var(--text-primary)",
          textDecoration: "none",
          letterSpacing: "-0.5px",
        }}
      >
        H<span style={{ color: "var(--blue)" }}>.</span>A
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "32px" }} className="desktop-nav">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
          >
            {l}
          </a>
        ))}
      </div>

      <a
        href="mailto:abdulrahmanhamza270@gmail.com"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          fontWeight: 500,
          padding: "9px 22px",
          background: "var(--blue)",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "var(--blue-dark)")}
        onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "var(--blue)")}
      >
        Hire me
      </a>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
