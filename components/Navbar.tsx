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

  // Close menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
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
          padding: "0 24px",
          height: "64px",
          background: scrolled || menuOpen ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled || menuOpen ? "0.5px solid var(--border)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
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
        <div className="desktop-nav" style={{ display: "flex", gap: "32px" }}>
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

        {/* Desktop CTA */}
        <a
          className="desktop-nav"
          href="#contact"
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

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "flex-end",
          }}
        >
          <span
            style={{
              display: "block",
              width: menuOpen ? "22px" : "22px",
              height: "2px",
              background: "var(--text-primary)",
              borderRadius: "2px",
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "16px",
              height: "2px",
              background: "var(--text-primary)",
              borderRadius: "2px",
              transition: "opacity 0.25s",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "var(--text-primary)",
              borderRadius: "2px",
              transition: "transform 0.25s, opacity 0.25s",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="mobile-menu"
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(12px)",
          borderBottom: "0.5px solid var(--border)",
          padding: menuOpen ? "16px 24px 24px" : "0 24px",
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease, padding 0.3s ease",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={handleLinkClick}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                fontWeight: 500,
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "0.5px solid var(--border)",
                transition: "color 0.2s",
              }}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            style={{
              marginTop: "12px",
              display: "block",
              padding: "13px",
              background: "var(--blue)",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            Hire me
          </a>
        </div>
      </div>
    </>
  );
}
