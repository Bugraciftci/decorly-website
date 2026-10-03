"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Eye, X } from "lucide-react";
import { trackStyleClick } from "@/lib/analytics";

interface StyleItem {
  id: string;
  title: string;
  category: "living" | "kitchen" | "bedroom" | "details";
  categoryLabel: string;
  image: string;
  materials: string;
  lighting: string;
  colorPalette: string[];
  saves: string;
}

const STYLES: StyleItem[] = [
  {
    id: "japandi-living",
    title: "Japandi Organic Living Room",
    category: "living",
    categoryLabel: "Living Space",
    image: "/images/japandi_living.jpg",
    materials: "Fluted White Oak, Bouclé, Raw Travertine",
    lighting: "Warm diffused 2700K floor lamps & morning sun",
    colorPalette: ["#E8E2D8", "#C5BCB2", "#FAF8F5", "#181615"],
    saves: "34.2K saves",
  },
  {
    id: "limewash-fireplace",
    title: "Limewash & Burrowcore Fireplace",
    category: "living",
    categoryLabel: "Living Space",
    image: "/images/limewash_fireplace.jpg",
    materials: "Artisanal Limewash Plaster, Matte Black Hearth",
    lighting: "Flickering amber firelight & concealed LED wash",
    colorPalette: ["#DDD6CE", "#A89F91", "#3A332C", "#FAF8F5"],
    saves: "41.8K saves",
  },
  {
    id: "calacatta-kitchen",
    title: "Monolithic Calacatta Kitchen",
    category: "kitchen",
    categoryLabel: "Kitchen & Dining",
    image: "/images/calacatta_kitchen.jpg",
    materials: "Calacatta Gold Quartz, Stained Walnut, Brushed Brass",
    lighting: "Recessed architectural linear cove & soft pendants",
    colorPalette: ["#FAF8F5", "#C8A97E", "#2C2723", "#EFECE6"],
    saves: "29.4K saves",
  },
  {
    id: "quiet-luxury-bedroom",
    title: "Quiet Luxury Linen Sanctuary",
    category: "bedroom",
    categoryLabel: "Bedroom",
    image: "/images/quiet_luxury_bedroom.jpg",
    materials: "Washed Belgian Linen, Oatmeal Upholstery, Travertine",
    lighting: "Soft ambient ceramic sconces & sheer drapes",
    colorPalette: ["#FAF8F5", "#E8E2D8", "#B5AAA0", "#6B645C"],
    saves: "52.1K saves",
  },
  {
    id: "hidden-coffee-bar",
    title: "Concealed Pocket Coffee Bar",
    category: "kitchen",
    categoryLabel: "Kitchen & Dining",
    image: "/images/hidden_coffee_bar.jpg",
    materials: "Dark Fluted Timber, Backlit Onyx, Stainless Steel",
    lighting: "Warm undermount warm glow with auto-sensor",
    colorPalette: ["#231F1C", "#D4A373", "#FAF8F5", "#B26A4A"],
    saves: "38.7K saves",
  },
  {
    id: "spa-bathroom",
    title: "Wabi-Sabi Microcement Spa Bath",
    category: "details",
    categoryLabel: "Baths & Details",
    image: "/images/spa_bathroom.jpg",
    materials: "Seamless Microcement, Fluted Glass, Olive Timber",
    lighting: "Skylight wash with warm organic backlighting",
    colorPalette: ["#D8D3CC", "#A39E96", "#FAF8F5", "#586551"],
    saves: "26.3K saves",
  },
  {
    id: "travertine-table",
    title: "Sculptural Travertine & Raw Ceramics",
    category: "details",
    categoryLabel: "Baths & Details",
    image: "/images/travertine_table.jpg",
    materials: "Pitted Italian Travertine, Terracotta Pottery, Linen",
    lighting: "Direct directional gallery spotlights",
    colorPalette: ["#E7DFD5", "#C4A482", "#B26A4A", "#FAF8F5"],
    saves: "19.5K saves",
  },
  {
    id: "sculptural-chair",
    title: "Curved Bouclé Accent Sanctuary",
    category: "living",
    categoryLabel: "Living Space",
    image: "/images/sculptural_chair.jpg",
    materials: "Textured Bouclé Wool, Walnut Stems, Silk Rug",
    lighting: "Paper lantern Akari-style diffuse illumination",
    colorPalette: ["#FAF8F5", "#D5CEBF", "#8C8275", "#181615"],
    saves: "31.9K saves",
  },
  {
    id: "studio-hack",
    title: "Architectural Studio Micro-Zoning",
    category: "bedroom",
    categoryLabel: "Bedroom",
    image: "/images/studio_hack.jpg",
    materials: "Slatted Oak Partition, Custom Built-in Banquette",
    lighting: "Track lights with narrow 15-degree beam angle",
    colorPalette: ["#EFECE6", "#D4C7B5", "#4A463F", "#B26A4A"],
    saves: "22.4K saves",
  },
];

