import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://decorly.app"),
  title: {
    default: "Decorly — AI Interior Design & Luxury Room Redesign",
    template: "%s | Decorly AI Interior Design",
  },
  description:
    "Snap a photo of any space and redesign it instantly with AI. Explore Japandi, Quiet Luxury, Wabi-Sabi, and Organic Modern aesthetics. Instant 4K renders, furniture dupes, and color palettes for iPhone & iPad.",
  keywords: [
    "AI interior design",
    "room redesign app",
    "Japandi interior design",
    "AI home decorator",
    "room makeover AI",
    "virtual staging app",
    "interior design iOS app",
    "decorly",
    "quiet luxury interior",
    "wabi sabi home",
    "furniture finder",
    "Pinterest home decor",
  ],
  authors: [{ name: "Decorly Studio", url: "https://decorly.app" }],
  creator: "Decorly",
  publisher: "Decorly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://decorly.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://decorly.app",
    title: "Decorly — AI Interior Design & Luxury Room Redesign",
    description:
      "Transform any room in seconds. Take a photo, pick your dream aesthetic, and watch AI remodel your home with realistic materials, lighting, and shoppable dupes.",
    siteName: "Decorly",
    images: [
      {
        url: "/images/japandi_living.jpg",
        width: 1024,
        height: 1536,
        alt: "Decorly AI Japandi Living Room Remodel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Decorly — AI Interior Design App for iPhone",
    description:
      "Transform your space in seconds. Snap a photo to generate hyper-realistic interior designs in 30+ curated styles.",
    images: ["/images/japandi_living.jpg"],
    creator: "@decorlydesign",
  },
  icons: {
    icon: "/images/app-icon.png",
    apple: "/images/app-icon.png",
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Decorly",
        "operatingSystem": "iOS, iPadOS",
        "applicationCategory": "DesignApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1280",
        },
        "description":
          "AI-powered interior design and room makeover studio for iPhone and iPad.",
        "image": "https://decorly.app/images/app-icon.png",
        "url": "https://decorly.app",
      },
      {
        "@type": "Organization",
        "name": "Decorly",
        "url": "https://decorly.app",
        "logo": "https://decorly.app/images/app-icon.png",
        "sameAs": [
          "https://pinterest.com/decorlydesign",
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans antialiased selection:bg-[#B86246]/20 selection:text-[#B86246]">
        {children}
      </body>
    </html>
  );
}
