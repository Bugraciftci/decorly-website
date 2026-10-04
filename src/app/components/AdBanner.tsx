"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";

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
      <div className="bg-[#181615] text-[#FAF8F5] text-xs py-2 px-4 relative z-50 border-b border-white/10 flex items-center justify-between">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center w-full">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#B26A4A] text-white text-[10px] font-bold uppercase tracking-wider">
            Curated
          </span>
          <span className="text-[#FAF8F5]/90 font-light">
            Architectural Lighting & Ceramic Drop — Save up to 40%
          </span>
          <a
            href="https://pinterest.com/decorlydesign"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="font-medium underline text-[#FAF8F5] hover:text-[#B26A4A] transition-colors inline-flex items-center gap-0.5 ml-1"
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
        <div className="relative rounded-[28px] border border-black/[0.06] bg-white p-5 sm:p-7 shadow-luxury-sm overflow-hidden">
          <div className="flex items-center justify-between mb-3 text-[10px] uppercase font-bold tracking-[0.2em] text-[#6B645C]">
            <span>Editorial Partner</span>
            <span className="text-[9px] text-[#6B645C]/60">Google AdSense / Partner Slot</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF8F5] rounded-2xl p-4 sm:p-5 border border-black/[0.04]">
            <div className="flex items-center gap-3.5 text-left">
              <div className="w-11 h-11 rounded-2xl bg-[#181615] text-[#FAF8F5] flex items-center justify-center font-bold text-xl shrink-0">
                D
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B26A4A]">
                  Curated Interior Sponsor
                </span>
                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-[#181615]">
                  Artisanal Limewash & Architectural Lighting Collection
                </h4>
                <p className="text-xs text-[#6B645C] font-light hidden sm:block mt-0.5">
                  Sustainably crafted organic fixtures and finishes verified by interior architects.
                </p>
              </div>
            </div>

            <a
              href="https://pinterest.com/decorlydesign"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="px-6 py-2.5 rounded-full bg-[#181615] hover:bg-[#B26A4A] text-white text-xs font-semibold transition-all duration-300 shrink-0 inline-flex items-center gap-1.5 shadow-luxury-sm"
            >
              <span>Shop Collection</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Dynamic Ad Placement Tag */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-7744456781071955"}
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
    <div className="rounded-[28px] border border-black/[0.06] bg-white p-6 shadow-luxury-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#B26A4A] bg-[#B26A4A]/10 px-2.5 py-1 rounded-full">
            Featured Sponsor
          </span>
          <span className="text-[10px] text-[#6B645C]">Ad</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#181615] mb-2">
          Nordic & Japandi Lighting Fixtures
        </h3>
        <p className="text-xs sm:text-sm text-[#6B645C] font-light leading-relaxed mb-4">
          Handcrafted paper lanterns, fluted brass sconces, and dimmable 2700K ambient LED fixtures to complement your Decorly AI redesigns.
        </p>
      </div>

      <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between">
        <span className="text-xs font-medium text-[#6B645C]">Global Delivery</span>
        <a
          href="https://pinterest.com/decorlydesign"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#B26A4A] hover:underline"
        >
          <span>Claim Offer</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
