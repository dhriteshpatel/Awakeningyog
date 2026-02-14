import React from 'react';
import { Search, User, ShoppingBag, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans">
      {/* Hero Section */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599447421405-0e5a10c005af?q=80&w=2540&auto=format&fit=crop" 
            alt="Yoga Sunset Silhouette" 
            className="h-full w-full object-cover object-center"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/40 via-stone-900/20 to-transparent mix-blend-multiply" />
        </div>

        {/* Navigation Header */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 max-w-7xl mx-auto">
          <div className="text-2xl font-serif font-bold text-white tracking-tight">
            Awakening Yog.
          </div>
          
          <div className="hidden md:flex space-x-8 text-white/95 font-medium text-sm tracking-wide">
            <a href="#" className="hover:text-white transition-colors">Shop</a>
            <a href="#" className="hover:text-white transition-colors">Mats</a>
            <a href="#" className="hover:text-white transition-colors">Props</a>
            <a href="#" className="hover:text-white transition-colors">Our Story</a>
          </div>

          <div className="flex items-center space-x-6 text-white">
            <button className="hover:opacity-80 transition-opacity"><Search className="w-5 h-5" /></button>
            <button className="hover:opacity-80 transition-opacity"><User className="w-5 h-5" /></button>
            <button className="hover:opacity-80 transition-opacity"><ShoppingBag className="w-5 h-5" /></button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-2xl pt-20">
            <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-white drop-shadow-sm mb-6">
              Find Your Balance in <br /> Each Moment
            </h1>
            
            <p className="max-w-lg text-lg text-white/90 leading-relaxed font-normal mb-10">
              Sustainable yoga mats and accessories designed to ground your practice and elevate your spirit.
            </p>

            <button className="group flex items-center gap-2 rounded-full bg-[#D4816C] px-8 py-4 text-white font-medium transition-all hover:bg-[#c27562] shadow-lg hover:shadow-xl">
              Shop Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Feature Section (Visible at bottom of screenshot) */}
      <div className="bg-[#FDFBF7] py-20 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-64 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-stone-100 flex items-center justify-center hover:shadow-md transition-shadow">
                {/* Icon Placeholder circle */}
                <div className="h-16 w-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                   <svg className="w-8 h-8 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                   </svg>
                </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
