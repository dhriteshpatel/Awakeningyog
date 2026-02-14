import React, { useState, useMemo } from "react";
import { ProductCard, Product } from "./ProductCard";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface CollectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const Collection: React.FC<CollectionProps> = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("featured");

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    // Sort
    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    
    return result;
  }, [products, selectedCategory, sortBy]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-serif font-bold text-[#2C3333] mb-4"
          >
            The Collection
          </motion.h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Mindfully curated essentials for your yoga and meditation practice.
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-[#F9F7F2] p-4 rounded-lg border border-gray-100 shadow-sm">
          
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            <SlidersHorizontal className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-[#2C3333] text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <span className="text-sm text-gray-500 hidden md:inline">Sort by:</span>
            <div className="relative w-full md:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-[#D97C66]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                layout
              >
                <ProductCard product={product} onAddToCart={onAddToCart} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
            <button 
              onClick={() => setSelectedCategory("All")}
              className="mt-4 text-[#D97C66] font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
