import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-[#57534E]">Last updated: October 2026</p>
        </div>

        <div className="space-y-6 text-sm sm:text-base text-[#57534E] leading-relaxed">
          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">
              1. Information We Collect
            </h2>
            <p>
              Decorly (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) values your privacy. When you use our iOS application or website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>User-Uploaded Photos:</strong> Photographs of interior spaces you submit for AI room remodeling. These images are processed exclusively to generate design renders and are not shared with third parties for marketing purposes.
              </li>
              <li>
                <strong>Waitlist & Account Information:</strong> Your email address when you voluntarily sign up for our TestFlight beta or newsletter.
              </li>
              <li>
                <strong>Anonymous Analytics:</strong> Telemetry regarding app performance, crash diagnostics, and aggregated feature usage to improve user experience.
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">
              2. How We Use Your Data
            </h2>
            <p>
              Your data is strictly utilized to deliver and enhance the Decorly experience:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>To execute AI neural rendering and aesthetic room style transfers.</li>
              <li>To provide customer support and notify you of product updates.</li>
              <li>To prevent fraudulent activity and ensure compliance with our terms.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">
              3. Data Retention and Security
            </h2>
            <p>
              Uploaded room photographs are retained only for the duration required to generate and cache your render results on your device. We implement industry-standard encryption protocols (TLS/SSL) in transit and at rest.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#1C1917]">
              4. Contact Us
            </h2>
            <p>
              If you have any questions or data deletion requests, please contact our privacy team at{" "}
              <a
                href="mailto:privacy@decorly.app"
                className="text-[#B86246] underline"
              >
                privacy@decorly.app
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
