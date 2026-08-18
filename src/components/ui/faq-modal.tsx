"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import FaqAccordion from "./faq-accordion";

export function FaqModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };
    window.addEventListener("open-faq-modal", handleOpen);
    return () => window.removeEventListener("open-faq-modal", handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 select-none font-[family-name:var(--font-sora)]">
          {/* Backdrop blur click to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950/95 p-6 md:p-10 shadow-[0_0_50px_rgba(59,130,246,0.15)] backdrop-blur-2xl z-10 custom-scrollbar"
          >
            {/* Ambient Radial Accent */}
            <div className="absolute -top-20 -left-20 w-44 h-44 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 flex items-center justify-center p-2.5 rounded-full border border-white/10 bg-zinc-900/60 text-zinc-400 hover:text-white hover:bg-zinc-800 cursor-pointer transition-colors z-20"
              aria-label="Close FAQ modal"
            >
              <X size={18} />
            </button>

            {/* FAQ Accordion Component */}
            <div className="pt-2">
              <FaqAccordion title="Obiettivo FAQs" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default FaqModal;
