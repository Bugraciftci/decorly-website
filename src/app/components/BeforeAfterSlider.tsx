"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal, Check } from "lucide-react";

interface RoomPair {
  id: string;
  name: string;
  style: string;
  before: string;
  after: string;
  tags: string[];
}

const ROOM_PAIRS: RoomPair[] = [
  {
    id: "living",
    name: "Living Room",
    style: "Japandi & Warm Roman Travertine",
    before: "/images/living_before.jpg",
    after: "/images/living_after.jpg",
    tags: ["Artisanal Limewash", "Curved Bouclé", "Fluted Oak"],
  },
  {
    id: "kitchen",
    name: "Chef's Kitchen",
    style: "Calacatta Gold & Stained Walnut",
    before: "/images/kitchen_before.jpg",
    after: "/images/kitchen_after.jpg",
    tags: ["Monolithic Island", "Concealed Storage", "Brushed Brass"],
  },
  {
    id: "bedroom",
    name: "Primary Suite",
    style: "Quiet Luxury Washed Linen Sanctuary",
    before: "/images/bedroom_before.jpg",
    after: "/images/bedroom_after.jpg",
    tags: ["Belgian Linens", "Ambient 2700K Sconces", "Organic Curves"],
  },
];

export default function BeforeAfterSlider() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeRoom = ROOM_PAIRS[selectedRoomIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMouseMove, handleEnd, handleTouchMove]);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Refined Room Selector Tabs */}
      <div className="flex items-center justify-center mb-8">
        <div className="inline-flex p-1.5 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.06] shadow-luxury-sm">
          {ROOM_PAIRS.map((room, idx) => {
            const isActive = idx === selectedRoomIndex;
            return (
              <button
                key={room.id}
                onClick={() => {
                  setSelectedRoomIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-5 sm:px-7 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#181615] text-[#FAF8F5] shadow-luxury-sm"
                    : "text-[#6B645C] hover:text-[#181615] hover:bg-black/[0.03]"
                }`}
              >
                {room.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Canvas */}
      <div className="relative rounded-[32px] overflow-hidden shadow-luxury-xl border border-black/[0.08] bg-[#EAE3D9]/40">
        <div
          ref={containerRef}
          className="relative w-full aspect-[4/3] sm:aspect-[16/10] select-none cursor-ew-resize overflow-hidden"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* AFTER Image (Full background) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={activeRoom.after}
              alt={`${activeRoom.name} redesign by Decorly AI`}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover"
            />
            {/* After Tag */}
            <div className="absolute top-5 right-5 z-10 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181615]/85 text-[#FAF8F5] backdrop-blur-xl text-xs font-medium tracking-wide shadow-luxury-md border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#B26A4A]" />
              <span>Decorly AI Redesign</span>
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div
              className="relative w-full h-full"
              style={{ width: containerRef.current?.clientWidth || "100%" }}
            >
              <Image
                src={activeRoom.before}
                alt={`${activeRoom.name} original space`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
                className="object-cover"
              />
              {/* Before Tag */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 text-[#181615] backdrop-blur-xl text-xs font-medium tracking-wide shadow-luxury-md border border-black/[0.08]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6B645C]" />
                <span>Original Space</span>
              </div>
            </div>
          </div>

          {/* Draggable Divider Line */}
          <div
            className="absolute top-0 bottom-0 z-20 w-0.5 bg-white cursor-ew-resize shadow-[0_0_16px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Slider Pill */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white/95 backdrop-blur-xl text-[#181615] shadow-luxury-lg flex items-center justify-center border border-black/[0.1] transition-transform active:scale-95 hover:scale-105">
              <MoveHorizontal className="w-4 h-4 text-[#B26A4A]" />
            </div>
          </div>
        </div>

        {/* Minimalist Caption Bar */}
        <div className="px-6 py-5 bg-white/90 backdrop-blur-xl border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#B26A4A]">
              Applied Architectural Palette
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-medium italic text-[#181615] mt-0.5">
              {activeRoom.style}
            </h3>
          </div>

          {/* Material Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {activeRoom.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-[#FAF8F5] text-[#6B645C] border border-black/[0.06] font-medium"
              >
                <Check className="w-3 h-3 text-[#B26A4A]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-[#6B645C] mt-4 flex items-center justify-center gap-2">
        <MoveHorizontal className="w-3.5 h-3.5 text-[#B26A4A]" />
        Drag divider to reveal lighting calculations, textures, and bespoke joinery
      </p>
    </div>
  );
}
