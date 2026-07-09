import React from 'react';
import { FaChild } from 'react-icons/fa';

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-white min-h-[70vh]">
            <div className="relative flex justify-center items-center mb-6">
                {/* Outer Spinning Kids Gear/Toy Ring */}
                <div className="border-4 border-primary border-dashed rounded-full w-16 h-16 animate-spin [animation-duration:4s]"></div>
                
                {/* Inner Opposite Spinning Ring */}
                <div className="absolute border-4 border-amber-500 border-dotted rounded-full w-10 h-10 animate-spin [animation-direction:reverse] [animation-duration:2s]"></div>
                
                {/* Center Little Hero Icon */}
                <div className="absolute text-emerald-500 text-xl animate-bounce">
                    <FaChild />
                </div>
            </div>

            {/* Playful Brand Matching Typography */}
            <div className="space-y-1.5 text-center">
                <h3 className="font-black text-slate-900 text-2xl uppercase tracking-wider">
                    Hero <span className="text-primary">Kidz</span>
                </h3>
                <div className="flex justify-center items-center gap-1 font-bold text-slate-400 text-xs">
                    <span className="inline-block bg-amber-500 rounded-full w-2 h-2 animate-ping"></span>
                    <span>Opening the Toy Box...</span>
                </div>
            </div>
        </div>
    );
};

export default Loading;