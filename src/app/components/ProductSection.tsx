import React from "react";
import { ProductCard, Product } from "./ProductCard";

interface ProductSectionProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({ title, products, onAddToCart }) => {
  return (
    <section className="py-20 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C3333] mb-4">{title}</h2>
             <div className="h-1 w-20 bg-[#D97C66]"></div>
          </div>
          <a href="#" className="hidden md:block text-[#4A5D54] font-medium hover:text-[#2C3333] transition-colors">
            View All Products &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#" className="text-[#4A5D54] font-medium hover:text-[#2C3333] transition-colors">
            View All Products &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
