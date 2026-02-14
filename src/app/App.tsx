import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ProductSection } from "./components/ProductSection";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { CartSidebar } from "./components/CartSidebar";
import { Product } from "./components/ProductCard";
import { Collection } from "./components/Collection";
import { CheckoutModal } from "./components/CheckoutModal";

// Expanded Mock Data with Rupee Prices
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Cork Yoga Mat",
    price: 2499,
    category: "Mats",
    image: "https://images.unsplash.com/photo-1621888352883-9adf794c6e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwc3R1ZGlvJTIwYWVzdGhldGljfGVufDF8fHx8MTc3MDk3MDMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9
  },
  {
    id: 2,
    name: "Zafu Meditation Cushion",
    price: 1850,
    category: "Meditation",
    image: "https://images.unsplash.com/photo-1758274538961-fe8f1f24166f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwY3VzaGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MDk3MDMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8
  },
  {
    id: 3,
    name: "Bamboo Hydration Bottle",
    price: 899,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMHdhdGVyJTIwYm90dGxlfGVufDF8fHx8MTc3MDk3MDMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7
  },
  {
    id: 4,
    name: "Natural Cork Block",
    price: 699,
    category: "Props",
    image: "https://images.unsplash.com/photo-1619595957236-84b79f4a8a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwYWNjZXNzb3JpZXMlMjBjb3JrfGVufDF8fHx8MTc3MDk3MDQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9
  },
  {
    id: 5,
    name: "Organic Cotton Strap",
    price: 499,
    category: "Props",
    image: "https://images.unsplash.com/photo-1667890786022-83bca6c4f4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3RyYXAlMjBjb3R0b258ZW58MXx8fHwxNzcwOTcwOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6
  },
  {
    id: 6,
    name: "Tibetan Singing Bowl",
    price: 3500,
    category: "Meditation",
    image: "https://images.unsplash.com/photo-1738192892667-2f11bd175c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5naW5nJTIwYm93bCUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzcwOTcwOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0
  },
  {
    id: 7,
    name: "Ceramic Incense Holder",
    price: 750,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1770043527531-b5c4f37cef57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmNlbnNlJTIwaG9sZGVyJTIwY2VyYW1pY3xlbnwxfHx8fDE3NzA5NzA5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5
  },
  {
    id: 8,
    name: "Aroma Diffuser",
    price: 1999,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1768877460519-f018f4e012a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlc3NlbnRpYWwlMjBvaWwlMjBkaWZmdXNlciUyMHNwYXxlbnwxfHx8fDE3NzA5NzA5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7
  },
  {
    id: 9,
    name: "Restorative Bolster",
    price: 2200,
    category: "Props",
    image: "https://images.unsplash.com/photo-1767605528683-15b2177337a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwYm9sc3RlciUyMHBpbGxvd3xlbnwxfHx8fDE3NzA5NzA5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9
  }
];

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [currentView, setCurrentView] = useState<'home' | 'collection'>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: number) => {
    const index = cartItems.findIndex(item => item.id === id);
    if (index > -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handlePaymentSuccess = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] font-sans text-[#2C3333]">
      <Navbar 
        cartCount={cartItems.length} 
        onCartClick={() => setIsCartOpen(true)} 
        onNavigate={setCurrentView}
        isHome={currentView === 'home'}
      />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onShopClick={() => setCurrentView('collection')} />
            <Features />
            <ProductSection 
              title="Best Sellers" 
              products={PRODUCTS.slice(0, 4)} 
              onAddToCart={handleAddToCart} 
            />
            
            {/* Banner Section */}
            <section className="py-20 px-4">
               <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative h-[400px]">
                 <img 
                   src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWF0JTIwbmF0dXJlfGVufDF8fHx8MTc3MDk3MDMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                   alt="Nature Yoga"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-[#4A5D54]/80 flex items-center justify-center text-center p-8">
                   <div className="max-w-2xl">
                     <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Elevate Your Practice</h2>
                     <p className="text-gray-200 text-lg mb-8">Discover our full range of sustainable yoga gear designed to help you find your flow, wherever you are.</p>
                     <button 
                       onClick={() => setCurrentView('collection')}
                       className="bg-white text-[#4A5D54] px-8 py-3 rounded-full font-bold hover:bg-[#EAE4D9] transition-colors"
                     >
                       Explore Collection
                     </button>
                   </div>
                 </div>
               </div>
            </section>

            <Testimonials />
          </>
        ) : (
          <Collection products={PRODUCTS} onAddToCart={handleAddToCart} />
        )}
      </main>

      <Footer />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={cartItems.reduce((sum, item) => sum + item.price, 0)}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
}
