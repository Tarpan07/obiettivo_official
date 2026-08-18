"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

import { navLinks } from "./nav-links";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-12 lg:flex">
      {navLinks.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            className={clsx(
              "relative py-2 text-sm font-medium transition-colors duration-300",
              active
                ? "text-white"
                : "text-neutral-400 hover:text-white"
            )}
          >
            {item.title}

            {active && (
              <motion.span
                layoutId="navbar-indicator"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 35,
                }}
                className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-blue-500"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}