"use client";
import React from "react";

/**
 * TrustedPartners.tsx
 *
 * - Replace the items in `logos` with your actual logo paths (SVG/PNG).
 * - The container has a subtle top border and a light background band.
 * - Logos are centered, evenly spaced and scale responsively.
 * - The second word in the heading is gold+italic to match your design.
 */

export default function Trustedpartners() {
  // replace these with your real logo file paths (SVG preferred)
  const logos = [
    "/im1.png",
    "/im2.png",
    "/im3.png",
    "/im4.png",
    "/im1.png",
    "/im2.png",
    "/im3.png",
    "/im4.png",
  ];

  return (
    <section className="bg-white">
      {/* Top thin border line (matches image) */}
      <div className="border-t border-gray-200" />

      {/* Light band with content */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              <span className="mr-2">Trusted</span>
              <span className="italic text-gold">Partners</span>
            </h2>
          </div>

          {/* Logo row */}
          <div className="flex items-center justify-center">
            <div className="w-full overflow-hidden">
              {/* container to keep logos centered and spaced like the reference */}
              <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {logos.map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center"
                    aria-hidden={true}
                  >
                    {/* Using <img> lets you drop in SVGs or PNGs; height controls scale */}
                    <img
                      src={src}
                      alt={`partner-${i}`}
                      className="h-10 md:h-14 lg:h-16 object-contain"
                      // Improve rendering for SVGs/PNGs with transparency
                      style={{ filter: "contrast(1)" }}
                    />
                  </div>
                ))}
              </div>
            </div>
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
