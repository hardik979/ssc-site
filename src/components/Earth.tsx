import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const GlobalConnections: React.FC = () => {
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const mapVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.2 },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <p className="text-sm text-gray-600 mb-3 font-medium tracking-wide">
            Of Merchants Worldwide
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
              Engineering Connections Across Continents
            </h2>
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base text-gray-700 max-w-md lg:text-right"
            >
              Swastik Sales Corporation is a trusted name in manufacturing,
              specializing in high quality rubber, plastic
            </motion.p>
          </div>
        </motion.div>

        {/* Map Container */}
        <motion.div
          variants={mapVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-200"
        >
          {/* Replace this with your actual map image */}
          <img
            src="/earth.png"
            alt="Global Engineering Connections Map"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalConnections;
