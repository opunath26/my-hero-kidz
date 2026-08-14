"use client";

import React from "react";
import { FaTruck } from "react-icons/fa";

const FreeShippingBar = ({ subtotal, freeShippingThreshold }) => {
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="bg-primary/5 p-4 border border-primary/20 rounded-2xl">
      <div className="flex items-center gap-2 mb-2 font-bold text-primary text-xs sm:text-sm">
        <FaTruck className="text-base" />
        {isFreeShipping ? (
          <span>Congratulations! You qualify for <strong>FREE Shipping</strong> 🎉</span>
        ) : (
          <span>
            Add <strong>৳{freeShippingThreshold - subtotal}</strong> more to unlock <strong>FREE Shipping</strong>!
          </span>
        )}
      </div>
      <div className="bg-base-200 rounded-full w-full h-2 overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default FreeShippingBar;