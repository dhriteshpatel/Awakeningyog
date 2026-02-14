import React from "react";
import { X, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Product } from "./ProductCard";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onRemoveItem: (id: number) => void;
  onCheckout: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onCheckout }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-[60]"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b border-gray-100">
              <h2 className="text-xl font-serif font-bold text-[#2C3333] flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" /> Your Cart
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-[#2C3333] transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="bg-gray-100 p-6 rounded-full">
                    <ShoppingBag className="h-10 w-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Your cart is empty.</p>
                  <button onClick={onClose} className="text-[#D97C66] font-medium hover:underline">
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {cartItems.map((item, index) => (
                    <li key={`${item.id}-${index}`} className="flex py-2">
                      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{item.name}</h3>
                            <p className="ml-4">₹{item.price.toLocaleString()}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty 1</p>

                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.id)}
                            className="font-medium text-[#D97C66] hover:text-[#C26B57] flex items-center gap-1"
                          >
                            <Trash2 className="h-4 w-4" /> Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 p-6 bg-[#F9F7F2]">
                <div className="flex justify-between text-base font-medium text-[#2C3333] mb-4">
                  <p>Subtotal</p>
                  <p>₹{subtotal.toLocaleString()}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500 mb-6">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  onClick={onCheckout}
                  className="w-full flex items-center justify-center rounded-md border border-transparent bg-[#4A5D54] px-6 py-4 text-base font-medium text-white shadow-sm hover:bg-[#3A4942] transition-colors"
                >
                  Checkout <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
