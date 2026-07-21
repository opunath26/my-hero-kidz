"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSyncAlt, FaHome, FaPuzzlePiece, FaRocket, FaPaintBrush } from 'react-icons/fa';

const ErrorPage = ({ error, reset }) => {
    useEffect(() => {
        console.error("Critical Application Error:", error);
    }, [error]);

    return (
        <div className="relative flex justify-center items-center bg-gradient-to-b from-base-100 via-primary/5 to-base-100 px-4 py-16 min-h-[90vh] overflow-hidden select-none">
            
            {/* Background Floating Decorative Icons */}
            <div className="top-12 left-10 text-primary/20 text-4xl -rotate-12 absolute animate-bounce [animation-duration:4s]">
                <FaPuzzlePiece />
            </div>
            <div className="bottom-16 right-12 text-warning/20 text-5xl rotate-45 absolute animate-bounce [animation-duration:5s]">
                <FaRocket />
            </div>
            <div className="top-24 right-20 text-secondary/20 text-3xl absolute animate-spin [animation-duration:10s]">
                <FaPaintBrush />
            </div>

            {/* Main Interactive Error Card */}
            <div className="relative z-10 bg-base-100/80 backdrop-blur-xl border-2 border-base-200 shadow-2xl rounded-[3rem] p-8 md:p-14 w-full max-w-xl text-center">
                
                {/* Center Image Frame */}
                <div className="relative mx-auto mb-6 w-36 md:w-44 h-36 md:h-44">
                    <div className="inset-0 absolute bg-gradient-to-tr from-primary/30 to-warning/30 blur-2xl rounded-full"></div>
                    <div className="relative flex justify-center items-center bg-base-100 border-4 border-dashed border-primary/40 rounded-full w-full h-full overflow-hidden shadow-inner">
                        <Image 
                            src="https://i.ibb.co.com/zTJYgzpq/premium-photo-1738614647383-0435fcb26a55.avif" 
                            alt="Toy Repair"
                            fill
                            priority
                            className="object-cover scale-105 hover:scale-115 transition-transform duration-500"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                    <span className="inline-block bg-primary/10 px-4 py-1 rounded-full font-black text-primary text-xs uppercase tracking-widest">
                        Oops! Something Went Wrong
                    </span>

                    <h2 className="font-black text-base-content text-3xl md:text-5xl tracking-tight leading-none">
                        Toy Box Is <br />
                        <span className="text-primary underline decoration-wavy decoration-warning">
                            Jammed Up!
                        </span>
                    </h2>

                    <p className="mx-auto max-w-sm font-semibold text-base-content/60 text-sm md:text-base leading-relaxed">
                        Don't panic! A little glitch broke our toy train. Click below to try again or go back home.
                    </p>

                    {error?.message && (
                        <div className="bg-base-200/80 mx-auto p-2.5 rounded-xl max-w-xs font-mono text-error text-xs truncate">
                            {error.message}
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex sm:flex-row flex-col justify-center items-center gap-3.5 mt-8">
                    <button 
                        onClick={() => reset()}
                        className="group flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 px-7 py-3.5 rounded-2xl font-black text-white text-sm active:scale-95 transition-all duration-200 w-full sm:w-auto"
                    >
                        <FaSyncAlt className="group-hover:rotate-180 transition-transform duration-500 text-xs" />
                        <span>Fix The Playground</span>
                    </button>

                    <Link href="/" className="w-full sm:w-auto">
                        <button className="flex justify-center items-center gap-2 bg-base-200 hover:bg-base-300 px-7 py-3.5 rounded-2xl font-black text-base-content text-sm active:scale-95 transition-all duration-200 w-full">
                            <FaHome className="text-xs opacity-70" />
                            <span>Return Home</span>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;