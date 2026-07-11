import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import NavLink from '../buttons/NavLink';
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
    const nav = <>
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
    return (
        <div>
            <div className="bg-base-100 navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="z-1 bg-base-100 shadow mt-3 p-2 rounded-box w-52 menu menu-sm dropdown-content">
                            {nav}
                        </ul>
                    </div>
                    <Logo></Logo>
                </div>
                <div className="hidden lg:flex navbar-center">
                    <ul className="px-1 menu menu-horizontal">
                        {nav}
                    </ul>
                </div>
                <div className="space-x-4 navbar-end">
                    <Link href={"#"}>
                        <button className="btn btn-primary">
                            <FiShoppingCart className="text-xl" />
                        </button>
                    </Link>
                    <Link href={"/login"}>
                        <button className="btn-outline btn btn-primary">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;