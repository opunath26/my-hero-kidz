"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaShieldAlt, 
  FaRocket, 
  FaSmile, 
  FaChild, 
  FaShoppingCart, 
  FaTruck, 
  FaUndo, 
  FaHeadset, 
  FaCheckCircle,
  FaArrowRight,
  FaSearch,
  FaAward
} from "react-icons/fa";

const About = () => {
  const stats = [
    { id: 1, value: "১০,০০০+", label: "সন্তুষ্ট অভিভাবক ও শিশু" },
    { id: 2, value: "১,৫০০+", label: "নিরাপদ ও শিক্ষণীয় খেলনা" },
    { id: 3, value: "১০০%", label: "নন-টক্সিক ও নিরাপদ মেটেরিয়াল" },
    { id: 4, value: "৬৪ জেলা", label: "ক্যাশ অন ডেলিভারি সুবিধা" }
  ];

  const features = [
    {
      id: 1,
      icon: <FaShieldAlt className="text-[#FF4500] text-2xl lg:text-3xl" />,
      title: "১০০% নন-টক্সিক ও নিরাপদ মেটেরিয়াল",
      desc: "আমাদের প্রতিটি পণ্য ইউরোপীয় ও আন্তর্জাতিক সেফটি স্ট্যান্ডার্ড মেনে তৈরি। ফুড-গ্রেড প্লাস্টিক ও নন-টক্সিক রং দিয়ে তৈরি হওয়ায় শিশুর স্বাস্থ্যের জন্য সম্পূর্ণ ঝুঁকিমুক্ত।"
    },
    {
      id: 2,
      icon: <FaRocket className="text-[#FF4500] text-2xl lg:text-3xl" />,
      title: "মেধা ও আইকিউ (IQ) বিকাশ",
      desc: "শুধুমাত্র সময় কাটানোর জন্য নয়, আমাদের স্টেম (STEM) ও পাজল খেলনাগুলো শিশুর চিন্তা-ভাবনা, সমস্যার সমাধান এবং সৃষ্টিশীল মেধা দ্রুত বাড়াতে সাহায্য করে।"
    },
    {
      id: 3,
      icon: <FaSmile className="text-[#FF4500] text-2xl lg:text-3xl" />,
      title: "প্রতিটি মুখে খাঁটি হাসি",
      desc: "আমাদের একমাত্র লক্ষ্য হলো শিশুদের ডিজিটাল স্ক্রিন আসক্তি কমিয়ে বাস্তব জীবনের খেলাধুলার মাধ্যমে একটি প্রাণবন্ত ও আনন্দময় শৈশব উপহার দেওয়া।"
    }
  ];

  const howItWorks = [
    {
      step: "০১",
      title: "পছন্দের খেলনা খুঁজুন",
      desc: "ক্যাটাগরি, বয়সসীমা বা ফিল্টার ব্যবহার করে আপনার বাচ্চার জন্য উপযুক্ত খেলনা নির্বাচন করুন এবং 'Add to Cart' বাটনে ক্লিক করুন।"
    },
    {
      step: "০২",
      title: "সহজ চেকআউট ও অর্ডার",
      desc: "আপনার ডেলিভারি ঠিকানা এবং ফোন নম্বর দিন। কোনো অগ্রিম পেমেন্ট ছাড়াই অর্ডার নিশ্চিত করুন।"
    },
    {
      step: "০৩",
      title: "দ্রুত ডেলিভারি ও যাচাই",
      desc: "ঢাকায় ২৪-৪৮ ঘণ্টা এবং ঢাকার বাইরে ২-৩ দিনের মধ্যে হোম ডেলিভারি পান। ডেলিভারি ম্যানের সামনে পণ্য দেখে চেক করে নিন।"
    },
    {
      step: "০৪",
      title: "ক্যাশ অন পেমেন্ট ও সাপোর্ট",
      desc: "পণ্য হাতে পেয়ে পেমেন্ট করুন। যেকোনো প্রয়োজনে আমাদের ২৪/৭ কাস্টমার সাপোর্ট সর্বদা আপনার পাশে রয়েছে।"
    }
  ];

  return (
    <section className="bg-[#FFFDF9] py-12 lg:py-16 w-full text-slate-800 overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        
        {/* Header Badge & Hero Section */}
        <div className="items-center gap-10 lg:gap-16 grid grid-cols-1 lg:grid-cols-12 mb-16 lg:mb-24">
          <div className="space-y-6 lg:col-span-7">
            <span className="inline-flex items-center gap-2 bg-amber-100/80 px-4 py-1.5 rounded-full font-extrabold text-[#FF4500] text-xs sm:text-sm tracking-wider">
              <FaChild /> HeroKidz-এর কথা জানুন
            </span>
            <h1 className="font-black text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              শিশুর আনন্দময় শৈশব ও <br />
              <span className="text-[#FF4500]">নিরাপদ মেধা বিকাশের বিশ্বস্ত নাম</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              স্বাগতম <strong>HeroKidz</strong>-এ! আমরা বিশ্বাস করি প্রতিটি শিশু তার নিজস্ব সত্ত্বায় এক একজন সুপারহিরো। তাদের শৈশবকে আরও বর্ণিল, আকর্ষণীয় এবং শিক্ষণীয় করে তুলতেই আমাদের এই প্রচেষ্টা।
            </p>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              মোবাইল কিংবা টিভির ক্ষতিকারক স্ক্রিন টাইম থেকে বাচ্চাদের দূরে রেখে তাদের চিন্তা-ভাবনা, মোটর স্কিল এবং স্মৃতিশক্তি বৃদ্ধি করতে আমাদের প্রতিটি প্রোডাক্ট অভিজ্ঞ চাইল্ড কেয়ার এক্সপার্টদের মতামত নিয়ে নির্বাচন করা হয়।
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#FF4500] hover:bg-[#e03d00] active:scale-95 px-6 py-3.5 rounded-2xl font-black text-white text-xs sm:text-sm transition-all shadow-lg shadow-orange-500/20"
              >
                <FaShoppingCart />
                <span>প্রোডাক্ট গ্যালারি দেখুন</span>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 bg-white hover:bg-orange-50 px-6 py-3.5 border border-orange-200 rounded-2xl font-bold text-slate-800 text-xs sm:text-sm transition-all"
              >
                <span>অর্ডার করার নিয়ম</span>
                <FaArrowRight className="text-xs text-[#FF4500]" />
              </a>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div className="relative lg:col-span-5">
            <div className="relative bg-white shadow-xl p-3 border border-orange-100 rounded-3xl overflow-hidden aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop"
                alt="HeroKidz Happy Children Playtime"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="rounded-2xl object-cover"
              />
            </div>
            
            {/* Floating Trust Badge */}
            <div className="-bottom-6 -left-6 sm:bottom-4 sm:-left-6 absolute flex items-center gap-3 bg-white shadow-xl p-4 border border-orange-100 rounded-2xl">
              <div className="flex justify-center items-center bg-orange-100 rounded-xl w-12 h-12 text-[#FF4500] text-2xl">
                <FaAward />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 text-sm">১০০% প্রিমিয়াম কোয়ালিটি</p>
                <p className="text-slate-500 text-xs">অভিভাবকদের প্রথম পছন্দ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Counter Section */}
        <div className="gap-6 grid grid-cols-2 md:grid-cols-4 bg-white shadow-sm mb-16 lg:mb-24 p-6 sm:p-10 border border-orange-100 rounded-3xl text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-1">
              <div className="font-black text-[#FF4500] text-2xl sm:text-4xl">{stat.value}</div>
              <div className="font-bold text-slate-600 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 lg:mb-24 space-y-12">
          <div className="space-y-3 mx-auto max-w-2xl text-center">
            <span className="font-extrabold text-[#FF4500] text-xs uppercase tracking-widest">কেন HeroKidz সেরা?</span>
            <h2 className="font-black text-slate-900 text-2xl sm:text-4xl">
              অভিভাবক হিসেবে আমাদের ওপর কেন আস্থা রাখবেন?
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              আমরা শুধু খেলনা বিক্রি করি না, প্রতিটি বাচ্চার সুস্বাস্থ্য ও মানসিক বিকাশ সুনিশ্চিত করতে আমরা দায়বদ্ধ।
            </p>
          </div>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.id}
                className="group space-y-4 bg-white shadow-sm hover:shadow-xl p-8 border border-orange-100 rounded-3xl transition-all hover:-translate-y-1 duration-300"
              >
                <div className="bg-orange-50 group-hover:bg-[#FF4500] p-4 rounded-2xl w-fit text-[#FF4500] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How To Order / User Guide Section */}
        <div id="how-it-works" className="bg-orange-50/60 p-8 sm:p-12 lg:p-16 border border-orange-100 rounded-3xl">
          <div className="space-y-3 mb-12 max-w-2xl text-center md:text-left">
            <span className="font-extrabold text-[#FF4500] text-xs uppercase tracking-widest">ইউজার নির্দেশিকা</span>
            <h2 className="font-black text-slate-900 text-2xl sm:text-4xl">
              কীভাবে কেনাকাটা করবেন? (গাইডলাইন)
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              HeroKidz ওয়েবসাইট থেকে খুব সহজেই মাত্র ৪টি ধাপে প্রোডাক্ট অর্ডার করতে পারবেন:
            </p>
          </div>

          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="relative bg-white p-6 rounded-2xl shadow-sm border border-orange-100 flex flex-col justify-between">
                <div>
                  <span className="font-black text-[#FF4500] text-2xl opacity-40 block mb-2">{item.step}</span>
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Highlights / Value Preposition */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-3 mt-12 pt-8">
          <div className="flex items-center gap-4 bg-white p-6 border border-orange-100 rounded-2xl shadow-sm">
            <FaTruck className="text-[#FF4500] text-3xl shrink-0" />
            <div>
              <h5 className="font-bold text-slate-900 text-sm">দ্রুত ডেলিভারি</h5>
              <p className="text-slate-500 text-xs">সারাদেশে হোম ডেলিভারি সুবিধা</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 border border-orange-100 rounded-2xl shadow-sm">
            <FaUndo className="text-[#FF4500] text-3xl shrink-0" />
            <div>
              <h5 className="font-bold text-slate-900 text-sm">সহজ রিটার্ন পলিসি</h5>
              <p className="text-slate-500 text-xs">পছন্দ না হলে বা ত্রুটি থাকলে তাৎক্ষণিক পরিবর্তনের সুযোগ</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white p-6 border border-orange-100 rounded-2xl shadow-sm">
            <FaHeadset className="text-[#FF4500] text-3xl shrink-0" />
            <div>
              <h5 className="font-bold text-slate-900 text-sm">২৪/৭ কাস্টমার সাপোর্ট</h5>
              <p className="text-slate-500 text-xs">যেকোনো সহযোগিতায় কল বা মেসেজ করুন</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;