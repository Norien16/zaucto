// components/Belowbanner.tsx
"use client";
import Image from "next/image";

export default function Belowbanner() {
  return (
    <div className="w-[93%] ml-[5%] flex flex-wrap items-center justify-between text-gray-800 py-6 px-8 bg-white rounded-xl shadow">
      {/* Left section */}
      <div className="flex items-center gap-10">
        {/* Auction Excellence */}
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image src="/Auc.png" alt="Auction Excellence" fill className="object-contain" />
          </div>
          <span className="font-medium">Auction Excellence</span>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image src="/Sup.png" alt="24/7 Support" fill className="object-contain" />
          </div>
          <span className="font-medium">24/7 Support</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-10 flex-wrap">
        {/* Clients */}
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image src="/Cli.png" alt="Clients" fill className="object-contain" />
          </div>
          <div>
            <p className="font-semibold">
              500+ <span className="font-normal text-gray-600">Clients</span>
            </p>
            <p className="text-xs text-gray-500">Enterprise Clients</p>
          </div>
        </div>

        {/* Processed Volume */}
        <div className="flex items-center gap-2 border-l pl-6">
          <div className="relative w-6 h-6">
            <Image src="/Vol.png" alt="Processed Volume" fill className="object-contain" />
          </div>
          <div>
            <p className="font-semibold">
              $2.5B+ <span className="font-normal text-gray-600">Volume</span>
            </p>
            <p className="text-xs text-gray-500">Processed Volume</p>
          </div>
        </div>

        {/* Suppliers */}
        <div className="flex items-center gap-2 border-l pl-6">
          <div className="relative w-6 h-6">
            <Image src="/supl.png" alt="Suppliers" fill className="object-contain" />
          </div>
          <div>
            <p className="font-semibold">
              5k <span className="font-normal text-gray-600">Supplier</span>
            </p>
            <p className="text-xs text-gray-500">Verified Suppliers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
