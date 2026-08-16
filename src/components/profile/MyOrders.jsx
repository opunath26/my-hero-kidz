"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaShoppingBag, FaBoxOpen } from "react-icons/fa";
import OrderCard from "./OrderCard";

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
      <div className="flex justify-center items-center min-h-[70vh]">
        <span className="text-primary loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center px-4 py-20 min-h-[70vh] text-center">
        <div className="bg-base-200 mb-4 p-6 rounded-full text-base-content/40 text-6xl">
          <FaBoxOpen />
        </div>
        <h2 className="mb-2 font-black text-2xl">No Orders Found!</h2>
        <p className="mb-6 max-w-sm text-sm text-base-content/70">
          You haven&apos;t placed any orders yet. Explore our toys and outfits for kids!
        </p>
        <Link
          href="/products"
          className="shadow-lg shadow-primary/25 px-8 rounded-2xl btn btn-primary"
        >
          <FaShoppingBag /> Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-10 max-w-5xl min-h-[80vh]">
      <div className="mb-8 pb-4 border-base-200 border-b">
        <h1 className="font-black text-2xl sm:text-3xl">My Orders 🛒</h1>
        <p className="mt-1 text-sm text-base-content/70">
          Track and view all your HeroKidz purchases.
        </p>
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}