"use client";

const skills = [
  { name: "Flutter / Dart", category: "Mobile", icon: "📱", desc: "Cross-platform apps for Android & iOS" },
  { name: "Node.js / Express", category: "Backend", icon: "⚙️", desc: "REST APIs, auth, webhooks" },
  { name: "React / Next.js", category: "Frontend", icon: "⚛️", desc: "Fast, SEO-friendly web apps" },
  { name: "MongoDB", category: "Database", icon: "🗄️", desc: "Schema design & Mongoose ODM" },
  { name: "Python / FastAPI", category: "AI & Backend", icon: "🐍", desc: "AI integrations & fast APIs" },
  { name: "Cloudinary", category: "Media", icon: "☁️", desc: "Image upload & optimization" },
  { name: "Paystack", category: "Payments", icon: "💳", desc: "Nigerian payment integrations" },
  { name: "Git / GitHub", category: "Tools", icon: "🔧", desc: "Version control & collaboration" },
];

const categoryColor: Record<string, string> = {
  Mobile: "#e8f0fe",
  Backend: "#e6f9f2",
  Frontend: "#fef3e8",
  Database: "#f0e8fe",
  "AI & Backend": "#e8f6fe",
  Media: "#e8f4fe",
  Payments: "#e8feef",
  Tools: "#f5f5f5",
};

const categoryText: Record<string, string> = {
  Mobile: "#1241a8",
  Backend: "#0F6E56",
  Frontend: "#a85a00",
  Database: "#5a00a8",
  "AI & Backend": "#0a5c8a",
  Media: "#0a5c8a",
  Payments: "#0a7a3c",
  Tools: "#5a5a6e",
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "clamp(60px, 10vw, 100px) clamp(20px, 5vw, 80px)",
        background: "var(--surface-2)",
        borderTop: "0.5px solid var(--border)",
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
            What I work with
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px, 5vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              color: "var(--text-primary)",
            }}
          >
            Skills & technologies
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 240px), 1fr))",
            gap: "12px",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                background: "var(--surface)",
                border: "0.5px solid var(--border)",
                borderRadius: "12px",
                padding: "18px 20px",
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(26,86,219,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: categoryColor[skill.category] ?? "#f0f0f5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                {skill.icon}
              </div>
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "3px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {skill.name}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-tertiary)", marginBottom: "6px" }}>
                  {skill.desc}
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    padding: "2px 9px",
                    borderRadius: "99px",
                    background: categoryColor[skill.category] ?? "#f0f0f5",
                    color: categoryText[skill.category] ?? "#5a5a6e",
                    display: "inline-block",
                  }}
                >
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
