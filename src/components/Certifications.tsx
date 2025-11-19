import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Certification {
  icon?: React.ReactNode;
  image?: string;
  title: string;
  description: string;
}

const Certifications: React.FC = () => {
  const certifications: Certification[] = [
    {
      icon: (
        <div className="w-16 h-16 rounded-full border-4 border-gray-900 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">CE</span>
        </div>
      ),
      title: "CE Certified",
      description: "Compliant with European quality and safety directives.",
    },
    {
      image: "./makein_india.png",
      title: "Made in India",
      description: "Proudly designed, developed, and manufactured in India.",
    },
    {
      image: "./img5.png",
      title: "ISO Certified",
      description: "Validated for consistent quality management systems.",
    },
    {
      image: "./makein_india.png",
      title: "Sustainability Committed",
      description:
        "Producing responsibly through efficient, eco-friendly practices.",
    },
  ];

  const leftContentVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const rightContentVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftContentVariants}
            className="relative"
          >
            {/* Decorative Yellow Line */}
            <div className="absolute left-0 top-0 w-1.5 h-32 bg-[#fbbf24]" />

            <div className="pl-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                <span className="text-[#fbbf24]">Recognized Globally</span>
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Certified for Quality and Trust
              </h2>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Every product we manufacture meets international safety,
                performance, and quality standards, ensuring reliability from
                design to delivery.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 font-semibold px-10 py-3.5 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                View More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Certifications Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={rightContentVariants}
          >
            <div className="grid grid-cols-2 gap-0">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`
                    relative p-6 md:p-8 flex flex-col items-center justify-center text-center
                    ${
                      index === 0 || index === 2
                        ? "border-r border-gray-300"
                        : ""
                    }
                    ${
                      index === 0 || index === 1
                        ? "border-b border-[#fbbf24]"
                        : ""
                    }
                    ${
                      index === 2 || index === 3
                        ? "border-t border-[#fbbf24]"
                        : ""
                    }
                  `}
                >
                  {/* Icon or Image */}
                  <div className="mb-4">
                    {cert.icon ? (
                      cert.icon
                    ) : (
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
