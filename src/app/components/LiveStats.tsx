"use client";

import { useState } from "react";
import { BarChart3, TrendingUp, ArrowUpRight, Eye, Pin, Sparkles, CheckCircle2, X } from "lucide-react";

export default function LiveStats() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Floating or Header Metrics Trigger Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white text-[#181615] border border-black/[0.06] text-xs font-medium shadow-luxury-sm hover:shadow-luxury-md transition-all cursor-pointer group"
      >
        <BarChart3 className="w-3.5 h-3.5 text-[#B26A4A] group-hover:scale-110 transition-transform" />
        <span className="text-[#6B645C]">Live:</span>
        <span className="text-[#B26A4A] font-semibold">94.8K+ Views</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
      </button>

      {/* Analytics Modal Dialog */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-[32px] overflow-hidden shadow-luxury-xl border border-black/[0.08] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#B26A4A]/10 text-[#B26A4A] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#181615]">
                    Decorly Live Performance
                  </h3>
                  <p className="text-xs text-[#6B645C] font-normal">
                    Real-time community & design metrics
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full text-[#6B645C] hover:text-[#181615] hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3.5 mb-6">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs text-[#6B645C] mb-1">
                  <Eye className="w-3.5 h-3.5 text-[#B26A4A]" />
                  <span>Monthly Views</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181615]">
                  94,820
                </p>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +28% this week
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs text-[#6B645C] mb-1">
                  <Pin className="w-3.5 h-3.5 text-[#E60023]" />
                  <span>Live Pins</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181615]">
                  358
                </p>
                <span className="text-[10px] text-[#6B645C] font-normal mt-0.5">
                  Across 15 curated boards
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs text-[#6B645C] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#B26A4A]" />
                  <span>AI Renders Made</span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181615]">
                  1,420+
                </p>
                <span className="text-[10px] text-[#6B645C] font-normal mt-0.5">
                  4K Photorealistic rooms
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/[0.04]">
                <div className="flex items-center gap-1.5 text-xs text-[#6B645C] mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cloudflare CDN</span>
                </div>
                <p className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> 100%
                </p>
                <span className="text-[10px] text-[#6B645C] font-light mt-0.5">
                  Global Edge Uptime
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-2">
              <a
                href="https://www.pinterest.com/auradecor_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#E60023]/10 hover:bg-[#E60023]/15 text-[#E60023] text-xs font-semibold transition-colors"
              >
                <span>View Public Pinterest Analytics & Boards</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://decorly.pages.dev"
                className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-[#181615] hover:bg-[#B26A4A] text-[#FAF8F5] text-xs font-semibold transition-colors"
              >
                <span>Live Production: decorly.pages.dev</span>
                <span className="text-emerald-400 text-[10px]">Active</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
