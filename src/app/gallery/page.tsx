import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Obiettivo",
  description: "Experience virtual expositions and visual stories captured by Obiettivo, NIT Silchar.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
