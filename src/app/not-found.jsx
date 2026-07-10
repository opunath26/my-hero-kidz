import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaQuestionCircle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-12 min-h-[70vh] text-slate-800 text-center">
            {/* Funny/Cute Illustration Box */}
            <div className="relative flex justify-center items-center bg-slate-50 shadow-inner mb-8 p-8 rounded-full w-full max-w-sm aspect-square overflow-hidden">
    <Image 
        src="https://i.ibb.co.com/XfQmTkxc/markus-spiske-I-y1lb2-Fz-JQ-unsplash.jpg" 
        alt="Lost Toy Illustration"
        fill
        priority
        className="opacity-75 rounded-full object-cover" 
    />
    
    <div className="absolute inset-0 bg-black/10 rounded-full" />
    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent rounded-full" />
    
    <h1 className="z-10 absolute drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)] font-black text-primary text-7xl md:text-8xl tracking-widest animate-bounce select-none">
        404
    </h1>
</div>

            {/* Error Message Content */}
            <div className="space-y-4 max-w-md">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-1.5 rounded-full font-bold text-amber-600 text-xs">
                    <FaQuestionCircle /> Oh No! Page Lost in the Toy Kingdom.
                </div>
                <h2 className="font-black text-slate-900 text-2xl md:text-4xl leading-tight">
                    Where is the Page <br />
                    <span className="text-primary">Hiding?</span>
                </h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    It looks like this page took a wrong turn or crawled into a toy box! Don't worry, let's get you back to safety.
                </p>
            </div>

            {/* Action Button */}
            <div className="mt-8">
                <Link href="/">
                    <button className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 px-8 py-3.5 rounded-xl font-bold text-white active:scale-[0.98] transition-all">
                        <FaHome className="text-base" />
                        Back to Home Kingdom
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;