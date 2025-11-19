import React from "react";
import { motion } from "framer-motion";

interface Brand {
  name: string;
  logo: string;
}

const TrustedBrands: React.FC = () => {
  // Replace these with your actual brand logos
  const brands: Brand[] = [
    {
      name: "Gammon",
      logo: "./img1.png",
    },
    {
      name: "Afcons",
      logo: "./img2.png",
    },
    {
      name: "GVK",
      logo: "./img3.png",
    },
    {
      name: "Larsen & Toubro",
      logo: "./img4.png",
    },
    {
      name: "Toyo Engineering",
      logo: "./img5.png",
    },
    {
      name: "Brand 6",
      logo: "./img6.png",
    },
    {
      name: "Brand 7",
      logo: "./img7.png",
    },
    {
      name: "Jaypee",
      logo: "./img8.png",
    },
    {
      name: "Gammon",
      logo: "./img1.png",
    },
    {
      name: "Afcons",
      logo: "./img2.png",
    },
    {
      name: "GVK",
      logo: "./img3.png",
    },
    {
      name: "Larsen & Toubro",
      logo: "./img4.png",
    },
    {
      name: "Toyo Engineering",
      logo: "./img5.png",
    },
    {
      name: "Brand 6",
      logo: "./img6.png",
    },
    {
      name: "Brand 7",
      logo: "./img7.png",
    },
    {
      name: "Jaypee",
      logo: "./img8.png",
    },
  ];

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="w-full bg-linear-to-r from-[#3d4f6d] via-[#4a5f7f] to-[#3d4f6d] py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#fbbf24] mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-white text-lg md:text-xl">
            Join over 1,000 businesses that trust our solutions
          </p>
        </div>

        {/* Infinite Marquee */}
        <div className="relative">
          {/* Scrolling Container */}
          <div className="flex">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{
                x: [0, -50 + "%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="shrink-0 w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white rounded-full shadow-lg flex items-center justify-center p-6 hover:scale-110 transition-transform duration-300 overflow-hidden"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain select-none pointer-events-none"
                    draggable="false"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
