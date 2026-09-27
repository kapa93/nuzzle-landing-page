import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { termsOfServiceMarkdown } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service — Pawsse",
  description:
    "The terms governing your use of Pawsse, operated by Little Wonder LLC.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage markdown={termsOfServiceMarkdown} current="terms" />;
}
