import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsOfServiceMarkdown } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service — Nuzzle",
  description:
    "The terms governing your use of Nuzzle, operated by Little Wonder LLC.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage markdown={termsOfServiceMarkdown} current="terms" />;
}
