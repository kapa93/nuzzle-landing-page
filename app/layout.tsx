import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pawsse",
  description:
    "A community app for dog owners. Discover breed communities, find local dog-friendly spots, and plan meetups and playdates.",
  metadataBase: new URL("https://www.pawsse.io"),
  openGraph: {
    title: "Pawsse",
    description:
      "A community app for dog owners. Discover breed communities, find local dog-friendly spots, and plan meetups and playdates.",
    url: "https://www.pawsse.io",
    siteName: "Pawsse",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
