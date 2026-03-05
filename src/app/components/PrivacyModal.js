// src/components/PrivacyModal.js
"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';

export default function PrivacyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white w-full max-w-2xl max-h-[80vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" size={24} />
              <h2 className="text-xl font-bold text-slate-900">Privacy Policy</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={24} className="text-slate-500" />
            </button>
          </div>

          {/* Content (Scrollable) */}
          <div className="p-8 overflow-y-auto custom-scrollbar space-y-6 text-slate-600 leading-relaxed">
            <p className="text-sm italic text-slate-400">Effective Date: January 1, 2026</p>
            
            <p>
              This policy explains how <span className="font-bold">Recep Taylanhan</span> handles data for 
              <span className="font-bold text-blue-600"> ISRA Prayer Times</span>.
            </p>

            <h3 className="text-lg font-bold text-slate-900">1. Data Collection</h3>
            <div className="border border-slate-100 rounded-2xl overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 text-slate-900 font-bold">
                  <tr>
                    <th className="p-4">Data Type</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-4 font-medium">Precise Location</td>
                    <td className="p-4 text-emerald-600 font-bold">Used Locally Only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Personal Identifiers</td>
                    <td className="p-4 text-rose-600 font-bold">None Collected</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
               <ul className="list-disc list-inside space-y-2 text-blue-800 text-sm">
                 <li>Location data never leaves your device.</li>
                 <li>We do not sell or track your personal information.</li>
               </ul>
            </div>

            {/* Manifesto Bölümü */}
            <div className="bg-rose-50 p-8 rounded-[2rem] border-2 border-rose-200 text-center">
               <h4 className="text-rose-700 font-black text-xl mb-2 italic">MANIFESTO</h4>
               <p className="text-rose-600 font-bold italic underline">"NO ADS, NO TRACKING, JUST PEACE."</p>
               <p className="mt-4 text-emerald-600 font-black text-2xl uppercase tracking-tighter">ISRA APP</p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}