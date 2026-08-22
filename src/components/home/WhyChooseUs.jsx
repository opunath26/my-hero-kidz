import React from "react";
import { FiShield, FiHeart, FiTruck, FiSmile } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <FiShield className="w-8 h-8 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />,
      title: "100% Child Safe",
      bnTitle: "শতভাগ নিরাপদ ও বিষমুক্ত",
      description: "আমাদের প্রতিটি প্রোডাক্ট বাচ্চাদের জন্য সম্পূর্ণ সুরক্ষিত এবং নন-টক্সিক মেটেরিয়ালে তৈরি।",
      bgColor: "bg-emerald-50 group-hover:bg-emerald-100",
      borderColor: "hover:border-emerald-300",
    },
    {
      id: 2,
      icon: <FiHeart className="w-8 h-8 text-rose-500 group-hover:scale-110 transition-transform duration-300" />,
      title: "Made With Care",
      bnTitle: "যত্ন ও মেধা বিকাশের লার্নিং টুল",
      description: "বাচ্চাদের আনন্দ এবং মেধা বিকাশের কথা মাথায় রেখেই প্রতিটি খেলনা বাছাই করা হয়।",
      bgColor: "bg-rose-50 group-hover:bg-rose-100",
      borderColor: "hover:border-rose-300",
    },
    {
      id: 3,
      icon: <FiTruck className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform duration-300" />,
      title: "Fast Cash on Delivery",
      bnTitle: "দ্রুততম সময়ে ক্যাশ অন ডেলিভারি",
      description: "সারাদেশে নিরাপদ ও দ্রুত ক্যাশ অন ডেলিভারি সুবিধা, পণ্য হাতে পেয়ে মূল্য পরিশোধের সুযোগ।",
      bgColor: "bg-amber-50 group-hover:bg-amber-100",
      borderColor: "hover:border-amber-300",
    },
    {
      id: 4,
      icon: <FiSmile className="w-8 h-8 text-sky-500 group-hover:scale-110 transition-transform duration-300" />,
      title: "Happy Parents & Kids",
      bnTitle: "হাজারো অভিভাবকের ভরসা",
      description: "হাজারো সন্তুষ্ট অভিভাবকের ভালোবাসায় আমরা শিশুদের হাসিমুখ নিশ্চিত করে চলেছি।",
      bgColor: "bg-sky-50 group-hover:bg-sky-100",
      borderColor: "hover:border-sky-300",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 mb-3 px-4 py-1.5 border border-emerald-200/80 rounded-full font-bold text-emerald-800 text-xs sm:text-sm">
            <HiSparkles className="text-emerald-500 animate-pulse" />
            <span className="font-bangla">কেন আমাদের বেছে নেবেন?</span>
          </div>

          <h2 className="font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Why Parents Trust <span className="bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500 text-transparent">Hero Kidz</span>
          </h2>

          <p className="mt-2 max-w-md font-bangla text-slate-600 text-sm md:text-base">
            আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ ও সঠিক মেধা বিকাশে আমরা সেরা মানের নিশ্চয়তা দিই।
          </p>
        </div>

        {/* Features Grid */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`group flex flex-col items-center bg-white p-6 md:p-8 border border-slate-200/80 ${feature.borderColor} rounded-3xl text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/50 cursor-pointer relative overflow-hidden`}
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} mb-5 flex items-center justify-center transition-all duration-300 shadow-inner group-hover:rotate-6`}>
                {feature.icon}
              </div>

              {/* Title & Info */}
              <h3 className="font-extrabold text-slate-900 text-base md:text-lg transition-colors">
                {feature.title}
              </h3>

              <p className="mt-0.5 font-bangla font-semibold text-emerald-600 text-xs">
                {feature.bnTitle}
              </p>

              <p className="mt-3 font-bangla text-slate-600 text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}