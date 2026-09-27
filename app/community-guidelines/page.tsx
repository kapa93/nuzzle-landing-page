import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { communityGuidelinesMarkdown } from "@/content/legal";

export const metadata: Metadata = {
  title: "Community Guidelines — Pawsse",
  description:
    "The rules that keep Pawsse a safe, welcoming community for dogs and their people.",
  alternates: { canonical: "/community-guidelines" },
};

export default function CommunityGuidelinesPage() {
  return (
    <LegalPage
      markdown={communityGuidelinesMarkdown}
      current="community-guidelines"
    />
  );
}
