"use client";

import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";

const GALLERY_ITEMS = [
  { image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80", text: "Electric Stage" },
  { image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80", text: "Glass Focus" },
  { image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80", text: "Grand Facade" },
  { image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80", text: "Studio Light" },
  { image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", text: "Sunlit Coast" },
  { image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800&q=80", text: "B&W Capture" },
  { image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80", text: "City Pulse" },
  { image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80", text: "Santorini Skies" },
  { image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80", text: "Deep Forest" },
  { image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80", text: "Neon Night" },
  { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80", text: "Wild Vista" },
  { image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80", text: "Urban Grid" },
];

export default function FeaturedMoments() {
  return (
    <section className="relative w-full bg-transparent pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden flex flex-col items-center">
      {/* Header Container */}
      <div className="relative w-full max-w-4xl px-6 mb-12 flex flex-col items-center justify-center">
        {/* Shutter Watermark graphic on the left */}
        <div className="absolute left-[8%] md:left-[22%] top-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-10">
          <svg
            className="w-28 h-28 md:w-36 md:h-36 text-neutral-400 fill-none stroke-[1.2]"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer border & ticking */}
            <circle cx="50" cy="50" r="46" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="42" />

            {/* Aperture blades forming a central octagon opening */}
            <line x1="90" y1="50" x2="33.1" y2="86.2" />
            <line x1="78.3" y1="78.3" x2="12.4" y2="63.7" />
            <line x1="50" y1="90" x2="13.8" y2="33.1" />
            <line x1="21.7" y1="78.3" x2="36.3" y2="12.4" />
            <line x1="10" y1="50" x2="66.9" y2="13.8" />
            <line x1="21.7" y1="21.7" x2="87.6" y2="36.3" />
            <line x1="50" y1="10" x2="86.2" y2="66.9" />
            <line x1="78.3" y1="21.7" x2="63.7" y2="87.6" />

            {/* Inner ring */}
            <circle cx="50" cy="50" r="16" strokeWidth="0.5" strokeDasharray="1 2" />
          </svg>
        </div>

        {/* Heading Text */}
        <div className="relative z-10 text-center select-none">
          <div className="flex justify-center items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] font-[family-name:var(--font-syncopate)]">
            <span className="text-zinc-500">Curated Reels</span>
          </div>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-sora)]">
            Glimpse of <span className="text-blue-500">Lens</span>
          </h2>

          {/* Underline custom indicator */}
          <div className="relative mt-5 h-[2px] w-20 bg-zinc-800 mx-auto overflow-hidden rounded-full">
            <div className="absolute top-0 bottom-0 left-[35%] right-[35%] bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        <CircularGallery
          items={GALLERY_ITEMS}
          bend={1}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
          fontUrl="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap"
          font="bold 30px Orbitron"
          scrollSpeed={2}
        />
      </div>
    </section>
  );
}
