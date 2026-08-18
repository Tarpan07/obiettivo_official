"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Eye, Filter, ChevronDown } from "lucide-react";
import { CylinderCarousel } from "@/components/ui/cylinder-carousel";
import Masonry from "./Masonry";
import FestivalsSection from "@/components/home/FestivalsSection";

// Gallery Items Data
const GALLERY_ITEMS = [
  // Monochrome
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    title: "Classic Capture",
    category: "Monochrome",
    photographer: "Rahul Sharma",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    title: "The Melancholic Jazz",
    category: "Monochrome",
    photographer: "Ishita Das",
  },
  // Street
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    title: "Midnight Alley",
    category: "Street",
    photographer: "Ankit Gogoi",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=800&q=80",
    title: "Cyberpunk Tokyo",
    category: "Street",
    photographer: "Sourav Nath",
  },
  // Portraits
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    title: "Expressions",
    category: "Portraits",
    photographer: "Sneha Roy",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    title: "Rust & Shadows",
    category: "Portraits",
    photographer: "Vikramjit Paul",
  },
  // Nature & Landscapes
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    title: "Alpine Peaks",
    category: "Nature",
    photographer: "Priyam Borah",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    title: "Enshrouded Woods",
    category: "Nature",
    photographer: "Debojyoti Dey",
  },
  // Creative
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    title: "Chlorophyll Light",
    category: "Creative",
    photographer: "Abhishek Sen",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1513829096999-4978602297af?auto=format&fit=crop&w=800&q=80",
    title: "Luminescent Trails",
    category: "Creative",
    photographer: "Tanmoy Baruah",
  },
];

