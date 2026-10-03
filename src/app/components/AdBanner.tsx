"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Sparkles, X } from "lucide-react";

interface AdBannerProps {
  type: "top-bar" | "leaderboard" | "in-feed";
  adSlotId?: string;
}

export default function AdBanner({ type, adSlotId = "decorly-ad-slot-1" }: AdBannerProps) {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    try {
      if (
        typeof window !== "undefined" &&
        window.adsbygoogle &&
        process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID
      ) {
        window.adsbygoogle.push({});
      }
    } catch {
      // AdSense initialization error guard
    }
  }, []);

  if (closed) return null;

  if (type === "top-bar") {
    return (
      <div className="bg-gradient-to-r from-[#1C1917] via-[#2A2420] to-[#1C1917] text-[#FAF8F5] text-xs py-2 px-4 relative z-50 border-b border-white/10 flex items-center justify-between">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center w-full">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#B86246] text-white text-[10px] font-bold uppercase tracking-wider">
            Sponsored
          </span>
          <span className="text-[#FAF8F5]/90">
            Featured Partner: Up to 40% Off Artisanal Travertine, Bouclé & Japanese Lanterns
          </span>
          <a
            href="https://pinterest.com/decorlydesign"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-bold underline text-[#FAF8F5] hover:text-[#B86246] transition-colors inline-flex items-center gap-0.5 ml-1"
          >
            <span>Explore Dupes</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
        <button
          onClick={() => setClosed(true)}
          className="text-[#FAF8F5]/60 hover:text-white transition-colors p-1"
          aria-label="Close Announcement"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  if (type === "leaderboard") {
    return (
      <div className="w-full max-w-5xl mx-auto my-12 px-4">
        <div className="relative rounded-2xl border border-dashed border-[#1C1917]/15 bg-[#FAF8F5]/60 p-4 sm:p-6 text-center overflow-hidden">
          <div className="flex items-center justify-between mb-3 text-[10px] uppercase font-bold tracking-widest text-[#57534E]/80">
            <span>Advertisement</span>
            <span className="text-[9px] text-[#57534E]/60">Google AdSense / Partner Slot</span>
          </div>

          {/* Ad Container for Google AdSense */}
          <div className="min-h-[90px] flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-xs border border-[#1C1917]/8">
            <div className="flex items-center gap-3 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#1C1917]/10 flex items-center justify-center text-[#B86246] shrink-0 font-serif font-bold text-lg">
                D
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B86246]">
                  Curated Interior Affiliate
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-[#1C1917]">
                  Artisanal Limewash & Architectural Lighting Collection
                </h4>
                <p className="text-xs text-[#57534E] hidden sm:block">
                  Discover sustainably sourced organic furniture verified by interior designers.
                </p>
              </div>
            </div>

            <a
              href="https://pinterest.com/decorlydesign"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="px-5 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#B86246] text-white text-xs font-semibold transition-all duration-200 shrink-0 inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>Shop Collection</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Dynamic Ad Placement Tag (When AdSense is configured) */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-0000000000000000"}
            data-ad-slot={adSlotId}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    );
  }

  // in-feed ad
  return (
    <div className="rounded-3xl border border-dashed border-[#B86246]/30 bg-gradient-to-b from-[#F3EFEA]/80 to-white p-6 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#B86246] bg-[#B86246]/10 px-2.5 py-1 rounded-full">
            Featured Sponsor
          </span>
          <span className="text-[10px] text-[#57534E]">Ad</span>
        </div>
        <h3 className="font-serif text-xl font-bold text-[#1C1917] mb-2">
          Nordic & Japandi Lighting Fixtures
        </h3>
        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed mb-4">
          Handcrafted paper lanterns, fluted brass sconces, and dimmable 2700K ambient LED fixtures to complement your Decorly AI redesigns.
        </p>
      </div>

      <div className="pt-4 border-t border-[#1C1917]/8 flex items-center justify-between">
        <span className="text-xs font-semibold text-[#57534E]">Free Global Shipping</span>
        <a
          href="https://pinterest.com/decorlydesign"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-1 text-xs font-bold text-[#B86246] hover:underline"
        >
          <span>Claim Offer</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
