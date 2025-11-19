import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
const navRoutes: Record<string, string> = {
  Home: "/",
  "About Us": "/about",
  Products: "/products",
  Sustainability: "/sustainability",
  "E-Catalogue": "/catalogue",
  Contact: "/contact",
};
const navItems = [
  "Home",
  "About Us",
  "Products",
  "Sustainability",
  "E-Catalogue",
  "Contact",
];

export default function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full sticky top-0 bg-[#1e293b] text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-14 w-[120px] flex items-center justify-center">
            <a href="/">
              <img
                src="./logo.png"
                alt="SSC Logo"
                className="h-full w-full object-contain"
              />
            </a>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = item === activeItem;
            return (
              <button
                key={item}
                onClick={() => {
                  setActiveItem(item);
                  navigate(navRoutes[item]);
                }}
                className="relative pb-1 transition-colors group"
              >
                <span
                  className={
                    isActive
                      ? "text-[#fbbf24]"
                      : "text-gray-200 hover:text-white"
                  }
                >
                  {item}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute left-0 right-0 -bottom-1 h-1 bg-[#fbbf24] rounded-t-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <span className="absolute left-0 right-0 -bottom-1 h-1 bg-[#fbbf24] rounded-t-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 lg:hidden z-40"
              onClick={toggleMenu}
            />

            {/* Mobile Nav Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-[#1e293b] shadow-2xl lg:hidden z-50 overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-lg font-semibold text-white">Menu</span>
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex flex-col p-4">
                {navItems.map((item, index) => {
                  const isActive = item === activeItem;
                  return (
                    <motion.button
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        setActiveItem(item);
                        navigate(navRoutes[item]);
                        setIsOpen(false);
                      }}
                      className={`text-left px-4 py-3 rounded-lg transition-all mb-1 ${
                        isActive
                          ? "bg-[#fbbf24] text-gray-900 font-semibold"
                          : "text-gray-200 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item}
                    </motion.button>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