type FilterCategory = "all" | "living" | "kitchen" | "bedroom" | "details";

export default function StyleShowcase() {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [selectedStyle, setSelectedStyle] = useState<StyleItem | null>(null);

  const filtered =
    filter === "all" ? STYLES : STYLES.filter((item) => item.category === filter);

  return (
    <section id="styles" className="py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B26A4A]/10 text-[#B26A4A] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Curated 2026 Trend Catalog
          </div>
          <h2 className="text-4xl sm:text-6xl font-editorial font-normal tracking-tight text-[#181615] leading-[1.15] mb-5">
            30+ Architectural Aesthetics, <span className="italic font-light">Rendered in 4K</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B645C] font-light leading-relaxed">
            Decorly doesn&apos;t apply flat filters. It calculates natural daylight angles, room geometry, and material depth to render spaces worthy of architectural editorials.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {[
            { id: "all", label: "All Spaces" },
            { id: "living", label: "Living Rooms" },
            { id: "kitchen", label: "Kitchens & Bars" },
            { id: "bedroom", label: "Primary Suites" },
            { id: "details", label: "Baths & Details" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as FilterCategory)}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                filter === cat.id
                  ? "bg-[#181615] text-[#FAF8F5] shadow-luxury-sm"
                  : "bg-white/80 text-[#6B645C] hover:text-[#181615] hover:bg-white border border-black/[0.05]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-[28px] overflow-hidden bg-white border border-black/[0.06] shadow-luxury-sm hover:shadow-luxury-lg transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => {
                trackStyleClick(item.title, item.categoryLabel);
                setSelectedStyle(item);
              }}
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE3D9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/85 via-[#181615]/15 to-transparent opacity-65 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Top Badges */}
                <div className="absolute top-4.5 right-4.5 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#181615] shadow-xs">
                  {item.saves}
                </div>
                <div className="absolute top-4.5 left-4.5 z-10 px-3 py-1 rounded-full bg-[#181615]/70 backdrop-blur-md text-[11px] font-medium text-[#FAF8F5]">
                  {item.categoryLabel}
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                  <h3 className="font-editorial text-2xl sm:text-[26px] font-medium leading-snug drop-shadow-sm mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#FAF8F5]/80">
                    <Eye className="w-3.5 h-3.5 text-[#B26A4A]" />
                    <span>View materials & lighting details</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#6B645C]">
                      Materials
                    </span>
                    <p className="text-xs text-[#181615] font-medium line-clamp-1 mt-0.5">
                      {item.materials}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#6B645C]">
                      Lighting Scheme
                    </span>
                    <p className="text-xs text-[#6B645C] line-clamp-1 mt-0.5">
                      {item.lighting}
                    </p>
                  </div>
                </div>

                {/* Swatches & CTA */}
                <div className="flex items-center justify-between pt-3.5 border-t border-black/[0.05]">
                  <div className="flex items-center gap-1.5">
                    {item.colorPalette.map((color, cIdx) => (
                      <span
                        key={cIdx}
                        className="w-4.5 h-4.5 rounded-full border border-black/10 shadow-xs"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#B26A4A] group-hover:translate-x-1 transition-transform">
                    Apply look <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Dialog */}
        {selectedStyle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedStyle(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-white rounded-[32px] overflow-hidden shadow-luxury-xl border border-black/[0.08] p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-[#EAE3D9]">
                <Image
                  src={selectedStyle.image}
                  alt={selectedStyle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B26A4A]">
                    {selectedStyle.categoryLabel}
                  </span>
                  <h3 className="font-editorial text-3xl font-medium text-[#181615] mt-0.5">
                    {selectedStyle.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStyle(null)}
                  className="p-2 rounded-full bg-black/5 hover:bg-black/10 text-[#181615] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-black/[0.06] text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-[#181615]">Materials & Finishes:</span>
                  <p className="text-[#6B645C] mt-1">{selectedStyle.materials}</p>
                </div>
                <div>
                  <span className="font-semibold text-[#181615]">Lighting Profile:</span>
                  <p className="text-[#6B645C] mt-1">{selectedStyle.lighting}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-medium text-[#6B645C]">Color Palette:</span>
                  <div className="flex items-center gap-1.5">
                    {selectedStyle.colorPalette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-5 h-5 rounded-full border border-black/10"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                <a
                  href="#waitlist"
                  onClick={() => setSelectedStyle(null)}
                  className="w-full sm:w-auto px-7 py-2.5 rounded-full bg-[#181615] text-[#FAF8F5] text-xs sm:text-sm font-semibold hover:bg-[#B26A4A] transition-colors text-center"
                >
                  Apply in Decorly App
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
