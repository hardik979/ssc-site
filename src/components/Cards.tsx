import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Project {
  id: number;
  category: string;
  title: string;
  location: string;
  image: string;
}

const FeaturedProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      category: "HYDRO-ELECTRIC PROJECT",
      title: "DUL HASTI HYDRO PROJECT,",
      location: "KISHTWAR",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      category: "HYDRO-ELECTRIC PROJECT",
      title: "SALAL HYDRO PROJECT,",
      location: "JYOTIPURAM",
      image:
        "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      category: "HYDRO-ELECTRIC PROJECT",
      title: "BAGLIHAR HYDRO PROJECT,",
      location: "CHANDERKOTE",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12"
        >
          Featured Global Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl overflow-hidden border-4 border-yellow-500 bg-white transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/0 via-yellow-500/60 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text that appears on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-center"
                  >
                    <p className="text-white text-sm font-semibold mb-2 tracking-wider">
                      VIEW PROJECT DETAILS
                    </p>
                    <div className="w-12 h-0.5 bg-white mx-auto" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white group-hover:bg-yellow-500 transition-colors duration-500">
                <p className="text-xs font-semibold text-gray-600 group-hover:text-gray-900 mb-2 tracking-wider transition-colors duration-500">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {project.title}
                  <br />
                  {project.location}
                </h3>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
