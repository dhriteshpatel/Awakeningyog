import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (view: string) => void;
  isHome: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onNavigate, isHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use the "scrolled" style (dark text, solid background) if we are scrolled OR if we are NOT on the home page.
  const useSolidStyle = isScrolled || !isHome;

  const textColorClass = useSolidStyle ? "text-[#2C3333]" : "text-white shadow-sm";
  const hoverColorClass = useSolidStyle ? "hover:text-[#4A5D54]" : "hover:text-gray-200";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidStyle
          ? "bg-[#F9F7F2]/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button 
              onClick={() => onNavigate('home')} 
              className={`text-2xl font-serif font-bold tracking-tight transition-colors ${textColorClass}`}
            >
              Awakening Yog<span className={useSolidStyle ? "text-[#4A5D54]" : "text-white"}>.</span>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => onNavigate('collection')} className={`${textColorClass} ${hoverColorClass} transition-colors font-medium`}>Shop</button>
            <button onClick={() => onNavigate('collection')} className={`${textColorClass} ${hoverColorClass} transition-colors font-medium`}>Mats</button>
            <button onClick={() => onNavigate('collection')} className={`${textColorClass} ${hoverColorClass} transition-colors font-medium`}>Props</button>
            <button onClick={() => onNavigate('home')} className={`${textColorClass} ${hoverColorClass} transition-colors font-medium`}>Our Story</button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className={`${textColorClass} ${hoverColorClass} transition-colors`}>
              <Search className="h-5 w-5" />
            </button>
            <button className={`hidden sm:block ${textColorClass} ${hoverColorClass} transition-colors`}>
              <User className="h-5 w-5" />
            </button>
            <button 
              onClick={onCartClick}
              className={`${textColorClass} ${hoverColorClass} transition-colors relative`}
            >
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#D97C66] text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full shadow-none">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className={`md:hidden ${textColorClass}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F9F7F2] border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <button
                onClick={() => { onNavigate('collection'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-3 text-base font-medium text-[#2C3333] hover:bg-[#EAE4D9] rounded-md"
              >
                Shop
              </button>
              <button
                onClick={() => { onNavigate('collection'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-3 text-base font-medium text-[#2C3333] hover:bg-[#EAE4D9] rounded-md"
              >
                Mats
              </button>
              <button
                onClick={() => { onNavigate('collection'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-3 text-base font-medium text-[#2C3333] hover:bg-[#EAE4D9] rounded-md"
              >
                Props
              </button>
              <button
                onClick={() => { onNavigate('home'); setIsMobileMenuOpen(false); }}
                className="block w-full text-left px-3 py-3 text-base font-medium text-[#2C3333] hover:bg-[#EAE4D9] rounded-md"
              >
                Our Story
              </button>
              <button
                className="block w-full text-left px-3 py-3 text-base font-medium text-[#2C3333] hover:bg-[#EAE4D9] rounded-md"
              >
                Account
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
