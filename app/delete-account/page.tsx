import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { deleteAccountMarkdown } from "@/content/legal";

export const metadata: Metadata = {
  title: "Delete Your Account — Pawsse",
  description:
    "How to permanently delete your Pawsse account and associated data.",
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  return <LegalPage markdown={deleteAccountMarkdown} current="delete-account" />;
}
