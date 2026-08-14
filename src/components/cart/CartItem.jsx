"use client";

import React from "react";
import Image from "next/image";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";

const CartItem = ({ item, updatingId, onQuantityChange, onRemoveItem }) => {
  return (
    <div className="items-center gap-4 grid grid-cols-1 sm:grid-cols-12 hover:bg-base-200/20 p-4 sm:p-6 transition-colors">
      {/* Product Detail */}
      <div className="flex items-center gap-4 sm:col-span-6">
        <div className="relative flex-shrink-0 bg-base-200/50 border border-base-200 rounded-2xl w-20 sm:w-22 h-20 sm:h-22 overflow-hidden">
          <Image
            src={item.image || "https://placehold.co/100"}
            alt={item.title}
            fill
            className="p-2 object-contain"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-sm sm:text-base line-clamp-2">
            {item.title}
          </h3>
          <p className="sm:hidden font-extrabold text-primary text-xs">
            ৳{item.price}
          </p>
          <button
            onClick={() => onRemoveItem(item.productId)}
            disabled={updatingId === item.productId}
            className="inline-flex items-center gap-1 font-semibold text-error/80 hover:text-error text-xs transition-colors"
          >
            <FaTrashAlt className="text-[10px]" />
            <span>Remove</span>
          </button>
        </div>
      </div>

      {/* Unit Price (Desktop) */}
      <div className="hidden sm:block sm:col-span-2 font-bold text-sm text-base-content/80 text-center">
        ৳{item.price}
      </div>

      {/* Quantity Controls */}
      <div className="flex justify-between sm:justify-center items-center sm:col-span-2">
        <span className="sm:hidden text-xs text-base-content/60">Qty:</span>
        <div className="flex items-center bg-base-200/80 border border-base-300/50 rounded-xl overflow-hidden">
          <button
            onClick={() => onQuantityChange(item.productId, "decrease", item.quantity)}
            disabled={updatingId === item.productId || item.quantity <= 1}
            className="hover:bg-base-300 disabled:opacity-30 p-2 text-xs transition-colors"
            aria-label="Decrease quantity"
          >
            <FaMinus />
          </button>

          <span className="min-w-[28px] font-extrabold text-xs text-center">
            {updatingId === item.productId ? "..." : item.quantity}
          </span>

          <button
            onClick={() => onQuantityChange(item.productId, "increase", item.quantity)}
            disabled={updatingId === item.productId}
            className="hover:bg-base-300 p-2 text-xs transition-colors"
            aria-label="Increase quantity"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Subtotal Item Price */}
      <div className="flex justify-between sm:justify-end items-center sm:col-span-2 font-black text-primary text-sm sm:text-base">
        <span className="sm:hidden text-xs text-base-content/60">Total:</span>
        ৳{item.price * item.quantity}
      </div>
    </div>
  );
};

export default CartItem;