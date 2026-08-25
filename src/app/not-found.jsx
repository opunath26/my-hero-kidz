import React from 'react';
import Link from 'next/link';
import { FaHome, FaShoppingBag, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="relative flex flex-col justify-center items-center bg-slate-50/50 px-4 py-16 min-h-[80vh] overflow-hidden">
            {/* Background Decorative Glow Circles */}
            <div className="top-1/2 left-1/2 absolute bg-gradient-to-tr from-orange-500/10 via-amber-400/10 to-transparent blur-3xl rounded-full w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="-top-10 -right-10 absolute bg-orange-400/10 blur-2xl rounded-full w-48 h-48 pointer-events-none" />

            <div className="z-10 relative flex flex-col items-center max-w-lg text-center">
                {/* 404 Glowing Badge */}
                <div className="relative flex justify-center items-center mb-6">
                    <span className="bg-clip-text bg-gradient-to-r from-[#FF4500] via-orange-500 to-amber-500 drop-shadow-sm font-black text-transparent text-8xl sm:text-9xl tracking-tighter select-none">
                        404
                    </span>
                    <div className="-bottom-2 absolute flex items-center gap-1.5 bg-orange-500/15 shadow-sm backdrop-blur-md px-4 py-1 border border-orange-500/20 rounded-full font-black text-[#FF4500] text-xs uppercase tracking-widest">
                        <FaExclamationTriangle className="text-amber-500" /> Page Not Found
                    </div>
                </div>

                {/* Content Section */}
                <div className="space-y-3 mt-4">
                    <h1 className="font-extrabold text-slate-900 text-2xl sm:text-4xl leading-tight tracking-tight">
                        ওহো! পেজটি খেলনার বাক্সে হারিয়ে গেছে 🧸
                    </h1>
                    <p className="mx-auto max-w-md font-medium text-slate-500 text-sm sm:text-base leading-relaxed">
                        আপনি যে পেজটি খুঁজছেন তা হয়তো সরানো হয়েছে অথবা ভুল ঠিকানায় এসেছেন। দুশ্চিন্তার কিছু নেই, নিচের বাটন চেপে আগের জায়গায় ফিরে যান!
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex sm:flex-row flex-col items-center gap-3.5 mt-8 w-full sm:w-auto">
                    <Link href="/" className="w-full sm:w-auto">
                        <button className="flex justify-center items-center gap-2 bg-[#FF4500] hover:bg-[#e03d00] shadow-lg shadow-orange-500/25 px-7 py-3.5 rounded-2xl w-full font-extrabold text-white text-sm active:scale-95 transition-all cursor-pointer">
                            <FaHome className="text-base" />
                            হোম পেজে ফিরে যান
                        </button>
                    </Link>

                    <Link href="/products" className="w-full sm:w-auto">
                        <button className="flex justify-center items-center gap-2 bg-white hover:bg-slate-100 shadow-sm px-7 py-3.5 border border-slate-200 rounded-2xl w-full font-extrabold text-slate-700 text-sm active:scale-95 transition-all cursor-pointer">
                            <FaShoppingBag className="text-orange-500 text-base" />
                            সব খেলনা দেখুন
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;