"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import { ArrowUp } from "lucide-react";

/* ---------------- Magnetic: element gravitates toward cursor ---------------- */
export function Magnetic({
  children,
  strength = 22,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${(x / r.width) * strength}px, ${(y / r.height) * strength}px)`;
    },
    [strength]
  );
  const reset = useCallback(() => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`magnetic inline-block ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- Tilt: 3D tilt + glare on hover ---------------- */
export function Tilt({
  children,
  max = 10,
  className = "",
  glare = true,
}: {
  children: ReactNode;
  max?: number;
  className?: string;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const onMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${px * max * 2}deg) rotateX(${-py * max * 2}deg) translateZ(0)`;
      if (glareRef.current) {
        glareRef.current.style.opacity = "1";
        glareRef.current.style.background = `radial-gradient(circle at ${(px + 0.5) * 100}% ${(py + 0.5) * 100}%, rgba(255,255,255,0.22), transparent 55%)`;
      }
    },
    [max]
  );
  const reset = useCallback(() => {
    if (ref.current) ref.current.style.transform = "rotateY(0deg) rotateX(0deg)";
    if (glareRef.current) glareRef.current.style.opacity = "0";
  }, []);

  return (
    <div className={`tilt-wrap ${className}`}>
      <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className="tilt-inner relative">
        {children}
        {glare && (
          <div
            ref={glareRef}
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300"
          />
        )}
      </div>
    </div>
  );
}

/* ---------------- CursorGlow: soft spotlight following the mouse ---------------- */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    let tx = -600;
    let ty = -600;
    let x = tx;
    let y = ty;
    const onMove = (e: globalThis.MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      if (ref.current) ref.current.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} aria-hidden className="cursor-glow hidden lg:block" />;
}

/* ---------------- HeroParticles: lightweight canvas constellation ---------------- */
export function HeroParticles({ density = 55 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let mx = -9999;
    let my = -9999;
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let pts: P[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const n = Math.min(density, Math.floor((w * h) / 22000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.8 + 0.6,
      }));
    };

    const onMove = (e: globalThis.MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = e.clientX - r.left;
      my = e.clientY - r.top;
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        // gentle attraction to cursor
        const dx = mx - p.x;
        const dy = my - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 160 && d > 1) {
          p.x += (dx / d) * 0.35;
          p.y += (dy / d) * 0.35;
        }
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(26,86,219,0.35)";
        ctx.fill();
      }
      // links
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(26,86,219,${(1 - d / 110) * 0.14})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-80 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_35%,black_25%,transparent_78%)]"
    />
  );
}

/* ---------------- BackToTop: floating button with scroll progress ring ---------------- */
export function BackToTop() {
  const [show, setShow] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShow(y > 600);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? Math.min(1, y / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const R = 17;
  const C = 2 * Math.PI * R;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-[90] flex h-12 w-12 items-center justify-center rounded-full bg-[#0a0a0f] text-white shadow-xl transition-all duration-500 hover:bg-[#1a56db] ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r={R} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" />
        <circle
          cx="22"
          cy="22"
          r={R}
          fill="none"
          stroke="#7ea4ff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - pct)}
          className="transition-[stroke-dashoffset] duration-150"
        />
      </svg>
      <ArrowUp className="relative h-5 w-5" />
    </button>
  );
}

/* ---------------- PageIntro: brief branded loader ---------------- */
export function PageIntro() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1900);
    return () => clearTimeout(t);
  }, []);
  if (done) return null;
  return (
    <div className="page-intro fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0b0b12] text-white">
      <div className="font-display animate-pop-in text-4xl font-extrabold tracking-tight">
        H<span className="text-gradient">.</span>A
      </div>
      <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">
        Full-Stack & Mobile
      </div>
      <div className="mt-6 h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
        <div className="page-intro-bar h-full w-full bg-gradient-to-r from-[#1a56db] to-[#7c3aed]" />
      </div>
    </div>
  );
}

/* ---------------- Parallax: mouse-parallax wrapper ---------------- */
export function Parallax({
  children,
  depth = 14,
  className = "",
  style,
}: {
  children: ReactNode;
  depth?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: globalThis.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      el.style.transform = `translate(${nx * depth}px, ${ny * depth}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [depth]);

  return (
    <div ref={ref} className={className} style={{ transition: "transform 0.35s ease-out", ...style }}>
      {children}
    </div>
  );
}
