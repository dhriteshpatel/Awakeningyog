import React, { useState } from "react";
import { X, CheckCircle, Loader2, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onPaymentSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, totalAmount, onPaymentSuccess }) => {
  const [step, setStep] = useState<'method' | 'processing' | 'success'>('method');

  const handlePayment = () => {
    setStep('processing');
    // Simulate payment processing time
    setTimeout(() => {
      setStep('success');
    }, 2000);
  };

  const handleClose = () => {
    if (step === 'success') {
      onPaymentSuccess();
      setStep('method'); // Reset for next time
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#F9F7F2] p-4 flex justify-between items-center border-b border-gray-100">
              <h3 className="font-serif font-bold text-[#2C3333]">Checkout</h3>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {step === 'method' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">Total Amount to Pay</p>
                    <h2 className="text-3xl font-bold text-[#2C3333]">₹{totalAmount.toLocaleString()}</h2>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">Select Payment Method</p>
                    <button
                      onClick={handlePayment}
                      className="w-full flex items-center justify-between p-4 border border-[#4A5D54] bg-[#F9F7F2]/50 rounded-xl hover:bg-[#F9F7F2] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-lg shadow-sm text-[#4A5D54]">
                          <Smartphone className="h-6 w-6" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-[#2C3333]">UPI / GPay</p>
                          <p className="text-xs text-gray-500">Google Pay, PhonePe, Paytm</p>
                        </div>
                      </div>
                      <div className="h-4 w-4 rounded-full border border-gray-300 group-hover:border-[#D97C66]" />
                    </button>
                    
                    <button disabled className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl opacity-50 cursor-not-allowed">
                       <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2 rounded-lg text-gray-400">
                           <span className="font-bold text-xs">CARD</span>
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-gray-400">Credit / Debit Card</p>
                          <p className="text-xs text-gray-400">Temporarily Unavailable</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {step === 'processing' && (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                  <Loader2 className="h-12 w-12 text-[#D97C66] animate-spin" />
                  <div>
                    <h3 className="text-lg font-bold text-[#2C3333]">Processing Payment</h3>
                    <p className="text-sm text-gray-500">Please check your UPI app...</p>
                  </div>
                </div>
              )}

              {step === 'success' && (
                <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="bg-green-100 p-4 rounded-full text-green-600 mb-2">
                    <CheckCircle className="h-12 w-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#2C3333]">Payment Successful!</h3>
                    <p className="text-gray-500 mt-2">Your order has been placed successfully.</p>
                  </div>
                  <button 
                    onClick={handleClose}
                    className="mt-6 bg-[#4A5D54] text-white px-8 py-3 rounded-full font-medium hover:bg-[#3A4942] transition-colors w-full"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
