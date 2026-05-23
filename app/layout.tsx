import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamzat Abdulrahman — Flutter & Web Developer",
  description: "Flutter and full-stack web developer based in Lagos, Nigeria. Building fast, clean digital products for businesses and startups.",
  keywords: ["Flutter developer", "web developer", "Lagos", "Nigeria", "Next.js", "Node.js", "mobile app"],
  openGraph: {
    title: "Hamzat Abdulrahman — Flutter & Web Developer",
    description: "Building fast, clean digital products — mobile apps and websites — for businesses and startups.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}