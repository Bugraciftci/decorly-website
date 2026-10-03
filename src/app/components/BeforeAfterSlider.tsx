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
    style: "Japandi & Warm Travertine",
    before: "/images/living_before.jpg",
    after: "/images/living_after.jpg",
    tags: ["Limewash Walls", "Bouclé Sofa", "Fluted Oak Accents"],
  },
  {
    id: "kitchen",
    name: "Modern Kitchen",
    style: "Calacatta Marble & Fluted Wood",
    before: "/images/kitchen_before.jpg",
    after: "/images/kitchen_after.jpg",
    tags: ["Monolithic Island", "Concealed Storage", "Brass Hardware"],
  },
  {
    id: "bedroom",
    name: "Primary Suite",
    style: "Quiet Luxury Linen Sanctuary",
    before: "/images/bedroom_before.jpg",
    after: "/images/bedroom_after.jpg",
    tags: ["Waffle Linens", "Ambient Sconces", "Organic Curves"],
  },
];

export default function BeforeAfterSlider() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeRoom = ROOM_PAIRS[selectedRoomIndex];

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    },
    []
  );

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
      {/* Room Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        {ROOM_PAIRS.map((room, idx) => {
          const isActive = idx === selectedRoomIndex;
          return (
            <button
              key={room.id}
              onClick={() => {
                setSelectedRoomIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#1C1917] text-[#FAF8F5] shadow-md shadow-[#1C1917]/10"
                  : "bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-[#F3EFEA] border border-[#1C1917]/10"
              }`}
            >
              {room.name}
            </button>
          );
        })}
      </div>

      {/* Main Interactive Comparison Container */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#1C1917]/10 bg-[#E8E2D8]/30">
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
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1C1917]/80 text-[#FAF8F5] backdrop-blur-md text-xs font-semibold tracking-wide uppercase shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#B86246]" />
              Decorly AI Redesign
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-full h-full" style={{ width: containerRef.current?.clientWidth || "100%" }}>
              <Image
                src={activeRoom.before}
                alt={`${activeRoom.name} original room`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
                className="object-cover"
              />
              {/* Before Tag */}
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-white/80 text-[#1C1917] backdrop-blur-md text-xs font-semibold tracking-wide uppercase shadow-lg border border-[#1C1917]/10">
                Original Room
              </div>
            </div>
          </div>

          {/* Draggable Divider Line */}
          <div
            className="absolute top-0 bottom-0 z-20 w-1 bg-white cursor-ew-resize shadow-[0_0_12px_rgba(0,0,0,0.4)]"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Center Slider Pill */}
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-[#1C1917] shadow-xl flex items-center justify-center border-2 border-[#1C1917]/10 transition-transform active:scale-95 hover:scale-105">
              <MoveHorizontal className="w-5 h-5 text-[#B86246]" />
            </div>
          </div>
        </div>

        {/* Caption & Style Info Strip */}
        <div className="p-4 sm:p-5 bg-white/95 backdrop-blur-md border-t border-[#1C1917]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-[#B86246]">
              Aesthetic Applied
            </span>
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#1C1917]">
              {activeRoom.style}
            </h3>
          </div>

          {/* Style Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {activeRoom.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-[#FAF8F5] text-[#57534E] border border-[#1C1917]/8 font-medium"
              >
                <Check className="w-3 h-3 text-[#B86246]" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-[#57534E] mt-3 flex items-center justify-center gap-1.5">
        <MoveHorizontal className="w-3.5 h-3.5 text-[#B86246]" />
        Drag slider left and right to inspect wall textures, architectural lighting, and furniture layout
      </p>
    </div>
  );
}
