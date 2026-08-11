"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaLock, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [error, setError] = useState("");
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const router = useRouter();

    const isAnyLoading = loading || googleLoading || showSuccessToast;

    // Email/Password Login
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
            setError(res.error);
        } else {
            setLoading(false);
            setShowSuccessToast(true);

            setTimeout(() => {
                router.push("/");
                router.refresh();
            }, 1500);
        }
    };

    // Google Login Handler
    const handleGoogleLogin = async () => {
        setGoogleLoading(true);
        setError("");
        try {
            await signIn("google", { callbackUrl: "/" });
        } catch (err) {
            setGoogleLoading(false);
            setError("Google sign-in failed. Please try again.");
        }
    };

    return (
        <div className="relative w-full">
            {/* Top Animated Success Toast */}
            {showSuccessToast && (
                <div className="top-5 right-5 left-5 z-50 fixed flex justify-center items-center animate-bounce pointer-events-none">
                    <div className="flex items-center gap-3 bg-slate-900/90 shadow-2xl backdrop-blur-md px-5 py-3.5 border border-emerald-500/30 rounded-2xl text-white">
                        <FaCheckCircle className="text-emerald-400 text-xl animate-pulse" />
                        <div>
                            <h4 className="font-bold text-sm">Welcome Back!</h4>
                            <p className="text-slate-300 text-xs">Login successful, redirecting...</p>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5 w-full">
                {error && (
                    <div className="bg-red-50 p-3 border border-red-200 rounded-xl font-medium text-red-500 text-sm text-center">
                        {error}
                    </div>
                )}

                {/* Email Input */}
                <div className="space-y-1">
                    <label className="font-semibold text-slate-700 text-sm">Email Address</label>
                    <div className="relative flex items-center">
                        <FaEnvelope className="left-4 absolute text-slate-400" />
                        <input 
                            name="email"
                            type="email" 
                            placeholder="Enter your email" 
                            disabled={isAnyLoading}
                            className="bg-slate-50 focus:bg-white disabled:opacity-60 py-3.5 pr-4 pl-11 border border-slate-200 focus:border-primary rounded-2xl focus:outline-none w-full text-slate-800 text-sm transition-all placeholder-slate-400"
                            required
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1">
                    <div className="flex justify-between items-center">
                        <label className="font-semibold text-slate-700 text-sm">Password</label>
                        <Link href="#" className="font-semibold text-primary text-xs hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="relative flex items-center">
                        <FaLock className="left-4 absolute text-slate-400" />
                        <input 
                            name="password"
                            type="password" 
                            placeholder="Enter your password" 
                            disabled={isAnyLoading}
                            className="bg-slate-50 focus:bg-white disabled:opacity-60 py-3.5 pr-4 pl-11 border border-slate-200 focus:border-primary rounded-2xl focus:outline-none w-full text-slate-800 text-sm transition-all placeholder-slate-400"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    disabled={isAnyLoading}
                    className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 shadow-lg shadow-primary/10 mt-2 py-3.5 rounded-2xl w-full font-bold text-white text-base active:scale-[0.98] transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <FaSpinner className="text-lg animate-spin" />
                            <span>Signing in...</span>
                        </>
                    ) : showSuccessToast ? (
                        "Success!"
                    ) : (
                        "Sign In"
                    )}
                </button>
            </form>

            {/* Divider */}
            <div className="relative flex justify-center items-center my-6">
                <div className="border-slate-200 border-t w-full"></div>
                <span className="top-1/2 absolute bg-white px-3 font-semibold text-slate-400 text-xs -translate-y-1/2">
                    OR
                </span>
            </div>

            {/* Google Sign In Button */}
            <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isAnyLoading}
                className="flex justify-center items-center gap-3 bg-slate-50 hover:bg-slate-100 disabled:opacity-60 py-3.5 border border-slate-200 rounded-2xl w-full font-semibold text-slate-700 text-sm active:scale-[0.98] transition-all cursor-pointer disabled:cursor-not-allowed"
            >
                {googleLoading ? (
                    <>
                        <FaSpinner className="text-primary text-lg animate-spin" />
                        <span>Connecting to Google...</span>
                    </>
                ) : (
                    <>
                        <FcGoogle className="text-xl" />
                        <span>Continue with Google</span>
                    </>
                )}
            </button>
        </div>
    );
};

export default LoginForm;