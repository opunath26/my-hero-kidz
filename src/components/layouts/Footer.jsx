import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
            <div className="gap-8 grid grid-cols-1 md:grid-cols-4 mx-auto px-4 max-w-7xl">
                
                {/* 1. Logo & About Section */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Image 
                            src="/assets/logo.png" 
                            alt="Hero Kidz Logo" 
                            width={50} 
                            height={50} 
                            className="object-contain"
                        />
                        <span className="font-bold text-white text-2xl tracking-wide">
                            Hero <span className="text-primary">Kidz</span>
                        </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        আপনার শিশুর সুন্দর ভবিষ্যৎ ও সঠিক যত্নের বিশ্বস্ত সঙ্গী। আমরা নিশ্চিত করি প্রতিটি শিশুর নিরাপদ ও আনন্দময় শৈশব।
                    </p>
                </div>

                {/* 2. Quick Links */}
                <div>
                    <h4 className="mb-4 pb-1 border-primary border-b-2 w-fit font-semibold text-white text-lg">
                        কুইক লিঙ্ক
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-primary transition">হোম পেজ</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition">আমাদের সম্পর্কে</Link></li>
                        <li><Link href="/services" className="hover:text-primary transition">সেবাসমূহ</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition">যোগাযোগ</Link></li>
                    </ul>
                </div>

                {/* 3. Support & Resources */}
                <div>
                    <h4 className="mb-4 pb-1 border-primary border-b-2 w-fit font-semibold text-white text-lg">
                        সহায়তা
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/faq" className="hover:text-primary transition">এফএকিউ (FAQ)</Link></li>
                        <li><Link href="/privacy" className="hover:text-primary transition">প্রাইভেসি পলিসি</Link></li>
                        <li><Link href="/terms" className="hover:text-primary transition">শর্তাবলী</Link></li>
                    </ul>
                </div>

                {/* 4. Contact Info */}
                <div>
                    <h4 className="mb-4 pb-1 border-primary border-b-2 w-fit font-semibold text-white text-lg">
                        যোগাযোগ করুন
                    </h4>
                    <ul className="space-y-3 text-slate-400 text-sm">
                        <li className="flex items-center space-x-2">
                            <span>📍</span>
                            <span>ঢাকা, বাংলাদেশ</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>📞</span>
                            <span>+৮৮০ ১২৩৪৫৬৭৮৯</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>✉️</span>
                            <span>info@herokidz.com</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Copyright Section */}
            <div className="mt-12 pt-6 border-slate-800 border-t text-slate-500 text-sm text-center">
                <p>&copy; {new Date().getFullYear()} Hero Kidz. সর্বস্বত্ব সংরক্ষিত।</p>
            </div>
        </footer>
    );
};

export default Footer;