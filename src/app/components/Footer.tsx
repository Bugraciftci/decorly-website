import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#181615] text-[#FAF8F5] pt-20 pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl overflow-hidden border border-white/20">
                <Image
                  src="/images/app-icon.png"
                  alt="Decorly Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-editorial text-3xl font-medium tracking-tight text-[#FAF8F5]">
                Decorly
              </span>
            </Link>
            <p className="text-sm text-[#FAF8F5]/70 max-w-sm leading-relaxed font-light">
              The AI spatial interior design studio that turns your iPhone into a world-class architectural designer. Re-imagine your living spaces with authentic textures, lighting physics, and budget-friendly furniture dupes.
            </p>
            <div className="pt-2">
              <a
                href="https://pinterest.com/decorlydesign"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E60023]/20 hover:bg-[#E60023]/30 text-[#FAF8F5] text-xs font-semibold transition-colors border border-[#E60023]/30"
              >
                <span className="w-2 h-2 rounded-full bg-[#E60023]" />
                <span>Follow @decorlydesign on Pinterest (90K+ Views)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B26A4A]">
              Aesthetics
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF8F5]/70 font-light">
              <li>
                <Link href="#styles" className="hover:text-white transition-colors">
                  Japandi & Zen
                </Link>
              </li>
              <li>
                <Link href="#styles" className="hover:text-white transition-colors">
                  Quiet Luxury
                </Link>
              </li>
              <li>
                <Link href="#styles" className="hover:text-white transition-colors">
                  Limewash & Plaster
                </Link>
              </li>
              <li>
                <Link href="#styles" className="hover:text-white transition-colors">
                  Wabi-Sabi Bathrooms
                </Link>
              </li>
              <li>
                <Link href="#styles" className="hover:text-white transition-colors">
                  Concealed Coffee Bars
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B26A4A]">
              Features
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF8F5]/70 font-light">
              <li>
                <Link href="#before-after" className="hover:text-white transition-colors">
                  Spatial Before & After
                </Link>
              </li>
              <li>
                <Link href="#shoppable-dupes" className="hover:text-white transition-colors">
                  AI Furniture Matcher
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  4K Architectural Export
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  FAQ & Support
                </Link>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-[#B26A4A]"
                >
                  <Sparkles className="w-3.5 h-3.5" /> TestFlight VIP
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & App Details */}
          <div className="space-y-3">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B26A4A]">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF8F5]/70 font-light">
              <li>iOS 17+ Native</li>
              <li>iPadOS Optimized</li>
              <li>Apple Silicon Accelerated</li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/50 font-light">
          <p>© {new Date().getFullYear()} Decorly. All rights reserved. Designed for iOS & iPadOS.</p>
          <div className="flex items-center gap-1 text-[#FAF8F5]/60">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#B26A4A] fill-[#B26A4A]" />
            <span>for architectural design enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