// Carousel items (WebGL)
const CAROUSEL_ITEMS = [
  { image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80", text: "Heritage" },
  { image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80", text: "Urbanity" },
  { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", text: "Identity" },
  { image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80", text: "Serenity" },
  { image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80", text: "Abstract" },
  { image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80", text: "Wilderness" },
  { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", text: "Vistas" },
  { image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80", text: "Luminescence" },
  { image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80", text: "Deciduous" },
  { image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80", text: "Meadows" },
  { image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80", text: "Solaris" },
  { image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=800&q=80", text: "Aero" },
  { image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80", text: "Sombre" },
  { image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80", text: "Athletics" },
  { image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80", text: "Summit" },
];

const CAROUSEL_IMAGES = CAROUSEL_ITEMS.map((item) => ({
  src: item.image,
  alt: item.text,
}));

const CATEGORIES = ["All", "Monochrome", "Street", "Portraits", "Nature", "Creative"];

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const masonryItems = filteredItems.map((item) => {
    // Generate distinct heights for staggered masonry layout
    const heights = [320, 390, 270, 360, 310, 400, 280, 370, 330, 420];
    const height = heights[(item.id - 1) % heights.length];
    return {
      id: item.id.toString(),
      img: item.image,
      url: "#",
      height: height,
      title: item.title,
      category: item.category,
      photographer: item.photographer,
    };
  });

  return (
    <div className="relative min-h-screen w-full bg-transparent text-neutral-200 overflow-x-hidden pt-28 pb-0">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
      
      {/* 1. Header Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center select-none mb-10">
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-blue-500 font-[family-name:var(--font-syncopate)] block mb-4">
          Visual Exposition
        </span>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-[family-name:var(--font-sora)]">
          The <span className="text-blue-500 font-light">Exhibition</span> Room
        </h1>
        <p className="mt-4 text-sm md:text-base font-light text-zinc-400 max-w-2xl mx-auto font-[family-name:var(--font-inter)] leading-relaxed">
          Through the viewfinder, we compose our thoughts. Explore NIT Silchar's premier collections, captured moments, and cinematic storytelling.
        </p>
      </section>

      {/* 2. Interactive Curvature Slider Section */}
      <section className="relative z-10 w-full h-[500px] md:h-[560px] mb-20 overflow-hidden flex items-center justify-center border-t border-white/5 bg-zinc-950/20 backdrop-blur-[1px]">
        <div className="w-full h-full">
          <CylinderCarousel images={CAROUSEL_IMAGES} cardWidth={300} animationDuration={55} />
        </div>
        
        {/* Glowing pulsing separator line at the top of the section */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] animate-[pulse-glow_4s_ease-in-out_infinite]"
          style={{
            background: "linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.2) 40%, rgba(59, 130, 246, 1) 45%, rgba(59, 130, 246, 1) 55%, rgba(59, 130, 246, 0.2) 60%, rgba(59, 130, 246, 0.2) 100%)",
          }}
        />

        <style>
          {`
            @keyframes pulse-glow {
              0%, 100% {
                opacity: 0.25;
                filter: drop-shadow(0 0 2px rgba(59, 130, 246, 0.3));
              }
              50% {
                opacity: 1.0;
                filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.8));
              }
            }
          `}
        </style>
      </section>

      {/* 3. Filterable Grid Area */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title and Dropdown Filter Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/5 pb-8 mb-12 gap-6 relative">
          <div className="flex items-center gap-3 select-none">
            <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-sora)]">
              Exhibits Collective
            </h2>
          </div>

          {/* Photography Category Dropdown Selector at corner right */}
          <div className="relative min-w-[220px] w-full sm:w-auto">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full sm:w-[220px] flex items-center justify-between bg-[#0b0b0c] border border-white/10 rounded-xl px-4 py-3 text-xs font-semibold tracking-wider uppercase text-zinc-300 hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Filter size={13} className="text-blue-500" />
                <span className="truncate">{selectedCategory} Exhibition</span>
              </div>
              <ChevronDown
                size={14}
                className={`text-zinc-500 transition-transform duration-300 ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Options Absolute Menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <>
                  {/* Backdrop click to overlay close */}
                  <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+8px)] right-0 left-0 sm:left-auto sm:w-[220px] z-50 overflow-hidden bg-[#0c0c0e]/95 border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl max-h-[300px] overflow-y-auto"
                  >
                    <div className="p-1.5 space-y-1">
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setSelectedCategory(cat);
                            setIsDropdownOpen(false);
                          }}
                          className={`
                            w-full text-left px-3.5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer
                            ${
                              selectedCategory === cat
                                ? "bg-blue-600/20 text-blue-400 border border-blue-500/10"
                                : "hover:bg-white/[0.04] text-zinc-400 hover:text-white"
                            }
                          `}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Photos Grid using Masonry */}
        <div className="w-full">
          <Masonry
            items={masonryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.04}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.96}
            blurToFocus
            colorShiftOnHover={false}
            onItemClick={(clickedItem) => {
              const originalItem = GALLERY_ITEMS.find((g) => g.id.toString() === clickedItem.id);
              if (originalItem) {
                setSelectedPhoto(originalItem);
              }
            }}
          />
        </div>
      </section>

      {/* 4. College Festivals Archives */}
      <FestivalsSection />

      {/* 5. Fullscreen Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[85vh] bg-[#0b0b0c] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:grid md:grid-cols-[1.4fr_0.6fr]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 border border-white/10 text-white/80 hover:text-white cursor-pointer hover:bg-black"
              >
                ✕
              </button>

              {/* Photo Area */}
              <div className="relative w-full h-[40vh] md:h-full bg-black flex items-center justify-center">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Sidebar Info Area */}
              <div className="p-6 md:p-8 flex flex-col justify-between h-auto md:h-full bg-[#0b0b0c] border-t md:border-t-0 md:border-l border-white/10">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400 font-[family-name:var(--font-syncopate)] px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                      {selectedPhoto.category}
                    </span>
                  </div>
                  
                  <h2 className="mt-4 text-xl md:text-2xl font-bold text-white font-[family-name:var(--font-sora)]">
                    {selectedPhoto.title}
                  </h2>

                  <div className="mt-8 border-t border-white/5 pt-4 space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-light">Captured by</span>
                      <span className="text-zinc-300 font-medium">{selectedPhoto.photographer}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-light">Equipment</span>
                      <span className="text-zinc-300">Sony Alpha 7M3 / 50mm f/1.8</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-500 font-light">Exposure</span>
                      <span className="text-zinc-300">1/160s, f/2.2, ISO 800</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-0 select-none">
                  <p className="text-[10px] text-zinc-500 leading-relaxed font-[family-name:var(--font-inter)]">
                    &copy; 2026 Obiettivo Club. Selected for the digital exhibition at NIT Silchar. All rights reserved to their respective artists.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
