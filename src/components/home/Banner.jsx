"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag, FaArrowRight, FaStar, FaShieldAlt, FaSmile } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

export default function Banner() {
    return (
        <div className="relative bg-gradient-to-br from-amber-50/80 via-orange-50/40 to-slate-50 border border-amber-100/80 rounded-3xl md:rounded-[2.5rem] overflow-hidden">

            {/* Decorative Floating Background Glows */}
            <div className="top-[-10%] right-[-5%] -z-0 absolute bg-amber-200/40 blur-3xl rounded-full w-72 md:w-96 h-72 md:h-96 pointer-events-none" />
            <div className="bottom-[-10%] left-[-5%] -z-0 absolute bg-orange-200/40 blur-3xl rounded-full w-64 md:w-80 h-64 md:h-80 pointer-events-none" />

            <div className="z-10 relative items-center gap-8 md:gap-12 grid grid-cols-1 lg:grid-cols-12 px-6 md:px-12 lg:px-16 py-10 md:py-16">

                {/* Left Content */}
                <div className="space-y-6 lg:col-span-7 lg:text-left text-center">

                    {/* Top Badge */}
                    <div className="inline-flex items-center gap-2 bg-amber-100/90 shadow-sm px-4 py-1.5 border border-amber-200/70 rounded-full font-bold text-amber-800 text-xs md:text-sm">
                        <HiSparkles className="text-amber-500 text-base animate-pulse" />
                        <span className="font-bangla">মেধা বিকাশে সেরা পছন্দ</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[1.15]">
                        <span className="block font-bangla text-primary">
                            বাচ্চাদের মেধা বিকাশে
                        </span>
                        <span className="block mt-1">
                            Fun & Educational Toys
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mx-auto lg:mx-0 max-w-xl font-bangla text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                        স্মার্ট কার্ড, পাজল এবং ক্রিয়েটিভ লার্নিং টয় দিয়ে আপনার সন্তানের শেখার অভিজ্ঞতাকে করুন আরও আনন্দদায়ক ও নিরাপদ।
                    </p>

                    {/* Action Buttons */}
                    <div className="flex sm:flex-row flex-col justify-center lg:justify-start items-center gap-3 md:gap-4 pt-2">
                        <Link
                            href="/products"
                            className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 px-7 py-3.5 rounded-2xl w-full sm:w-auto font-extrabold text-white text-sm md:text-base transition-all hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <FaShoppingBag className="text-sm" />
                            <span className="font-bangla">এখনই কেনাকাটা করুন</span>
                        </Link>

                        <Link
                            href="/#categories"
                            className="flex justify-center items-center gap-2 bg-white/80 hover:bg-white shadow-sm backdrop-blur-sm px-7 py-3.5 border border-slate-200/80 hover:border-slate-300 rounded-2xl w-full sm:w-auto font-bold text-slate-700 text-sm md:text-base transition-all"
                        >
                            <span>Explore Categories</span>
                            <FaArrowRight className="text-xs" />
                        </Link>
                    </div>

                    {/* Trust Metrics Section */}
                    <div className="flex justify-center lg:justify-start items-center gap-6 md:gap-8 pt-6 border-slate-200/80 border-t">
                        <div className="flex items-center gap-2">
                            <div className="flex justify-center items-center bg-amber-100 p-2 rounded-xl text-amber-600">
                                <FaSmile className="text-lg" />
                            </div>
                            <div className="text-left">
                                <p className="font-black text-slate-900 text-base md:text-lg leading-none">১০k+</p>
                                <p className="mt-1 font-bangla text-slate-500 text-xs">হ্যাপি কাস্টমার</p>
                            </div>
                        </div>

                        <div className="bg-slate-300/70 w-px h-8" />

                        <div className="flex items-center gap-2">
                            <div className="flex justify-center items-center bg-emerald-100 p-2 rounded-xl text-emerald-600">
                                <FaShieldAlt className="text-lg" />
                            </div>
                            <div className="text-left">
                                <p className="font-black text-slate-900 text-base md:text-lg leading-none">১০০%</p>
                                <p className="mt-1 font-bangla text-slate-500 text-xs">নিরাপদ মেটেরিয়াল</p>
                            </div>
                        </div>

                        <div className="bg-slate-300/70 w-px h-8" />

                        <div className="flex items-center gap-2">
                            <div className="flex justify-center items-center bg-orange-100 p-2 rounded-xl text-orange-500">
                                <FaStar className="text-lg" />
                            </div>
                            <div className="text-left">
                                <p className="font-black text-slate-900 text-base md:text-lg leading-none">৪.৮★</p>
                                <p className="mt-1 font-bangla text-slate-500 text-xs">অভিভাবকদের রেটিং</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Image Banner Section Container */}
                <div className="flex justify-center items-center lg:col-span-5">
                    <div className="relative bg-white/70 shadow-amber-900/5 shadow-xl backdrop-blur-md p-4 border border-white/80 rounded-3xl w-full lg:max-w-none max-w-md h-[380px] sm:h-[420px] md:h-[460px] overflow-hidden">

                        {/* Top Floating Offer Badge */}
                        <div className="top-4 left-4 z-20 absolute bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg shadow-rose-500/30 px-4 py-2 rounded-2xl font-black text-white text-xs md:text-sm -rotate-6">
                            Up to 20% OFF!
                        </div>

                        {/* Bottom Floating Feature Card */}
                        <div className="right-4 bottom-4 z-20 absolute flex items-center gap-2.5 bg-white/95 shadow-lg backdrop-blur-md p-2.5 pr-4 border border-slate-100 rounded-2xl">
                            <span className="flex justify-center items-center bg-amber-500 rounded-xl w-8 h-8 font-bold text-white text-xs">
                                🎁
                            </span>
                            <div className="text-left">
                                <p className="font-bold text-slate-800 text-xs">Fast Shipping</p>
                                <p className="font-bangla text-[10px] text-slate-500">সারাদেশে হোম ডেলিভারি</p>
                            </div>
                        </div>

                        {/* Main Image Container */}
                        <div className="relative flex justify-center items-center w-full h-full">
                            <Image
                                src="/assets/hero.png"
                                alt="Hero Kidz Featured Products"
                                fill
                                priority
                                className="drop-shadow-[0_15px_25px_rgba(0,0,0,0.08)] object-center object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}