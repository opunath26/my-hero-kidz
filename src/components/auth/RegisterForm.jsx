import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGoogle, FaGithub, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const RegisterForm = () => {
    return (
        <div className="flex justify-center items-center my-8 px-4 min-h-[85vh]">
            <div className="flex flex-col items-center bg-white shadow-sm p-8 border border-slate-100 rounded-3xl w-full max-w-md">
                
                <div className="relative mb-6 w-20 h-20">
                    <Image 
                        src="https://i.ibb.co.com/hRbt48zS/logo.png" 
                        alt="Hero Kidz Logo" 
                        fill 
                        className="object-contain"
                    />
                </div>

                <h2 className="mb-2 font-extrabold text-slate-800 text-3xl text-center">Create Account</h2>
                <p className="mb-8 text-slate-500 text-sm text-center">Join the Hero Kidz community today</p>

                <form className="space-y-4 w-full">
                    <div className="space-y-1">
                        <label className="font-semibold text-slate-700 text-sm">Full Name</label>
                        <div className="relative flex items-center">
                            <FaUser className="left-4 absolute text-slate-400" />
                            <input 
                                type="text" 
                                placeholder="Enter your full name" 
                                className="bg-slate-50 focus:bg-white py-3 pr-4 pl-11 border border-slate-200 focus:border-primary rounded-2xl focus:outline-none w-full text-slate-800 text-sm transition-all placeholder-slate-400"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="font-semibold text-slate-700 text-sm">Email Address</label>
                        <div className="relative flex items-center">
                            <FaEnvelope className="left-4 absolute text-slate-400" />
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-slate-50 focus:bg-white py-3 pr-4 pl-11 border border-slate-200 focus:border-primary rounded-2xl focus:outline-none w-full text-slate-800 text-sm transition-all placeholder-slate-400"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="font-semibold text-slate-700 text-sm">Password</label>
                        <div className="relative flex items-center">
                            <FaLock className="left-4 absolute text-slate-400" />
                            <input 
                                type="password" 
                                placeholder="Create a password" 
                                className="bg-slate-50 focus:bg-white py-3 pr-4 pl-11 border border-slate-200 focus:border-primary rounded-2xl focus:outline-none w-full text-slate-800 text-sm transition-all placeholder-slate-400"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="font-semibold text-slate-700 text-sm">Confirm Password</label>
                        <div className="relative flex items-center">
                            <FaLock className="left-4 absolute text-slate-400" />
                            <input 
                                type="password" 
                                placeholder="Confirm your password" 
                                className="bg-slate-50 focus:bg-white py-3 pr-4 pl-11 border border-slate-200 focus:border-primary rounded-2xl focus:outline-none w-full text-slate-800 text-sm transition-all placeholder-slate-400"
                                required
                            />
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/10 mt-4 py-3.5 rounded-2xl w-full font-bold text-white text-base active:scale-[0.98] transition-all"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="relative flex items-center my-1 py-4 w-full">
                    <div className="flex-grow border-slate-100 border-t"></div>
                    <span className="flex-shrink mx-4 font-medium text-slate-400 text-xs uppercase tracking-wider">Or register with</span>
                    <div className="flex-grow border-slate-100 border-t"></div>
                </div>

                <div className="gap-4 grid grid-cols-2 w-full">
                    <button className="flex justify-center items-center gap-2 hover:bg-slate-50 py-3 border border-slate-200 rounded-2xl font-semibold text-slate-700 text-sm active:scale-[0.98] transition-all">
                        <FaGoogle className="text-red-500" /> Google
                    </button>
                    <button className="flex justify-center items-center gap-2 hover:bg-slate-50 py-3 border border-slate-200 rounded-2xl font-semibold text-slate-700 text-sm active:scale-[0.98] transition-all">
                        <FaGithub className="text-slate-800" /> GitHub
                    </button>
                </div>

                <p className="mt-6 text-slate-600 text-sm text-center">
                    Already have an account? <Link href="/login" className="font-bold text-primary hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;