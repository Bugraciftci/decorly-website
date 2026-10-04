import Image from "next/image";
import {
  Sparkles,
  Camera,
  Layers,
  ShoppingBag,
  Sliders,
  Star,
  ArrowRight,
  Apple,
} from "lucide-react";
import Navbar from "./components/Navbar";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import StyleShowcase from "./components/StyleShowcase";
import ShoppableDupes from "./components/ShoppableDupes";
import FAQAccordion from "./components/FAQAccordion";
import Footer from "./components/Footer";
import WaitlistForm from "./components/WaitlistForm";
import AdBanner from "./components/AdBanner";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-24 sm:pt-28">
        {/* ================= HERO SECTION (VISUAL FIRST, INSTANT CLARITY) ================= */}
        <section className="relative pt-6 pb-20 sm:pt-10 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5F1EA]/30 to-[#FAF8F5]">
          {/* Subtle ambient lighting glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#B26A4A]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Value Proposition Badge */}
            <div className="flex justify-center mb-6">
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2.5 px-4.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.06] shadow-luxury-sm text-xs font-medium text-[#181615] hover:border-[#B26A4A]/30 transition-all group"
              >
                <span className="flex h-2 w-2 rounded-full bg-[#B26A4A] animate-pulse" />
                <span className="text-[#6B645C]">Spatial AI Room Makeover • iOS 17+ & iPadOS</span>
                <span className="text-[#B26A4A] font-semibold flex items-center group-hover:translate-x-0.5 transition-transform">
                  Free VIP Beta <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </a>
            </div>

            {/* Razor-Clear Main Headline */}
            <div className="text-center max-w-4xl mx-auto mb-8">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#181615] leading-[1.1] mb-5">
                Snap your room. Watch AI redesign it in <span className="italic font-light">seconds</span>.
              </h1>
              <p className="text-base sm:text-lg text-[#6B645C] max-w-2xl mx-auto leading-relaxed font-light">
                Take a photo of any messy living room, outdated kitchen, or empty bedroom. Decorly preserves your real walls, windows, and layout while transforming furniture, lighting, and textures into bespoke Japandi and Quiet Luxury styles.
              </p>
            </div>

            {/* 3 Instant Visual Process Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 max-w-2xl mx-auto mb-10 text-xs font-medium text-[#181615]">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.06] shadow-luxury-sm">
                <Camera className="w-3.5 h-3.5 text-[#B26A4A]" />
                <span>1. Snap Photo (Preserves Layout)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.06] shadow-luxury-sm">
                <Sliders className="w-3.5 h-3.5 text-[#586551]" />
                <span>2. Pick 30+ Aesthetics</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-black/[0.06] shadow-luxury-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#B26A4A]" />
                <span>3. Instant 4K Render & Dupes</span>
              </div>
            </div>

            {/* THE VISUAL HERO: INTERACTIVE BEFORE & AFTER SLIDER (PROMINENT CENTERPIECE) */}
            <div id="before-after" className="mb-14 scroll-mt-28">
              <BeforeAfterSlider />
            </div>

            {/* Email Waitlist Capture & Early Access CTA */}
            <div id="waitlist" className="mb-12 scroll-mt-28">
              <div className="text-center mb-4">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B26A4A]">
                  Join The Private iOS TestFlight
                </span>
                <p className="text-xs text-[#6B645C] font-light mt-0.5">
                  Get instant access on your iPhone or iPad. Includes 50 free 4K room makeovers.
                </p>
              </div>
              <WaitlistForm variant="hero" />
            </div>

            {/* Social Proof Metric Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8 border-t border-black/[0.06] text-center">
              <div>
                <p className="font-editorial text-3xl sm:text-4xl font-normal text-[#181615]">
                  90K+
                </p>
                <p className="text-xs text-[#6B645C] font-medium mt-1">
                  Monthly Pinterest Views
                </p>
              </div>
              <div>
                <p className="font-editorial text-3xl sm:text-4xl font-normal text-[#181615]">
                  30+
                </p>
                <p className="text-xs text-[#6B645C] font-medium mt-1">
                  Curated Design Aesthetics
                </p>
              </div>
              <div>
                <p className="font-editorial text-3xl sm:text-4xl font-normal text-[#181615] flex items-center justify-center gap-1.5">
                  4.9 <Star className="w-4 h-4 fill-[#B26A4A] text-[#B26A4A]" />
                </p>
                <p className="text-xs text-[#6B645C] font-medium mt-1">
                  Early Tester Satisfaction
                </p>
              </div>
              <div>
                <p className="font-editorial text-3xl sm:text-4xl font-normal text-[#181615]">
                  4K
                </p>
                <p className="text-xs text-[#6B645C] font-medium mt-1">
                  Ultra-HD Neural Renders
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PINTEREST INTEGRATION STRIP ================= */}
        <section className="py-12 bg-[#181615] text-[#FAF8F5] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E60023] flex items-center justify-center font-bold text-xl text-white shadow-luxury-md shrink-0">
                  P
                </div>
                <div>
                  <h3 className="font-editorial text-2xl font-medium text-white">
                    Joined Us From Pinterest?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FAF8F5]/70 font-light mt-0.5">
                    Over 358+ curated interior boards and 90K+ monthly home renovators. Decorly is the AI engine behind the pins.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="https://pinterest.com/decorlydesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#FAF8F5] text-[#181615] text-xs font-semibold hover:bg-white transition-colors"
                >
                  Follow @decorlydesign
                </a>
                <a
                  href="#waitlist"
                  className="px-6 py-2.5 rounded-full bg-[#B26A4A] text-white text-xs font-semibold hover:bg-[#985538] transition-colors"
                >
                  Get VIP Beta
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 3-STEP PROCESS ================= */}
        <section id="how-it-works" className="py-24 bg-[#F5F1EA]/40 border-y border-black/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B26A4A]/10 text-[#B26A4A] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
                <Sliders className="w-3.5 h-3.5" />
                Three Simple Steps
              </div>
              <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-[#181615] tracking-tight leading-[1.15] mb-4">
                From Camera Roll to <span className="italic font-light">Sanctuary</span>
              </h2>
              <p className="text-base sm:text-lg text-[#6B645C] font-light">
                No complex 3D software or expensive architectural consultation fees required.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-[32px] p-8 border border-black/[0.06] shadow-luxury-sm hover:shadow-luxury-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#B26A4A]/10 text-[#B26A4A] flex items-center justify-center mb-6">
                  <Camera className="w-6 h-6" />
                </div>
                <span className="font-editorial text-xs uppercase tracking-[0.2em] text-[#B26A4A] font-semibold">
                  Step 01
                </span>
                <h3 className="font-editorial text-2xl font-medium text-[#181615] mt-1 mb-3">
                  Snap Your Space
                </h3>
                <p className="text-sm text-[#6B645C] leading-relaxed font-light">
                  Take a photo of your living room, outdated kitchen, or empty bedroom directly inside the Decorly iOS app.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-[32px] p-8 border border-black/[0.06] shadow-luxury-sm hover:shadow-luxury-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#586551]/10 text-[#586551] flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="font-editorial text-xs uppercase tracking-[0.2em] text-[#586551] font-semibold">
                  Step 02
                </span>
                <h3 className="font-editorial text-2xl font-medium text-[#181615] mt-1 mb-3">
                  Pick Your Aesthetic
                </h3>
                <p className="text-sm text-[#6B645C] leading-relaxed font-light">
                  Choose from Japandi, Quiet Luxury, Limewash, or Wabi-Sabi. Adjust prompt sliders for lighting and textures.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-[32px] p-8 border border-black/[0.06] shadow-luxury-sm hover:shadow-luxury-md transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-[#B26A4A]/10 text-[#B26A4A] flex items-center justify-center mb-6">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="font-editorial text-xs uppercase tracking-[0.2em] text-[#B26A4A] font-semibold">
                  Step 03
                </span>
                <h3 className="font-editorial text-2xl font-medium text-[#181615] mt-1 mb-3">
                  Export & Shop Dupes
                </h3>
                <p className="text-sm text-[#6B645C] leading-relaxed font-light">
                  Export 4K renders for your contractor, complete with direct links to budget-conscious furniture dupes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2026 STYLE SHOWCASE ================= */}
        <StyleShowcase />

        {/* ================= SHOPPABLE FURNITURE DUPES ================= */}
        <ShoppableDupes />

        {/* ================= IPHONE APP SHOWCASE ================= */}
        <section className="py-24 bg-[#FAF8F5] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 text-[#181615] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4">
                <Apple className="w-3.5 h-3.5" />
                Designed For iOS 17+ & iPadOS
              </div>
              <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-[#181615] tracking-tight leading-[1.15] mb-4">
                Native Swift & <span className="italic font-light">Metal Precision</span>
              </h2>
              <p className="text-base sm:text-lg text-[#6B645C] font-light">
                Neural engine acceleration, Apple Pencil room markup support, and fluid Apple Human Interface design.
              </p>
            </div>

            {/* Screenshots Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              {[
                {
                  src: "/images/screenshots/01.png",
                  title: "Instant Room Capture",
                  subtitle: "Live camera spatial dimension scanning",
                },
                {
                  src: "/images/screenshots/03.png",
                  title: "Aesthetic Customizer",
                  subtitle: "Fine-tune daylight, stone & joinery",
                },
                {
                  src: "/images/screenshots/05.png",
                  title: "4K Neural Gallery",
                  subtitle: "Save & compare multiple variations",
                },
                {
                  src: "/images/screenshots/04.png",
                  title: "Furniture Matcher",
                  subtitle: "Tap any item to reveal budget dupes",
                },
              ].map((screen, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-[28px] overflow-hidden bg-white border border-black/[0.06] shadow-luxury-sm hover:shadow-luxury-md transition-all duration-300 p-3"
                >
                  <div className="relative aspect-[9/19] rounded-2xl overflow-hidden bg-[#EAE3D9]">
                    <Image
                      src={screen.src}
                      alt={screen.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h4 className="font-editorial text-lg font-medium text-[#181615]">
                      {screen.title}
                    </h4>
                    <p className="text-[11px] text-[#6B645C] font-light mt-0.5">
                      {screen.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial In-Feed Sponsor Placement (Subtle, discreet) */}
        <div className="max-w-5xl mx-auto px-4 my-8">
          <AdBanner type="leaderboard" adSlotId="decorly-leaderboard-1" />
        </div>

        {/* ================= TESTIMONIALS ================= */}
        <section className="py-24 bg-[#F5F1EA]/40 border-t border-black/[0.05]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-[#181615] tracking-tight mb-3">
                Loved by Interior Designers & Homeowners
              </h2>
              <div className="flex items-center justify-center gap-1.5 text-[#B26A4A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B26A4A]" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Decorly saved us at least $4,000 in interior consultation fees. Being able to show my contractor the exact limewash fireplace and fluted timber wall render made all the difference.",
                  author: "Elena Rostova",
                  role: "Homeowner & Renovator (Austin, TX)",
                },
                {
                  quote:
                    "I run an interior moodboard page on Pinterest. When I tested Decorly on my old rental living room, the Japandi result looked so real my followers thought I moved into an architectural loft.",
                  author: "Marcus Vance",
                  role: "Design Content Creator (London)",
                },
                {
                  quote:
                    "The shoppable dupe feature is genius. It recommended an exact bouclé curved sofa match for $890 instead of the $4,500 designer original. The quality is phenomenal.",
                  author: "Chloe Dubois",
                  role: "Interior Stylist (Montreal)",
                },
              ].map((testi, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[32px] p-8 border border-black/[0.06] shadow-luxury-sm flex flex-col justify-between"
                >
                  <p className="font-editorial text-lg sm:text-xl text-[#6B645C] leading-relaxed italic mb-6 font-light">
                    &quot;{testi.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-black/[0.05]">
                    <div className="w-10 h-10 rounded-full bg-[#181615] text-[#FAF8F5] flex items-center justify-center font-bold text-xs">
                      {testi.author[0]}
                    </div>
                    <div>
                      <p className="font-editorial text-base font-medium text-[#181615]">
                        {testi.author}
                      </p>
                      <p className="text-xs text-[#6B645C]">{testi.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <FAQAccordion />

        {/* ================= FINAL VIP BETA CALL TO ACTION ================= */}
        <section className="py-24 bg-[#181615] text-[#FAF8F5] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#B26A4A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] mb-5 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#B26A4A]" />
              Limited TestFlight Beta Slots
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-editorial font-normal tracking-tight mb-6 leading-[1.12]">
              Step into the home you&apos;ve <span className="italic font-light text-[#EAE3D9]">always imagined</span>.
            </h2>

            <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-xl mx-auto mb-10 leading-relaxed font-light">
              Join thousands of design lovers. Enter your email to claim your VIP TestFlight invite and unlock 50 complimentary 4K AI room renders.
            </p>

            <div className="max-w-md mx-auto mb-6">
              <WaitlistForm variant="card" />
            </div>

            <p className="text-xs text-[#FAF8F5]/50">
              Compatible with iPhone & iPad running iOS 17+. Zero spam, unsubscribe anytime.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
