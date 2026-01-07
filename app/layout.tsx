import type { Metadata } from "next";
import "./globals.css";
import MataiChatWidget from "./components/MataiChatWidget";

export const metadata: Metadata = {
  title: "Matai Tech | Business Automation & Consulting",
  description: "Save time and money by automating tedious tasks. Get visibility into your data and discover inefficiencies. Professional tech consulting for modern businesses.",
  keywords: ["automation", "business consulting", "tech consulting", "process automation", "data visibility"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <MataiChatWidget />
      </body>
    </html>
  );
}
