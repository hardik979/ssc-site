import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  contact: string;
  organizationName: string;
}

const CTASection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    organizationName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.contact) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("entry.1995762809", form.name);
      formData.append("entry.355345215", form.email);
      formData.append("entry.1030419938", form.contact);
      formData.append("entry.1613813149", form.organizationName);

      const GOOGLE_FORM_URL = `https://docs.google.com/forms/d/e/1FAIpQLSe6ZdIP84sYFzQmTahpVu5VgowQUpf0V6UQzyvlWi4vsXGAmA/formResponse`;

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // Download the PDF
      const link = document.createElement("a");
      link.href = "/pdf/brochure.pdf";
      link.download = "Swastik_Sales_Corporation_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form and close modal
      setForm({ name: "", email: "", contact: "", organizationName: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 font-semibold px-8 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </motion.button>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent border-2 border-[#fbbf24] text-[#fbbf24] hover:bg-[#fbbf24] hover:text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>

                {/* Modal Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Download Brochure
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fill in your details to receive our comprehensive brochure
                  </p>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={form.contact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent outline-none transition-all"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="organizationName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Organization Name{" "}
                      <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      value={form.organizationName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbbf24] focus:border-transparent outline-none transition-all"
                      placeholder="Your organization"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 font-semibold py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Downloading..." : "Download Brochure"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;
