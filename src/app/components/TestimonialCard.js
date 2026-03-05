"use client";
import { Star, Apple } from 'lucide-react';

export default function TestimonialCard({ text, user, platform }) {
  const IOS_URL = "https://apps.apple.com/us/app/isra-pro-prayer-times/id6756538182";
  const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.taylanhanrecep.israapp";

  return (
    <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner transition-all hover:bg-white hover:shadow-lg flex flex-col h-full">
      <div className="flex gap-1 mb-5 text-amber-500">
        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
      </div>
      <p className="text-slate-800 mb-8 leading-relaxed text-lg font-medium grow italic">
        "{text}"
      </p>
      <div className="flex items-center justify-between pt-6 border-t border-slate-200">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-xs">
            {user.charAt(0)}
          </div>
          <p className="font-black text-slate-900 text-sm tracking-wide">{user}</p>
        </div>

        {/* Market Linki */}
        {platform === 'ios' ? (
          <a href={IOS_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-[11px] font-bold hover:opacity-80 transition-all shadow-md">
            <Apple size={14} /> App Store
          </a>
        ) : (
          <a href={ANDROID_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl text-[11px] font-bold hover:opacity-80 transition-all shadow-md">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" className="w-3" alt="GP" /> Play Store
          </a>
        )}
      </div>
    </div>
  );
}