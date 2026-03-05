"use client";
import React from 'react';
import { Heart, Mail, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer({ onPrivacyClick, onDonateClick }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-slate-100 bg-slate-50/50 px-6 relative overflow-hidden text-slate-900">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Logo & Slogan */}
          <div className="mb-10 text-center">
            <h3 className="text-3xl font-black tracking-tighter italic mb-3">
              Isra Pro
            </h3>
            <div className="h-1.5 w-10 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed font-medium">
              The most precise prayer times and Qibla finder for the global Muslim community. 
              Designed for peace, built for the Ummah.
            </p>
          </div>

          {/* Hızlı Linkler & Destek */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
            <button 
              onClick={onPrivacyClick} 
              className="group flex items-center gap-2 text-slate-700 hover:text-blue-600 font-bold text-sm transition-all"
            >
              <ShieldCheck size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              Privacy Policy
            </button>
            
            <a 
              href="mailto:taylanhanr@gmail.com" 
              className="group flex items-center gap-2 text-slate-700 hover:text-blue-600 font-bold text-sm transition-all"
            >
              <Mail size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              taylanhanr@gmail.com
            </a>

            <button 
              onClick={onDonateClick} 
              className="group flex items-center gap-2 text-rose-500 hover:text-rose-600 font-bold text-sm transition-all bg-rose-50 px-4 py-2 rounded-xl border border-rose-100 shadow-sm"
            >
              <Heart size={16} fill="currentColor" className="text-rose-400 group-hover:text-rose-600 transition-transform group-hover:scale-110" />
              Support the Vision
            </button>
          </div>

          {/* Ayırıcı Çizgi */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-12"></div>

          {/* Alt Kısım: Copyright & Branding */}
          <div className="text-center space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
              <p className="text-slate-400 text-[11px] font-black tracking-[0.25em] uppercase">
                © {currentYear} <span className="text-slate-900">ISRA PRO</span>
              </p>
              <span className="hidden md:inline text-slate-200">|</span>
              <p className="text-slate-400 text-[11px] font-black tracking-[0.25em] uppercase">
                All Rights Reserved
              </p>
            </div>
            
            <p className="text-slate-400 text-[10px] font-medium italic bg-white/50 px-4 py-1.5 rounded-full border border-slate-100 inline-block shadow-sm">
              Designed & Developed by <span className="text-blue-600 not-italic font-bold">Recep Taylanhan</span>
            </p>
          </div>
        </div>
      </div>

      {/* Arka plan süsü - Hafif bir mavi dokunuş */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100/20 rounded-full blur-[100px] -z-0"></div>
    </footer>
  );
}