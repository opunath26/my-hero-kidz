"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaEnvelope, FaLock, FaSpinner, FaUserShield } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    // Demo Admin credentials default state হিসেবে দেওয়া হলো
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('Hero123@');
    
    const router = useRouter();
    const searchParams = useSearchParams();

    const redirectTo = searchParams.get('redirectTo') || "/";

    // Toast Custom Styles (Matching Brand Orange Theme)
    const successToastStyle = {
        borderRadius: '12px',
        background: '#ea580c', // Orange Theme
        color: '#fff',
        fontWeight: 'bold',
        padding: '12px 20px',
        boxShadow: '0 10px 15px -3px rgba(234, 88, 12, 0.3)',
    };

    const errorToastStyle = {
        borderRadius: '12px',
        background: '#ef4444',
        color: '#fff',
        fontWeight: 'bold',
        padding: '12px 20px',
    };

    // Auto Fill Demo Credentials Function
    const handleFillDemoAdmin = () => {
        setEmail('admin@gmail.com');
        setPassword('Hero123@');
        toast.success("ডেমো এডমিন ক্রেডেনশিয়াল পূরণ করা হয়েছে!", {
            style: { ...successToastStyle, background: '#3b82f6', boxShadow: 'none' },
            duration: 2000
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setLoading(false);
                toast.error("ইমেইল বা পাসওয়ার্ড ভুল হয়েছে। আবার চেষ্টা করুন।", {
                    style: errorToastStyle,
                    iconTheme: { primary: '#fff', secondary: '#ef4444' }
                });
            } else {
                setLoading(false);
                toast.success("স্বাগতম! (Welcome Back!)", {
                    style: successToastStyle,
                    iconTheme: { primary: '#fff', secondary: '#ea580c' }
                });

                setTimeout(() => {
                    router.push(redirectTo);
                    router.refresh();
                }, 1500);
            }
        } catch (error) {
            console.error("Login Error:", error);
            setLoading(false);
            toast.error("সার্ভারে সমস্যা হয়েছে!", {
                style: errorToastStyle,
                iconTheme: { primary: '#fff', secondary: '#ef4444' }
            });
        }
    };

    return (
        <div className="relative w-full">
            {/* HR / Recruiter Demo Admin Badge & Fill Button */}
            <div className="flex sm:flex-row flex-col justify-between items-center gap-2 bg-orange-500/10 mb-4 p-3 border border-orange-500/30 rounded-2xl">
                <div className="font-medium text-slate-700 text-xs sm:text-left text-center">
                    <span className="block font-bold text-orange-600">🔑 HR / Demo Admin Credential:</span>
                    <span>Email: <strong>admin@gmail.com</strong> | Pass: <strong>Hero123@</strong></span>
                </div>
                <button
                    type="button"
                    onClick={handleFillDemoAdmin}
                    className="flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 shadow-sm px-3 py-1.5 rounded-xl font-bold text-white text-xs whitespace-nowrap active:scale-95 transition-all cursor-pointer"
                >
                    <FaUserShield className="text-xs" /> Auto Fill Demo
                </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 w-full">
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="আপনার ইমেইল লিখুন" 
                            disabled={loading}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="আপনার পাসওয়ার্ড দিন" 
                            disabled={loading}
                            className="bg-white/60 focus:bg-white/90 disabled:opacity-60 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={loading}
                    className="flex justify-center items-center gap-2 bg-[#FF4500] hover:bg-[#e03d00] disabled:opacity-60 shadow-lg shadow-orange-500/30 mt-2 py-3.5 rounded-2xl w-full font-extrabold text-white text-sm tracking-wide active:scale-[0.98] transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <FaSpinner className="text-base animate-spin" />
                            <span>লগইন হচ্ছে...</span>
                        </>
                    ) : (
                        "লগইন করুন (Sign In)"
                    )}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;