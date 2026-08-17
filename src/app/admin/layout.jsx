"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaChartPie,
  FaBoxOpen,
  FaPlusCircle,
  FaShoppingBag,
  FaUsers,
  FaHome,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { title: "Dashboard", href: "/admin", icon: <FaChartPie /> },
    { title: "Manage Products", href: "/admin/products", icon: <FaBoxOpen /> },
    { title: "Add Product", href: "/admin/add-product", icon: <FaPlusCircle /> },
    { title: "Manage Orders", href: "/admin/orders", icon: <FaShoppingBag /> },
    { title: "Manage Users", href: "/admin/users", icon: <FaUsers /> },
  ];

  return (
    <div className="flex bg-base-200/50 min-h-screen">
      {/* Mobile Sidebar Toggle Button */}
      <div className="lg:hidden right-5 bottom-5 z-50 fixed">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="shadow-lg text-white text-xl btn btn-primary btn-circle"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Component */}
      <aside
        className={`fixed lg:static top-0 left-0 z-40 w-64 h-screen bg-base-100 border-r border-base-200 transition-transform duration-300 flex flex-col justify-between ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          {/* Admin Header / Logo */}
          <div className="p-6 border-base-200 border-b">
            <Link href="/admin" className="flex items-center gap-2 font-black text-primary text-2xl">
              HeroKidz <span className="text-[10px] text-white badge badge-primary">ADMIN</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 p-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Back to Main Site Button */}
        <div className="p-4 border-base-200 border-t">
          <Link
            href="/"
            className="flex justify-center items-center gap-2 rounded-2xl btn-outline w-full font-bold text-xs btn btn-neutral"
          >
            <FaHome /> Back to Main Site
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}