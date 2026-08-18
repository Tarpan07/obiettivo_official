"use client";

import React, { useEffect, useRef } from "react";

interface FuzzyTextProps {
  children?: React.ReactNode;
  fontSize?: number;
  color?: string;
  className?: string;
}

export function FuzzyText({
  children = "We will be back soon...",
  fontSize = 60,
  color = "#ffffff",
  className = "",
}: FuzzyTextProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let text = typeof children === "string" ? children : "We will be back soon...";

    const dpr = window.devicePixelRatio || 1;
    const width = 1100;
    const height = 140;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background glow
      const bgGlow = ctx.createRadialGradient(width / 2, height / 2, 10, width / 2, height / 2, 350);
      bgGlow.addColorStop(0, "rgba(59, 130, 246, 0.2)");
      bgGlow.addColorStop(0.5, "rgba(168, 85, 247, 0.08)");
      bgGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Setup typography
      ctx.font = `800 ${fontSize}px var(--font-sora), sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Animated jitter for fuzzy effect
      const jitterX = Math.sin(frame * 0.08) * 2;
      const jitterY = Math.cos(frame * 0.08) * 2;

      // Glow layer
      ctx.shadowColor = "rgba(147, 197, 253, 0.85)";
      ctx.shadowBlur = 24 + Math.sin(frame * 0.05) * 8;
      ctx.fillStyle = color;
      ctx.fillText(text, width / 2 + jitterX, height / 2 + jitterY);

      // Overlay text with slight shift
      ctx.shadowBlur = 0;
      ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
      ctx.fillText(text, width / 2 - jitterX * 0.5, height / 2 - jitterY * 0.5);

      frame++;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [children, fontSize, color]);

  return (
    <div className={`relative flex flex-col items-center justify-center p-2 text-center w-full ${className}`}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", maxWidth: "1050px", height: "110px" }}
      />
    </div>
  );
}

export default FuzzyText;
