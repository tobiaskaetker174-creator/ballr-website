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

const siteUrl = "https://ballr-website-v2.vercel.app";
const siteName = "BallR";
const siteDescription =
  "Create your own pickup football league. Set rules, invite players, track ELO ratings, and run seasons. The first platform built for modern pickup football communities worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BallR — Your League. Your Rules. Your Rating.",
    template: "%s | BallR",
  },
  description: siteDescription,
  keywords: [
    "pickup football",
    "soccer league",
    "football Bangkok",
    "football Bali",
    "amateur football",
    "expat sports",
    "ELO rating football",
    "create football league",
    "pickup soccer app",
    "community football",
    "football ratings",
    "team balancing",
    "football community",
  ],
  authors: [{ name: "BallR Team" }],
  creator: "BallR",
  publisher: "BallR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "BallR — Your League. Your Rules. Your Rating.",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "BallR - Create your own pickup football league",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BallR — Your League. Your Rules. Your Rating.",
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@BallRFootball",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  foundingDate: "2025",
  sameAs: [
    "https://twitter.com/BallRFootball",
    "https://instagram.com/ballr.football",
  ],
  sport: "Football/Soccer",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "support@ballr.club",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Bangkok",
      address: { "@type": "PostalAddress", addressCountry: "TH" },
    },
    {
      "@type": "City",
      name: "Bali",
      address: { "@type": "PostalAddress", addressCountry: "ID" },
    },
    {
      "@type": "City",
      name: "Berlin",
      address: { "@type": "PostalAddress", addressCountry: "DE" },
    },
    {
      "@type": "City",
      name: "Singapore",
      address: { "@type": "PostalAddress", addressCountry: "SG" },
    },
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:rounded-lg focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
