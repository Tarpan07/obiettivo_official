import Hero from "@/components/home/hero/Hero";
import FeaturedMoments from "@/components/home/FeaturedMoments";
import AboutSection from "@/components/about/AboutSection";
import WhatWeCapture from "@/components/home/WhatWeCapture";
import About2 from "@/components/about2/About2";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedMoments />
      <AboutSection />
      <WhatWeCapture />
      <About2 />
    </main>
  );
}