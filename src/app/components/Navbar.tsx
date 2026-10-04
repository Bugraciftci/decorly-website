"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles, Apple } from "lucide-react";
import LiveStats from "./LiveStats";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-5 sm:px-6 h-16 sm:h-18 rounded-full transition-all duration-500 ${
            scrolled
              ? "bg-[#FAF8F5]/85 backdrop-blur-2xl border border-black/[0.06] shadow-luxury-md"
              : "bg-white/70 backdrop-blur-xl border border-black/[0.04] shadow-luxury-sm"
          }`}
        >
          {/* Brand Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl overflow-hidden shadow-xs border border-black/[0.08] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/app-icon.png"
                alt="Decorly"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-[#181615] leading-none">
                Decorly
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#B26A4A] mt-1">
                Spatial Interior AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide text-[#6B645C]">
            <Link
              href="/app"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181615]/5 hover:bg-[#B26A4A]/10 text-[#181615] hover:text-[#B26A4A] transition-all font-semibold group"
            >
              <Apple className="w-3.5 h-3.5 text-[#181615] group-hover:text-[#B26A4A]" />
              <span>iOS App</span>
              <span className="text-[10px] bg-[#B26A4A] text-white px-1.5 py-0.2 rounded-full font-bold">Beta</span>
            </Link>
            <Link
              href="/#before-after"
              className="hover:text-[#181615] transition-colors"
            >
              Before & After
            </Link>
            <Link
              href="/#styles"
              className="hover:text-[#181615] transition-colors"
            >
              2026 Collection
            </Link>
            <Link
              href="/#how-it-works"
              className="hover:text-[#181615] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#shoppable-dupes"
              className="hover:text-[#181615] transition-colors"
            >
              Designer Dupes
            </Link>
            <a
              href="https://pinterest.com/decorlydesign"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#B26A4A] transition-colors"
            >
              <span>Pinterest</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
            <Link
              href="/#faq"
              className="hover:text-[#181615] transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Action CTA & Stats */}
          <div className="hidden sm:flex items-center gap-2.5">
            <LiveStats />
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181615] text-[#FAF8F5] text-xs font-semibold hover:bg-[#B26A4A] transition-all duration-300 shadow-luxury-sm hover:shadow-luxury-md cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EAE3D9]" />
              <span>Get VIP Beta</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#181615] hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-2 p-6 rounded-3xl bg-[#FAF8F5]/95 backdrop-blur-2xl border border-black/[0.08] shadow-luxury-xl space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#181615]">
            <Link
              href="/app"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 text-[#181615] font-semibold hover:text-[#B26A4A] transition-colors bg-[#181615]/5 px-3 rounded-2xl"
            >
              <span className="flex items-center gap-2">
                <Apple className="w-4 h-4 text-[#181615]" />
                <span>iOS App & TestFlight</span>
              </span>
              <span className="text-[10px] bg-[#B26A4A] text-white px-2 py-0.5 rounded-full font-bold">VIP Beta</span>
            </Link>
            <Link
              href="/#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#B26A4A] transition-colors"
            >
              Before & After
            </Link>
            <Link
              href="#styles"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#B26A4A] transition-colors"
            >
              2026 Collection
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#B26A4A] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#shoppable-dupes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#B26A4A] transition-colors"
            >
              Designer Dupes
            </Link>
            <a
              href="https://pinterest.com/decorlydesign"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-1.5 hover:text-[#B26A4A] transition-colors"
            >
              <span>Pinterest (@decorlydesign)</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-[#B26A4A] transition-colors"
            >
              FAQ
            </Link>
          </nav>

          <div className="pt-3 border-t border-black/[0.06] flex flex-col gap-2.5">
            <div className="flex justify-center">
              <LiveStats />
            </div>
            <a
              href="#waitlist"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#181615] text-[#FAF8F5] text-xs font-semibold hover:bg-[#B26A4A] transition-colors shadow-luxury-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EAE3D9]" />
              <span>Get VIP Beta</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
