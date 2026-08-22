"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";
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
    <section className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 pt-12 sm:pt-16 lg:pt-20 pb-20 sm:pb-24 w-full overflow-hidden text-white">
      
      {/* Dynamic Background Glow Elements */}
      <div className="-top-20 -left-20 absolute bg-white/20 blur-3xl rounded-full w-72 sm:w-96 h-72 sm:h-96 animate-pulse pointer-events-none" />
      <div className="-right-20 -bottom-20 absolute bg-rose-900/30 blur-3xl rounded-full w-80 sm:w-96 h-80 sm:h-96 pointer-events-none" />

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        <div className="items-center gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Content (Offer details & Coupon) */}
          <div className="space-y-4 sm:space-y-6 lg:col-span-7 lg:text-left text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 border border-white/30 rounded-full font-bold text-white text-xs sm:text-sm">
              <HiSparkles className="text-amber-200 animate-spin" />
              <span className="font-bangla">সীমিত সময়ের মেগা অফার</span>
            </div>

            <h2 className="font-black text-white text-3xl sm:text-5xl md:text-6xl leading-tight tracking-tight">
              Mega Sale! Get{" "}
              <span className="inline-block relative bg-white/10 backdrop-blur-sm px-3 py-1 rounded-2xl font-extrabold text-amber-200 -rotate-1 transform">
                25% OFF
              </span>
            </h2>

            <p className="mx-auto lg:mx-0 max-w-2xl font-bangla text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">
              আপনার পছন্দের সব শিক্ষণীয় ও মজাদার খেলনায় পাচ্ছেন ২৫% বিশেষ ছাড়। স্টক শেষ হওয়ার আগেই কুপন ব্যবহার করে অর্ডার কনফার্ম করুন!
            </p>

            {/* Interactive Coupon Code Pill */}
            <div className="flex sm:flex-row flex-col justify-center lg:justify-start items-center gap-3 pt-2">
              <span className="font-bangla text-white/90 text-xs sm:text-sm">বিশেষ কুপন কোড:</span>
              <button
                onClick={handleCopyCode}
                className="group flex items-center gap-2.5 bg-white hover:bg-amber-50 shadow-lg px-4 py-2 rounded-xl font-black text-slate-900 text-sm sm:text-base active:scale-95 transition-all duration-200"
              >
                <span className="text-rose-600 tracking-wider">HERO25</span>
                {copied ? (
                  <span className="flex items-center gap-1 font-semibold text-emerald-600 text-xs">
                    <FiCheck /> কপিড!
                  </span>
                ) : (
                  <FiCopy className="text-slate-400 group-hover:text-slate-600 transition-colors" />
                )}
              </button>
            </div>
          </div>

          {/* Right Visuals (Glowing Timer & Kid Showcase) */}
          <div className="flex sm:flex-row xl:flex-row flex-col lg:flex-col justify-center items-center gap-6 lg:col-span-5">
            
            {/* Glowing Interactive Timer */}
            <div className="bg-slate-900/60 shadow-2xl backdrop-blur-md p-4 sm:p-5 border border-white/20 rounded-3xl shrink-0">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bangla font-semibold text-amber-300 text-xs sm:text-sm">
                  অফার শেষ হতে বাকি
                </span>
                <span className="flex bg-rose-500/80 px-2 py-0.5 rounded-full w-2 h-2 animate-ping" />
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                {/* Hours */}
                <div className="flex flex-col items-center bg-white/10 p-2.5 sm:p-3 rounded-2xl min-w-[55px] sm:min-w-[65px]">
                  <span className="font-black text-amber-300 text-2xl sm:text-3xl">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="font-bangla text-[10px] text-white/80 sm:text-xs">ঘণ্টা</span>
                </div>

                <span className="font-black text-white/50 text-xl sm:text-2xl">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center bg-white/10 p-2.5 sm:p-3 rounded-2xl min-w-[55px] sm:min-w-[65px]">
                  <span className="font-black text-amber-300 text-2xl sm:text-3xl">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="font-bangla text-[10px] text-white/80 sm:text-xs">মিনিট</span>
                </div>

                <span className="font-black text-white/50 text-xl sm:text-2xl">:</span>

                {/* Glowing Seconds */}
                <div className="flex flex-col items-center bg-amber-400/20 p-2.5 sm:p-3 border border-amber-300/40 rounded-2xl min-w-[55px] sm:min-w-[65px]">
                  <span className="font-black text-amber-300 text-2xl sm:text-3xl animate-pulse">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="font-bangla text-[10px] text-white/80 sm:text-xs">সেকেন্ড</span>
                </div>
              </div>

              {/* Action Button */}
              <Link href="/products" className="block mt-4">
                <button className="group flex justify-center items-center gap-2 bg-gradient-to-r from-amber-400 hover:from-amber-300 to-amber-500 hover:to-amber-400 shadow-amber-900/30 shadow-lg py-3 rounded-2xl w-full font-extrabold text-slate-950 text-xs sm:text-sm active:scale-95 transition-all duration-200">
                  <span className="font-bangla">এখনই শপিং শুরু করুন</span>
                  <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>

            {/* Cute Child Image Showcase with Badge */}
            <div className="relative rounded-3xl w-48 sm:w-56 md:w-60 aspect-square overflow-hidden shrink-0">
              <Image
                src="/assets/55.avif"
                alt="Kid playing with toy"
                fill
                sizes="(max-width: 768px) 200px, 240px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="right-2 bottom-2 left-2 absolute bg-slate-900/70 backdrop-blur-sm p-2 rounded-xl text-center">
                <span className="font-bangla font-semibold text-[11px] text-white/90">
                  প্রিমিয়াম কোয়ালিটি লার্নিং টয় 🧸
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Wavy Bottom Border (Seamless Wave effect to break card structure) */}
      <div className="bottom-0 left-0 absolute w-full overflow-hidden leading-none pointer-events-none">
        <svg
          className="block relative w-full h-8 sm:h-12 lg:h-16 text-slate-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
}