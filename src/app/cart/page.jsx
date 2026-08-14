"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaShoppingBag, FaArrowRight, FaChevronRight } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useCart } from "@/context/CartContext";

// Imported Components
import FreeShippingBar from "@/components/cart/FreeShippingBar";
import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";

const CartPage = () => {
  const { status } = useSession();
  const router = useRouter();
  const { fetchCartCount } = useCart();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const successToastStyle = {
    borderRadius: "12px",
    background: "#ea580c",
    color: "#fff",
    fontWeight: "bold",
    padding: "12px 20px",
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
  const freeShippingThreshold = 2000;
  const shippingCharge =
    cartItems.length > 0 ? (subtotal >= freeShippingThreshold ? 0 : 60) : 0;
  const grandTotal = Math.max(0, subtotal + shippingCharge - discount);

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
        {/* Breadcrumb */}
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
          <div className="flex flex-col justify-center items-center space-y-5 bg-base-100 shadow-sm my-8 py-16 sm:py-20 border border-base-200/80 rounded-3xl text-center">
            <div className="bg-primary/10 p-6 rounded-full text-primary text-5xl sm:text-6xl">
              <FaShoppingBag />
            </div>
            <div className="space-y-1">
              <h2 className="font-black text-xl sm:text-2xl">
                Your cart is feeling lonely!
              </h2>
              <p className="max-w-md text-sm text-base-content/60">
                You haven't added any items to your cart yet.
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
          <div className="items-start gap-8 grid grid-cols-1 lg:grid-cols-3">
            {/* Left Column */}
            <div className="space-y-4 lg:col-span-2">
              <FreeShippingBar
                subtotal={subtotal}
                freeShippingThreshold={freeShippingThreshold}
              />

              <div className="bg-base-100 shadow-sm border border-base-200/80 rounded-3xl overflow-hidden">
                <div className="hidden sm:grid grid-cols-12 bg-base-200/50 px-6 py-3 border-base-200 border-b font-bold text-xs text-base-content/60 uppercase tracking-wider">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                <div className="divide-y divide-base-200/70">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.productId}
                      item={item}
                      updatingId={updatingId}
                      onQuantityChange={handleQuantityChange}
                      onRemoveItem={handleRemoveItem}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <OrderSummary
              subtotal={subtotal}
              shippingCharge={shippingCharge}
              discount={discount}
              grandTotal={grandTotal}
              couponCode={couponCode}
              setCouponCode={setCouponCode}
              onApplyCoupon={handleApplyCoupon}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;