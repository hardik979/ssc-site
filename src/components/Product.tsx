import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Category {
  id: number;
  title: string;
  description: string;
  image: string;
}

const HeroCategories: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories: Category[] = [
    {
      id: 1,
      title: "Tunnels & Dams",
      description:
        "Sealing systems and accessories that ensure watertight integrity and long-term durability. From cast-in gaskets to hydrophilic seals, each product is engineered to perform under pressure.",
      image: "./product.png",
    },
    {
      id: 2,
      title: "Railways & Metros",
      description:
        "High-performance fittings and mobility components that keep networks running efficiently. From P-Way tools to track machines and rail trolleys — precision built for everyday reliability.",
      image: "./product.png",
    },
    {
      id: 3,
      title: "Bridges",
      description:
        "Heavy-duty connection and anchoring systems designed for lasting structural stability. Each component ensures strength, flexibility, and safety across every application.",
      image: "./product.png",
    },
    {
      id: 4,
      title: "Highways",
      description:
        "Durable road construction components built to withstand heavy traffic and harsh conditions. Engineered for longevity and optimal performance.",
      image: "./product.png",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + categories.length) % categories.length
    );
  };

  const getCardPosition = (index: number) => {
    const position =
      (index - currentIndex + categories.length) % categories.length;
    return position;
  };

  return (
    <section className="w-full bg-linear-to-b from-gray-100 to-gray-200 py-16 md:py-24 overflow-hidden relative">
      {/* Background Diagonal Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(0,0,0,0.1) 20px,
            rgba(0,0,0,0.1) 40px
          )`,
        }}
      />

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[35%] shrink-0"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Shop by our Hero Categories
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Engineered for excellence, built for endurance. Explore our
              specialized components powering national and global infrastructure
              with unmatched precision and reliability.
            </p>

            <button className="text-gray-900 font-semibold text-lg border-b-2 border-gray-900 pb-1 hover:text-gray-700 hover:border-gray-700 transition-colors">
              View More Products
            </button>
          </motion.div>

          {/* Right Side - Carousel */}
          <div className="lg:w-[65%] relative flex-1">
            <div className="relative flex items-center justify-center min-h-[600px]">
              <div className="relative w-full max-w-[900px] h-[600px] mx-auto">
                <AnimatePresence initial={false}>
                  {categories.map((category, index) => {
                    const position = getCardPosition(index);
                    const isActive = position === 0;
                    const isVisible = position < 3;

                    if (!isVisible) return null;

                    // Calculate positioning for 3-card layout
                    let translateX = 0;
                    let scale = 1;
                    let zIndex = 30;
                    let opacity = 1;

                    if (position === 0) {
                      // Active card - center
                      translateX = 0;
                      scale = 1;
                      zIndex = 30;
                      opacity = 1;
                    } else if (position === 1) {
                      // Right card
                      translateX = 385;
                      scale = 0.88;
                      zIndex = 20;
                      opacity = 0.8;
                    } else if (position === 2) {
                      // Far right card
                      translateX = 700;
                      scale = 0.88;
                      zIndex = 10;
                      opacity = 0.8;
                    }

                    return (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, scale: 0.8, x: 400 }}
                        animate={{
                          x: translateX,
                          scale,
                          opacity,
                          zIndex,
                        }}
                        exit={{ opacity: 0, scale: 0.8, x: -400 }}
                        transition={{
                          duration: 0.6,
                          ease: [0.32, 0.72, 0, 1],
                        }}
                        className={`
                          ${isActive ? "w-[360px]" : "w-[320px]"}
                          ${isActive ? "bg-[#e4b944]" : "bg-[#8b93a7]"}
                          rounded-3xl p-6 flex flex-col
                          shadow-2xl absolute left-0 top-1/2 -translate-y-1/2
                          ${isActive ? "min-h-[560px]" : "min-h-[500px]"}
                        `}
                        style={{ zIndex }}
                      >
                        {/* Diagonal Pattern - Only on active */}
                        {isActive && (
                          <div
                            className="absolute inset-0 opacity-10 pointer-events-none rounded-3xl"
                            style={{
                              backgroundImage: `repeating-linear-gradient(
                              45deg,
                              transparent,
                              transparent 15px,
                              rgba(0,0,0,0.15) 15px,
                              rgba(0,0,0,0.15) 30px
                            )`,
                            }}
                          />
                        )}

                        {/* Navigation Arrows - Only on active */}
                        {isActive && (
                          <>
                            <button
                              onClick={prevSlide}
                              className="absolute left-4 top-40 z-40 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                              aria-label="Previous"
                            >
                              <ChevronLeft className="w-5 h-5 text-gray-900" />
                            </button>
                            <button
                              onClick={nextSlide}
                              className="absolute right-4 top-40 z-40 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                              aria-label="Next"
                            >
                              <ChevronRight className="w-5 h-5 text-gray-900" />
                            </button>
                          </>
                        )}

                        {/* Product Image */}
                        <div className="bg-white rounded-2xl p-8 mb-5 flex items-center justify-center h-52 relative z-10">
                          <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col relative z-10">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            {category.title}
                          </h3>
                          <p className="text-gray-900 text-sm leading-relaxed mb-6 flex-1">
                            {category.description}
                          </p>

                          {/* Button */}
                          <button
                            className={`
                          w-full py-3.5 rounded-full font-semibold
                          ${
                            isActive
                              ? "bg-[#2c3241] text-white"
                              : "bg-white text-gray-900"
                          }
                          hover:scale-105 transition-all duration-200 shadow-md
                        `}
                          >
                            View More
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCategories;
