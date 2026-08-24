"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaShoppingBag, FaBoxOpen } from "react-icons/fa";
import OrderCard from "./OrderCard";
import Loading from "@/app/loading";


export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();
        if (res.ok) {
          setOrders(data.orders || []);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-slate-50 min-h-[75vh]">
        <Loading />
        <span className="text-[#FF4500] loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="relative flex flex-col justify-center items-center bg-slate-50 px-4 py-20 min-h-screen overflow-hidden text-center">
        {/* Background Decorators */}
        <div className="top-20 left-10 -z-10 absolute bg-orange-400/20 blur-3xl rounded-full w-72 h-72 animate-pulse" />
        <div className="right-10 bottom-20 -z-10 absolute bg-amber-400/20 blur-3xl rounded-full w-80 h-80 animate-pulse" />

        <div className="flex flex-col items-center bg-white/70 shadow-xl backdrop-blur-xl p-8 sm:p-12 border border-white/80 rounded-3xl w-full max-w-md">
          <div className="flex justify-center items-center bg-orange-100/80 mb-5 p-6 rounded-full text-[#FF4500] text-5xl">
            <FaBoxOpen />
          </div>
          <h2 className="mb-2 font-extrabold text-slate-900 text-2xl">কোনো অর্ডার পাওয়া যায়নি!</h2>
          <p className="mb-8 font-medium text-slate-500 text-sm leading-relaxed">
            আপনি এখনো কোনো অর্ডার করেননি। আমাদের নতুন খেলনা এবং বাচ্চাদের কালেকশনগুলো এক্সপ্লোর করুন!
          </p>
          <Link
            href="/products"
            className="flex items-center gap-2 bg-[#FF4500] hover:bg-[#e03d00] shadow-lg shadow-orange-500/30 px-8 py-3.5 rounded-2xl font-extrabold text-white text-sm tracking-wide active:scale-95 transition-all"
          >
            <FaShoppingBag /> কেনাকাটা শুরু করুন
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-slate-50 px-4 py-12 min-h-screen overflow-hidden">
      {/* Background Decorators */}
      <div className="top-10 left-10 -z-10 absolute bg-orange-400/20 blur-3xl rounded-full w-72 h-72 animate-pulse" />
      <div className="right-10 bottom-10 -z-10 absolute bg-amber-400/20 blur-3xl rounded-full w-96 h-96 animate-pulse" />

      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="bg-white/70 shadow-xl backdrop-blur-xl mb-8 p-6 sm:p-8 border border-white/80 rounded-3xl">
          <h1 className="flex items-center gap-3 font-extrabold text-slate-900 text-2xl sm:text-3xl">
            আমার অর্ডারসমূহ <span className="text-xl sm:text-2xl">🛒</span>
          </h1>
          <p className="mt-1.5 font-medium text-slate-500 text-xs sm:text-sm">
            আপনার কেনাকাটা করা সমস্ত পণ্যের ট্র্যাকিং এবং বিবরণ দেখুন।
          </p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}