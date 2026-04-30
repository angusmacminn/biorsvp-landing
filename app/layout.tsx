import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "bioRSVP | Make Intelligent Connections",
  description:
    "The permanent directory for biotech receptions, satellite events, and private gatherings.",
  icons: {
    icon: [
      { url: "/assets/favicon_16px.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon_32px.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon_64px.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: "/assets/favicon_32px.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-50 text-[var(--black)] antialiased`}>{children}</body>
    </html>
  );
}
