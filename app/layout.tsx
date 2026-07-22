import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import MataiChatWidget from "./components/MataiChatWidget";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matai Tech | Automation for trades businesses",
  description:
    "I'm Luke. I connect the CRMs, spreadsheets, and tools your trades business already runs, so leads stop slipping and nobody retypes the same job into three places. Roofing, solar, HVAC, windows, pools.",
  keywords: [
    "trades business automation",
    "CRM integration",
    "systems integration",
    "roofing CRM",
    "solar CRM",
    "home services automation",
    "workflow automation",
  ],
};

export const viewport: Viewport = {
  themeColor: "#151210",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {children}
        <MataiChatWidget />
      </body>
    </html>
  );
}
