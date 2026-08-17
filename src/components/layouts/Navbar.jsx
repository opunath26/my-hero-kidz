"use client";

import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from '../buttons/NavLink';
import { useSession, signOut } from 'next-auth/react';
import { FiShoppingCart, FiUser, FiPackage, FiLogOut, FiLayout } from "react-icons/fi";
import { useCart } from '@/context/CartContext';

const ADMIN_EMAILS = ["admin@gmail.com", "artistop26@gmail.com"];

const Navbar = () => {
    const { data: session, status } = useSession();
    const { cartCount } = useCart();
    const [imageError, setImageError] = useState(false);

    const isAdmin = session?.user?.email && ADMIN_EMAILS.some(
        (email) => email.trim().toLowerCase() === session.user.email.trim().toLowerCase()
    );

    const nav = (
        <>
            <li>
                <NavLink href={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink href={"/products"}>Products</NavLink>
            </li>
            <li>
                <NavLink href={"/about"}>About</NavLink>
            </li>
            <li>
                <NavLink href={"/contact"}>Contact</NavLink>
            </li>
            <li>
                <NavLink href={"/blog"}>Blog</NavLink>
            </li>
        </>
    );

    return (
        <header className="top-0 z-50 sticky bg-base-100/80 backdrop-blur-md border-base-200/80 border-b transition-all duration-300">
            <div className="mx-auto px-4 max-w-7xl container">
                <div className="px-0 py-3 navbar">
                    
                    {/* Navbar Start */}
                    <div className="gap-2 navbar-start">
                        {/* Mobile Menu Dropdown */}
                        <div className="dropdown">
                            <div 
                                tabIndex={0} 
                                role="button" 
                                className="lg:hidden hover:bg-primary/10 text-base-content btn btn-ghost btn-circle"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="z-50 space-y-1 bg-base-100/95 shadow-2xl backdrop-blur-lg mt-3 p-3 border border-base-200 rounded-3xl w-56 font-bold menu menu-md dropdown-content"
                            >
                                {nav}
                            </ul>
                        </div>
                        
                        <Logo />
                    </div>

                    {/* Navbar Center */}
                    <div className="hidden lg:flex navbar-center">
                        <ul className="gap-1 px-1 font-bold menu menu-horizontal">
                            {nav}
                        </ul>
                    </div>

                    {/* Navbar End */}
                    <div className="flex justify-end items-center gap-2 sm:gap-3 navbar-end">
                        {/* Shopping Cart Button */}
                        <Link href={"/cart"}>
                            <button className="group relative bg-primary/10 hover:bg-primary text-primary hover:text-white active:scale-90 transition-all duration-300 btn btn-circle btn-ghost">
                                <FiShoppingCart className="text-xl group-hover:rotate-12 transition-transform" />
                                
                                {cartCount > 0 && (
                                    <span className="-top-1 -right-1 absolute bg-warning shadow-md px-2 py-0.5 rounded-full font-black text-[10px] text-white animate-pulse">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                        </Link>

                        {/* Authentication State Check */}
                        {status === "loading" ? (
                            <span className="text-primary loading-spinner loading-md loading"></span>
                        ) : session?.user ? (
                            /* Profile Dropdown when logged in */
                            <div className="dropdown dropdown-end">
                                <div 
                                    tabIndex={0} 
                                    role="button" 
                                    className="border-2 border-primary/30 hover:border-primary active:scale-95 transition-all avatar btn btn-circle btn-ghost"
                                >
                                    <div className="relative flex justify-center items-center bg-primary/10 rounded-full w-10 h-10 overflow-hidden">
                                        {session.user.image && !imageError ? (
                                            <Image 
                                                src={session.user.image} 
                                                alt={session.user.name || "User Avatar"} 
                                                fill
                                                unoptimized
                                                onError={() => setImageError(true)}
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="flex justify-center items-center w-full h-full font-black text-primary text-sm">
                                                {session.user.name ? session.user.name.charAt(0).toUpperCase() : <FiUser className="text-lg" />}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <ul 
                                    tabIndex={0} 
                                    className="z-50 space-y-1 bg-base-100 shadow-2xl backdrop-blur-lg mt-3 p-3 border border-base-200 rounded-3xl w-64 dropdown-content"
                                >
                                    {/* User Info Header */}
                                    <li className="px-3 py-2 border-base-200 border-b">
                                        <p className="font-bold text-sm text-base-content truncate">{session.user.name || "User"}</p>
                                        <p className="text-xs text-base-content/60 truncate">{session.user.email}</p>
                                    </li>

                                    {isAdmin && (
                                        <li className="pt-1">
                                            <Link 
                                                href="/admin" 
                                                className="flex items-center gap-3 bg-primary/10 hover:bg-primary px-3 py-2.5 rounded-2xl font-bold text-primary hover:text-white text-sm transition-all"
                                            >
                                                <FiLayout className="text-base" />
                                                <span>Admin Dashboard</span>
                                            </Link>
                                        </li>
                                    )}

                                    {/* Navigation Links */}
                                    <li className={isAdmin ? "" : "pt-1"}>
                                        <Link 
                                            href="/profile" 
                                            className="flex items-center gap-3 hover:bg-primary/10 px-3 py-2.5 rounded-2xl font-bold text-sm transition-all"
                                        >
                                            <FiUser className="text-primary text-base" />
                                            <span>My Profile</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link 
                                            href="/my-orders" 
                                            className="flex items-center gap-3 hover:bg-primary/10 px-3 py-2.5 rounded-2xl font-bold text-sm transition-all"
                                        >
                                            <FiPackage className="text-primary text-base" />
                                            <span>My Orders</span>
                                        </Link>
                                    </li>

                                    <div className="my-1 border-base-200 border-t"></div>

                                    {/* Sign Out Button */}
                                    <li>
                                        <button 
                                            onClick={() => signOut({ callbackUrl: "/login" })}
                                            className="flex items-center gap-3 hover:bg-error/10 px-3 py-2.5 rounded-2xl w-full font-bold text-error text-sm transition-all"
                                        >
                                            <FiLogOut className="text-base" />
                                            <span>Sign Out</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            /* Login Button when not logged in */
                            <Link href={"/login"}>
                                <button className="flex items-center gap-2 shadow-md shadow-primary/20 px-5 rounded-full font-black text-white text-sm hover:scale-105 active:scale-95 transition-all duration-200 btn btn-primary">
                                    <FiUser className="text-base" />
                                    <span>Login</span>
                                </button>
                            </Link>
                        )}
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;