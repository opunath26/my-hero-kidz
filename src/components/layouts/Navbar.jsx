import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import NavLink from '../buttons/NavLink';
import { FiShoppingCart, FiUser } from "react-icons/fi";

const Navbar = () => {
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
                                className="z-50 space-y-1 bg-base-100/95 shadow-xl backdrop-blur-lg mt-3 p-3 border border-base-200 rounded-[1.5rem] w-56 font-bold menu menu-md dropdown-content"
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
                    <div className="flex justify-end items-center gap-3 navbar-end">
                        {/* Shopping Cart Button with Counter Badge */}
                        <Link href={"/cart"}>
                            <button className="group relative bg-primary/10 hover:bg-primary text-primary hover:text-white active:scale-90 transition-all duration-300 btn btn-circle btn-ghost">
                                <FiShoppingCart className="text-xl group-hover:animate-bounce" />
                                <span className="top-0 -right-1 absolute bg-warning shadow-sm px-1.5 py-0.5 rounded-full font-black text-[10px] text-white animate-pulse">
                                    0
                                </span>
                            </button>
                        </Link>

                        {/* Login Button */}
                        <Link href={"/login"}>
                            <button className="flex items-center gap-2 shadow-md shadow-primary/20 px-6 rounded-full font-black text-white hover:scale-105 active:scale-95 transition-all duration-200 btn btn-primary">
                                <FiUser className="text-base" />
                                <span>Login</span>
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;