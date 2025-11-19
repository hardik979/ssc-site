// src/pages/Home.tsx
import Certifications from "../components/Certifications";
import CTASection from "../components/CTA";

import Hero from "../components/Hero";
import TrustedBrands from "../components/Marquee";
import HeroCategories from "../components/Product";
import WhoWeAreSection from "../components/WhoWeAreSection";

export default function Home() {
  return (
    <div className="bg-[#f5f7fa]">
      <Hero />
      <WhoWeAreSection />
      <TrustedBrands />
      <Certifications />
      <HeroCategories />
      <CTASection />
    </div>
  );
}
