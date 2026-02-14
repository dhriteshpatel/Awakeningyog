import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onShopClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick }) => {
  return (
    <div className="relative w-full h-[85vh] bg-[#EAE4D9] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1681230817196-5141f1f9535e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcG9zZSUyMHN1bnJpc2UlMjBpbmRpYXxlbnwxfHx8fDE3NzA5NzE0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Yoga Lifestyle" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3333]/40 to-transparent mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-xl text-white pt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6"
          >
            Find Your Balance in Every Moment
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-100 mb-8 font-light"
          >
            Sustainable yoga mats and accessories designed to ground your practice and elevate your spirit.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button 
              onClick={onShopClick}
              className="bg-[#D97C66] hover:bg-[#C26B57] text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2 group shadow-lg"
            >
              Shop Collection
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
