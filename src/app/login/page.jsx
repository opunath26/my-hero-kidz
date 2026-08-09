import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LoginForm from '@/components/auth/LoginForm';
import SocialButton from '@/components/auth/SocialButton';

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center my-8 px-4 min-h-[80vh]">
            <div className="flex flex-col items-center bg-white shadow-sm p-8 border border-slate-100 rounded-3xl w-full max-w-md">
                
                <div className="relative mb-6 w-20 h-20">
                    <Image 
                        src="https://i.ibb.co.com/hRbt48zS/logo.png" 
                        alt="Hero Kidz Logo" 
                        fill 
                        className="object-contain"
                    />
                </div>

                <h2 className="mb-2 font-extrabold text-slate-800 text-3xl text-center">Welcome Back</h2>
                <p className="mb-8 text-slate-500 text-sm text-center">Login to manage your pets and orders</p>

                <LoginForm />

                <SocialButton />

                <p className="mt-8 text-slate-600 text-sm text-center">
                    Don&apos;t have an account? <Link href="/register" className="font-bold text-primary hover:underline">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;