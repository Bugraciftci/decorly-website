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
    <section id="shoppable-dupes" className="py-28 bg-[#F5F1EA]/50 border-y border-black/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial USP */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B26A4A]/10 text-[#B26A4A] text-[11px] font-semibold uppercase tracking-[0.2em]">
              <ShoppingBag className="w-3.5 h-3.5" />
              AI Furniture Vision
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#181615] tracking-tight leading-[1.12]">
              Pinterest Dreams, <span className="text-[#B26A4A]">Realistic Budgets.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#6B645C] font-normal leading-relaxed">
              Every room created by Decorly isn&apos;t just conceptual art—it&apos;s buildable. Decorly breaks down the render, tags every item, and finds designer-quality furniture dupes saving you thousands.
            </p>

            <ul className="space-y-3.5 text-sm sm:text-base text-[#181615]">
              {[
                "Instant visual match against 150+ verified home retailers",
                "Filter by budget tier, material durability, and delivery time",
                "Export a full Contractor & Furniture Specification PDF",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#B26A4A] text-[#FAF8F5] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-[#181615] font-normal">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#181615] text-[#FAF8F5] text-sm font-semibold hover:bg-[#B26A4A] transition-all duration-300 shadow-luxury-sm hover:shadow-luxury-md"
              >
                <span>Unlock AI Product Matcher</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: High-End Spec Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-luxury-lg border border-black/[0.06] space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-xs border border-black/[0.08]">
                    <Image
                      src="/images/japandi_living.jpg"
                      alt="Room analysis"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold tracking-tight text-[#181615]">
                      Japandi Living Room #041
                    </h4>
                    <p className="text-xs text-[#6B645C]">
                      4 furniture pieces detected • $9,640 estimated savings
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#586551]/10 text-[#586551] text-xs font-semibold">
                  <Sparkles className="w-3 h-3" />
                  AI Verified
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {DUPES.map((dupe) => (
                  <div
                    key={dupe.id}
                    className="p-4 rounded-2xl bg-[#FAF8F5] border border-black/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#B26A4A]/30 transition-all duration-200"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#B26A4A]">
                          {dupe.category}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/[0.04] text-[#6B645C] font-medium">
                          {dupe.matchScore}
                        </span>
                      </div>
                      <h5 className="font-medium text-sm text-[#181615]">
                        {dupe.name}
                      </h5>
                    </div>

                    <div className="flex items-center sm:flex-col sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-black/[0.04]">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xs text-[#6B645C] line-through">
                          {dupe.designerPrice}
                        </span>
                        <span className="text-base font-bold text-[#181615]">
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

              {/* Bottom Project Total Banner */}
              <div className="p-5 rounded-2xl bg-[#181615] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <span className="text-[10px] text-[#FAF8F5]/60 uppercase tracking-[0.2em] font-semibold">
                    Total Estimated Project Cost
                  </span>
                  <div className="flex items-baseline gap-2.5 justify-center sm:justify-start mt-0.5">
                    <span className="text-3xl font-bold tracking-tight text-[#FAF8F5]">
                      $1,635
                    </span>
                    <span className="text-xs text-[#FAF8F5]/50 line-through">
                      $9,640 (Showroom Retail)
                    </span>
                  </div>
                </div>
                <a
                  href="#waitlist"
                  className="px-5 py-2.5 rounded-full bg-[#B26A4A] hover:bg-[#985538] text-white text-xs font-semibold transition-colors shrink-0"
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
