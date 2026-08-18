import About2 from "@/components/about2/About2";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Obiettivo",
  description: "Learn more about Obiettivo, the Photography Club of NIT Silchar.",
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      <About2 />
    </main>
  );
}
