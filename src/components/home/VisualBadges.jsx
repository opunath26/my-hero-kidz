"use client";

import React from "react";
import Link from "next/link";
import { FaGraduationCap, FaBrain, FaBookReader, FaUserNinja, FaArrowRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function VisualBadges() {
  const categories = [
    {
      id: "flash-cards",
      title: "Learning Flash Cards",
      bnTitle: "ফ্ল্যাশ কার্ড ও লার্নিং",
      count: "120+ Items",
      icon: <FaGraduationCap className="w-8 h-8 text-amber-500 group-hover:rotate-12 transition-transform duration-300" />,
      bgColor: "bg-amber-50/80 group-hover:bg-amber-100",
      borderColor: "hover:border-amber-300",
      badgeBg: "bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-white",
      href: "/products?category=flash-cards",
    },
    {
      id: "puzzles-logic",
      title: "Math & Logic Games",
      bnTitle: "ম্যাথ ও লজিক গেম",
      count: "85+ Items",
      icon: <FaBrain className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />,
      bgColor: "bg-orange-50/80 group-hover:bg-orange-100",
      borderColor: "hover:border-primary/40",
      badgeBg: "bg-orange-100 text-primary group-hover:bg-primary group-hover:text-white",
      href: "/products?category=logic-games",
    },
    {
      id: "story-creativity",
      title: "Story & Creative Kits",
      bnTitle: "স্টোরি মেকার ও পাজল",
      count: "95+ Items",
      icon: <FaBookReader className="w-8 h-8 text-sky-500 group-hover:-rotate-12 transition-transform duration-300" />,
      bgColor: "bg-sky-50/80 group-hover:bg-sky-100",
      borderColor: "hover:border-sky-300",
      badgeBg: "bg-sky-100 text-sky-800 group-hover:bg-sky-500 group-hover:text-white",
      href: "/products?category=creative-kits",
    },
    {
      id: "costumes-roleplay",
      title: "Roleplay & Costumes",
      bnTitle: "ড্রেস-আপ ও টুলস সেট",
      count: "60+ Items",
      icon: <FaUserNinja className="w-8 h-8 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />,
      bgColor: "bg-emerald-50/80 group-hover:bg-emerald-100",
      borderColor: "hover:border-emerald-300",
      badgeBg: "bg-emerald-100 text-emerald-800 group-hover:bg-emerald-500 group-hover:text-white",
      href: "/products?category=roleplay",
    },
  ];

  return (
    <section id="categories" className="relative py-12 md:py-16">
      <div className="mx-auto px-4 max-w-7xl container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 mb-3 px-4 py-1.5 border border-amber-200/80 rounded-full font-bold text-amber-800 text-xs sm:text-sm">
            <HiSparkles className="text-amber-500 animate-pulse" />
            <span className="font-bangla">পছন্দের ক্যাটাগরি বেছে নিন</span>
          </div>

          <h2 className="font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Explore Popular <span className="bg-clip-text bg-gradient-to-r from-primary to-amber-500 text-transparent">Categories</span>
          </h2>

          <p className="mt-2 max-w-lg font-bangla text-slate-600 text-sm md:text-base">
            বাচ্চাদের বয়স ও মেধা বিকাশের ধরন অনুযায়ী সহজে প্রোডাক্ট ব্রাউজ করুন।
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="gap-5 sm:gap-6 grid grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className={`group relative flex flex-col items-center bg-white p-6 md:p-8 border border-slate-200/80 ${cat.borderColor} rounded-3xl text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/50 cursor-pointer overflow-hidden`}
            >
              <div className="top-0 right-0 -z-0 absolute bg-gradient-to-bl from-slate-100/50 to-transparent rounded-bl-full w-20 h-20 group-hover:scale-125 transition-transform" />

              {/* Icon Container */}
              <div className={`z-10 relative flex justify-center items-center ${cat.bgColor} mb-5 rounded-2xl w-16 md:w-20 h-16 md:h-20 shadow-inner transition-colors duration-300`}>
                {cat.icon}
              </div>

              {/* Title & Info */}
              <div className="z-10 relative space-y-1">
                <h3 className="font-extrabold text-slate-900 group-hover:text-primary text-base md:text-lg transition-colors">
                  {cat.title}
                </h3>
                <p className="font-bangla text-slate-500 text-xs md:text-sm">
                  {cat.bnTitle}
                </p>
              </div>

              {/* Items Badge & Hover Arrow */}
              <div className="z-10 relative flex items-center gap-2 mt-5">
                <span className={`px-3.5 py-1 rounded-full font-bold text-xs transition-all duration-300 ${cat.badgeBg}`}>
                  {cat.count}
                </span>
                <div className="flex justify-center items-center bg-slate-100 group-hover:bg-primary opacity-0 group-hover:opacity-100 rounded-full w-6 h-6 transition-all -translate-x-2 group-hover:translate-x-0 duration-300">
                  <FaArrowRight className="text-[10px] text-slate-600 group-hover:text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}