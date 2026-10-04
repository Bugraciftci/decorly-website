import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
const pinterestTagId = process.env.NEXT_PUBLIC_PINTEREST_TAG_ID;
const cfBeaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;
const pinterestVerify = process.env.NEXT_PUBLIC_PINTEREST_DOMAIN_VERIFY;
const googleVerify = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://decorly.pages.dev"),
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
  authors: [{ name: "Decorly Studio", url: "https://decorly.pages.dev" }],
  creator: "Decorly",
  publisher: "Decorly",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://decorly.pages.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://decorly.pages.dev",
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
  verification: {
    google: googleVerify || undefined,
    other: {
      ...(pinterestVerify ? { "p:domain_verify": [pinterestVerify] } : {}),
      "google-adsense-account": ["ca-pub-7744456781071955"],
    },
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
        "image": "https://decorly.pages.dev/images/app-icon.png",
        "url": "https://decorly.pages.dev",
      },
      {
        "@type": "Organization",
        "name": "Decorly",
        "url": "https://decorly.pages.dev",
        "logo": "https://decorly.pages.dev/images/app-icon.png",
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

        {/* Pinterest Conversion & Audience Tag */}
        {pinterestTagId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(e){if(!window.pintrk){window.pintrk = function () {
                window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
                  n=window.pintrk;n.queue=[],n.version="3.0";var
                  t=document.createElement("script");t.async=!0,t.src=e;var
                  r=document.getElementsByTagName("script")[0];
                  r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
                pintrk('load', '${pinterestTagId}');
                pintrk('page');
              `,
            }}
          />
        )}
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1C1917] font-sans antialiased selection:bg-[#B86246]/20 selection:text-[#B86246]">
        {children}

        {/* Google Analytics 4 (GA4) */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Google AdSense Integration */}
        {adsenseId && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}

        {/* Cloudflare Web Analytics */}
        {cfBeaconToken && (
          <Script
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${cfBeaconToken}"}`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
