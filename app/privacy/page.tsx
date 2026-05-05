import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Nuzzle",
  description: "Privacy Policy for Nuzzle, built by Little Wonder LLC.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-gray-900 hover:text-[#3a7d44] transition-colors"
          >
            Nuzzle
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mb-10">
            Last updated: May 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                About This Policy
              </h2>
              <p>
                Nuzzle is operated by <strong>Little Wonder LLC</strong>. This
                Privacy Policy describes how we collect, use, and protect your
                information when you use the Nuzzle app and website
                (nuzzleapp.io).
              </p>
              <p className="mt-3 text-[#3a7d44] font-medium">
                This page is a placeholder. A full Privacy Policy will be
                published here before the public launch of Nuzzle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Information We Collect
              </h2>
              <p>
                We collect information you provide directly (such as your name,
                email address, and dog profile details), as well as usage data
                to improve the app experience. Location data is used only for
                local features such as dog beach check-ins and is not stored
                persistently.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                How We Use Your Information
              </h2>
              <p>
                We use your information to operate and improve Nuzzle, send
                relevant notifications, and enable community features. We do not
                sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Contact
              </h2>
              <p>
                If you have questions about this policy, please contact us at{" "}
                <a
                  href="mailto:hello@nuzzleapp.io"
                  className="text-[#3a7d44] hover:underline"
                >
                  hello@nuzzleapp.io
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-sm">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>&copy; 2026 Little Wonder LLC. All rights reserved.</span>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
