"use client";

import React, { useState } from "react";
import { FiMail, FiSend, FiCheckCircle } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl container">
        
        {/* Soft Playful Container */}
        <div className="relative bg-gradient-to-br from-amber-100/90 via-orange-50 to-rose-100/80 shadow-amber-100/50 shadow-xl p-8 sm:p-12 md:p-16 border-2 border-amber-200/80 rounded-[2.5rem] overflow-hidden text-center">
          
          {/* Decorative Floating Badges */}
          <div className="hidden top-6 left-8 absolute md:flex items-center gap-2 bg-white/80 shadow-sm backdrop-blur-sm px-4 py-2 border border-amber-200 rounded-2xl font-bold text-slate-700 text-xs animate-bounce duration-1000">
            <span>🎁 ১০% ছাড় কুপন</span>
          </div>

          <div className="hidden right-8 bottom-8 absolute md:flex items-center gap-2 bg-white/80 shadow-sm backdrop-blur-sm px-4 py-2 border border-rose-200 rounded-2xl font-bold text-slate-700 text-xs animate-pulse">
            <span>🚀 নতুন খেলনার আপডেট</span>
          </div>

          {/* Main Content */}
          <div className="z-10 relative mx-auto max-w-2xl">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-white shadow-sm mb-4 px-4 py-1.5 border border-amber-300 rounded-full font-bold text-amber-700 text-xs sm:text-sm">
              <HiSparkles className="text-amber-500" />
              <span className="font-bangla">Hero Kidz ক্লাব-এ যোগ দিন</span>
            </div>

            {/* Heading */}
            <h2 className="font-black text-slate-900 text-2xl sm:text-4xl md:text-5xl tracking-tight">
              Get <span className="bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 text-transparent">10% Off</span> Your First Order!
            </h2>

            {/* Subtitle */}
            <p className="mt-3 font-bangla text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
              সাপ্তাহিক স্পেশাল ডিসকাউন্ট, প্যারেন্টিং টিপস এবং নতুন সব খেলনার আপডেট সবার আগে পেতে আপনার ইমেইল দিয়ে ক্লাব মেম্বার হয়ে যান।
            </p>

            {/* Input Form */}
            <div className="mx-auto mt-8 max-w-md">
              {isSubscribed ? (
                <div className="flex justify-center items-center gap-2 bg-emerald-100 shadow-sm p-4 border border-emerald-300 rounded-2xl font-bangla text-emerald-800 text-xs sm:text-sm">
                  <FiCheckCircle className="text-emerald-600 text-lg shrink-0" />
                  <span>ধন্যবাদ! আপনার ১০% ডিসকাউন্ট কোডটি ইমেইলে পাঠিয়ে দেওয়া হয়েছে।</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex sm:flex-row flex-col items-center gap-2.5 sm:gap-0 bg-white shadow-md p-2 border-2 border-amber-300/80 focus-within:border-amber-500 rounded-2xl sm:rounded-full transition-all">
                  
                  {/* Icon & Input */}
                  <div className="flex items-center gap-3 px-3 w-full">
                    <FiMail className="w-5 h-5 text-amber-500 shrink-0" />
                    <input
                      type="email"
                      placeholder="আপনার ইমেইল অ্যাড্রেস লিখুন..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-transparent py-2.5 focus:outline-none w-full font-bangla font-medium text-slate-800 text-xs sm:text-sm placeholder-slate-400"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex justify-center items-center gap-2 bg-gradient-to-r from-amber-500 hover:from-amber-600 to-rose-500 hover:to-rose-600 shadow-md px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-full w-full sm:w-auto font-extrabold text-white text-xs sm:text-sm active:scale-95 transition-all shrink-0"
                  >
                    <span className="font-bangla">কুপন নিন</span>
                    <FiSend className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Security Note */}
            <p className="mt-4 font-bangla font-medium text-slate-500 text-xs">
              🔒 কোনো স্প্যাম পাঠানো হয় না। যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}