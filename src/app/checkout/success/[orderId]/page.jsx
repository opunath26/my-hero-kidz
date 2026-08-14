import React from "react";
import Link from "next/link";
import { FaCheckCircle, FaShoppingBag, FaArrowRight } from "react-icons/fa";

const OrderSuccessPage = ({ params }) => {
  const { orderId } = params;

  return (
    <div className="flex justify-center items-center bg-base-50/50 px-4 min-h-[80vh]">
      <div className="space-y-6 bg-base-100 shadow-sm p-8 sm:p-12 border border-base-200/80 rounded-3xl w-full max-w-md text-center">
        <div className="inline-flex justify-center items-center bg-success/10 p-5 rounded-full text-success text-5xl">
          <FaCheckCircle />
        </div>

        <div className="space-y-2">
          <h1 className="font-black text-2xl sm:text-3xl tracking-tight">
            Order Placed Successfully!
          </h1>
          <p className="text-sm text-base-content/70">
            Thank you for shopping with us. Your order has been received and is being processed.
          </p>
        </div>

        <div className="bg-base-200/50 p-4 border border-base-200 rounded-2xl font-mono text-sm">
          <span className="text-base-content/60">Order ID: </span>
          <span className="font-black text-primary">{orderId}</span>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <Link
            href="/my-orders"
            className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 py-3.5 rounded-2xl font-bold text-white text-sm active:scale-95 transition-all"
          >
            <span>View My Orders</span>
            <FaArrowRight className="text-xs" />
          </Link>

          <Link
            href="/products"
            className="flex justify-center items-center gap-2 hover:bg-base-200/60 py-3 rounded-2xl font-bold text-sm text-base-content/70 transition-all"
          >
            <FaShoppingBag />
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;