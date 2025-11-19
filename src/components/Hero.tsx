import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "Built on Precision, Driven by Progress",
    title: "Engineering a World",
    subtitle: "of Possibilities",
    description:
      "With over 65 years of legacy, Swastik Sales Corporation delivers rubber, plastic, and metal engineering solutions that strengthen tunnels, bridges, railways, metros, green energy, Safety Equipments and highways across 15+ countries – powering the foundations of tomorrow.",
    buttonText: "Learn More",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80",
  },
  {
    id: 2,
    badge: "Innovation Meets Infrastructure",
    title: "Building Tomorrow's",
    subtitle: "Foundation Today",
    description:
      "Leading the industry with cutting-edge engineering solutions that transform infrastructure projects worldwide. Our commitment to excellence drives progress in every sector we serve.",
    buttonText: "Explore Solutions",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80",
  },
  {
    id: 3,
    badge: "Global Reach, Local Impact",
    title: "Trusted Components for",
    subtitle: "Global Infrastructure",
    description:
      "Partnering with industry leaders across continents to deliver world-class engineering components. From concept to completion, we're your trusted partner in building resilient infrastructure.",
    buttonText: "Our Projects",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&q=80",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-[85vh] md:h-[600px] overflow-hidden bg-gray-100">
      {/* Container with rounded corners and padding - matching the image */}
      <div className="mx-4 my-4 md:mx-8 md:my-6 h-[calc(100%-2rem)] md:h-[calc(100%-3rem)] rounded-3xl overflow-hidden relative">
        {/* Background Images Layer - always rendered to prevent white flash */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: index === currentSlide ? 1 : 0,
                scale: index === currentSlide ? 1 : 1.05,
              }}
              transition={{
                opacity: { duration: 1, ease: "easeInOut" },
                scale: { duration: 1.2, ease: "easeInOut" },
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Light white overlay matching the image */}
              <div className="absolute inset-0 bg-white/30" />
            </motion.div>
          ))}
        </div>

        {/* Content Layer */}
        <div className="relative h-full flex items-center z-10">
          <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-4xl"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="inline-block bg-gray-900/90 backdrop-blur-sm text-white px-6 py-2.5 rounded-full text-sm font-medium mb-6">
                    {slides[currentSlide].badge}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                {/* Subtitle */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-10 leading-tight"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>

                {/* Description Heading */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                >
                  Trusted Components for Global Infrastructure
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-base md:text-lg text-gray-800 mb-8 max-w-3xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Button */}
                <motion.button
                  onClick={() => navigate("/about")} // 👈 redirect to /about
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 hover:gap-4 group font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {slides[currentSlide].buttonText}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Dots - Vertical on the right */}
        <div className="absolute bottom-8 right-6 md:right-8 flex flex-col gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gray-900 w-3 h-8"
                  : "bg-gray-900/40 w-3 h-3 hover:bg-gray-900/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
