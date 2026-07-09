import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaQuestionCircle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center px-4 py-12 min-h-[70vh] text-slate-800 text-center">
            {/* Funny/Cute Illustration Box */}
            <div className="relative flex justify-center items-center bg-slate-50 mb-8 p-8 rounded-full w-full max-w-sm aspect-square">
                <Image 
                    src="https://images.unsplash.com/photo-1537655780520-1e392edd816a?q=80&w=600" 
                    alt="Lost Toy Illustration"
                    fill
                    priority
                    className="opacity-85 rounded-full object-cover mask-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent rounded-full" />
                
                {/* Big Bold 404 Overlay */}
                <h1 className="absolute font-black text-primary/20 text-7xl md:text-8xl tracking-widest animate-bounce select-none">
                    404
                </h1>
            </div>

            {/* Error Message Content */}
            <div className="space-y-4 max-w-md">
                <div className="inline-flex items-center gap-2 bg-amber-500/10 px-4 py-1.5 rounded-full font-bold text-amber-600 text-xs">
                    <FaQuestionCircle /> Oh No! Page Lost in the Toy Kingdom
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