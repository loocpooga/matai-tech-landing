import type { Metadata } from "next";
import "./globals.css";
import MataiChatWidget from "./components/MataiChatWidget";

export const metadata: Metadata = {
  title: "Matai Tech | Business Automation & Data Engineering",
  description: "Professional automation solutions for modern businesses. Save 15+ hours per week with custom integrations, data visibility, and process automation.",
  keywords: ["business automation", "process automation", "data engineering", "system integration", "automation consulting", "workflow automation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Clash Display from Fontshare - distinctive geometric headline font */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* Inter + JetBrains Mono from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <MataiChatWidget />
      </body>
    </html>
  );
}
