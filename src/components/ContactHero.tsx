import { motion } from "framer-motion";

const CONTACT_BG =
  "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=1600&h=800&fit=crop&auto=format&q=80";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[360px] md:min-h-[420px] lg:min-h-[460px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CONTACT_BG})` }}
      />

      {/* Soft white overlay */}
      <div className="absolute inset-0 bg-white/70" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gray-500 mb-4">
            Contact Us
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Partnering for Precision,
            <br className="hidden md:block" /> Built on Trust
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-gray-700 max-w-2xl">
            With over 65 years of legacy, Swastik Sales Corporation continues to
            empower infrastructure worldwide. Connect with us for rubber,
            plastic, and metal engineering solutions designed to strengthen
            tunnels, bridges, railways, highways, and dams with reliability and
            performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
