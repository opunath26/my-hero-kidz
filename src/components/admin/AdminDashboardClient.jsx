"use client";

import React, { useEffect, useState } from "react";
import { FaBox, FaUsers, FaShoppingCart, FaMoneyBillWave, FaClock } from "react-icons/fa";
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
  ];

  const categoryData = [
    { name: "Toys", value: 35 },
    { name: "Clothes", value: 25 },
    { name: "Books", value: 20 },
    { name: "Accessories", value: 20 },
  ];

  const COLORS = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#1A535C"];

  useEffect(() => {
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="text-primary loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const cards = [
    { title: "Total Products", count: stats?.totalProducts || 0, icon: <FaBox />, color: "bg-blue-500" },
    { title: "Total Users", count: stats?.totalUsers || 0, icon: <FaUsers />, color: "bg-emerald-500" },
    { title: "Total Orders", count: stats?.totalOrders || 0, icon: <FaShoppingCart />, color: "bg-amber-500" },
    { title: "Total Revenue", count: `৳${stats?.totalRevenue || 0}`, icon: <FaMoneyBillWave />, color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-8 mx-auto p-4 sm:p-6 max-w-7xl">
      <h1 className="font-black text-2xl">Dashboard Overview</h1>

      {/* Stats Cards Grid */}
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <div key={i} className="flex justify-between items-center bg-base-100 shadow-sm p-6 border border-base-200 rounded-3xl">
            <div>
              <p className="font-bold text-xs text-base-content/60">{c.title}</p>
              <h2 className="mt-1 font-black text-2xl">{c.count}</h2>
            </div>
            <div className={`${c.color} text-white p-4 rounded-2xl text-xl`}>
              {c.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Analytics Charts Section */}
      <div className="gap-6 grid grid-cols-1 lg:grid-cols-3">
        {/* Sales Revenue Bar Chart */}
        <div className="space-y-4 lg:col-span-2 bg-base-100 shadow-sm p-6 border border-base-200 rounded-3xl">
          <h2 className="font-black text-lg">Monthly Sales Revenue (৳)</h2>
          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    borderRadius: "12px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="sales" fill="#8884d8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution Pie Chart */}
        <div className="flex flex-col justify-between space-y-4 bg-base-100 shadow-sm p-6 border border-base-200 rounded-3xl">
          <h2 className="font-black text-lg">Category Distribution</h2>
          <div className="w-full h-56">
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
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="gap-2 grid grid-cols-2 font-bold text-xs text-base-content/70">
            {categoryData.map((cat, idx) => (
              <div key={cat.name} className="flex items-center gap-2">
                <span
                  className="rounded-full w-3 h-3"
                  style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                ></span>
                <span>{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="space-y-4 bg-base-100 shadow-sm p-6 border border-base-200 rounded-3xl">
        <h2 className="flex items-center gap-2 font-black text-lg">
          <FaClock className="text-primary" /> Recent Orders Overview
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-base-200/50 text-xs">
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="font-bold text-xs">
              <tr>
                <td className="font-mono text-primary">#ORD-9021</td>
                <td>Tanvir Ahmed</td>
                <td>৳2,450</td>
                <td><span className="font-bold text-white badge-warning badge">Pending</span></td>
              </tr>
              <tr>
                <td className="font-mono text-primary">#ORD-9020</td>
                <td>Rafiq Islam</td>
                <td>৳1,200</td>
                <td><span className="font-bold text-white badge-info badge">Processing</span></td>
              </tr>
              <tr>
                <td className="font-mono text-primary">#ORD-9019</td>
                <td>Nusrat Jahan</td>
                <td>৳5,600</td>
                <td><span className="font-bold text-white badge-success badge">Delivered</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}