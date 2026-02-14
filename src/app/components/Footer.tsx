import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2C3333] text-[#F9F7F2] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4">Awakening Yog.</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Mindfully crafted yoga essentials for the modern practitioner. 
              Ethically sourced, sustainably made.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#D97C66] transition-colors">Yoga Mats</a></li>
              <li><a href="#" className="hover:text-[#D97C66] transition-colors">Meditation Cushions</a></li>
              <li><a href="#" className="hover:text-[#D97C66] transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-[#D97C66] transition-colors">Bundles</a></li>
              <li><a href="#" className="hover:text-[#D97C66] transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#D97C66] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#D97C66] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-[#D97C66] transition-colors">Care Guide</a></li>
              <li><a href="#" className="hover:text-[#D97C66] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Stay Grounded</h4>
            <p className="text-sm text-gray-400 mb-4">
              Join our community for wellness tips and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#3A4444] border-none rounded-md px-4 py-3 text-sm text-white focus:ring-2 focus:ring-[#D97C66] outline-none"
              />
              <button className="bg-[#D97C66] hover:bg-[#C26B57] text-white px-4 py-3 rounded-md text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3A4444] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 ZenSoul Wellness. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
