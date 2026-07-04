import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyCta from "@/components/layout/StickyCta";
import Spotlight from "@/components/ui/Spotlight";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.forgemedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Forgemedia — Premium Social Media Management & Short-Form Content Agency",
    template: "%s | Forgemedia",
  },
  description:
    "Forgemedia helps singers, coaches, servers and founders turn attention into leads with strategic content, premium video editing, and full social media management. Book a free strategy call.",
  keywords: [
    "social media management agency",
    "short form video editing",
    "content strategy agency",
    "personal branding agency",
    "video editing for coaches",
    "Forgemedia",
  ],
  authors: [{ name: "Forgemedia" }],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    siteName: "Forgemedia",
    title: "Forgemedia — Premium Social Media Management & Short-Form Content Agency",
    description:
      "We turn attention into leads and authority — strategic content, premium video editing, and social media management for singers, coaches, servers and founders.",
    url: siteUrl,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Forgemedia" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forgemedia — Premium Social Media Management Agency",
    description: "Strategic content. Premium editing. Real growth. Book your free strategy call.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Forgemedia",
  description:
    "Premium social media management and short-form content agency helping singers, coaches, servers and founders generate leads and authority.",
  url: siteUrl,
  areaServed: "Worldwide",
  serviceType: [
    "Social Media Management",
    "Short Form Video Editing",
    "Content Strategy",
    "Personal Branding",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-3"
        >
          Skip to content
        </a>
        <Spotlight />
        <div className="grain" aria-hidden="true" />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
