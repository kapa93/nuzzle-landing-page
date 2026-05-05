import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Nuzzle",
  description: "Terms of Service for Nuzzle, built by Little Wonder LLC.",
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400 mb-10">
            Last updated: May 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                About These Terms
              </h2>
              <p>
                Nuzzle is operated by <strong>Little Wonder LLC</strong>. By
                using the Nuzzle app or website (nuzzleapp.io), you agree to
                these Terms of Service.
              </p>
              <p className="mt-3 text-[#3a7d44] font-medium">
                This page is a placeholder. Full Terms of Service will be
                published here before the public launch of Nuzzle.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Use of the Service
              </h2>
              <p>
                Nuzzle is a community platform for dog owners. You agree to use
                the service respectfully and in accordance with all applicable
                laws. You are responsible for the content you post and your
                interactions with other users.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                User Content
              </h2>
              <p>
                You retain ownership of content you post to Nuzzle. By posting,
                you grant Little Wonder LLC a limited license to display and
                distribute that content within the Nuzzle platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Limitation of Liability
              </h2>
              <p>
                Little Wonder LLC provides Nuzzle on an &ldquo;as is&rdquo;
                basis. We are not liable for any damages arising from your use
                of the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                Contact
              </h2>
              <p>
                If you have questions about these terms, please contact us at{" "}
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
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
