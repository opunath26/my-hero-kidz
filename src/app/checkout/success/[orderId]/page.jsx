"use client";

import React, { use } from "react";
import Link from "next/link";
import { FaCheckCircle, FaShoppingBag, FaArrowRight, FaCopy } from "react-icons/fa";
import { toast } from "react-hot-toast";

const OrderSuccessPage = ({ params }) => {
  const resolvedParams = use(params);
  const orderId = resolvedParams?.orderId;

  const handleCopy = () => {
    if (orderId) {
      navigator.clipboard.writeText(orderId);
      toast.success("Order ID copied to clipboard!");
    }
  };

  return (
    <div className="flex justify-center items-center bg-base-200/40 px-4 py-10 min-h-[85vh]">
      <div className="relative space-y-6 bg-base-100 shadow-xl p-8 sm:p-10 border border-base-200/80 rounded-3xl w-full max-w-md overflow-hidden text-center">
        
        {/* Top Decorative Banner Accent */}
        <div className="top-0 left-0 absolute bg-gradient-to-r from-primary to-secondary w-full h-2" />

        {/* Success Icon */}
        <div className="inline-flex relative justify-center items-center">
          <div className="absolute inset-0 bg-success/20 opacity-75 rounded-full animate-ping" />
          <div className="inline-flex relative justify-center items-center bg-success/15 p-5 rounded-full ring-8 ring-success/10 text-success text-5xl sm:text-6xl">
            <FaCheckCircle />
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h1 className="font-black text-base-content text-2xl sm:text-3xl tracking-tight">
            Order Placed Successfully! 🎉
          </h1>
          <p className="text-sm text-base-content/70 leading-relaxed">
            Thank you for your purchase. We have received your order and are preparing it for delivery.
          </p>
        </div>

        {/* Order ID Box with Copy Feature */}
        <div className="bg-base-200/60 p-4 border border-base-200 rounded-2xl">
          <p className="mb-1 font-semibold text-xs text-base-content/60 uppercase tracking-wider">
            Order Tracking Number
          </p>
          <div className="flex justify-center items-center gap-2 font-mono text-sm sm:text-base">
            <span className="font-black text-primary">{orderId || "N/A"}</span>
            {orderId && (
              <button
                onClick={handleCopy}
                title="Copy Order ID"
                className="p-1 hover:text-primary text-base-content/50 transition-colors"
              >
                <FaCopy className="text-xs" />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/my-orders"
            className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 py-3.5 rounded-2xl font-bold text-white text-sm active:scale-[0.98] transition-all"
          >
            <span>View My Orders</span>
            <FaArrowRight className="text-xs" />
          </Link>

          <Link
            href="/products"
            className="flex justify-center items-center gap-2 bg-base-200/50 hover:bg-base-200 py-3.5 rounded-2xl font-bold text-sm text-base-content/80 active:scale-[0.98] transition-all"
          >
            <FaShoppingBag className="text-xs" />
            <span>Continue Shopping</span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default OrderSuccessPage;