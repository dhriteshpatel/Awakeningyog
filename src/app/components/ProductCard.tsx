import React from "react";
import { Plus } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Quick Add Button */}
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-4 right-4 bg-white text-[#2C3333] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#4A5D54] hover:text-white"
          aria-label="Add to cart"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs text-[#D97C66] font-medium mb-1 uppercase tracking-wider">{product.category}</p>
        <h3 className="text-lg font-bold text-[#2C3333] mb-1 group-hover:text-[#4A5D54] transition-colors">{product.name}</h3>
        <div className="mt-auto pt-2 flex items-center justify-between">
          <p className="text-gray-900 font-medium">₹{product.price.toLocaleString()}</p>
          {product.rating && (
             <div className="flex items-center">
               <span className="text-yellow-400 text-sm">★</span>
               <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
