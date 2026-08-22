"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaHeart, FaQuoteLeft } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function CustomerGallery() {
  const photos = [
    {
      id: 1,
      image: "/assets/11.jpg",
      caption: "আরিয়ান তার নতুন লার্নিং টয় নিয়ে ভীষণ ব্যস্ত! 🎈",
      likes: "248",
      parent: "@sultana_family",
      badgeColor: "bg-rose-500",
    },
    {
      id: 2,
      image: "/assets/22.avif",
      caption: "Hero Kidz-এর ব্লক সেটটা ছোট মেয়ের খুব পছন্দ হয়েছে।",
      likes: "192",
      parent: "@tanvir_moments",
      badgeColor: "bg-amber-500",
    },
    {
      id: 3,
      image: "/assets/33.jpg",
      caption: "অর্ডার করার ২ দিনের মধ্যে হাতে পেলাম, থ্যাংক ইউ! 🎁",
      likes: "310",
      parent: "@aisha_life",
      badgeColor: "bg-emerald-500",
    },
    {
      id: 4,
      image: "/assets/44.jpg",
      caption: "মেধা বিকাশে সত্যি অসাধারণ সব খেলনা তাদের কাছে আছে।",
      likes: "420",
      parent: "@rahim_vlogs",
      badgeColor: "bg-sky-500",
    },
    {
      id: 5,
      image: "/assets/11.jpg",
      caption: "বাচ্চার মুখের হাসি দেখে সত্যি অনেক আনন্দ লাগছে।",
      likes: "185",
      parent: "@sumon_kids",
      badgeColor: "bg-purple-500",
    },
    
  ];

  // Dynamic layout helpers for multi-item asymmetry
  const getLayoutClass = (index) => {
    const layouts = [
      "lg:col-span-4 h-[320px] sm:h-[380px] lg:rotate-[-1.5deg]",
      "lg:col-span-4 h-[300px] sm:h-[360px] lg:rotate-[1deg]",
      "lg:col-span-4 h-[320px] sm:h-[380px] lg:rotate-[-2deg]",
      "lg:col-span-6 h-[300px] sm:h-[360px] lg:rotate-[1.5deg]",
      "lg:col-span-6 h-[300px] sm:h-[360px] lg:rotate-[-1deg]",
    ];
    return layouts[index % layouts.length];
  };

  return (
    <section className="relative bg-slate-50/60 py-16 md:py-24 overflow-hidden">
      
      {/* Background Aesthetic Blur Circles */}
      <div className="-top-20 -left-20 absolute bg-rose-200/40 blur-3xl rounded-full w-80 h-80 pointer-events-none" />
      <div className="-right-20 -bottom-20 absolute bg-amber-200/40 blur-3xl rounded-full w-80 h-80 pointer-events-none" />

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100/80 shadow-sm mb-3.5 px-4 py-1.5 border border-rose-200/80 rounded-full font-bold text-rose-800 text-xs sm:text-sm">
            <HiSparkles className="text-rose-500 animate-pulse" />
            <span className="font-bangla">হ্যাপি কিডস ও প্যারেন্টস</span>
          </div>

          <h2 className="font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Little Smiles with <span className="bg-clip-text bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 text-transparent">Hero Kidz</span>
          </h2>

          <p className="mt-3 max-w-md font-bangla text-slate-600 text-sm sm:text-base leading-relaxed">
            সোশ্যাল মিডিয়ায় আমাদের কাস্টমারদের শেয়ার করা সুন্দর মুহূর্তগুলো।
          </p>
        </div>

        {/* Dynamic Organic Gallery Layout */}
        <div className="items-center gap-6 sm:gap-8 lg:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12">
          {photos.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:z-20 cursor-pointer ${getLayoutClass(
                index
              )}`}
            >
              {/* Photo */}
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay for Text Visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Floating Instagram & Parent Tag */}
              <div className="hidden top-4 right-4 left-4 absolute sm:flex justify-between items-center">
                <span className="bg-slate-900/60 backdrop-blur-md px-3 py-1 border border-white/20 rounded-full font-bold text-[11px] text-white">
                  {item.parent}
                </span>
                <div className="bg-white/20 backdrop-blur-md p-2 border border-white/30 rounded-full text-white">
                  <FaInstagram className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Floating Quote Badge (Mobile) */}
              <div className="sm:hidden -top-3 -right-3 z-10 absolute bg-white/20 backdrop-blur-md p-2 border border-white/30 rounded-full text-white">
                <FaInstagram className="w-4 h-4" />
              </div>

              {/* Bottom Floating Story & Review */}
              <div className="bottom-0 absolute p-4 sm:p-6 w-full text-white">
                <div className="flex items-center gap-2 mb-2">
                  <FaQuoteLeft className="text-amber-300/80 text-xs sm:text-sm" />
                  <div className="flex items-center gap-1 font-bold text-rose-400 text-xs">
                    <FaHeart className="w-3 h-3" />
                    <span>{item.likes}</span>
                  </div>
                </div>

                <p className="font-bangla font-medium text-white/95 text-xs sm:text-sm md:text-base leading-relaxed">
                  "{item.caption}"
                </p>

                <p className="sm:hidden mt-2 font-semibold text-[10px] text-amber-300 sm:text-xs">
                  {item.parent}
                </p>
              </div>

              {/* Glow Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${item.badgeColor} opacity-80`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}