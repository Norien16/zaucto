// pages/index.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

const sampleItems = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: "Petrochemical Solution",
  image: "/sample-chem.jpg",
  status: i % 3 === 0 ? "live" : i % 3 === 1 ? "upcoming" : "completed",
  bid: "$3,780",
  lot: `Lot # ${25896752 + i}`,
}));

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "all" | "live" | "upcoming" | "completed"
  >("all");
  const [topSection, setTopSection] = useState<"auctions" | "rfqs">("auctions");

  const filtered = sampleItems.filter((it) =>
    activeTab === "all" ? true : it.status === activeTab
  );

  return (
    <main className="min-h-screen bg-white py-10">
      <div className="w-[76%] mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-6">
          {/* Left: Title + description + small tabs */}
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              <span className="font-bold">Auction</span>{" "}
              <span className="text-[#CFAC35] italic font-serif">Showcase</span>
            </h1>

            <div className="w-[100%]">
              <p className="text-gray-500 text-lg tracking-wide whitespace-nowrap">
                Discover active reverse auctions and RFQ opportunities. Join the
                marketplace where transparency
                <br /> meets competitive pricing.
              </p>
            </div>

            {/* Top small pills (Auctions / RFQ's) */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => setTopSection("auctions")}
                className={`px-7 py-2 rounded-md text-xl font-medium border ${
                  topSection === "auctions"
                    ? "bg-white border-[#D3AF37]"
                    : "bg-white border-amber-200"
                }`}
              >
                <span
                  className="bg-gradient-to-r from-[#D3AF37] to-[#7B6300] bg-clip-text text-transparent"
                  style={{ fontWeight: 550 }}
                >
                  Auctions
                </span>
              </button>

              <button
                onClick={() => setTopSection("rfqs")}
                className={`px-4 py-2 rounded-md text-amber-700 text-lg font-medium border ${
                  topSection === "rfqs"
                    ? "bg-white border-[#D3AF37]"
                    : "bg-white border-transparent"
                }`}
              >
                <span className="font-semibold bg-gradient-to-r from-[#D3AF37] to-[#7B6300] bg-clip-text text-transparent">
                  RFQ's
                </span>
              </button>
            </div>

            {/* Filters row */}
            <div className="mt-6">
              <div className="flex ml-15 items-center gap-10">
                {(
                  [
                    { id: "all", label: "All" },
                    { id: "live", label: "Live" },
                    { id: "upcoming", label: "Upcoming" },
                    { id: "completed", label: "Completed" },
                  ] as const
                ).map((t) => {
                  // Wider sizes for live/upcoming/completed
                  const sizeClass =
                    t.id === "all" ? "px-6 py-2" : "px-9 py-2"; // all = smaller, others = wider
                  const isActive = activeTab === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id as any)}
                      className={`${sizeClass} text-lg font-medium rounded-md transition ${
                        isActive
                          ? "bg-gradient-to-r from-[#D3AF37] to-[#7B6300] bg-clip-text text-transparent"
                          : "text-gray-700"
                      }`}
                      style={{ position: "relative" }}
                      aria-pressed={isActive}
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>

              {/* thin divider + active underline */}
              <div className="relative mt-2">
                <div className="h-[1px] bg-gray-200" />
                <div
                  className="absolute -bottom-1 h-1 w-25 transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(to right,rgb(236, 205, 105) 0%, #D3AF37 3%)",
                    left:
                      activeTab === "all"
                        ? "30px"
                        : activeTab === "live"
                        ? "160px"
                        : activeTab === "upcoming"
                        ? "330px"
                        : "540px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right: View All button */}
          <div className="flex items-start">
            <button
              className="ml-4 mt-[110%] px-6 py-3 rounded-md text-white font-semibold text-sm shadow"
              style={{
                background: "linear-gradient(180deg,#CDA83C 0%,#B8861B 100%)",
              }}
            >
              View All Auctions
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md overflow-hidden transition flex flex-col h-full"
            >
              {/* Image & overlay */}
              <div className="relative h-56 mt-2 w-full flex justify-center items-center overflow-hidden rounded-t-lg">
                <div className="relative h-59 w-[97%]">
                  <Image
                    src="/bottle.png"
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Status badge */}
                <span
                  className={`absolute top-3 left-3 px-8 py-2 text-medium font-semibold rounded-sm ${
                    item.status === "live"
                      ? "bg-red-600 text-white"
                      : item.status === "upcoming"
                      ? "bg-blue-600 text-white"
                      : "bg-green-600 text-white"
                  }`}
                >
                  {item.status === "live"
                    ? "Live"
                    : item.status === "upcoming"
                    ? "Upcoming"
                    : "Completed"}
                </span>

                {/* Countdown pill - wider */}
                <div className="absolute  bottom-[-20] left-1/2 transform -translate-x-1/2 bg-white/95 rounded-full px-6 py-2 flex items-center gap-4 text-[12px] shadow-sm ">
                  <div className="text-center">
                    <div className="font-bold">00</div>
                    <div className="text-gray-400">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">00</div>
                    <div className="text-gray-400">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">00</div>
                    <div className="text-gray-400">Min</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">00</div>
                    <div className="text-gray-400">Sec</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>

                {/* Current Bid + Lot Number row */}
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Current Bid at:</p>
                    <div className="text-2xl font-bold text-black">
                      {item.bid}
                    </div>
                  </div>
                  <span className="text-xs px-4 py-1 rounded bg-gray-100 text-gray-600 min-w-[92px] text-center">
                    {item.lot}
                  </span>
                </div>

                <div className="mt-4">
                  <button
                    className="w-full text-white py-2 rounded-md text-sm font-semibold transition"
                    style={{
                      background:
                        "linear-gradient(180deg,#CDA83C 0%,#B8861B 100%)",
                    }}
                  >
                    Bid Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
