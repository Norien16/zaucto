// pages/index.tsx
"use client";
import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";

// Load DM Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Datasecure() {
  return (
    <main className={`bg-[#f9f9f9] mt-20 h-[80vh] ${dmSans.className}`}>
      <section className="w-[89%] ml-28 px-4 md:px-12 lg:px-20 py-16 mt-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-[60%] mt-10">
          <Image
            src="/secure.png" // replace with your actual image (from screenshot)
            alt="Team"
            width={1300}
            height={950}
            className="rounded-2xl shadow-md"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full mt-3 ml-3 md:w-[50%]">
          <h1 className="text-4xl md:text-5xl text-[#222] leading-snug">
            <span className="font-bold">Your Data, </span>
            <span className="text-[#d3af37] italic font-serif">Secured</span>
          </h1>

          <p className="mt-5 text-[#666666] text-lg tracking-wide leading-relaxed whitespace-nowrap">
            We employ multiple layers of security including end-to-end<br/> encryption, 
            secure cloud infrastructure, and regular security audits to<br/> protect your 
            sensitive procurement data and ensure complete <br/>confidentiality.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <Image src="/cc.png" alt="tick" width={20} height={20} className="mt-1" />
              <span className="text-[#666666] font-medium">256-bit Encryption</span>
            </li>
            <li className="flex items-start gap-3">
              <Image src="/cc.png" alt="tick" width={20} height={20} className="mt-1" />
              <span className="text-[#666666] font-medium">Regular Audits</span>
            </li>
            <li className="flex items-start gap-3">
              <Image src="/cc.png" alt="tick" width={20} height={20} className="mt-1" />
              <span className="text-[#666666] font-medium">Compliance Ready</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
