"use client";

import React from "react";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { HiSparkles, HiCheckBadge } from "react-icons/hi2";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Anika Rahman",
      role: "Mother of 4-year-old",
      comment: "Hero Kidz থেকে কেনা খেলনাগুলো সত্যিই অসাধারণ! প্লাস্টিকের কোয়ালিটি খুবই ভালো এবং কোনো ধারালো কোণা নেই, যা বাচ্চাদের জন্য একদম নিরাপদ।",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      rating: 5,
    },
    {
      id: 2,
      name: "Tanvir Ahmed",
      role: "Father of 6-year-old",
      comment: "প্যাকেজিং এবং ডেলিভারি স্পিড দেখে আমি মুগ্ধ। ঢাকার বাইরেও তারা মাত্র ২ দিনে প্রোডাক্ট পৌঁছে দিয়েছে। আমার ছেলে তো গিফটের বক্সটা দেখেই অনেক খুশি!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      rating: 5,
    },
    {
      id: 3,
      name: "Sultana Kamal",
      role: "Mother of 2-year-old",
      comment: "তাদের কাস্টমার সার্ভিস দারুণ ফ্রেন্ডলি। বাচ্চার বয়স অনুযায়ী কোন জিনিসটা ভালো হবে, সেটা তারা খুব সুন্দর করে বুঝিয়ে দিয়েছে। ধন্যবাদ Hero Kidz!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      rating: 5,
    },
    {
      id: 4,
      name: "Mahmudul Hasan",
      role: "Father of 5-year-old",
      comment: "বাচ্চার মেধা বিকাশের জন্য লার্নিং টয় খুঁজছিলাম। এখানে পাজল ও ফ্ল্যাশ কার্ডগুলো খুবই মানসম্মত ও আকর্ষণীয়। বাচ্চার স্ক্রিন টাইম অনেক কমে গেছে!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      rating: 5,
    },
    {
      id: 5,
      name: "Nusrat Jahan",
      role: "Mother of 3-year-old",
      comment: "ক্যাশ অন ডেলিভারিতে প্রোডাক্ট হাতে পেয়ে চেক করে পেমেন্ট করেছি। কোনো ধরনের ঝামেলা নেই, আর প্রোডাক্ট একদম ছবির মতোই সুন্দর।",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      rating: 5,
    },
    {
      id: 6,
      name: "Rafiqul Islam",
      role: "Father of 7-year-old",
      comment: "বিল্ডিং ব্লক সেটটি অর্ডার করেছিলাম। কাঠ এবং রঙের মান প্রিমিয়াম। বাচ্চা ঘণ্টা পর ঘণ্টা কোনো বিরক্ত ছাড়াই খেলছে।",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      rating: 5,
    },
    {
      id: 7,
      name: "Farhana Chowdhury",
      role: "Mother of 1.5-year-old",
      comment: "বাচ্চাদের জন্য সেফ টয় খুঁজে পাওয়া খুব কঠিন। Hero Kidz-এর সফট সেন্সরি টয়গুলো আমার ছোট মেয়ের খুব পছন্দ হয়েছে।",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
      rating: 5,
    },
    {
      id: 8,
      name: "Imran Hossain",
      role: "Father of 8-year-old",
      comment: "লজিক গেমগুলোর কোয়ালিটি চমৎকার। দাম হিসেবে কোয়ালিটি এবং সার্ভিস দুটোই অসাধারণ। নিয়মিত কেনাকাটার ইচ্ছে আছে।",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100/80 mb-3 px-4 py-1.5 border border-rose-200/80 rounded-full font-bold text-rose-800 text-xs sm:text-sm">
            <HiSparkles className="text-rose-500 animate-pulse" />
            <span className="font-bangla">অভিভাবকদের মতামত</span>
          </div>

          <h2 className="font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl tracking-tight">
            What <span className="bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500 text-transparent">Parents</span> Say About Us
          </h2>

          <p className="mt-2 max-w-md font-bangla text-slate-600 text-sm md:text-base">
            সন্তানের বিকাশে Hero Kidz-এর ওপর আস্থাশীল হাজারো মা-বাবার অভিজ্ঞতা।
          </p>
        </div>

        {/* Testimonials Auto-Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="h-full">
              <div className="group relative flex flex-col justify-between bg-white hover:shadow-slate-200/50 hover:shadow-xl p-6 md:p-8 border border-slate-200/80 hover:border-slate-300 rounded-3xl h-full overflow-hidden transition-all hover:-translate-y-1.5 duration-300 cursor-pointer">
                
                {/* Quote Icon & Stars */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, idx) => (
                        <FaStar key={idx} className="w-4 h-4" />
                      ))}
                    </div>
                    <FaQuoteLeft className="w-7 h-7 text-slate-200 group-hover:text-rose-200 transition-colors" />
                  </div>

                  {/* Review Text */}
                  <p className="font-bangla text-slate-600 text-xs sm:text-sm italic leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                {/* Parent Profile Info */}
                <div className="flex items-center gap-3.5 mt-6 pt-6 border-slate-100 border-t">
                  <div className="relative border-2 border-slate-100 group-hover:border-rose-300 rounded-full w-11 h-11 overflow-hidden transition-colors shrink-0">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <h4 className="font-extrabold text-slate-900 text-sm md:text-base">
                        {review.name}
                      </h4>
                      <HiCheckBadge className="text-sky-500 text-base shrink-0" title="Verified Parent" />
                    </div>
                    <p className="font-bangla text-slate-600 text-xs">
                      {review.role}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}