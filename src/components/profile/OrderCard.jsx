"use client";

import React from "react";
import Image from "next/image";
import { FaClock, FaCheckCircle, FaTruck, FaTimesCircle } from "react-icons/fa";

export default function OrderCard({ order }) {
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return <span className="gap-1 font-semibold text-xs badge badge-warning"><FaClock /> Pending</span>;
      case "processing":
        return <span className="gap-1 font-semibold text-white text-xs badge badge-info"><FaTruck /> Processing</span>;
      case "delivered":
        return <span className="gap-1 font-semibold text-white text-xs badge badge-success"><FaCheckCircle /> Delivered</span>;
      case "cancelled":
        return <span className="gap-1 font-semibold text-white text-xs badge badge-error"><FaTimesCircle /> Cancelled</span>;
      default:
        return <span className="gap-1 font-semibold text-xs badge badge-ghost">{status}</span>;
    }
  };

  return (
    <div className="bg-base-100 shadow-sm hover:shadow-md p-5 sm:p-6 border border-base-200 rounded-3xl transition-shadow">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-start sm:items-center gap-3 mb-4 pb-4 border-base-200 border-b">
        <div>
          <p className="font-medium text-xs text-base-content/60">Order ID</p>
          <p className="font-mono font-bold text-primary text-sm sm:text-base">
            #{order.orderId}
          </p>
        </div>

        <div>
          <p className="font-medium text-xs text-base-content/60">Placed On</p>
          <p className="font-semibold text-xs sm:text-sm">
            {new Date(order.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>

        <div>
          <p className="mb-1 font-medium text-xs text-base-content/60">Status</p>
          {getStatusBadge(order.orderStatus)}
        </div>

        <div>
          <p className="font-medium text-xs text-base-content/60">Total Amount</p>
          <p className="font-black text-sm text-base-content sm:text-base">
            ৳{order.totalAmount}
          </p>
        </div>
      </div>

      {/* Items List */}
      <div className="divide-y divide-base-200">
        {order.items?.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center gap-4 py-3">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0 bg-base-200 rounded-xl w-14 h-14 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.png"}
                  alt={item.title || "Product"}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-sm line-clamp-1">{item.title}</h4>
                <p className="mt-0.5 text-xs text-base-content/60">
                  Qty: <span className="font-semibold">{item.quantity}</span> × ৳{item.price}
                </p>
              </div>
            </div>

            <p className="font-bold text-sm">
              ৳{item.quantity * item.price}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-wrap justify-between items-center gap-2 mt-4 pt-3 border-base-200/60 border-t text-xs text-base-content/70">
        <p>
          Payment Method: <span className="font-bold uppercase">{order.paymentMethod}</span>
        </p>
        <p>
          Delivery To: <span className="font-medium">{order.shippingAddress?.fullName}, {order.shippingAddress?.city}</span>
        </p>
      </div>
    </div>
  );
}