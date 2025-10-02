"use client";
import React from "react";
import Image from "next/image";
export default function Banner() {
  return (
    <div className="w-[92%] ml-[4%] relative bg-[url('/Zacban.webp')] bg-cover bg-center h-[600px] flex items-center justify-center rounded-2xl ">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-4">
        {/* Heading */}
        <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
          Effortless{" "}
          <span className="text-[#CFAC35] italic font-serif">Procurement,</span>
          <br />
          Endless Savings
        </h1>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="bg-gradient-to-r from-[#D3AF37] to-[#7B6300] hover:bg-[#D3AF37] text-white text-medium font-bold px-9 py-3 rounded-lg shadow-lg transition">
            Explore More
          </button>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold px-10 py-3 text-medium rounded-lg shadow-lg transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* Bottom Right Floating Button */}
      <div className="fixed bottom-30 right-25 z-50">
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#D3AF37] to-[#7B6300] hover:bg-yellow-700 text-white font-medium pl-9 pr-3 py-6 rounded-lg text-xl shadow-lg transition">
          Any query?
          <span className="bg-white text-yellow-600 rounded-full w-16 h-3 ml-7 flex items-center  text-sm font-bold">
           <Image
  src="/Query.png"
  alt="hii"
  width={85}
  height={40}
  className="object-contain"
/>
          </span>
        </button>
      </div>
    </div>
  );
}
