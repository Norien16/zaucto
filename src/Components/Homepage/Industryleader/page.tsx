"use client";

import React, { useRef } from "react";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });

const testimonials = [
  {
    id: 1,
    quote:
      "“This platform has revolutionized our procurement process. We have achieved 30% cost savings while maintaining quality standards. The reverse auction format brings out the best competitive pricing from our suppliers.”",
    name: "David Chen",
    title: "Chief Procurement Officer, TechCorp Industries",
    avatar: "/avatars/avatar1.png",
  },
  {
    id: 2,
    quote:
      "“The transparency and efficiency of this platform is unmatched. Our suppliers love the fair competition, and we love the significant cost reductions. It's a win–win for everyone involved.”",
    name: "Sarah Martinez",
    title: "VP of Operations, Global Manufacturing",
    avatar: "/avatars/avatar2.png",
  },
  {
    id: 3,
    quote:
      "“We've processed over $50M in procurement through this platform. The analytics, supplier vetting, and contract management tools have streamlined our entire operation.”",
    name: "Michael Thompson",
    title: "Strategic Sourcing Director, Enterprise Solutions",
    avatar: "/avatars/avatar3.png",
  },
];

export default function TrustedTestimonials() {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: "left" | "right") => {
    const el = scroller.current;
    if (!el) return;
    const amount = el.clientWidth;
    const target =
      direction === "left" ? el.scrollLeft - amount : el.scrollLeft + amount;
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <section className={`${dm.className} dm-page relative bg-white`}>
      <div className="border-t border-gray-200" />

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          {/* Heading + controls */}
          <div className="flex items-start justify-between mb-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                <span className="mr-2">Trusted By Industry</span>
                <span className={`italic text-gold ${playfair.className}`}>
                  Leaders
                </span>
              </h2>
              <p className="mt-3 text-gray-500">
                Discover why procurement professionals choose our platform for
                their most critical sourcing initiatives.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                aria-label="previous"
                onClick={() => scrollBy("left")}
                className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:shadow-sm"
              >
                ‹
              </button>
              <button
                aria-label="next"
                onClick={() => scrollBy("right")}
                className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center shadow-md"
              >
                ›
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="relative">
            <div
              ref={scroller}
              className="cards-row flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-6"
            >
              {testimonials.map((t) => (
                <blockquote
                  key={t.id}
                  className="three-card bg-white border border-gray-100 rounded-md p-6 flex-shrink-0 shadow-sm"
                >
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                    {t.quote}
                  </p>

                  <footer className="flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover shadow-sm"
                    />
                    <div>
                      <div className="text-gray-900 font-semibold">{t.name}</div>
                      <div className="text-gray-500 text-sm">{t.title}</div>
                      <div className="mt-2 flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-gold"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.462c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.603 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.05 2.927z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Fade masks */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-28 bg-gradient-to-r from-gray-50 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-28 bg-gradient-to-l from-gray-50 to-transparent" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");

        :root {
          --gold: #cfa93e;
          --gap: 80px; /* more spacing between cards */
        }

        .dm-page {
          font-family: "DM Sans", system-ui, -apple-system, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, "Noto Sans", sans-serif;
        }

        .italic {
          font-family: "Playfair Display", Georgia, "Times New Roman", serif;
        }

        .text-gold {
          color: var(--gold);
        }
        .bg-gold {
          background: var(--gold);
        }

        .cards-row {
          display: flex;
          gap: var(--gap);
          -webkit-overflow-scrolling: touch;
        }

        .three-card {
          flex: 0 0 calc((100% - (var(--gap) * 2)) / 3);
          max-width: calc((100% - (var(--gap) * 2)) / 3);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
