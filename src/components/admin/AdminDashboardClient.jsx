"use client";

import React, { useEffect, useState } from "react";
import { FaBox, FaUsers, FaShoppingCart, FaMoneyBillWave, FaClock, FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

export default function AdminDashboardClient() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  const salesData = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 19000 },
    { month: "Mar", sales: 15000 },
    { month: "Apr", sales: 22000 },
    { month: "May", sales: 28000 },
    { month: "Jun", sales: 24000 },
    { month: "Jul", sales: 31000 },
    { month: "Aug", sales: 35000 },
  ];

  const categoryData = [
    { name: "Toys", value: 35 },
    { name: "Clothes", value: 25 },
    { name: "Books", value: 20 },
    { name: "Accessories", value: 20 },
  ];

  const COLORS = ["#FF4500", "#10B981", "#F59E0B", "#6366F1"];

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[60vh] gap-3">
        <span className="loading loading-spinner loading-lg text-[#FF4500]"></span>
        <p className="font-semibold text-slate-400 text-sm">Loading Dashboard Statistics...</p>
      </div>
    );
  }

  const cards = [
    { title: "Total Products", count: stats?.totalProducts || 0, icon: <FaBox />, gradient: "from-blue-500 to-indigo-600" },
    { title: "Total Users", count: stats?.totalUsers || 0, icon: <FaUsers />, gradient: "from-emerald-500 to-teal-600" },
    { title: "Total Orders", count: stats?.totalOrders || 0, icon: <FaShoppingCart />, gradient: "from-amber-500 to-orange-500" },
    { title: "Total Revenue", count: `৳${stats?.totalRevenue || 0}`, icon: <FaMoneyBillWave />, gradient: "from-purple-500 to-pink-600" },
  ];

  return (
    <div className="space-y-8 mx-auto p-4 sm:p-6 max-w-7xl">
      {/* Page Title & Tagline */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <h1 className="font-extrabold text-slate-900 text-2xl sm:text-3xl tracking-tight">
            Dashboard Overview
          </h1>
          <p className="font-medium text-slate-400 text-xs sm:text-sm mt-0.5">
            Real-time analytics and store health performance 🚀
          </p>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <div 
            key={i} 
            className="group hover:-translate-y-1 flex justify-between items-center bg-white shadow-sm hover:shadow-md p-6 border border-slate-200/80 rounded-3xl transition-all duration-300"
          >
            <div>
              <p className="font-bold text-slate-400 text-xs uppercase tracking-wider">{c.title}</p>
              <h2 className="mt-2 font-black text-slate-800 text-2xl sm:text-3xl">{c.count}</h2>
            </div>
            <div className={`bg-gradient-to-br ${c.gradient} text-white p-4 rounded-2xl text-xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
              {c.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Charts Section */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        {/* Sales Revenue Bar Chart */}
        <div className="space-y-4 lg:col-span-2 bg-white shadow-sm p-6 border border-slate-200/80 rounded-3xl">
          <div className="flex justify-between items-center pb-2 border-b border-slate-100">
            <h2 className="font-extrabold text-slate-800 text-base sm:text-lg">Monthly Revenue Trend (৳)</h2>
            <span className="bg-orange-50 px-3 py-1 rounded-full font-semibold text-[#FF4500] text-xs">2026 Data</span>
          </div>
          <div className="w-full h-72 pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fill: "#64748B", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0F172A",
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                  cursor={{ fill: "rgba(255, 69, 0, 0.05)" }}
                />
                <Bar dataKey="sales" fill="#FF4500" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution Pie Chart */}
        <div className="flex flex-col justify-between space-y-4 bg-white shadow-sm p-6 border border-slate-200/80 rounded-3xl">
          <div className="pb-2 border-b border-slate-100">
            <h2 className="font-extrabold text-slate-800 text-base sm:text-lg">Category Distribution</h2>
          </div>
          <div className="w-full h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={75}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "#0F172A",
                    borderRadius: "12px",
                    border: "none",
                    color: "#fff",
                    fontSize: "12px"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="gap-2.5 grid grid-cols-2 pt-2 border-t border-slate-100 font-bold text-slate-600 text-xs">
            {categoryData.map((cat, idx) => (
              <div key={cat.name} className="flex items-center gap-2">
                <span
                  className="rounded-full w-2.5 h-2.5 shrink-0"
                  style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                ></span>
                <span className="truncate">{cat.name} ({cat.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="space-y-4 bg-white shadow-sm p-6 border border-slate-200/80 rounded-3xl">
        <div className="flex justify-between items-center pb-2 border-b border-slate-100">
          <h2 className="flex items-center gap-2 font-extrabold text-slate-800 text-base sm:text-lg">
            <FaClock className="text-[#FF4500]" /> Recent Orders Overview
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 text-xs uppercase tracking-wider">
                <th className="py-3 px-4 font-bold">Order ID</th>
                <th className="py-3 px-4 font-bold">Customer</th>
                <th className="py-3 px-4 font-bold">Amount</th>
                <th className="py-3 px-4 font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold text-slate-700 text-xs sm:text-sm">
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-[#FF4500]">#ORD-9021</td>
                <td className="py-3.5 px-4 font-bold text-slate-800">Tanvir Ahmed</td>
                <td className="py-3.5 px-4">৳2,450</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center bg-amber-500/10 px-2.5 py-1 rounded-full font-bold text-amber-600 text-xs">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-[#FF4500]">#ORD-9020</td>
                <td className="py-3.5 px-4 font-bold text-slate-800">Rafiq Islam</td>
                <td className="py-3.5 px-4">৳1,200</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center bg-sky-500/10 px-2.5 py-1 rounded-full font-bold text-sky-600 text-xs">
                    Processing
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3.5 px-4 font-mono font-bold text-[#FF4500]">#ORD-9019</td>
                <td className="py-3.5 px-4 font-bold text-slate-800">Nusrat Jahan</td>
                <td className="py-3.5 px-4">৳5,600</td>
                <td className="py-3.5 px-4">
                  <span className="inline-flex items-center bg-emerald-500/10 px-2.5 py-1 rounded-full font-bold text-emerald-600 text-xs">
                    Delivered
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}