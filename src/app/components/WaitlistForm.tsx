"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Apple } from "lucide-react";

interface WaitlistFormProps {
  variant?: "hero" | "card";
}

export default function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if already submitted in this browser
    const stored = localStorage.getItem("decorly_waitlist_email");
    if (stored) {
      setEmail(stored);
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      // Save locally
      localStorage.setItem("decorly_waitlist_email", email);

      // Post to local storage or API endpoint
      await new Promise((resolve) => setTimeout(resolve, 600));

      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl bg-white/90 border border-[#B86246]/20 p-5 sm:p-6 text-center shadow-lg shadow-[#1C1917]/5 max-w-md mx-auto">
        <div className="w-12 h-12 rounded-full bg-[#B86246]/10 text-[#B86246] mx-auto flex items-center justify-center mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="font-serif text-lg font-bold text-[#1C1917] mb-1">
          You&apos;re on the VIP Beta List!
        </h4>
        <p className="text-xs sm:text-sm text-[#57534E] mb-3">
          We reserved your spot for <span className="font-semibold text-[#1C1917]">{email}</span>. TestFlight invite link and the 2026 Trend Lookbook are on their way.
        </p>
        <div className="inline-flex items-center gap-2 text-xs font-medium text-[#B86246] bg-[#B86246]/10 px-3 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> 50 Free 4K AI Renders Unlocked
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${variant === "hero" ? "max-w-xl mx-auto" : "max-w-md mx-auto"}`}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 sm:gap-2">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for TestFlight invite..."
            className="w-full h-13 px-4 sm:px-5 rounded-full bg-white text-[#1C1917] placeholder:text-[#57534E]/60 border border-[#1C1917]/15 focus:outline-none focus:ring-2 focus:ring-[#B86246]/40 focus:border-[#B86246] shadow-sm text-sm sm:text-base transition-all"
            disabled={isLoading}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="h-13 px-7 rounded-full bg-[#1C1917] hover:bg-[#B86246] text-[#FAF8F5] text-sm sm:text-base font-semibold shadow-lg shadow-[#1C1917]/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70 whitespace-nowrap"
        >
          {isLoading ? (
            <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <span>Get VIP Invite</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {error && <p className="text-xs text-red-600 mt-2 text-center">{error}</p>}

      <div className="flex items-center justify-center gap-4 mt-3 text-xs text-[#57534E]">
        <span className="flex items-center gap-1">
          <Apple className="w-3.5 h-3.5 text-[#1C1917]" /> iOS 17+ & iPadOS
        </span>
        <span className="w-1 h-1 rounded-full bg-[#1C1917]/30" />
        <span>No credit card needed</span>
        <span className="w-1 h-1 rounded-full bg-[#1C1917]/30" />
        <span>Instant access</span>
      </div>
    </div>
  );
}
