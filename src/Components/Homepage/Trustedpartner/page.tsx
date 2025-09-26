"use client";
import React from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";

// load DM Sans (general text) and Playfair Display (italic heading part)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
});

export default function Trustedpartners() {
  // 10 logos
  const logos = [
    "/im1.png",
    "/im2.png",
    "/im3.png",
    "/im4.png",
    "/im1.png",
    "/im2.png",
    "/im3.png",
    "/im4.png",
    "/im1.png",
    "/im2.png",
  ];

  return (
    <section className={`bg-white ${dmSans.variable} font-sans`}>
      {/* Top thin border line */}
      <div className="border-t border-gray-200" />

      {/* Light band with content */}
      <div className="bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-10">
          {/* Heading */}
          <div className="text-center mb-[-25]">
            <h2 className="text-3xl md:text-4xl  text-gray-900">
              <span className="mr-2 font-bold">Trusted</span>
              <span className={`${playfair.variable} font-serif italic text-gold`}>
                Partners
              </span>
            </h2>
          </div>
        </div>

        {/* Full-width logo row */}
        <div className="w-full overflow-hidden py-10">
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 px-6 md:px-12">
            {logos.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center flex-1 min-w-[80px] max-w-[120px]"
                aria-hidden={true}
              >
                <img
                  src={src}
                  alt={`partner-${i}`}
                  className="h-8 md:h-12 lg:h-14 object-contain"
                  style={{ filter: "contrast(1)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline CSS variables for the gold color */}
      <style jsx>{`
        :root {
          --gold: #cfa93e;
        }
        .text-gold {
          color: var(--gold);
        }
      `}</style>
    </section>
  );
}
