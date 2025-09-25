// pages/index.tsx
"use client";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";

// Load DM Sans (for default text)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Load Playfair Display (for italic text)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic"],
});

export default function Prowork() {
  return (
    <>
      <Head>
        <title>Auction Process - Tailwind</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <style jsx global>{`
        :root {
          --gold: #cfac35;
          --gold-dark: #b58b1a;
          --card-border: rgba(239, 239, 239, 1);
        }
        .gold {
          color: var(--gold);
          font-style: italic;
        }
        .gold-bg {
          background: linear-gradient(90deg, var(--gold), var(--gold-dark));
        }
        /* Custom outline for step labels */
        .step-outline {
          color: white;
          -webkit-text-stroke: 2px #d3af37; /* outline */
          paint-order: stroke fill;
        }
      `}</style>

      <main
        className={`min-h-screen flex items-center justify-center py-16 px-6 bg-white text-gray-800 antialiased ${dmSans.className}`}
      >
        <div className="w-full max-w-7xl">
          {/* Title */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-medium">
              <span className="text-gray-900 font-bold">How Auction </span>
              <span className={`gold ${playfair.className}`}>Process Works</span>
            </h1>
          </header>

          <section className="relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              {/* Step 1 */}
              <article
                className="relative bg-white rounded-2xl p-10 flex flex-col md:-translate-y-6 min-h-[380px]"
                style={{ border: "1px solid var(--card-border)" }}
              >
                {/* Step label top-right */}
                <div className="absolute top-4 right-4 text-2xl font-semibold step-outline">
                  STEP 01
                </div>

                <div className="flex items-start mb-6 w-full">
                  <div className="w-14 h-14 relative">
                    <Image src="/dairy.png" alt="Step 1 Icon" fill className="object-contain" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">
                  List Your <span className={`gold ${playfair.className}`}>Auction</span>
                </h3>
                <ul className="list-disc pl-5 text-base text-gray-600 space-y-2 flex-1">
                  <li>Set up an auction for your procurement needs.</li>
                  <li>Define product details.</li>
                  <li>Set auction duration.</li>
                  <li>Upload necessary documents.</li>
                </ul>
              </article>

              {/* Step 2 (highlight with shadow) */}
              <article
                className="relative bg-white rounded-2xl p-10 flex flex-col md:translate-y-6 min-h-[380px] z-10"
                style={{
                  border: "1px solid var(--card-border)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
                }}
              >
                <div className="absolute top-4 right-4 text-2xl font-semibold step-outline">
                  STEP 02
                </div>

                <div className="flex items-start mb-6 w-full">
                  <div className="w-14 h-14 relative">
                    <Image src="/bid.png" alt="Step 2 Icon" fill className="object-contain" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Suppliers Place <span className={`gold ${playfair.className}`}>Bids</span>
                </h3>
                <ul className="list-disc pl-5 text-base text-gray-600 space-y-2 flex-1">
                  <li>Verified sellers compete in real-time, offering the best prices.</li>
                  <li>Review auction details.</li>
                  <li>Submit competitive bids.</li>
                  <li>Track bid rankings.</li>
                </ul>
              </article>

              {/* Step 3 */}
              <article
                className="relative bg-white rounded-2xl p-10 flex flex-col md:-translate-y-6 min-h-[380px]"
                style={{ border: "1px solid var(--card-border)" }}
              >
                <div className="absolute top-4 right-4 text-2xl font-semibold step-outline">
                  STEP 03
                </div>

                <div className="flex items-start mb-6 w-full">
                  <div className="w-14 h-14 relative">
                    <Image src="/hammer.png" alt="Step 3 Icon" fill className="object-contain" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Monitor &amp; <span className={`gold ${playfair.className}`}>Select</span>
                </h3>
                <ul className="list-disc pl-5 text-base text-gray-600 space-y-2 flex-1">
                  <li>Track live bids and choose the most competitive offer.</li>
                  <li>Compare bid prices.</li>
                  <li>Check supplier credibility.</li>
                  <li>Finalize the best bid.</li>
                </ul>
              </article>

              {/* Step 4 */}
              <article
                className="relative bg-white rounded-2xl p-10 flex flex-col md:translate-y-6 min-h-[380px]"
                style={{ border: "1px solid var(--card-border)" }}
              >
                <div className="absolute top-4 right-4 text-2xl font-semibold step-outline">
                  STEP 04
                </div>

                <div className="flex items-start mb-6 w-full">
                  <div className="w-14 h-14 relative">
                    <Image src="/wallet.png" alt="Step 4 Icon" fill className="object-contain" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Close The <span className={`gold ${playfair.className}`}>Deal</span>
                </h3>
                <ul className="list-disc pl-5 text-base text-gray-600 space-y-2 flex-1">
                  <li>Finalize the purchase and enjoy effortless procurement.</li>
                  <li>Confirm winning bid.</li>
                  <li>Complete documentation.</li>
                  <li>Track order delivery.</li>
                </ul>
              </article>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-20">
              <button className="px-7 py-3 rounded-lg font-semibold text-white text-lg gold-bg shadow-md">
                Start With Your First Auction
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
