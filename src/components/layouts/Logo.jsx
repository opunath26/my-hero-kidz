import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div className="inline-block">
            <Link 
                href={"/"} 
                className="group flex items-center gap-2.5 py-1 active:scale-95 transition-transform duration-200 select-none"
            >
                {/* Interactive Logo Frame with Pulse Glow & Elastic Scale */}
                <div className="relative flex justify-center items-center bg-primary/10 group-hover:bg-primary/20 shadow-sm p-1.5 rounded-2xl group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                    <Image 
                        alt="logo-hero-kidz" 
                        src={"/assets/logo.png"} 
                        width={42} 
                        height={42}
                        className="object-contain group-hover:scale-110 transition-transform duration-300" 
                    />
                    
                    {/* Floating Little Badge */}
                    <span className="-top-1 -right-1 absolute flex w-3 h-3">
                        <span className="inline-flex absolute bg-warning opacity-75 rounded-full w-full h-full animate-ping"></span>
                        <span className="inline-flex relative bg-warning rounded-full w-3 h-3"></span>
                    </span>
                </div>

                {/* Brand Name Text with Animated Underline */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <h2 className="font-black text-base-content text-2xl tracking-tight">
                            Hero <span className="text-primary group-hover:text-secondary transition-colors duration-300">Kidz</span>
                        </h2>
                        <span className="text-xs transition-all group-hover:-translate-y-0.5 group-hover:translate-x-1 duration-300">
                            🚀
                        </span>
                    </div>
                    
                    {/* Sliding Animated Underline Bar */}
                    <div className="bg-base-200 mt-0.5 rounded-full w-full h-1 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary to-warning rounded-full w-0 group-hover:w-full h-full transition-all duration-300 ease-out"></div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Logo;