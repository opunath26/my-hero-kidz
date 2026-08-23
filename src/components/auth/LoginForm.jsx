"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaEnvelope, FaLock, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    
    const router = useRouter();
    const searchParams = useSearchParams();

    const redirectTo = searchParams.get('redirectTo') || "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const email = e.target.email.value;
        const password = e.target.password.value;

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setLoading(false);
            setError("ইমেইল বা পাসওয়ার্ড ভুল হয়েছে। আবার চেষ্টা করুন।");
        } else {
            setLoading(false);
            setShowSuccessToast(true);

            setTimeout(() => {
                router.push(redirectTo);
                router.refresh();
            }, 1500);
        }
    };

    return (
        <div className="relative w-full">
            {/* Top Right Orange Success Toast */}
            {showSuccessToast && (
                <div className="top-5 right-5 z-50 fixed animate-slide-in pointer-events-none">
                    <div className="flex items-center gap-3 bg-[#FF4500] shadow-orange-500/30 shadow-xl px-5 py-3.5 border border-orange-400/40 rounded-2xl text-white">
                        <FaCheckCircle className="text-xl animate-pulse" />
                        <div>
                            <h4 className="font-bold text-white text-sm">স্বাগতম (Welcome Back!)</h4>
                            <p className="text-orange-100 text-xs">সফলভাবে লগইন হয়েছে, অপেক্ষা করুন...</p>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4 w-full">
                {error && (
                    <div className="bg-red-500/10 backdrop-blur-md p-3 border border-red-500/20 rounded-2xl font-semibold text-red-600 text-xs text-center">
                        {error}
                    </div>
                )}

                {/* Email Input */}
                <div className="space-y-1.5">
                    <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                        ইমেইল অ্যাড্রেস (Email)
                    </label>
                    <div className="relative flex items-center">
                        <FaEnvelope className="left-4 absolute text-slate-400 text-sm" />
                        <input 
                            name="email"
                            type="email" 
                            placeholder="আপনার ইমেইল লিখুন" 
                            disabled={loading || showSuccessToast}
                            className="bg-white/60 focus:bg-white/90 disabled:opacity-60 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
                            required
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                        <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                            পাসওয়ার্ড (Password)
                        </label>
                        <Link href="#" className="font-bold text-[#FF4500] hover:text-[#e03d00] text-xs transition-colors">
                            পাসওয়ার্ড ভুলে গেছেন?
                        </Link>
                    </div>
                    <div className="relative flex items-center">
                        <FaLock className="left-4 absolute text-slate-400 text-sm" />
                        <input 
                            name="password"
                            type="password" 
                            placeholder="আপনার পাসওয়ার্ড দিন" 
                            disabled={loading || showSuccessToast}
                            className="bg-white/60 focus:bg-white/90 disabled:opacity-60 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={loading || showSuccessToast}
                    className="flex justify-center items-center gap-2 bg-[#FF4500] hover:bg-[#e03d00] disabled:opacity-60 shadow-lg shadow-orange-500/30 mt-2 py-3.5 rounded-2xl w-full font-extrabold text-white text-sm tracking-wide active:scale-[0.98] transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <FaSpinner className="text-base animate-spin" />
                            <span>লগইন হচ্ছে...</span>
                        </>
                    ) : showSuccessToast ? (
                        "সফল হয়েছে!"
                    ) : (
                        "লগইন করুন (Sign In)"
                    )}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;