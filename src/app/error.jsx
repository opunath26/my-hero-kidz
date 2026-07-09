"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaExclamationTriangle, FaHome, FaSync } from 'react-icons/fa';

const ErrorPage = ({ error, reset }) => {
    
    useEffect(() => {
        console.error("Critical Application Error:", error);
    }, [error]);

    return (
        <div className="flex flex-col justify-center items-center bg-white px-4 py-16 min-h-[80vh] text-slate-800 text-center">
            {/* Playful/Alert Illustration Box */}
            <div className="relative flex justify-center items-center bg-slate-50 mb-10 p-8 rounded-full w-full max-w-sm aspect-square">
                <Image 
                    src="https://i.ibb.co.com/zTJYgzpq/premium-photo-1738614647383-0435fcb26a55.avif" 
                    alt="Oops! Toy Malfunction Illustration"
                    fill
                    priority
                    className="opacity-90 rounded-full object-cover mask-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-full" />
                
                {/* Visual Error Signal */}
                <div className="top-1/2 left-1/2 absolute font-black text-primary/10 text-9xl tracking-wider -translate-x-1/2 -translate-y-1/2 animate-pulse select-none">
                    !
                </div>
            </div>

            {/* Error Message Content */}
            <div className="space-y-4 max-w-lg">
                <div className="inline-flex items-center gap-2.5 bg-red-500/10 shadow-inner shadow-red-500/5 px-5 py-2 rounded-full font-bold text-red-600 text-sm">
                    <FaExclamationTriangle />
                    <span>Uh Oh! Toy Trouble Detected!</span>
                </div>
                <h2 className="font-black text-slate-900 text-3xl md:text-5xl leading-tight">
                    Our Playground is <br />
                    <span className="text-primary">Temporarily Paused!</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    It looks like something went wobbly with a super gadget in the Toy Kingdom. Don't worry, our engineers are on it! Let's try to reload or go back.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex sm:flex-row flex-col items-center gap-6 mt-12">
                {/* Reset/Retry Button */}
                <button 
                    onClick={() => reset()}
                    className="flex justify-center items-center gap-2 bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20 shadow-lg px-10 py-3.5 rounded-xl font-bold text-white active:scale-[0.98] transition-all"
                >
                    <FaSync className="text-base animate-spin [animation-duration:3s]" />
                    <span>Try To Fix It!</span>
                </button>

                {/* Back to Home Button */}
                <Link href="/">
                    <button className="flex justify-center items-center gap-2 bg-primary/10 hover:bg-primary/20 shadow-inner shadow-primary/10 px-10 py-3.5 rounded-xl font-bold text-primary active:scale-[0.98] transition-all">
                        <FaHome className="text-base" />
                        <span>Back to Home Kingdom</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;