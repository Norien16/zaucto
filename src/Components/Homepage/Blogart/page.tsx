"use client";
import React from "react";

export default function BlogsGrid() {
  const blogs = [
    {
      id: 1,
      image: "/Blog1.png",
      author: "ICN Bureau",
      date: "September 17, 2025",
      title: "PPG introduces non-methanol hard coating...",
      excerpt:
        "PPG launches PPG HI-GARD non-methanol hard coating for 1.5 standard index ophthalmic lenses. Designed as a drop-in replacement for...",
    },
    {
      id: 2,
      image: "/Blog2.png",
      author: "ICN Bureau",
      date: "September 10, 2025",
      title: "Covestro expands technology for NIA-PFAS...",
      excerpt:
        "Covestro expands production of its NIA-PFAS super-durable flexible powder coating polyester (Uralac Premium P 8000 and P 9000) to...",
    },
    {
      id: 3,
      image: "/Blog3.png",
      author: "ICN Bureau",
      date: "February 21, 2025",
      title: "India aims to auction maximum critical mineral...",
      excerpt:
        "India plans to maximise the auction of critical mineral blocks by 2031, advancing its strategic push to secure domestic supply chains...",
    },
  ];

  return (
    <section className="bg-white py-16 font-dm">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl  tracking-tight mb-12">
          <span className="mr-3 font-extrabold">Blogs &</span>
          <span className="italic text-gold font-playfair">Articles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {blogs.map((b, idx) => (
            <article
              key={b.id}
              className={`relative bg-white border border-gray-100 rounded-xl p-6 h-[480px] flex flex-col justify-between ${
                idx === 1 ? "shadow-2xl" : "shadow-sm"
              }`}
            >
              <div>
                <div className="rounded-lg overflow-hidden mb-4 border border-gray-100">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-40 md:h-48 object-cover rounded-lg"
                  />
                </div>

                <div className="text-sm text-gray-500 mb-3 flex items-center gap-6">
                  <div>
                    <span className="text-gray-400">By:</span>
                    <span className="ml-2 font-medium text-gray-800">{b.author}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">On:</span>
                    <span className="ml-2 font-medium text-gray-800">{b.date}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-xl md:text-2xl leading-snug mb-3">
                  {b.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">{b.excerpt}</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <a
                  className="inline-flex items-center text-base font-medium text-gray-700 hover:text-gray-900"
                  href="#"
                >
                  <span className="mr-3 text-xl">→</span>
                  Continue Reading
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-17">
           <button className="bg-gradient-to-r from-[#D3AF37] to-[#7B6300]  hover:bg-[#D3AF37] text-white text-medium  px-9 py-3 rounded-lg shadow-lg transition">
            Explore All Blogs
          </button>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");

        :root {
          --gold: #cfa93e;
        }

        .text-gold {
          color: var(--gold);
        }

        .font-dm {
          font-family: "DM Sans", sans-serif;
        }

        .font-playfair {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </section>
  );
}
