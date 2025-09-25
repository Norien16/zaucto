// pages/index.tsx
"use client";
import Image from "next/image";
import React from "react";
import { DM_Sans } from "next/font/google";

// Load DM Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
});

export default function Belowcard() {
  return (
    <main className={`bg-[#f9f9f9] mt-4 h-[90vh] ${dmSans.className}`}>
      <section className="w-[90%] ml-28 px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="w-full md:w-[40%]">
          <Image
            src="/Team.png"
            alt="Team"
            width={1200}
            height={950}
            className="rounded-2xl shadow-md"
            priority
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full ml-3 md:w-[50%]">
          <h1 className="text-4xl md:text-5xl  text-[#222] leading-snug">
            <span className="font-bold">Driven By{" "}</span>
            <span className="text-[#d3af37] italic font-serif">Efficiency</span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg tracking-wide leading-relaxed whitespace-nowrap">
            At Zaucta, we believe procurement should be effortless, transparent,
            and <br />cost-efficient. Our platform is designed to transform the way
            businesses<br /> source chemicals and additives by combining real-time
            quotes, competitive<br /> auctions, and verified suppliers into one
            streamlined solution.
          </p>

          {/* Bullet Points */}
          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <Image src="/tick.png" alt="tick" width={20} height={20} className="mt-1" />
              <span className="text-[#222] font-medium">
                We empower businesses to connect directly with trusted partners
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image src="/tick.png" alt="tick" width={20} height={20} className="mt-1" />
              <span className="text-[#222] font-medium">
                Optimize costs, and simplify procurement processes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image src="/tick.png" alt="tick" width={20} height={20} className="mt-1" />
              <span className="text-[#222] font-medium">
                Securing better pricing, ensuring supply reliability, or saving
                valuable time
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Image src="/tick.png" alt="tick" width={20} height={20} className="mt-1" />
              <span className="text-[#222] font-medium">
                Zaucta provides a smarter, more efficient way to manage
                procurement.
              </span>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#"
              className="text-white px-9 py-3 rounded-md font-medium shadow-md transition inline-block"
              style={{
                background:
                  "linear-gradient(to right, #d3af37 0%, #d3af37 20%, #b8902c 70%, #b8902c 100%)",
              }}
            >
              Know More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
