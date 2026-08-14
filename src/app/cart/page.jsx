"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  FaTrashAlt,
  FaPlus,
  FaMinus,
  FaShoppingBag,
  FaArrowRight,
  FaShieldAlt,
  FaTruck,
  FaTag,
  FaChevronRight,
  FaUndoAlt,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const { fetchCartCount } = useCart();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Toast Custom Styles
  const successToastStyle = {
    borderRadius: "12px",
    background: "#ea580c",
    color: "#fff",
    fontWeight: "bold",
    padding: "12px 20px",
    boxShadow: "0 10px 15px -3px rgba(234, 88, 12, 0.3)",
  };

  const errorToastStyle = {
    borderRadius: "12px",
    background: "#ef4444",
    color: "#fff",
    fontWeight: "bold",
    padding: "12px 20px",
  };

  const fetchCartItems = async () => {
    try {
      const res = await fetch("/api/cart");
      if (res.ok) {
        const data = await res.json();
        setCartItems(data.items || []);
      } else {
        toast.error("Failed to fetch cart", { style: errorToastStyle });
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
      toast.error("Something went wrong!", { style: errorToastStyle });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchCartItems();
    } else if (status === "unauthenticated") {
      router.push("/login?redirectTo=/cart");
    }
  }, [status, router]);

  const handleQuantityChange = async (productId, action, currentQty) => {
    if (action === "decrease" && currentQty <= 1) return;

    setUpdatingId(productId);
    try {
      const res = await fetch("/api/cart", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId, action }),
      });

      if (res.ok) {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.productId === productId
              ? {
                  ...item,
                  quantity:
                    action === "increase"
                      ? item.quantity + 1
                      : item.quantity - 1,
                }
              : item
          )
        );
        fetchCartCount();
      } else {
        toast.error("Failed to update quantity", { style: errorToastStyle });
      }
    } catch (error) {
      console.error("Quantity update error:", error);
      toast.error("Something went wrong!", { style: errorToastStyle });
    } finally {
      setUpdatingId(null);
    }
  };

  const handleRemoveItem = async (productId) => {
    setUpdatingId(productId);
    try {
      const res = await fetch(`/api/cart?productId=${productId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.productId !== productId)
        );
        fetchCartCount();
        toast.success("Item removed from cart! 🗑️", {
          style: successToastStyle,
          iconTheme: { primary: "#fff", secondary: "#ea580c" },
        });
      } else {
        toast.error("Failed to remove item", { style: errorToastStyle });
      }
    } catch (error) {
      console.error("Remove item error:", error);
      toast.error("Something went wrong!", { style: errorToastStyle });
    } finally {
      setUpdatingId(null);
    }
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    
    // Sample coupon logic
    if (couponCode.toUpperCase() === "SAVE10") {
      setDiscount(100);
      toast.success("Coupon applied! Saved ৳100", { style: successToastStyle });
    } else {
      toast.error("Invalid Promo Code", { style: errorToastStyle });
    }
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const freeShippingThreshold = 2000; // Free shipping above 2000 Tk
  const shippingCharge =
    cartItems.length > 0 ? (subtotal >= freeShippingThreshold ? 0 : 60) : 0;
  const grandTotal = Math.max(0, subtotal + shippingCharge - discount);

  // Professional Skeleton Loader
  if (loading || status === "loading") {
    return (
      <div className="mx-auto px-4 py-8 max-w-7xl animate-pulse">
        <div className="bg-base-200 mb-6 rounded-lg w-48 h-6" />
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-base-200 p-4 rounded-2xl h-24" />
            ))}
          </div>
          <div className="bg-base-200 p-6 rounded-3xl h-80" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-50/50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 py-6 sm:py-10 max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 mb-6 text-xs sm:text-sm text-base-content/60">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <FaChevronRight className="text-[10px]" />
          <span className="font-semibold text-base-content">Shopping Cart</span>
        </nav>

        {/* Header */}
        <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-2 mb-8 pb-4 border-base-200 border-b">
          <h1 className="font-black text-2xl sm:text-3xl tracking-tight">
            Shopping Cart{" "}
            <span className="font-medium text-base-content/50 text-lg">
              ({cartItems.length} {cartItems.length === 1 ? "item" : "items"})
            </span>
          </h1>
          {cartItems.length > 0 && (
            <Link
              href="/products"
              className="font-bold text-primary hover:text-primary/80 text-sm transition-colors"
            >
              ← Continue Shopping
            </Link>
          )}
        </div>

        {cartItems.length === 0 ? (
          /* Professional Empty Cart State */
          <div className="flex flex-col justify-center items-center space-y-5 bg-base-100 shadow-sm my-8 py-16 sm:py-20 border border-base-200/80 rounded-3xl text-center">
            <div className="bg-primary/10 p-6 rounded-full text-primary text-5xl sm:text-6xl">
              <FaShoppingBag />
            </div>
            <div className="space-y-1">
              <h2 className="font-black text-xl sm:text-2xl">
                Your cart is feeling lonely!
              </h2>
              <p className="max-w-md text-sm text-base-content/60">
                You haven't added any items to your cart yet. Browse our top
                categories and find something you love.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 px-8 py-3.5 rounded-2xl font-bold text-white text-sm active:scale-95 transition-all"
            >
              <span>Start Shopping</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        ) : (
          /* Main Cart Content */
          <div className="items-start gap-8 grid grid-cols-1 lg:grid-cols-3">
            {/* Left Column: Cart Items & Free Shipping Bar */}
            <div className="space-y-4 lg:col-span-2">
              {/* Free Shipping Progress Bar */}
              <div className="bg-primary/5 p-4 border border-primary/20 rounded-2xl">
                <div className="flex items-center gap-2 mb-2 font-bold text-primary text-xs sm:text-sm">
                  <FaTruck className="text-base" />
                  {subtotal >= freeShippingThreshold ? (
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
                    style={{
                      width: `${Math.min(
                        100,
                        (subtotal / freeShippingThreshold) * 100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              {/* Items List */}
              <div className="bg-base-100 shadow-sm border border-base-200/80 rounded-3xl overflow-hidden">
                {/* Desktop Table Header */}
                <div className="hidden sm:grid grid-cols-12 bg-base-200/50 px-6 py-3 border-base-200 border-b font-bold text-xs text-base-content/60 uppercase tracking-wider">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                <div className="divide-y divide-base-200/70">
                  {cartItems.map((item) => (
                    <div
                      key={item.productId}
                      className="items-center gap-4 grid grid-cols-1 sm:grid-cols-12 hover:bg-base-200/20 p-4 sm:p-6 transition-colors"
                    >
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
                            onClick={() => handleRemoveItem(item.productId)}
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
                            onClick={() =>
                              handleQuantityChange(
                                item.productId,
                                "decrease",
                                item.quantity
                              )
                            }
                            disabled={
                              updatingId === item.productId || item.quantity <= 1
                            }
                            className="hover:bg-base-300 disabled:opacity-30 p-2 text-xs transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <FaMinus />
                          </button>

                          <span className="min-w-[28px] font-extrabold text-xs text-center">
                            {updatingId === item.productId ? "..." : item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              handleQuantityChange(
                                item.productId,
                                "increase",
                                item.quantity
                              )
                            }
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
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary & Checkout */}
            <div className="top-6 sticky space-y-4 lg:col-span-1">
              <div className="space-y-6 bg-base-100 shadow-sm p-6 border border-base-200/80 rounded-3xl">
                <h2 className="pb-4 border-base-200 border-b font-black text-xl">
                  Order Summary
                </h2>

                {/* Promo Code Accordion/Form */}
                <form onSubmit={handleApplyCoupon} className="space-y-2">
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
                    <span className="font-bold text-base-content">
                      ৳{subtotal}
                    </span>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;