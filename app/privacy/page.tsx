import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacyPolicyMarkdown } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — Nuzzle",
  description:
    "How Nuzzle (operated by Little Wonder LLC) collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPage markdown={privacyPolicyMarkdown} current="privacy" />;
}
