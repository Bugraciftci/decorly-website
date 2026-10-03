import Image from "next/image";
import { ShoppingBag, Sparkles, Check, ArrowRight } from "lucide-react";

interface DupeItem {
  id: string;
  name: string;
  designerPrice: string;
  dupePrice: string;
  savings: string;
  category: string;
  matchScore: string;
}

const DUPES: DupeItem[] = [
  {
    id: "sofa",
    name: "Curved Bouclé Sculptural Sofa",
    designerPrice: "$4,650",
    dupePrice: "$890",
    savings: "81% less",
    category: "Living Seating",
    matchScore: "99% visual match",
  },
  {
    id: "table",
    name: "Solid Roman Travertine Low Plinth Table",
    designerPrice: "$2,890",
    dupePrice: "$420",
    savings: "85% less",
    category: "Coffee Tables",
    matchScore: "98% visual match",
  },
  {
    id: "light",
    name: "Pleated Linen Japanese Rice Paper Pendant",
    designerPrice: "$1,120",
    dupePrice: "$145",
    savings: "87% less",
    category: "Architectural Lighting",
    matchScore: "96% visual match",
  },
  {
    id: "chair",
    name: "Organic Fluted Oak Dining Armchair",
    designerPrice: "$980",
    dupePrice: "$180",
    savings: "82% less",
    category: "Dining Chairs",
    matchScore: "97% visual match",
  },
];

export default function ShoppableDupes() {
  return (
    <section id="shoppable-dupes" className="py-24 bg-[#F3EFEA]/60 border-y border-[#1C1917]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & USP */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B86246]/10 text-[#B86246] text-xs font-semibold uppercase tracking-wider">
              <ShoppingBag className="w-3.5 h-3.5" />
              AI Furniture Vision
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-tight">
              Love the Pinterest Look? Shop the Realistic Dupes.
            </h2>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed">
              Every room redesigned by Decorly doesn&apos;t just look editorial—it&apos;s instantly buildable. Decorly automatically breaks down the render, tags individual items, and finds high-grade furniture dupes that save you thousands.
            </p>

            <ul className="space-y-3.5 text-sm sm:text-base text-[#1C1917]">
              {[
                "Instant visual match against 150+ home retailers",
                "Filter by budget tier, material grade, and delivery speed",
                "Export a complete Contractor & Furniture Specification PDF",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B86246] text-[#FAF8F5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1917] text-[#FAF8F5] text-sm font-semibold hover:bg-[#B86246] transition-colors shadow-lg shadow-[#1C1917]/10"
              >
                <span>Unlock AI Product Matcher</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Card Stack with Renders */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#1C1917]/10 space-y-6">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#1C1917]/8">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-xs border border-[#1C1917]/10">
                    <Image
                      src="/images/japandi_living.jpg"
                      alt="Room analysis"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#1C1917] text-sm sm:text-base">
                      Japandi Living Room #041
                    </h4>
                    <p className="text-xs text-[#57534E]">
                      4 furniture items detected • $9,640 estimated savings
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#586551]/10 text-[#586551] text-xs font-bold">
                  <Sparkles className="w-3 h-3" />
                  AI Verified
                </div>
              </div>

              {/* Dupe Product Items */}
              <div className="space-y-3">
                {DUPES.map((dupe) => (
                  <div
                    key={dupe.id}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-[#1C1917]/6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#B86246]/40 hover:bg-[#FAF8F5]/80 transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#B86246]">
                          {dupe.category}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#1C1917]/5 text-[#57534E] font-medium">
                          {dupe.matchScore}
                        </span>
                      </div>
                      <h5 className="font-medium text-sm text-[#1C1917]">
                        {dupe.name}
                      </h5>
                    </div>

                    <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-[#1C1917]/6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-[#57534E] line-through">
                          {dupe.designerPrice}
                        </span>
                        <span className="text-base font-bold text-[#1C1917]">
                          {dupe.dupePrice}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-[#586551]">
                        Save {dupe.savings}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Total Savings Banner */}
              <div className="p-4 rounded-2xl bg-[#1C1917] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <span className="text-xs text-[#FAF8F5]/70 uppercase tracking-wider font-semibold">
                    Total Estimated Project Cost
                  </span>
                  <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                    <span className="text-2xl font-serif font-bold text-[#FAF8F5]">
                      $1,635
                    </span>
                    <span className="text-xs text-[#FAF8F5]/60 line-through">
                      $9,640 (Architectural Showroom)
                    </span>
                  </div>
                </div>
                <a
                  href="#waitlist"
                  className="px-4 py-2 rounded-full bg-[#B86246] hover:bg-[#A05238] text-white text-xs font-semibold transition-colors shrink-0"
                >
                  Generate My Room Spec
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
