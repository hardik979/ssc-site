import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function GlobalFootprint() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden bg-white">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000"
          alt="Global engineering infrastructure"
          className="w-full h-full object-cover"
        />

        {/* Light overlay (white-transparent) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/70" />
      </div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-0 py-20"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block text-xs tracking-[0.2em] uppercase text-[#6b7280] font-semibold mb-3"
        >
          Who We Are
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight"
        >
          Global Footprint
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="mt-4 text-xl md:text-2xl font-semibold text-[#374151]"
        >
          Engineering Reach That Spans Continents
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-3xl text-[15px] leading-relaxed text-[#4b5563]"
        >
          From India to projects across Asia, Europe, and the Middle East,
          Swastik Sales Corporation delivers precision-engineered rubber,
          plastic, and metal components that reinforce tunnels, bridges,
          highways, metros, and dams worldwide.
        </motion.p>
      </motion.div>
    </section>
  );
}
