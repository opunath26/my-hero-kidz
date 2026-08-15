"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaShippingFast,
  FaCreditCard,
  FaMoneyBillWave,
  FaLock,
  FaChevronRight,
  FaCheckCircle,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useCart } from "@/context/CartContext";

const CheckoutForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { fetchCartCount } = useCart();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Form States
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    altPhone: "",
    district: "Dhaka",
    address: "",
    orderNotes: "",
    paymentMethod: "cod",
    deliveryArea: "inside_dhaka",
  });

  useEffect(() => {
    if (session?.user?.name) {
      setFormData((prev) => ({ ...prev, fullName: session.user.name }));
    }
  }, [session]);

  const toastStyle = {
    borderRadius: "12px",
    background: "#ea580c",
    color: "#fff",
    fontWeight: "bold",
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login?redirectTo=/checkout");
      return;
    }

    const fetchCart = async () => {
      try {
        const res = await fetch("/api/cart");
        if (res.ok) {
          const data = await res.json();
          setCartItems(data.items || []);
        }
      } catch (err) {
        console.error("Cart fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (status === "authenticated") {
      fetchCart();
    }
  }, [status, router]);

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Calculate Totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCharge = formData.deliveryArea === "inside_dhaka" ? 60 : 120;
  const grandTotal = subtotal + shippingCharge;

  // Handle Submit Order
  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.address) {
      toast.error("Please fill in all required fields!");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    setSubmitting(true);

    try {
      const orderPayload = {
        items: cartItems.map((item) => ({
          productId: item.productId,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        shippingAddress: {
          fullName: formData.fullName,
          phone: formData.phone,
          altPhone: formData.altPhone,
          district: formData.district,
          address: formData.address,
        },
        deliveryArea: formData.deliveryArea,
        shippingFee: shippingCharge,
        subtotal,
        totalAmount: grandTotal,
        paymentMethod: formData.paymentMethod,
        orderNotes: formData.orderNotes,
      };

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderPayload),
      });

      const data = await res.json();

      if (res.ok) {
        fetchCartCount();
        toast.success("Order placed successfully! 🎉", { style: toastStyle });
        router.push(`/checkout/success/${data.orderId}`);
      } else {
        toast.error(data.message || "Failed to place order.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || status === "loading") {
    return (
      <div className="space-y-6 mx-auto px-4 py-10 max-w-6xl animate-pulse">
        <div className="bg-base-200 rounded-lg w-48 h-8" />
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <div className="bg-base-200 rounded-2xl h-64" />
            <div className="bg-base-200 rounded-2xl h-48" />
          </div>
          <div className="bg-base-200 rounded-2xl h-80" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-50/50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 py-6 sm:py-10 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-6 text-xs sm:text-sm text-base-content/60">
          <Link href="/cart" className="hover:text-primary transition-colors">
            Cart
          </Link>
          <FaChevronRight className="text-[10px]" />
          <span className="font-semibold text-base-content">Checkout</span>
        </nav>

        <h1 className="mb-8 pb-4 border-base-200 border-b font-black text-2xl sm:text-3xl">
          Checkout
        </h1>

        <form onSubmit={handlePlaceOrder} className="items-start gap-8 grid grid-cols-1 lg:grid-cols-3">
          {/* Left Side: Shipping & Payment Details */}
          <div className="space-y-6 lg:col-span-2">
            {/* 1. Shipping Address Form */}
            <div className="space-y-4 bg-base-100 shadow-sm p-6 border border-base-200/80 rounded-3xl">
              <div className="flex items-center gap-3 pb-3 border-base-200 border-b">
                <FaShippingFast className="text-primary text-xl" />
                <h2 className="font-bold text-lg">Shipping Information</h2>
              </div>

              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                <div>
                  <label className="block mb-1 font-semibold text-xs text-base-content/70">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="bg-base-200/50 focus:bg-base-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/30 w-full text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-xs text-base-content/70">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="017XXXXXXXX"
                    className="bg-base-200/50 focus:bg-base-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/30 w-full text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-xs text-base-content/70">
                    Alternative Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="altPhone"
                    value={formData.altPhone}
                    onChange={handleChange}
                    placeholder="Secondary contact"
                    className="bg-base-200/50 focus:bg-base-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/30 w-full text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-semibold text-xs text-base-content/70">
                    District / City *
                  </label>
                  <input
                    type="text"
                    name="district"
                    required
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="e.g. Dhaka, Chittagong"
                    className="bg-base-200/50 focus:bg-base-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/30 w-full text-sm transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-semibold text-xs text-base-content/70">
                  Full Address (House, Road, Area) *
                </label>
                <textarea
                  name="address"
                  required
                  rows={2}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House #12, Road #4, Block C, Mirpur, Dhaka"
                  className="bg-base-200/50 focus:bg-base-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/30 w-full text-sm transition-all resize-none"
                />
              </div>

              {/* Delivery Area Options */}
              <div className="pt-2">
                <label className="block mb-2 font-semibold text-xs text-base-content/70">
                  Select Delivery Zone
                </label>
                <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                  <label
                    className={`flex items-center justify-between p-3.5 border rounded-2xl cursor-pointer transition-all ${
                      formData.deliveryArea === "inside_dhaka"
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-base-200 hover:border-base-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="deliveryArea"
                        value="inside_dhaka"
                        checked={formData.deliveryArea === "inside_dhaka"}
                        onChange={handleChange}
                        className="accent-primary"
                      />
                      <span className="font-bold text-xs sm:text-sm">Inside Dhaka</span>
                    </div>
                    <span className="font-extrabold text-primary text-xs">৳60</span>
                  </label>

                  <label
                    className={`flex items-center justify-between p-3.5 border rounded-2xl cursor-pointer transition-all ${
                      formData.deliveryArea === "outside_dhaka"
                        ? "border-primary bg-primary/5 shadow-sm"
                        : "border-base-200 hover:border-base-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="deliveryArea"
                        value="outside_dhaka"
                        checked={formData.deliveryArea === "outside_dhaka"}
                        onChange={handleChange}
                        className="accent-primary"
                      />
                      <span className="font-bold text-xs sm:text-sm">Outside Dhaka</span>
                    </div>
                    <span className="font-extrabold text-primary text-xs">৳120</span>
                  </label>
                </div>
              </div>
            </div>

            {/* 2. Payment Method Options */}
            <div className="space-y-4 bg-base-100 shadow-sm p-6 border border-base-200/80 rounded-3xl">
              <div className="flex items-center gap-3 pb-3 border-base-200 border-b">
                <FaCreditCard className="text-primary text-xl" />
                <h2 className="font-bold text-lg">Payment Method</h2>
              </div>

              <div className="space-y-3">
                {/* Cash on Delivery */}
                <label
                  className={`flex items-center justify-between p-4 border rounded-2xl cursor-pointer transition-all ${
                    formData.paymentMethod === "cod"
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-base-200 hover:border-base-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleChange}
                      className="accent-primary"
                    />
                    <div className="flex items-center gap-2">
                      <FaMoneyBillWave className="text-success text-lg" />
                      <div>
                        <p className="font-bold text-sm">Cash on Delivery (COD)</p>
                        <p className="text-xs text-base-content/60">Pay with cash upon delivery</p>
                      </div>
                    </div>
                  </div>
                </label>

                {/* Online / Mobile Banking */}
                <label
                  className={`flex items-center justify-between p-4 border rounded-2xl cursor-pointer transition-all ${
                    formData.paymentMethod === "bkash"
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-base-200 hover:border-base-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bkash"
                      checked={formData.paymentMethod === "bkash"}
                      onChange={handleChange}
                      className="accent-primary"
                    />
                    <div>
                      <p className="font-bold text-sm">Online Payment / bKash / Nagad</p>
                      <p className="text-xs text-base-content/60">Pay securely using digital wallet</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Order Notes */}
            <div className="bg-base-100 shadow-sm p-6 border border-base-200/80 rounded-3xl">
              <label className="block mb-1 font-semibold text-xs text-base-content/70">
                Order Notes (Optional)
              </label>
              <textarea
                name="orderNotes"
                rows={2}
                value={formData.orderNotes}
                onChange={handleChange}
                placeholder="Special instructions for delivery (e.g., Deliver after 4 PM)"
                className="bg-base-200/50 focus:bg-base-100 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-primary/30 w-full text-sm transition-all resize-none"
              />
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="top-6 sticky space-y-4 lg:col-span-1">
            <div className="space-y-6 bg-base-100 shadow-sm p-6 border border-base-200/80 rounded-3xl">
              <h2 className="pb-4 border-base-200 border-b font-black text-xl">
                Your Order ({cartItems.length})
              </h2>

              {/* Items List Preview */}
              <div className="space-y-3 pr-1 max-h-60 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.productId} className="flex items-center gap-3">
                    <div className="relative flex-shrink-0 bg-base-200/60 rounded-xl w-12 h-12 overflow-hidden">
                      <Image
                        src={item.image || "https://placehold.co/100"}
                        alt={item.title}
                        fill
                        className="p-1 object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-xs truncate">{item.title}</p>
                      <p className="text-xs text-base-content/60">
                        Qty: {item.quantity} × ৳{item.price}
                      </p>
                    </div>
                    <div className="font-bold text-xs text-right">
                      ৳{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 pt-4 border-base-200 border-t text-sm">
                <div className="flex justify-between text-base-content/70">
                  <span>Subtotal</span>
                  <span className="font-bold text-base-content">৳{subtotal}</span>
                </div>
                <div className="flex justify-between text-base-content/70">
                  <span>Shipping Fee</span>
                  <span className="font-bold text-base-content">৳{shippingCharge}</span>
                </div>
                <div className="flex justify-between pt-3 border-base-200 border-t font-black text-lg">
                  <span>Total Payable</span>
                  <span className="text-primary text-xl">৳{grandTotal}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                disabled={submitting || cartItems.length === 0}
                className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50 shadow-lg shadow-primary/25 py-4 rounded-2xl w-full font-black text-white text-base active:scale-[0.98] transition-all cursor-pointer"
              >
                {submitting ? (
                  <span>Placing Order...</span>
                ) : (
                  <>
                    <FaCheckCircle />
                    <span>Confirm Order (৳{grandTotal})</span>
                  </>
                )}
              </button>

              <div className="flex justify-center items-center gap-2 text-xs text-base-content/60 text-center">
                <FaLock className="text-success" />
                <span>Encrypted & 100% Secure Checkout</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;