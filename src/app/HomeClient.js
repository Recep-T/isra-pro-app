"use client";
import React, { useState } from 'react';
import { Heart, Compass, Bell, Globe, Apple } from 'lucide-react';
import { motion } from 'framer-motion';
import QRCode from "react-qr-code";

// Yeni Componentleri Buradan Import Ediyoruz
import TestimonialCard from './components/TestimonialCard';
import DonateModal from './components/DonateModal';
import PrivacyModal from './components/PrivacyModal';
import Footer from './components/Footer';

export default function Home() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const IOS_URL = "https://apps.apple.com/us/app/isra-pro-prayer-times/id6756538182";
  const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.taylanhanrecep.israapp";

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-16 px-6 text-center bg-gradient-to-b from-blue-50/50 to-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
            Isra Pro <span className="text-blue-600">Prayer Times</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Beautifully designed, highly accurate prayer times for the global Muslim community. No ads, just peace. 
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href={IOS_URL} className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl">
              <Apple size={22} /> App Store
            </a>
            <a href={ANDROID_URL} className="w-full sm:w-auto bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-6" /> Google Play
            </a>
            <button onClick={() => setIsDonateOpen(true)} className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
              <Heart size={20} className="text-rose-500" fill="currentColor" /> Donate
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- DUAL PHONE QR SECTION (O ÇOK BEĞENDİĞİN KISIM) --- */}
      <section className="py-20 px-6 bg-slate-50/30">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-24 relative items-center justify-center w-full max-w-5xl mx-auto">
                <div className="absolute -inset-20 bg-blue-100/30 rounded-full blur-[120px] -z-10"></div>

                {/* IPHONE QR BOX */}
                <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center md:justify-end">
                    <div className="relative bg-white rounded-[3.5rem] p-8 w-[300px] h-[560px] border-[12px] border-slate-900 shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20"></div>
                        <div className="p-5 bg-slate-50 rounded-3xl shadow-inner mb-8 border border-slate-100">
                            <QRCode value={IOS_URL} size={160} fgColor="#000000" />
                        </div>
                        <Apple className="text-slate-900 mb-2" size={32} />
                        <span className="text-sm font-black text-slate-900 tracking-widest uppercase mb-1 text-center">Scan for iOS</span>
                    </div>
                </motion.div>

                {/* ANDROID PHONE QR BOX */}
                <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex justify-center md:justify-start">
                    <div className="relative bg-white rounded-[3rem] p-8 w-[300px] h-[560px] border-[12px] border-slate-800 shadow-[30px_30px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-800 rounded-full z-20"></div>
                        <div className="p-5 bg-slate-50 rounded-3xl shadow-inner mb-8 border border-slate-100">
                            <QRCode value={ANDROID_URL} size={160} fgColor="#0F172A" />
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 mb-2" />
                        <span className="text-sm font-black text-slate-900 tracking-widest uppercase mb-1 text-center">Scan for Android</span>
                    </div>
                </motion.div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
                <FeatureCard icon={<Compass className="text-blue-600" />} title="Precise Qibla" desc="High-precision sensor for exact Kaaba direction." />
                <FeatureCard icon={<Bell className="text-indigo-600" />} title="Smart Athan" desc="Personalized notifications for every prayer time." />
                <FeatureCard icon={<Globe className="text-emerald-600" />} title="5+ Languages" desc="English, Türkçe, Español, Kyrgyz, Deutsch." />
            </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION (MARKET LİNKLİ YENİ HALİ) --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16 tracking-tight italic text-slate-900 uppercase">Global Reviews</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard text="The most accurate app I've used in London. Very clean UI!" user="Ali, UK" platform="ios" />
            <TestimonialCard text="Кыргыз тили бар экени абдан кубантты. Дизайны абдан жөнөкөй!" user="Nurbek, KG" platform="android" />
            <TestimonialCard text="Excellent design, very helpful for my daily routine." user="Maria, ES" platform="ios" />
          </div>
        </div>
      </section>

      {/* --- MODALS & FOOTER --- */}
      <DonateModal isOpen={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />

     {/* --- PROFESSIONAL FOOTER --- */}
    <Footer 
  onPrivacyClick={() => setIsPrivacyOpen(true)} 
  onDonateClick={() => setIsDonateOpen(true)} 
/>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center transition-all hover:-translate-y-2">
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">{icon}</div>
      <h3 className="font-black text-lg text-slate-900 mb-2 uppercase">{title}</h3>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  );
}