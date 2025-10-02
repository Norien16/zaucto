"use client";

import React, { useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import { DM_Sans, Playfair_Display } from "next/font/google";

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
});

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "This platform has revolutionized our procurement process. We have achieved 30% cost savings while maintaining quality standards. The reverse auction format brings out the best competitive pricing from our suppliers.",
    name: "David Chen",
    title: "Chief Procurement Officer, TechCorp Industries",
    avatar: "/sara.png",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The transparency and efficiency of this platform is unmatched. Our suppliers love the fair competition, and we love the significant cost reductions. It's a win–win for everyone involved.",
    name: "Sarah Martinez",
    title: "VP of Operations, Global Manufacturing",
    avatar: "/Michel.png",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "We've processed over $50M in procurement through this platform. The analytics, supplier vetting, and contract management tools have streamlined our entire operation.",
    name: "Michael Thompson",
    title: "Strategic Sourcing Director, Enterprise Solutions",
    avatar: "/sara.png",
    rating: 5,
  },
];

function ArrowSVG({ direction = "left", size = 20 }: { direction?: "left" | "right"; size?: number }) {
  const rotate = direction === "left" ? 180 : 0;
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Simple star renderer. value: number of filled stars (0..max). */
function Stars({ value = 5, max = 5 }: { value?: number; max?: number }) {
  const stars = Array.from({ length: max }, (_, i) => i < value);
  const starColor = "#D3AF47"; // interpreted from your input
  return (
    <div className="flex items-center gap-1" aria-hidden>
      {stars.map((filled, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          viewBox="0 0 20 20"
          fill={filled ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={filled ? 0 : 1.2}
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: starColor }}
        >
          <path
            d="M10 1.5l2.6 5.26 5.81.84-4.2 4.09.99 5.77L10 14.77l-5.2 2.69.99-5.77L1.6 7.6l5.81-.84L10 1.5z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      ))}
      <span className="sr-only">{value} out of {max} stars</span>
    </div>
  );
}

export default function TrustedTestimonials() {
  const scroller = useRef<HTMLDivElement | null>(null);
  const testimonials = useMemo(() => TESTIMONIALS, []);

  const scrollBy = useCallback((direction: "left" | "right") => {
    const el = scroller.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>(".three-card");
    const GAP_PX = 32;
    const cardWidth = firstCard ? firstCard.clientWidth + GAP_PX : el.clientWidth;
    const target = direction === "left" ? el.scrollLeft - cardWidth : el.scrollLeft + cardWidth;
    el.scrollTo({ left: target, behavior: "smooth" });
  }, []);

  return (
    <section className={`${dm.className} relative bg-white`}>
      <div className="" />

      <div className="">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          {/* Heading + controls */}
          <div className="flex items-start justify-between mb-8 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-5xl text-gray-900">
                <span className="mr-2 font-bold">Trusted By Industry</span>
                <span className={`${playfair.className} italic text-gold`}>Leaders</span>
              </h2>
              <p className="mt-3 text-gray-500">
                Discover why procurement professionals choose our platform for their most critical sourcing initiatives.
              </p>
            </div>

            <div className="flex items-center gap-3 z-40">
              <button
                aria-label="previous testimonials"
                onClick={() => scrollBy("left")}
                className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gold z-40"
              >
                <span className="sr-only">Previous</span>
                <ArrowSVG direction="left" />
              </button>

              <button
                aria-label="next testimonials"
                onClick={() => scrollBy("right")}
                className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gold z-40"
              >
                <span className="sr-only">Next</span>
                <ArrowSVG direction="right" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width carousel row wrapped in overflow-hidden */}
      <div className="relative overflow-hidden -mt-[3%] pb-20">
        {/* Even stronger left fade overlay */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full z-30 fade-left"
          aria-hidden
        />
        {/* Even stronger right fade overlay */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full z-30 fade-right"
          aria-hidden
        />

        <div
          ref={scroller}
          className="no-scrollbar overflow-x-auto scroll-smooth relative z-10"
          aria-label="client testimonials carousel"
          role="region"
        >
          <div className="flex gap-8 cards-row px-6 md:px-12" style={{ alignItems: "stretch" }}>
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="three-card snap-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-h-[320px]"
                aria-labelledby={`testimonial-${t.id}-name`}
                role="group"
              >
                <p className="text-gray-700 text-base md:text-lg mb-6">“{t.quote}”</p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.avatar} alt={`${t.name} avatar`} fill sizes="48px" className="object-cover" />
                  </div>

                  <div>
                    <h3 id={`testimonial-${t.id}-name`} className="font-semibold text-gray-900">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-500">{t.title}</p>

                    {/* Stars inserted here */}
                    <div className="mt-2">
                      <Stars value={t.rating ?? 5} max={5} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        :root {
          --gold: #cfa93e;
          --gap: 32px;
        }

        .text-gold {
          color: var(--gold);
        }
        .bg-gold {
          background: var(--gold);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .three-card {
          flex: 0 0 calc((100vw - (var(--gap) * 2)) / 3);
          max-width: calc((100vw - (var(--gap) * 2)) / 3);
          scroll-snap-align: center;
        }

        .cards-row {
          padding: 24px 0;
        }

        .three-card img {
          display: block;
        }

        /* Much stronger, wider fades */
        .fade-left,
        .fade-right {
          width: 120px; /* default width on mobile */
        }

        @media (min-width: 768px) {
          .fade-left,
          .fade-right {
            width: 260px; /* much wider on md+ screens for a pronounced effect */
          }
        }

        .fade-left {
          left: 0;
          background: linear-gradient(
            90deg,
            rgba(249, 250, 251, 1) 0%,
            rgba(249, 250, 251, 1) 12%,
            rgba(249, 250, 251, 0.95) 24%,
            rgba(249, 250, 251, 0.8) 40%,
            rgba(249, 250, 251, 0.55) 60%,
            rgba(249, 250, 251, 0.25) 80%,
            rgba(249, 250, 251, 0) 100%
          );
        }

        .fade-right {
          right: 0;
          background: linear-gradient(
            270deg,
            rgba(249, 250, 251, 1) 0%,
            rgba(249, 250, 251, 1) 12%,
            rgba(249, 250, 251, 0.95) 24%,
            rgba(249, 250, 251, 0.8) 40%,
            rgba(249, 250, 251, 0.55) 60%,
            rgba(249, 250, 251, 0.25) 80%,
            rgba(249, 250, 251, 0) 100%
          );
        }
      `}</style>
    </section>
  );
}
