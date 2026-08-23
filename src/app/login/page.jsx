import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LoginForm from '@/components/auth/LoginForm';
import SocialButton from '@/components/auth/SocialButton';

const LoginPage = () => {
    return (
        <div className="relative flex justify-center items-center px-4 py-12 min-h-[85vh] overflow-hidden">

            {/* Background Glow Orbs for Glassmorphic Contrast */}
            <div className="top-1/4 left-1/2 -z-10 absolute bg-orange-400/30 blur-[100px] rounded-full w-72 h-72 -translate-x-full"></div>
            <div className="bottom-1/4 left-1/2 -z-10 absolute bg-amber-300/30 blur-[100px] rounded-full w-72 h-72"></div>

            {/* Glassmorphic Card */}
            <div className="flex flex-col items-center bg-white/40 shadow-2xl backdrop-blur-xl p-8 border border-white/60 rounded-3xl w-full max-w-md">

                {/* Animated Logo Section */}
                <div className="relative slide-in-from-top-6 mb-4 w-20 h-20 hover:rotate-6 hover:scale-110 transition-all animate-in duration-300 cursor-pointer transform fade-in zoom-in-75">
                    <Image
                        src="/assets/logo.png"
                        alt="Hero Kidz Logo"
                        width={80}
                        height={80}
                        className="drop-shadow-md w-full h-full object-contain"
                        priority
                    />
                </div>

                {/* Header Texts */}
                <h2 className="mb-1 font-black text-slate-900 text-2xl md:text-3xl text-center">
                    স্বাগতম! <span className="text-[#FF4500]">Hero Kidz</span>-এ
                </h2>
                <p className="mb-6 font-medium text-slate-600 text-xs md:text-sm text-center leading-relaxed">
                    আপনার একাউন্টে লগইন করুন এবং সেরা খেলনার বিশ্ব উপভোগ করুন।
                </p>

                {/* Email/Password Login Form */}
                <LoginForm />

                {/* Social Login Component */}
                <SocialButton />

                {/* Registration Redirect Link */}
                <p className="mt-6 font-semibold text-slate-600 text-xs md:text-sm text-center">
                    একাউন্ট নেই?{' '}
                    <Link href="/register" className="font-bold text-[#FF4500] hover:text-[#e03d00] hover:underline transition-colors">
                        নতুন একাউন্ট খুলুন (Register)
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;