"use client";

import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white lg:hidden">
      <Menu size={18} />
    </button>
  );
}