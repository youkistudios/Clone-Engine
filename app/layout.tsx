import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clone System — Source-grounded digital advisors",
  description:
    "A visual map of the skills, evidence controls and release gates that turn public thought-leader material into an auditable digital advisor.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
