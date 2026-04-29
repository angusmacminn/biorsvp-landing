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
