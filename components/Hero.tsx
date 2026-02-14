import React from 'react';
import { Search, User, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex flex-col text-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=2070&auto=format&fit=crop" 
          alt="Yoga Silhouette at Sunset" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
      </div>

      {/* Navigation Header */}
      <header className="relative z-10 w-full px-6 py-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold tracking-tight">
          Awakening Yog.
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
          <a href="#" className="hover:opacity-80 transition-opacity">Shop</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Mats</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Props</a>
          <a href="#" className="hover:opacity-80 transition-opacity">Our Story</a>
        </nav>

        <div className="flex items-center space-x-6">
          <button aria-label="Search"><Search className="w-5 h-5" /></button>
          <button aria-label="Account"><User className="w-5 h-5" /></button>
          <button aria-label="Cart"><ShoppingBag className="w-5 h-5" /></button>
        </div>
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight font-medium mb-6">
            Find Your Balance in <br /> Each Moment
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-lg leading-relaxed">
            Sustainable yoga mats and accessories designed to ground your practice and elevate your spirit.
          </p>
          <button className="bg-[#D07F6C] hover:bg-[#be7160] text-white px-8 py-3.5 rounded-full font-medium transition-colors flex items-center gap-2 group">
            Shop Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>
    </div>
  );
}