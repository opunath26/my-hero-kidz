"use client";

import React from "react";
import Image from "next/image";
import { FaInstagram, FaHeart } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function CustomerGallery() {
  const photos = [
    {
      id: 1,
      image: "/assets/11.jpg",
      caption: "আরিয়ান তার নতুন লার্নিং টয় নিয়ে ভীষণ ব্যস্ত! 🎈",
      likes: "248",
      parent: "@sultana_family",
    },
    {
      id: 2,
      image: "/assets/22.avif",
      caption: "Hero Kidz-এর ব্লক সেটটা ছোট মেয়ের খুব পছন্দ হয়েছে।",
      likes: "192",
      parent: "@tanvir_moments",
    },
    {
      id: 3,
      image: "/assets/33.jpg",
      caption: "অর্ডার করার ২ দিনের মধ্যে হাতে পেলাম, থ্যাংক ইউ! 🎁",
      likes: "310",
      parent: "@aisha_life",
    },
    {
      id: 4,
      image: "/assets/44.jpg",
      caption: "মেধা বিকাশে সত্যি অসাধারণ সব খেলনা তাদের কাছে আছে।",
      likes: "420",
      parent: "@rahim_vlogs",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100/80 mb-3 px-4 py-1.5 border border-rose-200/80 rounded-full font-bold text-rose-800 text-xs sm:text-sm">
            <HiSparkles className="text-rose-500 animate-pulse" />
            <span className="font-bangla">হ্যাপি কিডস ও প্যারেন্টস</span>
          </div>

          <h2 className="font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Little Smiles with <span className="bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 text-transparent">Hero Kidz</span>
          </h2>

          <p className="mt-2 max-w-md font-bangla text-slate-600 text-sm md:text-base">
            সোশ্যাল মিডিয়ায় আমাদের কাস্টমারদের শেয়ার করা সুন্দর মুহূর্তগুলো।
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="gap-4 sm:gap-6 grid grid-cols-2 lg:grid-cols-4">
          {photos.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-100 hover:shadow-xl border border-slate-200/80 rounded-3xl h-64 sm:h-80 overflow-hidden transition-all hover:-translate-y-1.5 duration-300"
            >
              <Image
                src={item.image}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Badge */}
              <div className="top-3 right-3 absolute bg-white/20 backdrop-blur-md p-2 border border-white/30 rounded-full text-white">
                <FaInstagram className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="bottom-0 absolute p-4 sm:p-5 w-full text-white">
                <div className="flex items-center gap-1.5 mb-1 font-bold text-rose-400 text-xs">
                  <FaHeart className="w-3.5 h-3.5" />
                  <span>{item.likes} Likes</span>
                </div>

                <p className="font-bangla text-white/90 text-xs sm:text-sm line-clamp-2 leading-snug">
                  "{item.caption}"
                </p>

                <p className="mt-2 font-semibold text-[10px] text-amber-300/90 sm:text-xs tracking-wide">
                  {item.parent}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}