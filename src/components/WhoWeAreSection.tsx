import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type TabType = "mission" | "vision" | "history";

interface TabContent {
  mission: string;
  vision: string;
  history: string;
}

const WhoWeAre: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("mission");

  const tabContent: TabContent = {
    mission:
      "Since 1959, Swastik Sales Corporation has evolved with a singular goal — to engineer products that empower progress. We aim to provide high-performance rubber, plastic, and metal solutions that deliver safety, precision, and longevity for infrastructure projects worldwide. Through continuous innovation and a commitment to quality, we bridge the gap between reliability and modern engineering excellence.",
    vision:
      "To be the global leader in engineering solutions, setting the benchmark for innovation, quality, and sustainability in infrastructure development. We envision a world where our products power the foundations of tomorrow's most critical projects.",
    history:
      "Founded in 1959, Swastik Sales Corporation began as a small enterprise with a vision to serve India's growing infrastructure needs. Over six decades, we've expanded across 15+ countries, consistently delivering excellence in rubber, plastic, and metal engineering solutions.",
  };

  const features = [
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "Custom-engineered solutions for every project",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "Global delivery with assured consistency",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "Innovation rooted in sustainability",
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-12 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden  h-full">
              <img
                src="./who.png"
                alt="Engineer overlooking bridge at sunset"
                className="w-full h-[400px] md:h-[500px] lg:h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            {/* Header */}
            <div className="mb-6">
              <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                WHO WE ARE
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                We work for you since 1989.
                <br />
                Industrial around the world.
              </h2>
            </div>

            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === "mission"
                    ? "bg-[#fbbf24] text-gray-900"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === "vision"
                    ? "bg-[#fbbf24] text-gray-900"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                }`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab("history")}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === "history"
                    ? "bg-[#fbbf24] text-gray-900"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                }`}
              >
                Our History
              </button>
            </div>

            {/* Tab Content with Animation */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                {tabContent[activeTab]}
              </p>
            </motion.div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="text-[#fbbf24] shrink-0">{feature.icon}</div>
                  <p className="text-gray-900 text-sm md:text-base">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
