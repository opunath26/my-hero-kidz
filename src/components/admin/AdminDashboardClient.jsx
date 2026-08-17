"use client";

import React, { useEffect, useState } from "react";
import { FaBox, FaUsers, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";

export default function AdminDashboardClient() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <div className="mx-auto p-4 sm:p-6 max-w-7xl">
      <h1 className="mb-6 font-black text-2xl">Dashboard Overview</h1>
      
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
    </div>
  );
}