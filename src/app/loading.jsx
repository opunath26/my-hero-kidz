import React from 'react';
import Image from 'next/image';

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-base-100 min-h-[70vh] select-none">
            <div className="relative flex justify-center items-center mb-6">
                
                {/* Outer Spinning Kids Gear/Toy Ring */}
                <div className="border-4 border-primary border-dashed rounded-full w-24 h-24 animate-spin [animation-duration:5s]"></div>
                
                {/* Inner Opposite Spinning Ring */}
                <div className="absolute border-4 border-warning border-dotted rounded-full w-16 h-16 animate-spin [animation-direction:reverse] [animation-duration:3s]"></div>
                
                {/* Center Hero Kidz Main Logo */}
                <div className="absolute transition-transform duration-300 animate-pulse">
                    <Image 
                        src="/assets/logo.png" 
                        alt="Hero Kidz Loading..." 
                        width={38} 
                        height={38} 
                        className="object-contain drop-shadow-sm animate-bounce"
                    />
                </div>
            </div>

            {/* Playful Brand Typography */}
            <div className="space-y-2 text-center">
                <h3 className="font-black text-2xl tracking-tight text-base-content">
                    Hero <span className="text-primary">Kidz</span>
                </h3>
                
                <div className="flex justify-center items-center gap-1.5 font-bold text-base-content/60 text-xs">
                    <span>Opening the Toy Box</span>
                    <span className="flex gap-1 items-center">
                        <span className="bg-primary rounded-full w-1.5 h-1.5 animate-bounce [animation-delay:0ms]"></span>
                        <span className="bg-warning rounded-full w-1.5 h-1.5 animate-bounce [animation-delay:200ms]"></span>
                        <span className="bg-secondary rounded-full w-1.5 h-1.5 animate-bounce [animation-delay:400ms]"></span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Loading;