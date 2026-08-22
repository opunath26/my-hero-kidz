"use client";

import React from "react";
import Image from "next/image";
import { FiShield, FiHeart, FiTruck, FiSmile } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <FiShield className="w-6 sm:w-7 h-6 sm:h-7 text-emerald-600" />,
      title: "100% Child Safe",
      bnTitle: "শতভাগ নিরাপদ ও বিষমুক্ত",
      description: "আমাদের প্রতিটি প্রোডাক্ট বাচ্চাদের জন্য সম্পূর্ণ সুরক্ষিত এবং নন-টক্সিক মেটেরিয়ালে তৈরি।",
      haloBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-600",
      glowColor: "group-hover:shadow-emerald-500/20",
    },
    {
      id: 2,
      icon: <FiHeart className="w-6 sm:w-7 h-6 sm:h-7 text-rose-600" />,
      title: "Made With Care",
      bnTitle: "যত্ন ও মেধা বিকাশের লার্নিং টুল",
      description: "বাচ্চাদের আনন্দ এবং মেধা বিকাশের কথা মাথায় রেখেই প্রতিটি খেলনা বাছাই করা হয়।",
      haloBg: "bg-rose-500/10 border-rose-500/30 text-rose-600",
      glowColor: "group-hover:shadow-rose-500/20",
    },
    {
      id: 3,
      icon: <FiTruck className="w-6 sm:w-7 h-6 sm:h-7 text-amber-600" />,
      title: "Fast Cash on Delivery",
      bnTitle: "দ্রুততম সময়ে ক্যাশ অন ডেলিভারি",
      description: "সারাদেশে নিরাপদ ও দ্রুত ক্যাশ অন ডেলিভারি সুবিধা, পণ্য হাতে পেয়ে মূল্য পরিশোধের সুযোগ।",
      haloBg: "bg-amber-500/10 border-amber-500/30 text-amber-600",
      glowColor: "group-hover:shadow-amber-500/20",
    },
    {
      id: 4,
      icon: <FiSmile className="w-6 sm:w-7 h-6 sm:h-7 text-sky-600" />,
      title: "Happy Parents & Kids",
      bnTitle: "হাজারো অভিভাবকের ভরসা",
      description: "হাজারো সন্তুষ্ট অভিভাবকের ভালোবাসায় আমরা শিশুদের হাসিমুখ নিশ্চিত করে চলেছি।",
      haloBg: "bg-sky-500/10 border-sky-500/30 text-sky-600",
      glowColor: "group-hover:shadow-sky-500/20",
    },
  ];

  return (
    <section className="relative bg-slate-50/50 py-16 md:py-24 overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="-top-24 -right-24 absolute bg-emerald-100/60 blur-3xl rounded-full w-96 h-96 pointer-events-none" />
      <div className="-bottom-24 -left-24 absolute bg-amber-100/60 blur-3xl rounded-full w-96 h-96 pointer-events-none" />

      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 lg:mb-20 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 shadow-sm mb-3.5 px-4 py-1.5 border border-emerald-200/80 rounded-full font-bold text-emerald-800 text-xs sm:text-sm">
            <HiSparkles className="text-emerald-500 animate-pulse" />
            <span className="font-bangla">কেন আমাদের বেছে নেবেন?</span>
          </div>

          <h2 className="font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Why Parents Trust <span className="bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 text-transparent">Hero Kidz</span>
          </h2>

          <p className="mt-3 max-w-xl font-bangla text-slate-600 text-sm sm:text-base leading-relaxed">
            আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ ও সঠিক মেধা বিকাশে আমরা সেরা মানের নিশ্চয়তা দিই।
          </p>
        </div>

        {/* Content Layout (Image Left + Borderless Points Right) */}
        <div className="items-center gap-10 lg:gap-16 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Side: Parent & Child Lifestyle Image with Floating Badge */}
          <div className="relative lg:col-span-5 mx-auto lg:mx-0 w-full lg:max-w-none max-w-md">
            <div className="relative shadow-2xl rounded-3xl aspect-[4/5] overflow-hidden">
              <Image
                src="/assets/66.jpg"
                alt="Mother and kid playing together"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              
              {/* Bottom Glass Tag */}
              <div className="right-4 sm:right-6 bottom-4 sm:bottom-6 left-4 sm:left-6 absolute bg-white/20 backdrop-blur-md p-4 border border-white/30 rounded-2xl text-white">
                <p className="font-bangla font-extrabold text-base sm:text-lg">
                  নিরাপদ শৈশব, আনন্দময় শিখন 🌟
                </p>
                <p className="mt-0.5 font-bangla text-white/90 text-xs sm:text-sm">
                  অভিভাবকদের নিশ্চিন্ত হাসিমুখই আমাদের মূল শক্তি।
                </p>
              </div>
            </div>

            {/* Glowing Accent Ring Behind Image */}
            <div className="-right-6 -bottom-6 -z-10 absolute bg-emerald-400/20 blur-xl rounded-3xl w-full h-full pointer-events-none" />
          </div>

          {/* Right Side: Borderless Feature Items with Halo Rings */}
          <div className="space-y-6 sm:space-y-8 lg:col-span-7">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group flex items-start gap-4 sm:gap-6 bg-transparent p-2 sm:p-3 rounded-2xl transition-all duration-300"
              >
                {/* Icon Container with Radiant Halo Effect */}
                <div className="relative shrink-0">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl border ${feature.haloBg} flex items-center justify-center transition-all duration-300 shadow-md ${feature.glowColor} group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <div className="flex sm:flex-row flex-col sm:items-center gap-1 sm:gap-3">
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                      {feature.title}
                    </h3>
                    <span className="font-bangla font-bold text-emerald-600 text-xs sm:text-sm">
                      • {feature.bnTitle}
                    </span>
                  </div>

                  <p className="mt-1.5 font-bangla text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}