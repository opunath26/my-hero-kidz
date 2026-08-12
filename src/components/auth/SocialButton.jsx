"use client";

import React from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { FaGoogle, FaGithub } from 'react-icons/fa';

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
                <div className="flex-grow border-slate-100 border-t"></div>
                <span className="flex-shrink mx-4 font-medium text-slate-400 text-xs uppercase tracking-wider">
                    Or continue with
                </span>
                <div className="flex-grow border-slate-100 border-t"></div>
            </div>

            {/* Social Buttons */}
            <div className="gap-4 grid grid-cols-2 w-full">
                <button 
                    onClick={() => handleSocialLogin("google")}
                    type="button"
                    className="flex justify-center items-center gap-2 hover:bg-slate-50 py-3 border border-slate-200 rounded-2xl font-semibold text-slate-700 text-sm active:scale-[0.98] transition-all"
                >
                    <FaGoogle className="text-red-500" /> Google
                </button>
                <button 
                    onClick={() => handleSocialLogin("github")}
                    type="button"
                    className="flex justify-center items-center gap-2 hover:bg-slate-50 py-3 border border-slate-200 rounded-2xl font-semibold text-slate-700 text-sm active:scale-[0.98] transition-all"
                >
                    <FaGithub className="text-slate-800" /> GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialButton;