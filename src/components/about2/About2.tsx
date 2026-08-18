"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, Film, Lightbulb } from "lucide-react";

export default function About2() {
  return (
    <section className="relative min-h-[90vh] w-full bg-transparent flex flex-col items-center justify-center py-20 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* Soft Vignette & Gradients to guarantee text readability while keeping starry background visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]/40" />

        {/* Smooth Top & Bottom Feather Transitions */}
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#050505] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col items-center">
        {/* Two-Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* Left Column: Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Section Subtitle */}
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-blue-500 font-[family-name:var(--font-syncopate)]">
              About Us
            </span>

            {/* Section Title */}
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-white font-[family-name:var(--font-sora)] leading-[1.15]">
              We are storytellers
              <br />
              behind the <span className="text-blue-500">lens.</span>
            </h2>

            {/* Description Text */}
            <p className="mt-6 text-sm md:text-base font-light leading-relaxed text-zinc-400 max-w-xl font-[family-name:var(--font-sora)]">
              Obiettivo is a photography and filmmaking club dedicated to visual storytelling,
              creative expression, and cinematic excellence. We believe every frame has a story.
            </p>

            {/* Core Pillars List */}
            <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Pillar 1: Photography */}
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white uppercase tracking-wider font-[family-name:var(--font-sora)]">
                  Photography
                </h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-zinc-500 font-[family-name:var(--font-sora)]">
                  Capturing moments that last forever.
                </p>
              </div>

              {/* Pillar 2: Filmmaking */}
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Film className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white uppercase tracking-wider font-[family-name:var(--font-sora)]">
                  Filmmaking
                </h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-zinc-500 font-[family-name:var(--font-sora)]">
                  Turning ideas into powerful visuals.
                </p>
              </div>

              {/* Pillar 3: Creativity */}
              <div className="flex flex-col items-start">
                <div className="flex items-center justify-center p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white uppercase tracking-wider font-[family-name:var(--font-sora)]">
                  Creativity
                </h3>
                <p className="mt-2 text-xs font-light leading-relaxed text-zinc-500 font-[family-name:var(--font-sora)]">
                  Inspiring imagination through vision.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Camera / Scenic Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full aspect-[4/3] sm:aspect-[1.5] lg:aspect-[1.3] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
          >
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80"
              alt="Obiettivo Camera Scenic Sunset"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle overlay shading for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>

        {/* Explore Our Work CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 w-full flex justify-center"
        >
          <Link
            href="/gallery"
            className="
              group
              flex
              items-center
              gap-2.5
              rounded-full
              border
              border-blue-500/30
              bg-blue-950/10
              px-8
              py-4
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-zinc-300
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-blue-500
              hover:bg-blue-600
              hover:text-white
              hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]
              cursor-pointer
            "
          >
            <span>Explore our work</span>
            <svg
              className="w-4 h-4 text-zinc-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
