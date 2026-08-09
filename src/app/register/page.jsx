import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RegisterForm from '@/components/auth/RegisterForm';
import SocialButton from '@/components/auth/SocialButton';

const RegisterPage = () => {
    return (
        <div className="flex justify-center items-center my-8 px-4 min-h-[85vh]">
            <div className="flex flex-col items-center bg-white shadow-sm p-8 border border-slate-100 rounded-3xl w-full max-w-md">
                
                {/* Logo */}
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

                {/* Register Form */}
                <RegisterForm />

                {/* Social Auth Buttons */}
                <SocialButton />

                {/* Login Link */}
                <p className="mt-6 text-slate-600 text-sm text-center">
                    Already have an account? <Link href="/login" className="font-bold text-primary hover:underline">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;