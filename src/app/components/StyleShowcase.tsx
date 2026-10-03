"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, Eye } from "lucide-react";

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
    colorPalette: ["#E8E2D8", "#C5BCB2", "#FAF8F5", "#1C1917"],
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
    colorPalette: ["#FAF8F5", "#E8E2D8", "#B5AAA0", "#57534E"],
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
    colorPalette: ["#231F1C", "#D4A373", "#FAF8F5", "#B86246"],
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
    colorPalette: ["#E7DFD5", "#C4A482", "#B86246", "#FAF8F5"],
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
    colorPalette: ["#FAF8F5", "#D5CEBF", "#8C8275", "#1C1917"],
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
    colorPalette: ["#EFECE6", "#D4C7B5", "#4A463F", "#B86246"],
    saves: "22.4K saves",
  },
];

type FilterCategory = "all" | "living" | "kitchen" | "bedroom" | "details";

export default function StyleShowcase() {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [selectedStyle, setSelectedStyle] = useState<StyleItem | null>(null);

  const filtered =
    filter === "all"
      ? STYLES
      : STYLES.filter((item) => item.category === filter);

  return (
    <section id="styles" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B86246]/10 text-[#B86246] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curated 2026 Trend Catalog
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
            30+ Architectural Aesthetics, One Tap Away
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            Decorly doesn&apos;t just slap generic filters. It analyzes structural ceiling beams, window orientation, and room depth to render authentic luxury materials.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                filter === cat.id
                  ? "bg-[#1C1917] text-[#FAF8F5] shadow-md shadow-[#1C1917]/10"
                  : "bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EFEA] border border-[#1C1917]/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#1C1917]/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => setSelectedStyle(item)}
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E8E2D8]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-[#1C1917]/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Saves badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-[#1C1917] border border-[#1C1917]/10 shadow-sm">
                  {item.saves}
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#1C1917]/70 backdrop-blur-md text-[11px] font-semibold text-[#FAF8F5]">
                  {item.categoryLabel}
                </div>

                {/* Bottom Overlay Info inside image */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <h3 className="font-serif text-xl font-bold leading-snug drop-shadow-sm mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-[#FAF8F5]/80">
                    <Eye className="w-3.5 h-3.5 text-[#B86246]" />
                    <span>Tap to view materials & lighting</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 bg-white">
                <div className="space-y-2 mb-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#57534E]">
                      Key Materials
                    </span>
                    <p className="text-xs text-[#1C1917] font-medium line-clamp-1">
                      {item.materials}
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#57534E]">
                      Lighting Scheme
                    </span>
                    <p className="text-xs text-[#57534E] line-clamp-1">
                      {item.lighting}
                    </p>
                  </div>
                </div>

                {/* Color swatches */}
                <div className="flex items-center justify-between pt-3 border-t border-[#1C1917]/8">
                  <div className="flex items-center gap-1.5">
                    {item.colorPalette.map((color, cIdx) => (
                      <span
                        key={cIdx}
                        className="w-4 h-4 rounded-full border border-[#1C1917]/10 shadow-xs"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#B86246] group-hover:translate-x-0.5 transition-transform">
                    Restyle this <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Style Detail Modal */}
        {selectedStyle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedStyle(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#1C1917]/10 p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-[#E8E2D8]">
                <Image
                  src={selectedStyle.image}
                  alt={selectedStyle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#B86246]">
                    {selectedStyle.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    {selectedStyle.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStyle(null)}
                  className="p-2 rounded-full bg-[#F3EFEA] hover:bg-[#E8E2D8] text-[#1C1917] transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#1C1917]/8 text-xs sm:text-sm">
                <div>
                  <span className="font-bold text-[#1C1917]">Materials & Finishes:</span>
                  <p className="text-[#57534E] mt-0.5">{selectedStyle.materials}</p>
                </div>
                <div>
                  <span className="font-bold text-[#1C1917]">Lighting Profile:</span>
                  <p className="text-[#57534E] mt-0.5">{selectedStyle.lighting}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-[#57534E]">Palette:</span>
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
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-xs sm:text-sm font-semibold hover:bg-[#B86246] transition-colors text-center"
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
