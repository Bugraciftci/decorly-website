/**
 * Unified Analytics & Conversion Tracker for Decorly
 * Supports Google Analytics 4 (GA4), Pinterest Tag (pintrk), and custom webhooks.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    pintrk?: (action: string, eventName?: string, data?: Record<string, unknown>) => void;
    adsbygoogle?: unknown[];
  }
}

export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;

  // 1. Google Analytics 4
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // 2. Pinterest Tag
  if (typeof window.pintrk === "function") {
    if (eventName === "generate_lead" || eventName === "lead") {
      window.pintrk("track", "lead", { ...params });
    } else if (eventName === "page_view") {
      window.pintrk("page");
    } else {
      window.pintrk("track", "custom", { event: eventName, ...params });
    }
  }

  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
};

export const trackLeadSignup = (email: string) => {
  trackEvent("generate_lead", {
    method: "waitlist_form",
    value: 1,
    currency: "USD",
    email_domain: email.split("@")[1] || "",
  });
};

export const trackAppStoreClick = (location: string) => {
  trackEvent("app_download_click", {
    location,
    target: "App Store TestFlight",
  });
};

export const trackStyleClick = (styleTitle: string, category: string) => {
  trackEvent("view_item", {
    item_name: styleTitle,
    item_category: category,
  });
};
