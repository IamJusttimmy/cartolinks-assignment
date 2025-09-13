import React from "react";
import Image from "next/image";

export default function Footer({ isFakeDark }) {
  return (
    <footer
      className={`w-full bg-black px-4 py-6 ${isFakeDark ? "invert-back" : ""}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto text-white text-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/images/Krea-logo.png"
              alt="Krea Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-3xl">Krea AI</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl">curated by</span>
          <div className=" rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/images/mobbin.png"
              alt="Krea Logo"
              width={50}
              height={50}
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-4xl">Mobbin</span>
        </div>
      </div>
    </footer>
  );
}
