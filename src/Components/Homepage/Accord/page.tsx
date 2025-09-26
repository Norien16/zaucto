"use client";
import React, { useState } from "react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What is an auction?",
    answer:
      "An auction is a public sale where goods or services are sold to the highest bidder. Bidders compete to offer the highest price, and the item is awarded to the bidder.",
  },
  {
    id: 2,
    question: "How do auctions work?",
    answer:
      "Auctions typically have a start time, a bidding process, and a close time. Bidders place bids; the highest bid at close wins. There are many auction formats (English, Dutch, sealed-bid).",
  },
  {
    id: 3,
    question: "Can I participate online?",
    answer:
      "Yes — many houses and marketplaces host live or timed online auctions. You usually register, supply payment information, and place bids through their interface.",
  },
  {
    id: 4,
    question: "Are there fees?",
    answer:
      "Some auctions charge buyer's premiums, registration fees, or handling/shipping fees. Always read the terms before bidding.",
  },
  {
    id: 5,
    question: "What should I check before bidding?",
    answer:
      "Inspect the item's condition, provenance, any guarantees, and shipping costs. If available, attend previews or request condition reports.",
  },
];

export default function Accord() {
  const [openId, setOpenId] = useState<number | null>(1); // default open first item

  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section className="bg-white mt-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="inline-block text-5xl font-extrabold text-[#0B0C0c] mr-2">
            Frequently
          </h2>
          <span
            className="inline-block text-5xl tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="italic bg-clip-text text-[#CFAC35]">
              Asked Questions
            </span>
          </span>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-2 rounded-xl focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${faq.id}`}
                >
                  {/* Question */}
                  <h3 className="text-xl mt-5 font-bold text-[#0B0c0c]">
                    {faq.question}
                  </h3>

                  {/* Icon Circle */}
                  <span
                    className={`inline-flex items-center mt-5 justify-center h-9 w-9 rounded-full border border-yellow-200 shadow-sm transition-colors ${
                      isOpen
                        ? "bg-gradient-to-l from-[#D3AF37] to-[#7B6300]"
                        : "bg-[#D3AF37]"
                    }`}
                  >
                    {isOpen ? (
                      // minus icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      // plus icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-${faq.id}`}
                  className={`px-6 pb-5 transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-screen opacity-100 shadow-lg shadow-gray-200" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#666666] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap");
        `}</style>
      </div>
    </section>
  );
}
