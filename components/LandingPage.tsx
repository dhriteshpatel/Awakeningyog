import React from 'react';
import { Search, User, ShoppingBag, ArrowRight, Leaf, Award, Heart, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-6 text-white">
        <div className="text-2xl font-serif font-bold tracking-wide text-[#fdfdfd]">
          Awakening Yog.
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-white/90">
          <a href="#" className="hover:text-white transition-colors">Shop</a>
          <a href="#" className="hover:text-white transition-colors">Mats</a>
          <a href="#" className="hover:text-white transition-colors">Props</a>
          <a href="#" className="hover:text-white transition-colors">Our Story</a>
        </div>

        <div className="flex items-center space-x-6 text-white/90">
          <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          <User className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex-grow flex items-center min-h-[90vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599447421405-0e5a879d3653?q=80&w=2069&auto=format&fit=crop" 
            alt="Yoga Silhouette at Sunset" 
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6 text-white">
              Find Your Balance in <br /> Each Moment
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 text-gray-100 max-w-lg leading-relaxed">
              Sustainable yoga mats and accessories designed to ground your practice and elevate your spirit.
            </p>
            <button className="bg-[#d97763] hover:bg-[#c56a56] text-white px-8 py-3.5 rounded-full flex items-center transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
              Shop Collection
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Features Preview (Bottom Section from screenshot) */}
      <section className="bg-[#fbfbf9] py-16 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {[ 
            { icon: Leaf, label: "Eco-Friendly" },
            { icon: Award, label: "Top Quality" },
            { icon: Heart, label: "Made with Love" },
            { icon: ShieldCheck, label: "Lifetime Warranty" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-xl shadow-sm flex flex-col items-center justify-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <item.icon className="w-6 h-6 text-gray-600 stroke-1" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}