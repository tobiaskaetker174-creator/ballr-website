import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BallR â Find Your Game. Build Your Rating.",
  description:
    "The pickup football app for Bangkok & Bali. Find games, build your ELO rating, compete in monthly leaderboards, and never miss a match again.",
  keywords: [
    "pickup football",
    "soccer Bangkok",
    "football Bali",
    "amateur football",
    "expat sports",
    "ELO rating football",
  ],
  openGraph: {
    title: "BallR â Find Your Game. Build Your Rating.",
    description:
      "The pickup football app for Bangkok & Bali. Find games, build your ELO, compete monthly.",
    type: "website",
    siteName: "BallR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
