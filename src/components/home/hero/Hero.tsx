"use client";

import { useState, useEffect } from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroSocials from "./HeroSocials";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <HeroBackground activeIndex={activeIndex} />

      <HeroContent />

      <HeroSocials />

      <ScrollIndicator />

      {/* Background Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3.5">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to background slide ${index + 1}`}
            className={`
              relative
              h-2.5
              transition-all
              duration-500
              rounded-full
              cursor-pointer
              focus:outline-none
              ${index === activeIndex ? "w-8 bg-blue-500" : "w-2.5 bg-white/30 hover:bg-white/60"}
            `}
          />
        ))}
      </div>
    </section>
  );
}