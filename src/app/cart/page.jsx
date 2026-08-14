"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaTrashAlt, FaPlus, FaMinus, FaShoppingBag, FaArrowRight, FaSpinner } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const { fetchCartCount } = useCart();

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState(null);

    // Toast Custom Styles (Matching Brand Orange Theme)
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
                                  quantity: action === "increase" ? item.quantity + 1 : item.quantity - 1,
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
                setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
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

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingCharge = cartItems.length > 0 ? 60 : 0;
    const grandTotal = subtotal + shippingCharge;

    if (loading || status === "loading") {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <FaSpinner className="text-primary text-4xl animate-spin" />
            </div>
        );
    }

    return (
        <div className="mx-auto px-4 py-8 max-w-7xl">
            <h1 className="mb-8 font-black text-2xl md:text-3xl tracking-tight">
                Shopping Cart ({cartItems.length})
            </h1>

            {cartItems.length === 0 ? (
                /* Empty Cart State */
                <div className="flex flex-col justify-center items-center space-y-4 bg-base-100 py-16 border border-base-200 rounded-3xl text-center">
                    <div className="bg-primary/10 p-6 rounded-full text-primary text-5xl">
                        <FaShoppingBag />
                    </div>
                    <h2 className="font-extrabold text-xl">Your cart is currently empty!</h2>
                    <p className="max-w-md text-sm text-base-content/60">
                        Looks like you haven't added anything to your cart yet. Explore our products and start shopping!
                    </p>
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 px-6 py-3 rounded-2xl font-bold text-white active:scale-95 transition-all"
                    >
                        <span>Continue Shopping</span>
                        <FaArrowRight />
                    </Link>
                </div>
            ) : (
                /* Cart Content */
                <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
                    
                    {/* Items List */}
                    <div className="space-y-4 lg:col-span-2">
                        {cartItems.map((item) => (
                            <div
                                key={item.productId}
                                className="flex sm:flex-row flex-col justify-between items-center gap-4 bg-base-100 p-4 border border-base-200 rounded-2xl transition-all"
                            >
                                <div className="flex items-center gap-4 w-full sm:w-auto">
                                    <div className="relative flex-shrink-0 bg-base-200 rounded-xl w-20 h-20 overflow-hidden">
                                        <Image
                                            src={item.image || "https://placehold.co/100"}
                                            alt={item.title}
                                            fill
                                            className="p-2 object-contain"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-extrabold text-base line-clamp-1">{item.title}</h3>
                                        <p className="font-bold text-primary text-sm">৳{item.price}</p>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="flex justify-between sm:justify-end items-center gap-6 w-full sm:w-auto">
                                    {/* Quantity Toggle */}
                                    <div className="flex items-center gap-3 bg-base-200/80 px-3 py-1.5 rounded-xl">
                                        <button
                                            onClick={() => handleQuantityChange(item.productId, "decrease", item.quantity)}
                                            disabled={updatingId === item.productId || item.quantity <= 1}
                                            className="disabled:opacity-30 hover:text-primary transition-colors"
                                        >
                                            <FaMinus className="text-xs" />
                                        </button>

                                        <span className="min-w-[20px] font-black text-sm text-center">
                                            {updatingId === item.productId ? (
                                                <FaSpinner className="inline text-xs animate-spin" />
                                            ) : (
                                                item.quantity
                                            )}
                                        </span>

                                        <button
                                            onClick={() => handleQuantityChange(item.productId, "increase", item.quantity)}
                                            disabled={updatingId === item.productId}
                                            className="hover:text-primary transition-colors"
                                        >
                                            <FaPlus className="text-xs" />
                                        </button>
                                    </div>

                                    {/* Subtotal Item Price */}
                                    <div className="min-w-[70px] font-black text-base text-right">
                                        ৳{item.price * item.quantity}
                                    </div>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleRemoveItem(item.productId)}
                                        disabled={updatingId === item.productId}
                                        className="p-2 text-error/70 hover:text-error transition-colors cursor-pointer disabled:cursor-not-allowed"
                                        title="Remove Item"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Order Summary */}
                    <div className="space-y-6 bg-base-100 p-6 border border-base-200 rounded-3xl h-fit">
                        <h2 className="pb-4 border-base-200 border-b font-black text-xl">Order Summary</h2>

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between font-medium text-base-content/70">
                                <span>Subtotal</span>
                                <span className="font-bold text-base-content">৳{subtotal}</span>
                            </div>
                            <div className="flex justify-between font-medium text-base-content/70">
                                <span>Shipping Fee</span>
                                <span className="font-bold text-base-content">৳{shippingCharge}</span>
                            </div>
                            <div className="flex justify-between pt-3 border-base-200 border-t font-black text-lg">
                                <span>Total</span>
                                <span className="text-primary">৳{grandTotal}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => router.push("/checkout")}
                            className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 py-4 rounded-2xl w-full font-black text-white text-base active:scale-[0.98] transition-all cursor-pointer"
                        >
                            <span>Proceed to Checkout</span>
                            <FaArrowRight />
                        </button>
                    </div>

                </div>
            )}
        </div>
    );
};

export default CartPage;