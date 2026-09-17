import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hamzat Abdulrahman — Full-Stack & Mobile Engineer",
  description: "Full-stack and mobile engineer (React, Next.js, Node.js, TypeScript, Flutter) with 3+ years shipping production fintech — remittance, wallets, bill payments and agent banking — to live users on App Store and Google Play. Author of OpenPay NG payment SDK and WikiRide API.",
  keywords: ["Full-stack engineer", "Flutter developer", "React", "Next.js", "Node.js", "TypeScript", "Paystack", "Flutterwave", "Lagos", "Nigeria", "fintech"],
  openGraph: {
    title: "Hamzat Abdulrahman — Full-Stack & Mobile Engineer",
    description: "3+ years building production fintech: Flutter clients, Node.js/TypeScript backends, payments and webhooks. OpenPay NG + WikiRide API author.",
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