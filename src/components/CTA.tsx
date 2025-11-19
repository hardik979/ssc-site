import React from "react";
import { motion } from "framer-motion";

const CTASection: React.FC = () => {
  return (
    <section className="w-full bg-linear-to-br from-[#3d4f6d] via-[#4a5f7f] to-[#5d6d8a] py-16 md:py-20 relative overflow-hidden">
      {/* Diagonal Pattern Background */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.1) 20px,
            rgba(255,255,255,0.1) 40px
          )`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build the Future of Infrastructure?
          </h2>

          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-4xl mx-auto">
            Partner with Swastik Sales Corporation for precision-engineered
            components that deliver safety, durability, and global reliability -
            powering tunnels, bridges, railways, and more across 15+ countries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-[#fbbf24] text-[#fbbf24] hover:bg-[#fbbf24] hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
