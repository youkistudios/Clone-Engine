import type { Metadata } from "next";
import "./globals.css";
import "./simple.css";

export const metadata: Metadata = {
  title: "Clone System — From content to useful advice",
  description:
    "A simple explanation of how the Clone System collects public work, understands its ideas and produces source-backed business advice.",
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
