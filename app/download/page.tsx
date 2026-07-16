"use client";

import { useEffect, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/nuzzle-local-dog-communities/id6781108216";

type Platform = "ios" | "android" | "other";

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "other";
}

export default function DownloadPage() {
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => {
    const detected = detectPlatform();
    setPlatform(detected);
    if (detected === "ios") {
      window.location.replace(APP_STORE_URL);
    }
  }, []);

  if (platform === "android") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4fbf5] px-6 text-center">
        <p className="text-2xl mb-2">🐾</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Coming soon to Android</h1>
        <p className="text-gray-500 max-w-sm">
          The Nuzzle Android app is currently under review. Check back soon —
          we can&rsquo;t wait to bring it to you!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4fbf5] px-6 text-center">
      <p className="text-2xl mb-2">🐾</p>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Get Nuzzle</h1>
      <p className="text-gray-500 mb-10 max-w-sm">
        Download Nuzzle to find your dog&rsquo;s community. Available on iOS,
        with Android coming soon.
      </p>
      <a
        href={APP_STORE_URL}
        className="inline-block bg-gray-900 text-white font-medium px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors"
      >
        Download on the App Store
      </a>
    </div>
  );
}
