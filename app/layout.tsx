import type { Metadata, Viewport } from "next";
import { Zilla_Slab, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import MataiChatWidget from "./components/MataiChatWidget";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-zilla",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
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
  themeColor: "#DFEAD8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${zilla.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        {children}
        <MataiChatWidget />
      </body>
    </html>
  );
}
