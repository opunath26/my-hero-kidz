import React from 'react';
import Image from 'next/image';

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-base-100 min-h-[70vh] select-none">
            
            {/*  Floating Logo Box with Subtle Shadow */}
            <div className="relative flex justify-center items-center mb-8">
                
                {/* Background Soft Glow */}
                <div className="absolute bg-gradient-to-tr from-primary/30 via-warning/20 to-secondary/30 blur-2xl rounded-full w-36 h-36 animate-pulse"></div>

                {/* Card Container with Soft Floating Animation */}
                <div className="relative flex justify-center items-center bg-base-100/80 shadow-2xl backdrop-blur-sm p-5 border border-base-200/60 rounded-3xl animate-bounce [animation-duration:2s]">
                    
                    <Image 
                        src="/assets/logo.png" 
                        alt="Hero Kidz Loading..." 
                        width={56} 
                        height={56} 
                        className="object-contain"
                    />

                    {/* Sparkle Badges */}
                    <span className="-top-2 -right-2 absolute text-lg animate-ping [animation-duration:3s]">
                        ✨
                    </span>
                    <span className="-bottom-1 -left-2 absolute text-sm animate-bounce [animation-delay:500ms]">
                        🎈
                    </span>
                </div>

                {/* Floating Shadow Below */}
                <div className="bottom-[-16px] absolute bg-base-content/10 blur-sm rounded-full w-20 h-2.5 animate-pulse"></div>
            </div>

            {/*  Wave Animated Brand Name */}
            <div className="flex flex-col items-center space-y-3 text-center">
                
                {/* Playful Jumping Text */}
                <div className="flex justify-center items-center gap-1 font-black text-base-content text-2xl tracking-tight">
                    <span className="inline-block animate-bounce [animation-delay:0ms]">H</span>
                    <span className="inline-block animate-bounce [animation-delay:100ms]">e</span>
                    <span className="inline-block animate-bounce [animation-delay:200ms]">r</span>
                    <span className="inline-block animate-bounce [animation-delay:300ms]">o</span>
                    
                    <span className="inline-block ml-1.5 text-primary animate-bounce [animation-delay:400ms]">K</span>
                    <span className="inline-block text-primary animate-bounce [animation-delay:500ms]">i</span>
                    <span className="inline-block text-primary animate-bounce [animation-delay:600ms]">d</span>
                    <span className="inline-block text-primary animate-bounce [animation-delay:700ms]">z</span>

                    <span className="inline-block ml-1 animate-bounce [animation-delay:800ms]">🚀</span>
                </div>

                {/* Subtitle */}
                <p className="font-semibold text-xs text-base-content/60 tracking-wider">
                    Preparing your magic world...
                </p>

                {/*  Minimalist Smooth Shimmer Bar */}
                <div className="relative bg-base-200 rounded-full w-32 h-1.5 overflow-hidden">
                    <div className="top-0 bottom-0 absolute bg-gradient-to-r from-primary via-warning to-secondary rounded-full w-1/2 animate-[shimmer_1.5s_infinite] [animation-timing-function:ease-in-out]"></div>
                </div>

            </div>
        </div>
    );
};

export default Loading;