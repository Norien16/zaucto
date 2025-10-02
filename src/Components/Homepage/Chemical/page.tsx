"use client";

import Image from "next/image";
import React from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";

// Load DM Sans (default)
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Load Playfair Display (italic accents)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic"],
});

export default function Chemical() {
  return (
    <section
      className={`${dmSans.className} mt-5 px-6 md:px-16 bg-[#F8F8F8]`}
    >
      <h2 className="text-4xl md:text-5xl text-center pt-12">
        <span className="font-bold ">Featured{" "}</span>
        <span className={`italic ${playfair.className}`} style={{ color: "#cfac35" }}>
          Chemical Products
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ===================== FIRST CARD ===================== */}
        <div
          className="relative left-30 p-6 rounded-2xl flex flex-col md:flex-row items-center bg-no-repeat"
          style={{
            backgroundImage: "url(/ybg.png)",
            backgroundSize: "contain",
            width: "790px",
            height: "605px",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay Image */}
          <div className="absolute top-24 left-3 w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/hury.png"
              alt="Overlay Badge"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="flex-1 mt-13 ml-9">
            <p className="text-xs">Current Bid at:</p>
            <h3 className="text-xl font-bold mt-1">$3,952</h3>
            <h4 className="text-3xl  mt-2">
              <span className="font-bold">Textile Industrial Chemical{" "}</span>
              <span className={`italic ${playfair.className}`}>
                Collectors
              </span>
              <p className="text-xs underline mt-4">Auction Will End In:</p>
            </h4>

            {/* Countdown */}
            <div className="flex gap-4 mt-4">
              {["Days", "Hours", "Minutes", "Seconds"].map((time) => (
                <div key={time}>
                  <div className="bg-white px-3 py-2 rounded-md">00</div>
                  <p className="text-xs mt-1">{time}</p>
                </div>
              ))}
            </div>

            {/* Bid Button */}
            <button className="mt-6 px-20 py-3 rounded-lg bg-gradient-to-r from-[#D3AF37] to-[#7B3600] text-white font-semibold">
              Bid Now
            </button>
          </div>

          {/* Product Image */}
          <div className="flex-1 mt-6 md:mt-0 md:ml-6">
            <Image
              src="/med1.png"
              alt="Textile Industrial Chemical Collectors"
              width={330}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        {/* ===================== SECOND CARD ===================== */}
        <div
          className="relative p-15 -mt-12 left-35 rounded-2xl flex flex-col items-center bg-no-repeat"
          style={{
            backgroundImage: "url(/bbg.png)",
            backgroundSize: "contain",
            width: "380px",
            height: "700px",
            backgroundPosition: "center",
          }}
        >
          {/* Product Info */}
          <div className="w-full text-center">
            <h4 className="text-2xl  mt-25">
              <span className="font-extrabold">Textile Industrial Chemical{" "}</span>
              <span className={`italic ${playfair.className}`}>
                Collectors
              </span>
            </h4>
            <p className="text-xs mt-4">Current Bid at:</p>
            <h3 className="text-xl font-bold mt-1">$3,952</h3>

            {/* Countdown */}
            <div className="flex gap-4 mt-4 justify-center">
              {["Days", "Hours", "Minutes", "Seconds"].map((time) => (
                <div key={time}>
                  <div className="bg-white px-3 py-2 rounded-md">00</div>
                  <p className="text-xs mt-1">{time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Image */}
          <div className="w-full mt-6 text-center">
            <Image
              src="/med2.png"
              alt="Textile Industrial Chemical Collectors"
              width={300}
              height={200}
              className="object-contain mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center ml-40 gap-2 -mt-55  p-20">
        <span className="w-3 h-3 bg-amber-600 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
      </div>
    </section>
  );
}
