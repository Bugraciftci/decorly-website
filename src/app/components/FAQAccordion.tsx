"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How does Decorly differ from generic AI image generators?",
    answer:
      "Most AI image generators hallucinate random rooms that don't match your space. Decorly uses proprietary depth-aware spatial segmentation trained specifically on architectural standards. It locks in your room's real windows, doorways, floor dimensions, and ceiling angles while intelligently replacing wall finishes, flooring, lighting fixtures, and furniture with physically realistic materials.",
  },
  {
    question: "Does it work for rental apartments or cosmetic-only refreshes?",
    answer:
      "Yes! Decorly offers a dedicated 'Cosmetic / Rental-Friendly' mode. This preserves existing cabinetry, flooring, and wall layout, focusing purely on non-permanent upgrades: area rugs, peel-and-stick lime plaster wallpapers, lighting sconces, acoustic slat panels, and modular furniture layouts.",
  },
  {
    question: "How many styles and aesthetics are available?",
    answer:
      "Decorly comes with over 30 architect-curated styles updated weekly based on Pinterest and design editorial trends. Top styles include Japandi, Quiet Luxury, Wabi-Sabi, Organic Modern, Mid-Century Minimal, Mediterranean Villa, and Concealed Speakeasy.",
  },
  {
    question: "Can I find where to buy the furniture shown in my render?",
    answer:
      "Absolutely. Decorly's AI Vision matcher breaks down each generated room into identifiable furniture items, finishes, and light fixtures. It cross-references catalog databases across hundreds of home retailers to suggest affordable dupes and designer alternatives matching your budget.",
  },
  {
    question: "How can I join the iOS TestFlight Beta?",
    answer:
      "Enter your email in the waitlist box above. We are rolling out private TestFlight beta invites in batches. Beta testers receive 50 complimentary 4K ultra-high-resolution renders, direct access to the interior designer feedback channel, and priority access to new seasonal style drops.",
  },
  {
    question: "Will Decorly support iPad and Mac?",
    answer:
      "Yes. Decorly is built natively with SwiftUI for iOS and iPadOS, taking full advantage of Apple Silicon neural engines for rapid on-device previewing, Apple Pencil annotations, and Stage Manager multitasking on iPad.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B86246]/10 text-[#B86246] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1917] tracking-tight mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            Have questions about how Decorly transforms your space? Here are the most common inquiries from our design community.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#1C1917]/10 overflow-hidden shadow-xs transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#FAF8F5]/60 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1C1917]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#1C1917]/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#1C1917] text-white" : "text-[#1C1917]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#57534E] leading-relaxed border-t border-[#1C1917]/5 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
