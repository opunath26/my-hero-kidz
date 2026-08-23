"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../buttons/NavLink";
import { useSession, signOut } from "next-auth/react";
import {
  FiShoppingCart,
  FiUser,
  FiPackage,
  FiLogOut,
  FiLayout,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import { useCart } from "@/context/CartContext";

const ADMIN_EMAILS = ["admin@gmail.com", "artistop26@gmail.com"];

const Navbar = () => {
  const { data: session, status } = useSession();
  const { cartCount } = useCart();
  const [imageError, setImageError] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isAdmin =
    session?.user?.email &&
    ADMIN_EMAILS.some(
      (email) =>
        email.trim().toLowerCase() === session.user.email.trim().toLowerCase()
    );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-base-100/95 shadow-md backdrop-blur-lg py-2.5 border-b border-base-200"
          : "bg-base-100 py-4 border-b border-base-200/60"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 max-w-7xl container">
        <div className="flex justify-between items-center">
          
          {/* Logo & Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex justify-center items-center hover:bg-base-200 rounded-xl w-10 h-10 text-base-content active:scale-90 transition-all"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2">
            <ul className="flex items-center gap-6 font-bold text-sm">
              {navLinks.map((link) => (
                <li key={link.href} className="group relative">
                  <NavLink href={link.href}>
                    <span className="inline-block py-1 group-hover:text-primary transition-colors">
                      {link.title}
                    </span>
                  </NavLink>
                  {/* Hover Bottom Border Animation */}
                  <span className="bottom-0 left-0 absolute bg-primary rounded-full w-0 group-hover:w-full h-0.5 transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Shopping Cart Button */}
            <Link href="/cart">
              <button className="group relative flex justify-center items-center bg-primary/10 hover:bg-primary shadow-sm rounded-full w-10 sm:w-11 h-10 sm:h-11 text-primary hover:text-white active:scale-90 transition-all duration-300">
                <FiShoppingCart className="text-lg sm:text-xl group-hover:rotate-12 transition-transform" />
                {cartCount > 0 && (
                  <span className="-top-1 -right-1 absolute flex justify-center items-center bg-rose-500 shadow-md px-1.5 rounded-full min-w-[20px] h-5 font-black text-[10px] text-white animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

            {/* User Auth Section */}
            {status === "loading" ? (
              <div className="bg-base-200 rounded-full w-10 h-10 animate-pulse"></div>
            ) : session?.user ? (
              <div className="relative dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center gap-1.5 hover:bg-base-200 p-1 border border-base-300 hover:border-primary rounded-full active:scale-95 transition-all cursor-pointer"
                >
                  <div className="relative bg-primary/10 rounded-full w-9 h-9 overflow-hidden">
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
                  <FiChevronDown className="hidden sm:block text-xs text-base-content/60" />
                </div>

                {/* Profile Dropdown Menu */}
                <ul
                  tabIndex={0}
                  className="z-50 space-y-1.5 bg-base-100 slide-in-from-top-2 shadow-2xl mt-3 p-3 border border-base-200 rounded-2xl w-64 animate-in duration-200 dropdown-content fade-in"
                >
                  <li className="px-3 py-2 border-base-200 border-b">
                    <p className="font-extrabold text-sm text-base-content truncate">
                      {session.user.name || "User"}
                    </p>
                    <p className="text-xs text-base-content/60 truncate">
                      {session.user.email}
                    </p>
                  </li>

                  {isAdmin && (
                    <li>
                      <Link
                        href="/admin"
                        className="flex items-center gap-3 bg-primary/10 hover:bg-primary px-3 py-2.5 rounded-xl font-bold text-primary hover:text-white text-sm transition-all"
                      >
                        <FiLayout className="text-base" />
                        <span>Admin Dashboard</span>
                      </Link>
                    </li>
                  )}

                  <li>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 hover:bg-base-200 px-3 py-2.5 rounded-xl font-semibold text-sm text-base-content transition-all"
                    >
                      <FiUser className="text-primary text-base" />
                      <span>My Profile</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/my-orders"
                      className="flex items-center gap-3 hover:bg-base-200 px-3 py-2.5 rounded-xl font-semibold text-sm text-base-content transition-all"
                    >
                      <FiPackage className="text-primary text-base" />
                      <span>My Orders</span>
                    </Link>
                  </li>

                  <div className="my-1 border-base-200 border-b"></div>

                  <li>
                    <button
                      onClick={() => signOut({ callbackUrl: "/login" })}
                      className="flex items-center gap-3 hover:bg-error/10 px-3 py-2.5 rounded-xl w-full font-bold text-error text-sm transition-all"
                    >
                      <FiLogOut className="text-base" />
                      <span>Sign Out</span>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link href="/login">
                <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 px-5 py-2.5 rounded-full font-bold text-white text-xs sm:text-sm active:scale-95 transition-all">
                  <FiUser className="text-base" />
                  <span>Login</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar & Solid Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden z-50 fixed inset-0">
          {/* Opaque Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Solid Drawer Content */}
          <div className="left-0 fixed inset-y-0 flex flex-col bg-base-100 shadow-2xl p-6 w-4/5 max-w-sm transition-transform duration-300">
            <div className="flex justify-between items-center mb-8 pb-4 border-base-200 border-b">
              <Logo />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:bg-base-200 p-2 rounded-full text-base-content/70 text-xl"
              >
                <FiX />
              </button>
            </div>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center hover:bg-primary/10 px-4 py-3 rounded-xl font-bold hover:text-primary text-base text-base-content transition-all"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;