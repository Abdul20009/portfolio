import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`mb-10 sm:mb-14 ${centered ? "text-center mx-auto" : ""} max-w-2xl ${centered ? "" : ""}`}
    >
      <p
        className={`font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-[#1a56db] mb-3 flex items-center gap-2 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="inline-block h-[1.5px] w-6 bg-[#1a56db]" />
        {eyebrow}
        {centered && <span className="inline-block h-[1.5px] w-6 bg-[#1a56db]" />}
      </p>
      <h2 className="font-display text-[clamp(28px,5vw,44px)] font-bold leading-[1.05] tracking-[-0.02em] text-[#0a0a0f]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-[#5a5a6e] font-light max-w-xl">
          {description}
        </p>
      )}
    </Reveal>
  );
}
