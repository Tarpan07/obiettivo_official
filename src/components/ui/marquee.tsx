"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1.5rem] [flex-direction:row] w-full relative",
        className
      )}
    >
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - var(--gap))); }
        }
        .animate-marquee-custom {
          display: flex;
          flex-shrink: 0;
          gap: var(--gap);
          animation: marquee var(--duration) linear infinite;
          min-width: 100%;
          justify-content: space-around;
        }
        .animate-marquee-custom-reverse {
          animation-direction: reverse;
        }
      `}</style>
      <div
        className={cn(
          "animate-marquee-custom",
          reverse && "animate-marquee-custom-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "animate-marquee-custom",
          reverse && "animate-marquee-custom-reverse",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
