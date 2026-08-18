"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScatterSet {
  heading: string;
  images: string[];
}

export interface ImageScatterProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ScatterSet[];
  cardWidth?: number;
  cardHeight?: number;
  animationDuration?: number;
  animationOverlap?: number;
  headingFadeDuration?: number;
  scroller?: string | Element | null;
}

export function ImageScatter({
  data,
  cardWidth = 250,
  cardHeight = 300,
  animationDuration = 0.75,
  animationOverlap = 0.5,
  headingFadeDuration = 0.5,
  scroller,
  className,
  ...props
}: ImageScatterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current || !galleryRef.current || !headingRef.current || data.length === 0) return;

    const gallery = galleryRef.current;
    const galleryHeading = headingRef.current;

    let cardW = cardWidth;
    let cardH = cardHeight;

    let viewport = {
      centerX: containerRef.current.clientWidth / 2,
      centerY: containerRef.current.clientHeight / 2,
    };

    let state = {
      activeCards: [] as { element: HTMLDivElement; centerX: number; centerY: number }[],
      currentSection: 0,
      isAnimating: false,
    };

    function updateViewport() {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      viewport.centerX = w / 2;
      viewport.centerY = h / 2;

      // Adaptive card sizing based on display viewport width
      if (w < 640) {
        cardW = 120;
        cardH = 150;
      } else if (w < 1024) {
        cardW = 170;
        cardH = 210;
      } else {
        cardW = cardWidth;
        cardH = cardHeight;
      }
    }

    // Call once to establish reactive width/height
    updateViewport();

    function getEdgePosition(centerX: number, centerY: number) {
      const containerWidth = containerRef.current?.clientWidth || window.innerWidth;
      const containerHeight = containerRef.current?.clientHeight || window.innerHeight;

      const distances = {
        left: centerX,
        right: containerWidth - centerX,
        top: centerY,
        bottom: containerHeight - centerY,
      };

      const minDistance = Math.min(...Object.values(distances));
      const cardCenterOffsetX = cardW / 2;
      const cardCenterOffsetY = cardH / 2;
      const offsetVariation = () => (Math.random() - 0.5) * 400;

      if (minDistance === distances.left) {
        return {
          x: -cardW - 100 - Math.random() * 200,
          y: centerY - cardCenterOffsetY + offsetVariation(),
        };
      }
      if (minDistance === distances.right) {
        return {
          x: containerWidth + 50 + Math.random() * 200,
          y: centerY - cardCenterOffsetY + offsetVariation(),
        };
      }
      if (minDistance === distances.top) {
        return {
          x: centerX - cardCenterOffsetX + offsetVariation(),
          y: -cardH - 100 - Math.random() * 200,
        };
      }

      return {
        x: centerX - cardCenterOffsetX + offsetVariation(),
        y: containerHeight + 50 + Math.random() * 200,
      };
    }

    function createCards(sectionIndex: number) {
      const cards: { element: HTMLDivElement; centerX: number; centerY: number }[] = [];
      const sectionData = data[sectionIndex];
      
      if (!sectionData || !sectionData.images.length) return cards;

      const containerWidth = containerRef.current?.clientWidth || window.innerWidth;
      const containerHeight = containerRef.current?.clientHeight || window.innerHeight;

      sectionData.images.forEach((src, cardIndex) => {
        const card = document.createElement("div");
        card.className = "absolute rounded-2xl border-4 border-zinc-900 bg-zinc-900 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.65)] overflow-hidden will-change-transform";
        card.style.width = `${cardW}px`;
        card.style.height = `${cardH}px`;

        const img = document.createElement("img");
        img.src = src;
        img.className = "w-full h-full object-cover rounded-lg pointer-events-none";
        card.appendChild(img);

        // Map positions to an ellipse matching the display screen's rectangle aspect ratio
        const angle = (cardIndex / sectionData.images.length) * Math.PI * 2 + Math.random() * 0.3;
        // Multiplier factors ranging from 0.35 to 0.76 of half-screen size
        const distFactorX = 0.35 + Math.random() * 0.41;
        
        // Pushing top images down (away from navbar) and keeping bottom images high enough to show clean popping
        const isTopHalf = Math.sin(angle) < 0;
        const distFactorY = isTopHalf
          ? (0.12 + Math.random() * 0.22) // stay closer to vertical center on top
          : (0.18 + Math.random() * 0.28); // stay slightly higher from the bottom edge
        
        const centerX = viewport.centerX + Math.cos(angle) * (containerWidth * 0.5 * distFactorX);
        const centerY = viewport.centerY + Math.sin(angle) * (containerHeight * 0.5 * distFactorY);

        gsap.set(card, {
          left: centerX - cardW / 2,
          top: centerY - cardH / 2,
          rotation: Math.random() * 50 - 25,
        });

        gallery.appendChild(card);
        cards.push({ element: card, centerX, centerY });
      });

      return cards;
    }

    function animateHeading(newText: string) {
      return gsap
        .timeline()
        .to(galleryHeading, {
          opacity: 0,
          duration: headingFadeDuration,
          ease: "power2.inOut",
        })
        .call(() => {
          galleryHeading.textContent = newText;
        })
        .to(galleryHeading, {
          opacity: 1,
          duration: headingFadeDuration,
          ease: "power2.inOut",
        });
    }

    function animateCards(
      exitingCards: { element: HTMLDivElement; centerX: number; centerY: number }[],
      enteringCards: { element: HTMLDivElement; centerX: number; centerY: number }[]
    ) {
      const tl = gsap.timeline();

      exitingCards.forEach(({ element, centerX, centerY }) => {
        const targetEdge = getEdgePosition(centerX, centerY);
        tl.to(
          element,
          {
            left: targetEdge.x,
            top: targetEdge.y,
            rotation: Math.random() * 180 - 90,
            duration: animationDuration,
            ease: "power2.in",
            onComplete: () => element.remove(),
          },
          0
        );
      });

      enteringCards.forEach(({ element, centerX, centerY }) => {
        const targetEdge = getEdgePosition(centerX, centerY);
        gsap.set(element, {
          left: targetEdge.x,
          top: targetEdge.y,
          rotation: Math.random() * 180 - 90,
        });

        tl.to(
          element,
          {
            left: centerX - cardW / 2,
            top: centerY - cardH / 2,
            rotation: Math.random() * 50 - 25,
            duration: animationDuration,
            ease: "power2.out",
          },
          animationOverlap
        );
      });

      return tl;
    }

    function reinitialize() {
      // Clear the gallery DOM clean on resize to prevent orphaned elements
      gallery.innerHTML = "";
      updateViewport();
      
      const resizedCards = createCards(state.currentSection);
      state.activeCards = resizedCards;
      
      // Animate cards on resize rather than setting them statically
      resizedCards.forEach(({ element, centerX, centerY }) => {
        const targetEdge = getEdgePosition(centerX, centerY);
        gsap.set(element, {
          left: targetEdge.x,
          top: targetEdge.y,
          rotation: Math.random() * 180 - 90,
        });

        gsap.to(element, {
          left: centerX - cardW / 2,
          top: centerY - cardH / 2,
          rotation: Math.random() * 50 - 25,
          duration: animationDuration,
          ease: "power2.out",
        });
      });
    }

    // Initialize first section with an elegant entry animation on mount
    const initialCards = createCards(0);
    state.activeCards = initialCards;
    galleryHeading.textContent = data[0]?.heading || "";
    gsap.set(galleryHeading, { opacity: 0 });

    // Animate heading in
    gsap.to(galleryHeading, {
      opacity: 1,
      duration: headingFadeDuration,
      ease: "power2.out",
    });

    // Animate cards in
    initialCards.forEach(({ element, centerX, centerY }) => {
      const targetEdge = getEdgePosition(centerX, centerY);
      gsap.set(element, {
        left: targetEdge.x,
        top: targetEdge.y,
        rotation: Math.random() * 180 - 90,
      });

      gsap.to(element, {
        left: centerX - cardW / 2,
        top: centerY - cardH / 2,
        rotation: Math.random() * 50 - 25,
        duration: animationDuration,
        ease: "power2.out",
        delay: Math.random() * 0.25, // stagger entry for natural look
      });
    });

    let intervalId: NodeJS.Timeout;

    function nextSection() {
      if (state.isAnimating) return;

      const targetSection = (state.currentSection + 1) % data.length;

      state.isAnimating = true;
      const newCards = createCards(targetSection);

      Promise.all([
        Promise.resolve(animateCards(state.activeCards, newCards)),
        Promise.resolve(animateHeading(data[targetSection]?.heading || "")),
      ]).then(() => {
        // Double-check sweep of the gallery DOM: remove any element not belonging to the new set
        const newCardElements = new Set(newCards.map(c => c.element));
        Array.from(gallery.childNodes).forEach((node) => {
          if (!newCardElements.has(node as HTMLDivElement)) {
            node.remove();
          }
        });

        state.activeCards = newCards;
        state.currentSection = targetSection;
        state.isAnimating = false;
      });
    }

    intervalId = setInterval(nextSection, 4000); // Play every 4 seconds to allow appreciation of images

    const handleResize = () => {
      reinitialize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
      gallery.innerHTML = ""; // Wipe DOM clean on unmount
    };
  }, [data, cardWidth, cardHeight, animationDuration, animationOverlap, headingFadeDuration]);

  return (
    <section 
      ref={containerRef}
      className={cn("relative w-full h-full flex justify-center items-center overflow-hidden bg-transparent", className)}
      {...props}
    >
      <div ref={galleryRef} className="absolute inset-0 pointer-events-none" />
      <h1 
        ref={headingRef}
        className="w-[90%] md:w-[65%] text-center text-4xl md:text-6xl lg:text-8xl font-bold font-[family-name:var(--font-sora)] leading-tight tracking-tight z-10 will-change-[opacity] text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.6)] uppercase select-none"
      />
    </section>
  );
}
