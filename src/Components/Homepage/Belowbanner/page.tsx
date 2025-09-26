"use client";
import React from "react";
import Image from "next/image";

export default function Belowbanner() {
  return (
    <section className="w-full py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* LEFT side: badges */}
        <div className="flex items-center gap-10 -ml-[6%]">
          <Image
            src="/acc.png"
            alt="Auction Excellence"
            width={190}
            height={200}
            className="object-contain"
            priority={false}
          />

          <Image
            src="/24sup.png"
            alt="24/7 Support"
            width={140}
            height={160}
            className="object-contain"
            priority={false}
          />
        </div>

        {/* RIGHT side: metrics */}
        <div className=" flex items-center gap-15 -mr-[6%]">
          <Image
            src="/Cli.png"
            alt="Metrics"
            width={160}
            height={200}
            className="object-contain"
            priority={false}
          />
            <Image
            src="/Vol.png"
            alt="Auction Excellence"
            width={160}
            height={200}
            className="object-contain"
            priority={false}
          />
            <Image
            src="/supl.png"
            alt="Auction Excellence"
            width={160}
            height={200}
            className="object-contain"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
