"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

import { navLinks } from "./nav-links";
import Logo from "./Logo";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Navigation Menu"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition-colors duration-200 hover:border-white/30 hover:bg-white/5 lg:hidden cursor-pointer"
      >
        <Menu size={18} />
      </button>

      {/* Popup Menu & Faded Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Low Visibility Dimmed Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Slide & Popup Drawer Panel (Translucent Glassmorphism) */}
            <motion.aside
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="fixed top-0 right-0 bottom-0 z-[100] flex w-[78vw] max-w-xs flex-col justify-between border-l border-white/10 bg-zinc-950/90 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              {/* Header - Logo with Name & Close Button */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <Logo />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Navigation Menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition-colors duration-200 hover:border-white/30 hover:text-white hover:bg-white/5 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links (Starts directly from Home) */}
              <div className="my-auto flex flex-col gap-2.5 py-4">
                {navLinks.map((item, index) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20, y: 5 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25,
                        delay: 0.04 + index * 0.05,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={clsx(
                          "group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 font-sora",
                          active
                            ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                            : "text-neutral-300 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <span>{item.title}</span>
                        <span
                          className={clsx(
                            "h-1.5 w-1.5 rounded-full transition-all duration-200",
                            active
                              ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                              : "bg-neutral-600 group-hover:bg-neutral-400"
                          )}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer Section */}
              <div className="border-t border-white/10 pt-4 text-center">
                <p className="text-[11px] text-neutral-500 font-sora">
                  Obiettivo · NIT Silchar
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}


