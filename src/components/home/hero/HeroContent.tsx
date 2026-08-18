"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroButton from "./HeroButton";
import { DiaTextReveal } from "@/registry/magicui/dia-text-reveal";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HeroContent() {
  return (
    <div className="absolute inset-0 z-20">
      <div className="mr-auto ml-[4%] md:ml-[6%] flex h-full w-[92%] max-w-7xl items-end pb-[14vh] md:pb-[15vh]">

        {/* Content Block */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="
            w-full
            max-w-[800px]
          "
        >
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-3 items-end">

            {/* Logo */}

            <motion.div
              variants={itemVariants}
              className="flex justify-start md:justify-center"
            >
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Obiettivo Logo"
                  width={220}
                  height={220}
                  priority
                  className="
                    h-auto
                    w-[140px]
                    md:w-[180px]
                    object-contain
                    drop-shadow-[0_0_35px_rgba(255,255,255,0.18)]
                    transition-transform
                    duration-300
                    hover:scale-105
                  "
                />
              </Link>
            </motion.div>

            {/* Text */}

            <div className="flex flex-col justify-end">

              <motion.div variants={itemVariants}>

                <DiaTextReveal
                  text="Obiettivo"
                  colors={[
                    "#A97CF8",
                    "#F38CB8",
                    "#FDCC92",
                  ]}
                  textColor="#ffffff"
                  className="
                    font-[family-name:var(--font-sora)]
                    text-[72px]
                    font-bold
                    leading-[0.92]
                    lg:text-[96px]
                  "
                />

              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-5 h-px w-24 bg-white/15"
              />

              <motion.p
                variants={itemVariants}
                className="
                  mt-3
                  text-lg
                  md:text-xl
                  font-light
                  leading-8
                  text-zinc-300
                  whitespace-nowrap
                 font-[family-name:var(--font-sora)]
                "
              >
                Capturing stories. Creating perspectives.
              </motion.p>

            </div>

          </div>

          {/* Buttons aligned with where writing content starts */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex justify-start md:pl-[232px]"
          >
            <HeroButton />
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}