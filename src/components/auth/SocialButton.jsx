"use client";

import React from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FaGoogle } from 'react-icons/fa';

const SocialButton = () => {
    const searchParams = useSearchParams();

    const redirectTo = searchParams.get('redirectTo') || "/";

    const handleSocialLogin = (provider) => {
        signIn(provider, { callbackUrl: redirectTo });
    };

    return (
        <div className="w-full">
            {/* Divider */}
            <div className="relative flex items-center my-2 py-5 w-full">
                <div className="flex-grow border-slate-200 border-t"></div>
                <span className="flex-shrink mx-4 font-medium text-slate-400 text-xs uppercase tracking-wider">
                    অথবা (Or continue with)
                </span>
                <div className="flex-grow border-slate-200 border-t"></div>
            </div>

            {/* Google Login Button */}
            <div className="w-full">
                <button 
                    onClick={() => handleSocialLogin("google")}
                    type="button"
                    className="flex justify-center items-center gap-2.5 bg-white hover:bg-slate-50 active:scale-[0.99] py-3 border border-slate-200 shadow-sm rounded-2xl w-full font-bold text-slate-700 text-sm transition-all cursor-pointer"
                >
                    <FaGoogle className="text-lg text-red-500" /> Google দিয়ে লগইন করুন
                </button>
            </div>
        </div>
    );
};

export default SocialButton;