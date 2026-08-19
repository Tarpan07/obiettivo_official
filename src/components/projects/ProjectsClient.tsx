"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import ScrollExpand from "@/components/ui/ScrollExpand";
import AccordionGallery from "@/components/ui/AccordionGallery";
import { ImageScatter } from "@/components/ui/image-scatter";



const ACCORDION_ITEMS = [
  { image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80", label: "Alpine Sanctuary", link: "#" },
  { image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=900&q=80", label: "Neon Dreams", link: "#" },
  { image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80", label: "Canopy Light", link: "#" },
  { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80", label: "Reflections", link: "#" },
  { image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=900&q=80", label: "Nebula Pines", link: "#" }
];

const SCATTER_DATA = [
  {
    heading: "PERSPECTIVES",
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    heading: "LIGHT & SHADOW",
    images: [
      "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    heading: "STORIES UNTOLD",
    images: [
      "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    ]
  }
];

export default function ProjectsClient() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const heroTranslateY = -scrollY * 0.25;

  return (
    <div className="relative w-full bg-transparent text-neutral-200">

      {/* 1. Page Header (GSAP ImageScatter Hero) */}
      <section 
        className="relative w-full h-[95vh] flex items-center justify-center border-b border-white/5 z-10 overflow-hidden will-change-[transform,opacity]"
        style={{
          opacity: heroOpacity,
          transform: `translate3d(0, ${heroTranslateY}px, 0)`,
          pointerEvents: heroOpacity === 0 ? "none" : "auto"
        }}
      >
        <ImageScatter
          data={SCATTER_DATA}
          cardWidth={260}
          cardHeight={320}
          animationDuration={0.8}
          animationOverlap={0.45}
          headingFadeDuration={0.4}
          className="h-full w-full"
        />

        {/* Floating Page Intro text block below the heading */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-xl text-center select-none pointer-events-none">
          <div className="flex justify-center items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] font-[family-name:var(--font-syncopate)] text-blue-500 mb-3">
            <span>Obiettivo NIT Silchar</span>
          </div>
          <p className="text-zinc-400 text-xs md:text-sm font-[family-name:var(--font-inter)] leading-relaxed bg-black/40 backdrop-blur-md py-3 px-6 rounded-full border border-white/5">
            A journey through our lenses. Scroll to explore curated moments and expositions.
          </p>
        </div>

      </section>

      {/* 2. Photo Gallery Demo Section */}
      <section className="relative w-full pt-20 pb-12 md:pt-28 md:pb-16 bg-transparent z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 flex flex-col items-center justify-center select-none">
            <div className="flex items-center justify-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] font-[family-name:var(--font-syncopate)] text-zinc-500 mb-4">
              <span>Curated</span>
              <span className="text-blue-500">Moments</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight text-white mb-6">
              Exhibited <span className="text-blue-500">Frames</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-[family-name:var(--font-inter)] leading-relaxed">
              Standalone photographs showcasing our members' distinct artistic expressions, featuring different techniques and perspectives in composition.
            </p>
          </div>

          {/* Accordion Gallery */}
          <div className="w-full">
            <AccordionGallery
              items={ACCORDION_ITEMS}
              defaultIndex={2}
              expandRatio={0.55}
              trigger="hover"
              accentColor="#3b82f6"
              overlayColor="#050505"
              textColor="#ffffff"
              grayscale
              showLabels
              duration={0.6}
              ease="power3.out"
              parallax={0.5}
              tilt={8}
              stagger={0.06}
              height={520}
              gap={12}
              radius={16}
              orientation="horizontal"
            />
          </div>
        </div>
      </section>

      {/* 3. The Projects One-by-One */}
      <section className="relative w-full z-20 bg-transparent border-t border-white/5 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-6 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] font-[family-name:var(--font-syncopate)] text-zinc-500 mb-4">
              <span>Detailed</span>
              <span className="text-blue-500">Expositions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight text-white mb-6">
              Our <span className="text-blue-500">Projects</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-2xl font-[family-name:var(--font-inter)] leading-relaxed">
              Explore our structured projects documenting campus life, culture, landscapes, and storytelling photowalks in Assam.
            </p>
          </div>
        </div>

        {/* Project 1: Tasveer */}
        <div className="relative w-full h-screen">
          <ScrollExpand
            src="/images/home-bg2.jpg"
            title="TASVEER"
            useWindowScroll
            mediaZoom={1.3}
            startWidth={42}
            startHeight={58}
            startRadius={24}
            endRadius={0}
            scrollDistance={1.2}
            holdDistance={0.4}
            smoothing={0.1}
            overlayScrim={0.82}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl px-4 text-center"
            >
              <span className="text-blue-500 font-[family-name:var(--font-syncopate)] text-xs font-bold tracking-[0.3em] uppercase block mb-3">Project I</span>
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight text-white mb-6">
                Tasveer Exhibition
              </h2>
              <p className="text-zinc-300 text-sm md:text-base max-w-lg mx-auto font-[family-name:var(--font-inter)] leading-relaxed mb-8">
                Our flagship annual photography exhibition, highlighting the finest frames captured by club members. A visual testament to diversity in perception, light, and geometry.
              </p>
              <button className="group flex items-center gap-2 mx-auto rounded-full border border-white/15 bg-zinc-950/40 px-8 py-3 text-xs font-medium tracking-wider text-zinc-300 hover:border-blue-500/40 hover:bg-blue-950/15 hover:text-white transition-all duration-300 cursor-pointer">
                <Eye className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-transform duration-300" />
                <span>Explore Tasveer</span>
              </button>
            </motion.div>
          </ScrollExpand>
        </div>

        {/* Project 2: Drishti */}
        <div className="relative w-full h-screen">
          <ScrollExpand
            src="/images/home-bg3.jpg"
            title="DRISHTI"
            useWindowScroll
            mediaZoom={1.3}
            startWidth={42}
            startHeight={58}
            startRadius={24}
            endRadius={0}
            scrollDistance={1.2}
            holdDistance={0.4}
            smoothing={0.1}
            overlayScrim={0.82}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl px-4 text-center"
            >
              <span className="text-blue-500 font-[family-name:var(--font-syncopate)] text-xs font-bold tracking-[0.3em] uppercase block mb-3">Project II</span>
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight text-white mb-6">
                Drishti Photowalks
              </h2>
              <p className="text-zinc-300 text-sm md:text-base max-w-lg mx-auto font-[family-name:var(--font-inter)] leading-relaxed mb-8">
                A street photography initiative capturing local life, rustic markets, and the vibrant people of Assam. Drishti bridges storytelling and human emotions.
              </p>
              <button className="group flex items-center gap-2 mx-auto rounded-full border border-white/15 bg-zinc-950/40 px-8 py-3 text-xs font-medium tracking-wider text-zinc-300 hover:border-blue-500/40 hover:bg-blue-950/15 hover:text-white transition-all duration-300 cursor-pointer">
                <Eye className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-transform duration-300" />
                <span>Explore Drishti</span>
              </button>
            </motion.div>
          </ScrollExpand>
        </div>

        {/* Project 3: Campus Chronicles */}
        <div className="relative w-full h-screen">
          <ScrollExpand
            src="/images/home-bg4.jpg"
            title="CAMPUS"
            useWindowScroll
            mediaZoom={1.3}
            startWidth={42}
            startHeight={58}
            startRadius={24}
            endRadius={0}
            scrollDistance={1.2}
            holdDistance={0.4}
            smoothing={0.1}
            overlayScrim={0.82}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl px-4 text-center"
            >
              <span className="text-blue-500 font-[family-name:var(--font-syncopate)] text-xs font-bold tracking-[0.3em] uppercase block mb-3">Project III</span>
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-sora)] tracking-tight text-white mb-6">
                Campus Chronicles
              </h2>
              <p className="text-zinc-300 text-sm md:text-base max-w-lg mx-auto font-[family-name:var(--font-inter)] leading-relaxed mb-8">
                Celebrating the campus of NIT Silchar. From the tranquil lakes reflecting hostel lights to the historic classrooms, this is our home, documented in frames.
              </p>
              <button className="group flex items-center gap-2 mx-auto rounded-full border border-white/15 bg-zinc-950/40 px-8 py-3 text-xs font-medium tracking-wider text-zinc-300 hover:border-blue-500/40 hover:bg-blue-950/15 hover:text-white transition-all duration-300 cursor-pointer">
                <Eye className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-transform duration-300" />
                <span>Explore</span>
              </button>
            </motion.div>
          </ScrollExpand>
        </div>
      </section>
    </div>
  );
}
