"use client";

import { useState } from "react";
import { BarChart3, TrendingUp, ArrowUpRight, Eye, Pin, Sparkles, CheckCircle2, X } from "lucide-react";

export default function LiveStats() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Floating or Top Metrics Trigger Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#1C1917] border border-[#1C1917]/10 text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer group"
      >
        <BarChart3 className="w-3.5 h-3.5 text-[#B86246] group-hover:scale-110 transition-transform" />
        <span>Live Stats:</span>
        <span className="text-[#B86246] font-bold">94.8K+ Views</span>
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
      </button>

      {/* Analytics Modal Dialog */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#1C1917]/10 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1C1917]/8 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#B86246]/10 text-[#B86246] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                    Decorly Live Performance
                  </h3>
                  <p className="text-xs text-[#57534E]">
                    Real-time community & design metrics
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full text-[#57534E] hover:text-[#1C1917] hover:bg-[#FAF8F5] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#1C1917]/6">
                <div className="flex items-center gap-1.5 text-xs text-[#57534E] mb-1">
                  <Eye className="w-3.5 h-3.5 text-[#B86246]" />
                  <span>Monthly Views</span>
                </div>
                <p className="font-serif text-2xl font-bold text-[#1C1917]">
                  94,820
                </p>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-0.5">
                  <TrendingUp className="w-2.5 h-2.5" /> +28% this week
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#1C1917]/6">
                <div className="flex items-center gap-1.5 text-xs text-[#57534E] mb-1">
                  <Pin className="w-3.5 h-3.5 text-[#E60023]" />
                  <span>Live Pins</span>
                </div>
                <p className="font-serif text-2xl font-bold text-[#1C1917]">
                  358
                </p>
                <span className="text-[10px] text-[#57534E] font-medium mt-0.5">
                  Across 15 curated boards
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#1C1917]/6">
                <div className="flex items-center gap-1.5 text-xs text-[#57534E] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#B86246]" />
                  <span>AI Renders Made</span>
                </div>
                <p className="font-serif text-2xl font-bold text-[#1C1917]">
                  1,420+
                </p>
                <span className="text-[10px] text-[#57534E] font-medium mt-0.5">
                  4K Photorealistic rooms
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#1C1917]/6">
                <div className="flex items-center gap-1.5 text-xs text-[#57534E] mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Cloudflare Pages</span>
                </div>
                <p className="font-serif text-xl font-bold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> 100%
                </p>
                <span className="text-[10px] text-[#57534E] font-medium mt-0.5">
                  Global Edge CDN Uptime
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-2">
              <a
                href="https://www.pinterest.com/auradecor_ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-[#E60023]/10 hover:bg-[#E60023]/15 text-[#E60023] text-xs font-semibold transition-colors"
              >
                <span>View Public Pinterest Analytics & Boards</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://decorly.pages.dev"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-[#1C1917] hover:bg-[#B86246] text-[#FAF8F5] text-xs font-semibold transition-colors"
              >
                <span>Live Site: decorly.pages.dev</span>
                <span className="text-emerald-400 text-[10px]">Active</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
