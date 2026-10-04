import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Apple,
  Camera,
  Layers,
  Sparkles,
  ShoppingBag,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Sliders,
  Star,
  Download,
  Info,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WaitlistForm from "../components/WaitlistForm";

export const metadata: Metadata = {
  title: "Decorly for iOS — AI Interior Design App for iPhone & iPad",
  description:
    "Turn your iPhone camera into an architectural interior designer. Point, snap, and watch AI remodel your living room, kitchen, or bedroom in 4K with Apple Neural Engine acceleration.",
  openGraph: {
    title: "Decorly for iOS — AI Interior Design in Your Pocket",
    description:
      "Transform any messy room into Japandi or Quiet Luxury spaces in seconds on iOS 17+. Join the TestFlight VIP Beta.",
    images: ["/images/mockup.png"],
  },
};

export default function AppLandingPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24 sm:pt-28 bg-[#FAF8F5]">
        {/* ================= HERO: APPLE PRODUCT SHOWCASE ================= */}
        <section className="relative pt-8 pb-20 sm:pt-14 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5F1EA]/50 to-[#FAF8F5]">
          {/* Ambient Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#B26A4A]/8 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Top iOS Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-luxury-sm text-xs font-semibold text-[#181615]">
                <Apple className="w-3.5 h-3.5 text-[#181615]" />
                <span className="text-[#6B645C]">Designed for iOS 17+ & iPadOS</span>
                <span className="w-1 h-1 rounded-full bg-[#B26A4A]" />
                <span className="text-[#B26A4A]">TestFlight VIP Beta</span>
              </div>
            </div>

            {/* Headline */}
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#181615] leading-[1.08] mb-5">
                Spatial AI Interior Design. <br className="hidden sm:inline" />
                In Your <span className="text-[#B26A4A]">Pocket</span>.
              </h1>
              <p className="text-base sm:text-lg text-[#6B645C] max-w-2xl mx-auto leading-relaxed font-normal">
                No tape measure. No 3D modeling skills. Simply open Decorly on your iPhone, capture your space, and watch Apple Neural Engine render bespoke Japandi, Wabi-Sabi, and Quiet Luxury rooms in true 4K photorealism.
              </p>
            </div>

            {/* Main Action Hub: Form & Direct Status */}
            <div className="max-w-xl mx-auto mb-16 text-center">
              <div className="p-6 sm:p-8 rounded-[32px] bg-white border border-black/[0.08] shadow-luxury-md mb-6">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#B26A4A] block mb-2">
                  Claim Your TestFlight Beta Slot
                </span>
                <p className="text-xs sm:text-sm text-[#6B645C] font-normal mb-5">
                  Enter your email to receive an instant Apple TestFlight invitation link. Includes 50 complimentary 4K AI room makeovers.
                </p>
                <WaitlistForm variant="hero" />
              </div>

              {/* Status Note */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#6B645C]">
                <span className="flex items-center gap-1.5 font-medium text-[#181615]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> App Store Build v1.0
                </span>
                <span className="w-1 h-1 rounded-full bg-black/20" />
                <span className="flex items-center gap-1.5 font-medium text-[#181615]">
                  <Smartphone className="w-3.5 h-3.5 text-[#B26A4A]" /> iPhone 12 to 16 Pro & iPad
                </span>
                <span className="w-1 h-1 rounded-full bg-black/20" />
                <span>Zero Subscription Required</span>
              </div>
            </div>

            {/* Centerpiece Visual: Phone Mockup & Gallery */}
            <div className="relative max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Left Card: Camera Scan */}
                <div className="rounded-[28px] bg-white p-6 border border-black/[0.06] shadow-luxury-sm space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#B26A4A]/10 text-[#B26A4A] flex items-center justify-center">
                    <Camera className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[#181615]">
                    Real Room Architecture
                  </h3>
                  <p className="text-xs text-[#6B645C] leading-relaxed font-normal">
                    Preserves your authentic floor plan, ceiling beam angles, windows, and doors. AI only remodels furniture, paint, finishes, and lighting.
                  </p>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAE3D9]">
                    <Image
                      src="/images/living_before.jpg"
                      alt="Before Room Scan"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-black/70 text-white text-[10px] font-semibold">
                      Raw Camera Feed
                    </div>
                  </div>
                </div>

                {/* Center Card: High-Impact iPhone Mockup */}
                <div className="relative flex justify-center py-4">
                  <div className="relative w-[280px] sm:w-[320px] aspect-[1/2] rounded-[48px] bg-black p-3.5 shadow-luxury-xl border-[4px] border-[#383634] ring-1 ring-black/20">
                    {/* Dynamic Island */}
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-30" />
                    {/* Screen View */}
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-[#181615]">
                      <Image
                        src="/images/mockup.png"
                        alt="Decorly iPhone App Experience"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>

                {/* Right Card: 4K Neural Result */}
                <div className="rounded-[28px] bg-white p-6 border border-black/[0.06] shadow-luxury-sm space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#586551]/10 text-[#586551] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[#181615]">
                    Instant 4K Neural Render
                  </h3>
                  <p className="text-xs text-[#6B645C] leading-relaxed font-normal">
                    Calculated with Metal Shaders on Apple Silicon in seconds. Delivers ultra-high-resolution renders ready for contractors or moodboards.
                  </p>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAE3D9]">
                    <Image
                      src="/images/living_after.jpg"
                      alt="After Japandi Remodel"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#B26A4A] text-white text-[10px] font-semibold">
                      Decorly AI Result
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3-STEP TESTFLIGHT HOW-IT-WORKS ================= */}
        <section className="py-20 bg-white border-y border-black/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B26A4A]/10 text-[#B26A4A] text-[11px] font-bold uppercase tracking-wider mb-3">
                <Info className="w-3.5 h-3.5" /> Simple 3-Step Beta Access
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#181615] mb-3">
                How to Test Decorly on Your iPhone
              </h2>
              <p className="text-sm sm:text-base text-[#6B645C] font-normal">
                Apple TestFlight is the official, secure way to preview pre-release iOS apps directly from developers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Step 1 */}
              <div className="p-7 rounded-[28px] bg-[#FAF8F5] border border-black/[0.06] shadow-luxury-sm">
                <div className="w-10 h-10 rounded-full bg-[#181615] text-[#FAF8F5] font-bold text-sm flex items-center justify-center mb-5">
                  1
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#181615] mb-2">
                  Submit Your Email
                </h3>
                <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed font-normal">
                  Put your email in the waitlist above. Our automated edge server registers your Apple ID for the VIP Beta pool.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-7 rounded-[28px] bg-[#FAF8F5] border border-black/[0.06] shadow-luxury-sm">
                <div className="w-10 h-10 rounded-full bg-[#B26A4A] text-white font-bold text-sm flex items-center justify-center mb-5">
                  2
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#181615] mb-2">
                  Open Apple TestFlight
                </h3>
                <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed font-normal">
                  Tap the invitation link sent to your email or install TestFlight free from the App Store on your iPhone or iPad.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-7 rounded-[28px] bg-[#FAF8F5] border border-black/[0.06] shadow-luxury-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center mb-5">
                  3
                </div>
                <h3 className="text-lg font-bold tracking-tight text-[#181615] mb-2">
                  Start Redesigning
                </h3>
                <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed font-normal">
                  Launch Decorly, snap any room in your home, and unlock 50 complimentary 4K renders with shoppable dupes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BENTO GRID: NATIVE IOS CAPABILITIES ================= */}
        <section className="py-24 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 text-[#181615] text-[11px] font-bold uppercase tracking-wider mb-3">
                <Cpu className="w-3.5 h-3.5 text-[#B26A4A]" /> Built Strictly for Apple Hardware
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#181615] mb-4">
                Engineered for Apple Silicon & Swift
              </h2>
              <p className="text-base text-[#6B645C] font-normal">
                Decorly isn&apos;t a sluggish web wrapper. It is a native iOS application built with Swift and Metal precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="p-8 rounded-[32px] bg-white border border-black/[0.06] shadow-luxury-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#B26A4A]/10 text-[#B26A4A] flex items-center justify-center mb-5">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#181615] mb-2">
                  Spatial Geometry Awareness
                </h3>
                <p className="text-sm text-[#6B645C] leading-relaxed font-normal">
                  Detects room bounds, windows, door frames, and natural daylight sources automatically so generated remodels actually fit your room.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 rounded-[32px] bg-white border border-black/[0.06] shadow-luxury-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#586551]/10 text-[#586551] flex items-center justify-center mb-5">
                  <Sliders className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#181615] mb-2">
                  30+ Architectural Presets
                </h3>
                <p className="text-sm text-[#6B645C] leading-relaxed font-normal">
                  Curated aesthetics including Japandi, Organic Modern, Wabi-Sabi, Nordic Minimalism, Mediterranean Villa, and Industrial Loft.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 rounded-[32px] bg-white border border-black/[0.06] shadow-luxury-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#B26A4A]/10 text-[#B26A4A] flex items-center justify-center mb-5">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#181615] mb-2">
                  Shoppable Dupe Radar
                </h3>
                <p className="text-sm text-[#6B645C] leading-relaxed font-normal">
                  Tap on any AI sofa, coffee table, or pendant lamp to reveal verified retail dupes from IKEA, CB2, Target, and West Elm.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-8 rounded-[32px] bg-white border border-black/[0.06] shadow-luxury-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#181615]/5 text-[#181615] flex items-center justify-center mb-5">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#181615] mb-2">
                  Metal Shading Physics
                </h3>
                <p className="text-sm text-[#6B645C] leading-relaxed font-normal">
                  Calculates ray reflections, limewash plaster bump textures, and 2700K warm artificial light falloff with realistic depth.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-8 rounded-[32px] bg-white border border-black/[0.06] shadow-luxury-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#B26A4A]/10 text-[#B26A4A] flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#181615] mb-2">
                  iPad & Apple Pencil Support
                </h3>
                <p className="text-sm text-[#6B645C] leading-relaxed font-normal">
                  Draw custom zones directly on your room photos using Apple Pencil. Change only the kitchen island or living room accent wall.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-8 rounded-[32px] bg-white border border-black/[0.06] shadow-luxury-sm">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 text-emerald-600 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-[#181615] mb-2">
                  Zero Data Selling & Privacy
                </h3>
                <p className="text-sm text-[#6B645C] leading-relaxed font-normal">
                  Your home photos are encrypted in transit. We never sell your interior images or share them with third-party advertisers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SCREENSHOTS SHOWCASE ================= */}
        <section className="py-20 bg-white border-t border-black/[0.06]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#181615] mb-3">
                A Look Inside the App
              </h2>
              <p className="text-sm sm:text-base text-[#6B645C]">
                Designed in strict alignment with Apple Human Interface Guidelines.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { src: "/images/screenshots/01.png", title: "Room Capture" },
                { src: "/images/screenshots/03.png", title: "Style Selector" },
                { src: "/images/screenshots/05.png", title: "4K Gallery" },
                { src: "/images/screenshots/04.png", title: "Dupe Radar" },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="rounded-[28px] overflow-hidden bg-[#FAF8F5] p-3 border border-black/[0.06] shadow-luxury-sm text-center"
                >
                  <div className="relative aspect-[9/19] rounded-2xl overflow-hidden bg-[#EAE3D9] mb-3">
                    <Image
                      src={s.src}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-sm font-bold tracking-tight text-[#181615]">
                    {s.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ FOR IOS APP ================= */}
        <section className="py-20 bg-[#FAF8F5] border-t border-black/[0.06]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#181615] mb-2">
                Frequently Asked iOS Questions
              </h2>
              <p className="text-sm text-[#6B645C]">
                Answers regarding TestFlight, device support, and full App Store release.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Which iPhone models are supported?",
                  a: "Decorly supports all iPhones running iOS 17.0 or later, including iPhone 12, 13, 14, 15, and 16 series. iPads with iPadOS 17+ and Apple Pencil are also fully supported.",
                },
                {
                  q: "What is the difference between TestFlight and App Store?",
                  a: "TestFlight allows you to download and use Decorly immediately while our public App Store version completes Apple's final store listing review. It is 100% free and managed by Apple.",
                },
                {
                  q: "Do I get free room redesigns?",
                  a: "Yes! Every user who joins our private VIP TestFlight receives 50 free 4K AI room renders to redesign bedrooms, living rooms, kitchens, or home offices.",
                },
                {
                  q: "Will my saved designs sync when the App Store version launches?",
                  a: "Yes. Your generated render gallery and favorited furniture dupes will automatically transfer to the official App Store release.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-[24px] bg-white border border-black/[0.06] shadow-luxury-sm"
                >
                  <h3 className="text-base font-bold tracking-tight text-[#181615] mb-2">
                    {item.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B645C] leading-relaxed font-normal">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="py-20 bg-[#181615] text-[#FAF8F5] text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider mb-5">
              <Apple className="w-3.5 h-3.5" /> Early Access Open
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Ready to Redesign Your Home in Seconds?
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F5]/80 max-w-xl mx-auto mb-8 font-normal">
              Enter your email to claim your VIP invitation and start remodeling with 50 free 4K renders.
            </p>
            <div className="max-w-md mx-auto">
              <WaitlistForm variant="card" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
