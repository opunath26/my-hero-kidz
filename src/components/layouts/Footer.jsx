import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="relative bg-slate-900 pt-16 pb-8 overflow-hidden text-slate-300">
            {/* Top Wave/Border Highlight */}
            <div className="top-0 right-0 left-0 absolute bg-gradient-to-r from-primary via-warning to-secondary h-1"></div>

            <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto px-4 max-w-7xl">
                
                {/* 1. Logo & About Section */}
                <div className="space-y-4">
                    <Link href="/" className="group flex items-center space-x-2 w-fit">
                        <div className="relative group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300">
                            <Image 
                                src="/assets/logo.png" 
                                alt="Hero Kidz Logo" 
                                width={45} 
                                height={45} 
                                className="object-contain"
                            />
                        </div>
                        <span className="font-black text-white text-2xl tracking-tight">
                            Hero <span className="text-primary group-hover:text-warning transition-colors">Kidz</span>
                        </span>
                    </Link>
                    <p className="font-medium text-slate-400 text-sm leading-relaxed">
                        A trusted companion for your child's bright future and proper care. We ensure a safe, nurturing, and joyful childhood for every kid.
                    </p>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-3 pt-2">
                        {[
                            { icon: <FaFacebookF />, href: "#", color: "hover:bg-blue-600" },
                            { icon: <FaInstagram />, href: "#", color: "hover:bg-pink-600" },
                            { icon: <FaTwitter />, href: "#", color: "hover:bg-sky-500" },
                            { icon: <FaYoutube />, href: "#", color: "hover:bg-red-600" }
                        ].map((social, idx) => (
                            <a 
                                key={idx} 
                                href={social.href}
                                className={`w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm`}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. Quick Links */}
                <div>
                    <h4 className="inline-block relative mb-5 font-extrabold text-white text-lg">
                        Quick Links
                        <span className="block bg-primary mt-1 rounded-full w-8 h-1"></span>
                    </h4>
                    <ul className="space-y-2.5 font-medium text-sm">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About Us", href: "/about" },
                            { name: "All Products", href: "/products" },
                            { name: "Blogs", href: "/blog" },
                            { name: "Contact Us", href: "/contact" }
                        ].map((link, idx) => (
                            <li key={idx}>
                                <Link 
                                    href={link.href} 
                                    className="inline-block hover:text-primary transition-all hover:translate-x-1.5 duration-200"
                                >
                                    <span className="mr-1.5 text-primary">›</span>{link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 3. Support & Resources */}
                <div>
                    <h4 className="inline-block relative mb-5 font-extrabold text-white text-lg">
                        Support
                        <span className="block bg-warning mt-1 rounded-full w-8 h-1"></span>
                    </h4>
                    <ul className="space-y-2.5 font-medium text-sm">
                        {[
                            { name: "FAQ", href: "/faq" },
                            { name: "Privacy Policy", href: "/privacy" },
                            { name: "Terms & Conditions", href: "/terms" },
                            { name: "Shipping Info", href: "/shipping" }
                        ].map((link, idx) => (
                            <li key={idx}>
                                <Link 
                                    href={link.href} 
                                    className="inline-block hover:text-warning transition-all hover:translate-x-1.5 duration-200"
                                >
                                    <span className="mr-1.5 text-warning">›</span>{link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 4. Contact Info */}
                <div>
                    <h4 className="inline-block relative mb-5 font-extrabold text-white text-lg">
                        Contact Us
                        <span className="block bg-success mt-1 rounded-full w-8 h-1"></span>
                    </h4>
                    <ul className="space-y-3.5 font-medium text-slate-400 text-sm">
                        <li className="flex items-start space-x-3">
                            <span className="bg-primary/10 mt-0.5 p-2 rounded-xl text-primary text-xs"><FaMapMarkerAlt /></span>
                            <span>Banani, Dhaka, Bangladesh</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="bg-success/10 p-2 rounded-xl text-success text-xs"><FaPhoneAlt /></span>
                            <span>+880 1234-567890</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="bg-warning/10 p-2 rounded-xl text-warning text-xs"><FaEnvelope /></span>
                            <span>support@herokidz.com</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom Copyright Section */}
            <div className="mt-14 pt-6 border-slate-800/80 border-t font-medium text-slate-500 text-xs text-center">
                <p>&copy; {new Date().getFullYear()} Hero Kidz. Built with ❤️ for Little Heroes. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;