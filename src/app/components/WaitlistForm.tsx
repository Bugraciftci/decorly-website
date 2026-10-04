"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Apple } from "lucide-react";
import { trackLeadSignup } from "@/lib/analytics";

interface WaitlistFormProps {
  variant?: "hero" | "card";
}

export default function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("decorly_waitlist_email");
    if (stored) {
      setEmail(stored);
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      localStorage.setItem("decorly_waitlist_email", trimmedEmail);
      trackLeadSignup(trimmedEmail);

      try {
        await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmedEmail }),
        });
      } catch {
        // Fallback gracefully
      }

      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl bg-white/90 backdrop-blur-2xl border border-[#B26A4A]/25 p-6 sm:p-7 text-center shadow-luxury-md max-w-md mx-auto animate-fade-in">
        <div className="w-12 h-12 rounded-full bg-[#B26A4A]/10 text-[#B26A4A] mx-auto flex items-center justify-center mb-3">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-2xl font-bold tracking-tight text-[#181615] mb-1">
          Welcome to the Private Beta
        </h4>
        <p className="text-xs sm:text-sm text-[#6B645C] mb-4 leading-relaxed">
          Your invitation for <span className="font-medium text-[#181615]">{email}</span> is confirmed. Look for your TestFlight link and seasonal lookbook in your inbox shortly.
        </p>
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#B26A4A] bg-[#B26A4A]/10 px-4 py-2 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> 50 Free 4K Renders Unlocked
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
            className="w-full h-14 px-5 rounded-full bg-white/95 text-[#181615] placeholder:text-[#6B645C]/60 border border-black/[0.08] focus:outline-none focus:ring-2 focus:ring-[#B26A4A]/30 focus:border-[#B26A4A] shadow-luxury-sm text-sm sm:text-base transition-all"
            disabled={isLoading}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="h-14 px-8 rounded-full bg-[#181615] hover:bg-[#B26A4A] text-[#FAF8F5] text-sm sm:text-base font-medium tracking-wide shadow-luxury-sm hover:shadow-luxury-md transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer active:scale-98 disabled:opacity-70 whitespace-nowrap"
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

      {error && <p className="text-xs text-red-600 mt-2.5 text-center font-medium">{error}</p>}

      <div className="flex items-center justify-center gap-4 mt-3.5 text-xs text-[#6B645C]">
        <span className="flex items-center gap-1.5 font-medium text-[#181615]">
          <Apple className="w-3.5 h-3.5" /> iOS 17+ & iPadOS
        </span>
        <span className="w-1 h-1 rounded-full bg-black/20" />
        <span>No credit card required</span>
        <span className="w-1 h-1 rounded-full bg-black/20" />
        <span>Instant access</span>
      </div>
    </div>
  );
}
