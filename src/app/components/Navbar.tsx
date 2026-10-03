"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import LiveStats from "./LiveStats";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md shadow-[#1C1917]/10 border border-[#1C1917]/10 transition-transform group-hover:scale-105">
            <Image
              src="/images/app-icon.png"
              alt="Decorly App Icon"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917]">
              Decorly
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-widest text-[#B86246] -mt-1">
              AI Interior Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#57534E]">
          <Link
            href="#before-after"
            className="hover:text-[#1C1917] transition-colors"
          >
            Before & After
          </Link>
          <Link
            href="#styles"
            className="hover:text-[#1C1917] transition-colors"
          >
            2026 Aesthetics
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-[#1C1917] transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#shoppable-dupes"
            className="hover:text-[#1C1917] transition-colors"
          >
            Furniture Dupes
          </Link>
          <a
            href="https://pinterest.com/decorlydesign"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#B86246] transition-colors"
          >
            <span>Pinterest</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <Link
            href="#faq"
            className="hover:text-[#1C1917] transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <LiveStats />
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-xs font-semibold hover:bg-[#B86246] transition-all duration-300 shadow-md shadow-[#1C1917]/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E8E2D8]" />
            <span>Join TestFlight Beta</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#1C1917] hover:bg-[#F3EFEA] transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#1C1917]/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#1C1917]">
            <Link
              href="#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B86246]"
            >
              Before & After
            </Link>
            <Link
              href="#styles"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B86246]"
            >
              2026 Aesthetics
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B86246]"
            >
              How It Works
            </Link>
            <Link
              href="#shoppable-dupes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B86246]"
            >
              Furniture Dupes
            </Link>
            <a
              href="https://pinterest.com/decorlydesign"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-1 hover:text-[#B86246]"
            >
              <span>Pinterest (@decorlydesign)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#B86246]"
            >
              FAQ
            </Link>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <div className="flex justify-center pb-1">
              <LiveStats />
            </div>
            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#1C1917] text-[#FAF8F5] text-sm font-semibold hover:bg-[#B86246] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#E8E2D8]" />
              <span>Join TestFlight Beta</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
