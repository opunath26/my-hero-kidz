"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaBaby,
  FaChild,
  FaUserGraduate,
  FaSmile,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function AgeFilter() {
  const ageGroups = [
    {
      id: "0-2",
      ageRange: "০ - ২ বছর",
      title: "Infants & Toddlers",
      subtitle: "ইন্দ্রিয় বিকাশ ও স্পর্শ অনুভূতির খেলনা",
      icon: <FaBaby className="w-6 h-6 text-rose-500" />,
      badge: "সফট ও নিরাপদ",
      features: ["সেন্সরি স্টিমুলেশন", "সফট ফিনিশিং", "রঙিন ভিজ্যুয়াল"],
      bgColor: "from-rose-50 to-pink-50/50",
      activeBorder: "border-rose-400 bg-rose-50/80 text-rose-600",
      btnColor: "bg-rose-500 hover:bg-rose-600 text-white",
    },
    {
      id: "3-5",
      ageRange: "৩ - ৫ বছর",
      title: "Preschool Learners",
      subtitle: "শব্দ শেখা, বর্ণমালা ও প্রাথমিক গণিত",
      icon: <FaSmile className="w-6 h-6 text-amber-500" />,
      badge: "সবচেয়ে জনপ্রিয়",
      features: ["স্মার্ট ফ্ল্যাশ কার্ড", "শেপ ও কালার পাজল", "শব্দ চেনার গেম"],
      bgColor: "from-amber-50 to-orange-50/50",
      activeBorder: "border-amber-400 bg-amber-50/80 text-amber-600",
      btnColor: "bg-amber-500 hover:bg-amber-600 text-white",
    },
    {
      id: "6-8",
      ageRange: "৬ - ৮ বছর",
      title: "Early Explorers",
      subtitle: "লজিক্যাল থিংকিং ও ক্রিয়েটিভ গেম",
      icon: <FaChild className="w-6 h-6 text-emerald-500" />,
      badge: "মেধা বিকাশ",
      features: ["ম্যাথ পাজল", "স্টোরি মেকিং কিট", "মেমোরি গেম"],
      bgColor: "from-emerald-50 to-teal-50/50",
      activeBorder: "border-emerald-400 bg-emerald-50/80 text-emerald-600",
      btnColor: "bg-emerald-500 hover:bg-emerald-600 text-white",
    },
    {
      id: "9-plus",
      ageRange: "৯+ বছর",
      title: "Young Thinkers",
      subtitle: "এডভান্সড চ্যালেঞ্জ ও ক্রিয়েটিভ আর্ট",
      icon: <FaUserGraduate className="w-6 h-6 text-sky-500" />,
      badge: "ব্রেন এক্সারসাইজ",
      features: ["জটিল লজিক পাজল", "কৌশলী বোর্ড গেম", "ড্রয়িং কিট"],
      bgColor: "from-sky-50 to-indigo-50/50",
      activeBorder: "border-sky-400 bg-sky-50/80 text-sky-600",
      btnColor: "bg-sky-500 hover:bg-sky-600 text-white",
    },
  ];

  const [selectedAgeId, setSelectedAgeId] = useState("3-5");
  const activeGroup =
    ageGroups.find((g) => g.id === selectedAgeId) || ageGroups[1];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl container">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 md:mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100/80 mb-3 px-4 py-1.5 border border-rose-200/80 rounded-full font-bold text-rose-800 text-xs sm:text-sm">
            <HiSparkles className="text-rose-500 animate-pulse" />
            <span className="font-bangla">বয়স অনুযায়ী সঠিক খেলনা বেছে নিন</span>
          </div>

          <h2 className="font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Shop Toys By{" "}
            <span className="bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 text-transparent">
              Age Group
            </span>
          </h2>

          <p className="mt-2 max-w-lg font-bangla text-slate-600 text-sm md:text-base">
            শিশুর বয়সের সাথে সামঞ্জস্য রেখে সঠিক লার্নিং টুল নির্বাচন করুন।
          </p>
        </div>

        {/* Age Selector Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 md:gap-4 mb-8 sm:mb-10">
          {ageGroups.map((group) => {
            const isActive = selectedAgeId === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setSelectedAgeId(group.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300 border ${
                  isActive
                    ? `${group.activeBorder} shadow-md shadow-slate-200 scale-105`
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span>{group.icon}</span>
                <span className="font-bangla">{group.ageRange}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Card */}
        <div className="mx-auto max-w-4xl">
          <div
            className={`relative bg-gradient-to-r ${activeGroup.bgColor} border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-lg shadow-slate-100 transition-all duration-500`}
          >
            <div className="items-center gap-8 grid grid-cols-1 md:grid-cols-12">
              {/* Left Content */}
              <div className="space-y-4 md:col-span-8 md:text-left text-center">
                <span className="inline-block bg-white/90 shadow-sm px-3.5 py-1 border border-slate-100 rounded-full font-bangla font-bold text-slate-700 text-xs">
                  🎯 {activeGroup.badge}
                </span>

                <h3 className="font-extrabold text-slate-900 text-xl sm:text-2xl md:text-3xl">
                  {activeGroup.title}{" "}
                  <span className="font-bangla font-normal text-slate-500 text-base md:text-lg">
                    ({activeGroup.ageRange})
                  </span>
                </h3>

                <p className="font-bangla text-slate-600 text-sm md:text-base">
                  {activeGroup.subtitle}
                </p>

                {/* Features Checklist */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                  {activeGroup.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 bg-white/80 shadow-sm backdrop-blur-sm px-3 py-1.5 border border-slate-100 rounded-xl font-bangla text-slate-700 text-xs sm:text-sm"
                    >
                      <FaCheckCircle className="text-emerald-500 text-xs" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Action Button */}
              <div className="flex justify-center md:justify-end md:col-span-4">
                <Link
                  href={`/products?age=${activeGroup.id}`}
                  className={`flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base shadow-md transition-all hover:scale-105 ${activeGroup.btnColor}`}
                >
                  <span className="font-bangla">প্রোডাক্টগুলো দেখুন</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}