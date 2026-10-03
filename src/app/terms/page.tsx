import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-[#1C1917]">
        <div className="mb-8">
          <Link
            href="/"
            className="text-xs uppercase font-bold tracking-wider text-[#B86246] hover:underline"
          >
            ← Back to Decorly Home
          </Link>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-3 mb-2">
            Terms of Service
          </h1>
          <p className="text-sm text-[#57534E]">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-[#57534E] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Decorly website or iOS application, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">
              2. Intellectual Property and Generated Content
            </h2>
            <p>
              You retain all rights to the original photos you upload. Renders generated through Decorly&apos;s AI are provided to you for personal and professional interior design visualization. Decorly does not claim ownership over your original interior spaces.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">
              3. Subscriptions & In-App Purchases
            </h2>
            <p>
              Decorly Pro subscriptions and token packs are managed through Apple In-App Purchases via the App Store. All charges and renewals are governed by Apple&apos;s standard terms and billing agreements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">
              4. Disclaimer
            </h2>
            <p>
              Decorly AI generates conceptual interior design visual representations. While designed to adhere to architectural proportions, users should verify exact measurements, building codes, and structural integrity with licensed contractors before beginning physical demolition or construction.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">
              5. Contact Information
            </h2>
            <p>
              For legal inquiries, contact us at{" "}
              <a
                href="mailto:legal@decorly.app"
                className="text-[#B86246] underline"
              >
                legal@decorly.app
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
