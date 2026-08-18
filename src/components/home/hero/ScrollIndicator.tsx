"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 right-[6%] z-20 hidden lg:flex flex-col items-center gap-3">
      <span
        className="
        text-[10px]
        tracking-[0.32em]
        text-white/35
        text-center
        "
      >
        SCROLL
        <br />
        DOWN
      </span>

      <div
        className="
        flex
        h-10
        w-6
        justify-center
        rounded-full
        border
        border-white/20
        p-1.5
        "
      >
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-2 w-1.5 rounded-full bg-blue-500"
        />
      </div>
    </div>
  );
}