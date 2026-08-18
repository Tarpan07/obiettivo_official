"use client";

import Link from "next/link";
import React from "react";

export default function HeroButton() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Link
        href="/gallery"
        className="
        group
        flex
        items-center
        justify-center
        rounded-sm
        bg-blue-600
        px-8
        py-4
        text-xs
        font-semibold
        uppercase
        tracking-[0.18em]
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:bg-blue-500
        hover:shadow-xl
        hover:shadow-blue-500/20
        cursor-pointer
        "
      >
        Explore Our Work
      </Link>

      <button
        onClick={() => window.dispatchEvent(new CustomEvent("open-contact-modal"))}
        className="
        group
        flex
        items-center
        justify-center
        rounded-sm
        border
        border-white/20
        bg-black/40
        px-8
        py-4
        text-xs
        font-semibold
        uppercase
        tracking-[0.18em]
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:bg-white/10
        hover:border-white/40
        cursor-pointer
        "
      >
        Join Us
      </button>
    </div>
  );
}