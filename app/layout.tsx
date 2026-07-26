import type { Metadata } from "next";
import "./globals.css";
import "./simple.css";

export const metadata: Metadata = {
  title: "Clone System — From content to useful advice",
  description:
    "A simple explanation of how the Clone System collects public work, understands its ideas and produces source-backed business advice.",
  metadataBase: new URL("https://clone-system-map.croks.chatgpt.site"),
  openGraph: {
    title: "Clone System",
    description: "Collect. Understand. Advise. Verify.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Clone System — Collect, Understand, Advise, Verify",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clone System",
    description: "Collect. Understand. Advise. Verify.",
    images: ["/og.png"],
  },
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
