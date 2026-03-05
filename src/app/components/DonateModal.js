// src/components/DonateModal.js
"use client";
import { Coffee, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DonateModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const KOFI_LINK = 'https://ko-fi.com/receptaylanhan';
  const PAYPAL_LINK = 'https://www.paypal.com/paypalme/receptaylanhan';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white p-8 rounded-[3rem] w-full max-w-md shadow-2xl text-center"
        >
          <div className="w-20 h-20 bg-rose-50 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart size={40} fill="currentColor" />
          </div>
          
          <h2 className="text-2xl font-black text-slate-900 mb-2">Support Our Vision</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            <span className="font-bold text-slate-900 tracking-tighter italic">ISRA</span> is built with love. Your support helps us keep the app 100% ad-free and accurate.
          </p>

          <div className="space-y-4">
            <a href={KOFI_LINK} target="_blank" rel="noreferrer" 
               className="flex items-center justify-center gap-3 w-full p-4 bg-[#29ABE0] text-white rounded-2xl font-bold hover:opacity-90 transition-opacity">
               <Coffee size={20} /> Ko-fi / Buy Me a Coffee
            </a>
            <a href={PAYPAL_LINK} target="_blank" rel="noreferrer"
               className="flex items-center justify-center gap-3 w-full p-4 bg-[#003087] text-white rounded-2xl font-bold hover:opacity-90 transition-opacity">
               PayPal (One-time / Monthly)
            </a>
          </div>

          <button onClick={onClose} className="mt-6 text-slate-400 font-medium hover:text-slate-600 transition-colors">
            Maybe later
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}