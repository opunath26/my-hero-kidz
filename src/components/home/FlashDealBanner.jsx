"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiSparkles, HiClock } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa6";
import { FiCopy, FiCheck } from "react-icons/fi";

export default function FlashDealBanner() {
  // 12 hours countdown state
  const [timeLeft, setTimeLeft] = useState({
    hours: 11,
    minutes: 59,
    seconds: 59,
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText("HERO25");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-10 md:py-14 overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl container">
        
        <div className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 shadow-amber-500/20 shadow-xl p-6 sm:p-10 md:p-12 border-2 border-amber-300/60 rounded-3xl overflow-hidden text-white">
          
          {/* Background Decorative Circles */}
          <div className="-top-12 -left-12 absolute bg-white/20 blur-2xl rounded-full w-48 h-48 pointer-events-none" />
          <div className="-right-12 -bottom-12 absolute bg-slate-900/10 blur-2xl rounded-full w-56 h-56 pointer-events-none" />

          <div className="z-10 relative flex lg:flex-row flex-col justify-between items-center gap-8">
            
            {/* Left Content */}
            <div className="lg:text-left text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md mb-3 px-3.5 py-1 border border-white/30 rounded-full font-bold text-white text-xs sm:text-sm">
                <HiSparkles className="text-amber-200 animate-pulse" />
                <span className="font-bangla">সীমিত সময়ের অফার</span>
              </div>

              <h2 className="font-black text-white text-2xl sm:text-4xl lg:text-5xl tracking-tight">
                Mega Sale! Get <span className="decoration-amber-200 decoration-wavy underline">25% OFF</span>
              </h2>

              <p className="mt-2 max-w-lg font-bangla text-white/90 text-xs sm:text-sm md:text-base">
                আপনার পছন্দের সব শিক্ষণীয় ও মজাদার খেলনায় পাচ্ছন ২৫% বিশেষ ছাড়। স্টক শেষ হওয়ার আগেই কুপন ব্যবহার করে অর্ডার কনফার্ম করুন!
              </p>

              {/* Coupon Code Pill */}
              <div className="flex justify-center lg:justify-start items-center gap-2 mt-4">
                <span className="font-bangla text-white/80 text-xs">কুপন কোড:</span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-2 bg-white hover:bg-slate-100 shadow-sm px-3 py-1 rounded-lg font-black text-slate-900 text-xs sm:text-sm transition-colors"
                >
                  <span className="tracking-wider">HERO25</span>
                  {copied ? <FiCheck className="text-emerald-600" /> : <FiCopy className="text-slate-500" />}
                </button>
              </div>
            </div>

            {/* Right Timer & CTA */}
            <div className="flex flex-col items-center gap-6 shrink-0">
              
              {/* Timer Box */}
              <div className="flex items-center gap-2 sm:gap-3 bg-slate-900/40 backdrop-blur-md p-3 sm:p-4 border border-white/20 rounded-2xl">
                <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px]">
                  <span className="font-black text-amber-300 text-2xl sm:text-3xl">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="font-bangla text-[10px] text-white/70 sm:text-xs">ঘণ্টা</span>
                </div>

                <span className="mb-3 font-bold text-white/60 text-xl">:</span>

                <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px]">
                  <span className="font-black text-amber-300 text-2xl sm:text-3xl">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="font-bangla text-[10px] text-white/70 sm:text-xs">মিনিট</span>
                </div>

                <span className="mb-3 font-bold text-white/60 text-xl">:</span>

                <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px]">
                  <span className="font-black text-amber-300 text-2xl sm:text-3xl animate-pulse">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="font-bangla text-[10px] text-white/70 sm:text-xs">সেকেন্ড</span>
                </div>
              </div>

              {/* Action Button */}
              <Link href="/products">
                <button className="group flex items-center gap-2.5 bg-slate-900 hover:bg-slate-950 shadow-xl px-8 py-3.5 rounded-full font-extrabold text-white text-xs sm:text-sm active:scale-95 transition-all duration-200">
                  <span className="font-bangla">এখনই অফার নিন</span>
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1 duration-200" />
                </button>
              </Link>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}