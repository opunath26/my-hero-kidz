"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaTag, FaArrowRight, FaShieldAlt, FaUndoAlt } from "react-icons/fa";

const OrderSummary = ({
  subtotal,
  shippingCharge,
  discount,
  grandTotal,
  couponCode,
  setCouponCode,
  onApplyCoupon,
}) => {
  const router = useRouter();

  return (
    <div className="top-6 sticky space-y-4 lg:col-span-1">
      <div className="space-y-6 bg-base-100 shadow-sm p-6 border border-base-200/80 rounded-3xl">
        <h2 className="pb-4 border-base-200 border-b font-black text-xl">
          Order Summary
        </h2>

        {/* Promo Code Form */}
        <form onSubmit={onApplyCoupon} className="space-y-2">
          <label className="font-bold text-xs text-base-content/70">
            Have a promo code?
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <FaTag className="top-1/2 left-3 absolute text-xs text-base-content/40 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. SAVE10"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="bg-base-200/50 focus:bg-base-100 py-2.5 pr-3 pl-8 rounded-xl outline-none focus:ring-2 focus:ring-primary/30 w-full font-semibold text-xs uppercase transition-all"
              />
            </div>
            <button
              type="submit"
              className="bg-base-900 hover:bg-base-800 px-4 py-2.5 rounded-xl font-bold text-white text-xs active:scale-95 transition-all cursor-pointer"
            >
              Apply
            </button>
          </div>
        </form>

        {/* Cost Breakdown */}
        <div className="space-y-3 pt-2 text-sm">
          <div className="flex justify-between font-medium text-base-content/70">
            <span>Subtotal</span>
            <span className="font-bold text-base-content">৳{subtotal}</span>
          </div>

          <div className="flex justify-between font-medium text-base-content/70">
            <span>Shipping Fee</span>
            <span className="font-bold text-base-content">
              {shippingCharge === 0 ? (
                <span className="text-success">FREE</span>
              ) : (
                `৳${shippingCharge}`
              )}
            </span>
          </div>

          {discount > 0 && (
            <div className="flex justify-between font-medium text-success">
              <span>Discount</span>
              <span className="font-bold">-৳{discount}</span>
            </div>
          )}

          <div className="flex justify-between pt-3 border-base-200 border-t font-black text-lg">
            <span>Total Amount</span>
            <span className="text-primary text-xl">৳{grandTotal}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button
          onClick={() => router.push("/checkout")}
          className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 py-4 rounded-2xl w-full font-black text-white text-base active:scale-[0.98] transition-all cursor-pointer"
        >
          <span>Proceed to Checkout</span>
          <FaArrowRight />
        </button>
      </div>

      {/* Trust Badges */}
      <div className="gap-3 grid grid-cols-2 bg-base-100 p-4 border border-base-200/80 rounded-2xl text-xs text-center">
        <div className="flex flex-col items-center gap-1 text-base-content/70">
          <FaShieldAlt className="text-primary text-base" />
          <span className="font-bold">100% Secure Checkout</span>
        </div>
        <div className="flex flex-col items-center gap-1 text-base-content/70">
          <FaUndoAlt className="text-primary text-base" />
          <span className="font-bold">Easy 7-Day Returns</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;