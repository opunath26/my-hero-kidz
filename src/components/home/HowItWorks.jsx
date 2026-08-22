import React from "react";
import { FiShoppingBag, FiCreditCard, FiGift } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      stepNo: "01",
      icon: <FiShoppingBag className="w-7 h-7 text-emerald-500" />,
      title: "Discover & Select",
      bnTitle: "পছন্দ করুন",
      description: "বাচ্চাদের বয়স ও পছন্দ অনুযায়ী আমাদের নিরাপদ ও শিক্ষণীয় খেলনাগুলো ব্রাউজ করুন।",
      bgColor: "bg-emerald-50 group-hover:bg-emerald-100",
      borderColor: "hover:border-emerald-300",
    },
    {
      id: 2,
      stepNo: "02",
      icon: <FiCreditCard className="w-7 h-7 text-amber-500" />,
      title: "Easy Checkout",
      bnTitle: "অর্ডার কনফার্ম করুন",
      description: "সহজ ও নিরাপদ ক্যাশ অন ডেলিভারি বা অনলাইন পেমেন্টের মাধ্যমে অর্ডার সম্পন্ন করুন।",
      bgColor: "bg-amber-50 group-hover:bg-amber-100",
      borderColor: "hover:border-amber-300",
    },
    {
      id: 3,
      stepNo: "03",
      icon: <FiGift className="w-7 h-7 text-rose-500" />,
      title: "Box of Joy Arrives",
      bnTitle: "উপহার হাতে পান",
      description: "দ্রুততম ডেলিভারিতে আপনার ঠিকানায় আনন্দের বাক্স পৌঁছে যাবে সন্তানের হাসিমুখ দেখতে।",
      bgColor: "bg-rose-50 group-hover:bg-rose-100",
      borderColor: "hover:border-rose-300",
    },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-slate-50/50">
      <div className="mx-auto px-4 max-w-7xl container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 mb-3 px-4 py-1.5 border border-amber-200/80 rounded-full font-bold text-amber-800 text-xs sm:text-sm">
            <HiSparkles className="text-amber-500 animate-pulse" />
            <span className="font-bangla">সহজ ৩ ধাপে শপিং</span>
          </div>

          <h2 className="font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl tracking-tight">
            How It <span className="bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 text-transparent">Works</span>
          </h2>

          <p className="mt-2 font-bangla text-slate-600 text-sm md:text-base max-w-md">
            আপনার সন্তানের মুখের হাসি ফোটানো এখন আরও সহজ ও আনন্দদায়ক।
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`group relative flex flex-col bg-white p-6 md:p-8 border border-slate-200/80 ${step.borderColor} rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-200/50 cursor-pointer overflow-hidden`}
            >
              {/* Step Number Watermark */}
              <span className="top-4 right-6 absolute font-black text-slate-100 text-5xl select-none group-hover:text-slate-200 transition-colors">
                {step.stepNo}
              </span>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${step.bgColor} mb-6 flex items-center justify-center transition-all duration-300 shadow-inner group-hover:scale-110`}>
                {step.icon}
              </div>

              {/* Title & Info */}
              <div className="relative z-10">
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-slate-900 text-lg md:text-xl transition-colors">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-0.5 font-bangla font-semibold text-xs text-amber-600">
                  {step.bnTitle}
                </p>

                <p className="mt-3 font-bangla text-slate-600 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}