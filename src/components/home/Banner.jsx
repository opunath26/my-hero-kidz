import React from 'react';
import Image from 'next/image';
import { fontBangla } from '@/app/layout';

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-br from-amber-50/60 via-white to-primary/5 my-6 p-8 md:p-16 rounded-3xl overflow-hidden">
            <div className="flex md:flex-row flex-col-reverse justify-between items-center gap-12 mx-auto max-w-7xl">

                {/* Left Content Column */}
                <div className="z-10 flex-1 space-y-6 md:text-left text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full font-semibold text-primary text-sm tracking-wide">
                        ✨ Kids Care & Toy Shop
                    </div>

                    {/* Main Heading */}
                    <h1 className={`${fontBangla.className} font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-800 leading-tight md:leading-[1.2]`}>
                        আপনার শিশুকে দিন একটি <br />
                        <span className="bg-clip-text bg-gradient-to-r from-primary to-orange-500 text-primary text-transparent">
                            সুন্দর ভবিষ্যৎ
                        </span>
                    </h1>

                    {/* Subtitle / Offer */}
                    <p className="mx-auto md:mx-0 max-w-md text-slate-600 text-base sm:text-lg">
                        Explore our exclusive collection. Buy every premium toy with up to
                        <span className="bg-orange-50 mx-1 px-2 py-0.5 rounded font-bold text-orange-500">15% Discount</span>!
                    </p>

                    {/* Action Button */}
                    <div className="pt-2">
                        <button className="group inline-flex relative justify-center items-center bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 px-8 py-3.5 rounded-2xl font-semibold text-white text-lg transition-all hover:-translate-y-0.5 active:translate-y-0 duration-300">
                            Shop Now
                            <svg
                                className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 duration-300"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Image Column */}
                <div className="relative flex flex-1 justify-center items-center w-full">
                    {/* Background Decorative Blob for Visual Pop */}
                    <div className="-z-10 absolute bg-gradient-to-tr from-amber-200 to-primary/30 opacity-60 blur-3xl rounded-full w-64 sm:w-80 h-64 sm:h-80 animate-pulse filter" />

                    <div className="relative w-full max-w-[450px] md:max-w-full aspect-[4/3] md:aspect-auto">
                        <Image
                            alt="Buy Every toy with up to 15% Discount"
                            src="/assets/hero.png"
                            width={550}
                            height={450}
                            priority
                            className="drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)] object-contain hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;