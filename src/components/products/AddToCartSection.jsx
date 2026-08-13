"use client";

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { FaShoppingBag, FaBolt, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const AddToCartSection = ({ product, inStock }) => {
    const router = useRouter();
    const pathname = usePathname();
    const { data: session, status } = useSession();

    const [loading, setLoading] = useState(false);
    const [buyNowLoading, setBuyNowLoading] = useState(false);

    const checkAuthAndRedirect = () => {
        const isAuthenticated = status === "authenticated";

        if (!isAuthenticated) {
            toast.error("Please login first to add items to your cart!");
            router.push(`/login?redirectTo=${encodeURIComponent(pathname)}`);
            return false;
        }
        return true;
    };

    // Helper function to send API Request
    const sendAddToCartRequest = async () => {
        const response = await fetch('/api/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId: product._id || product.id,
                title: product.title,
                price: product.discountedPrice || product.price,
                image: product.image,
                quantity: 1,
            }),
        });

        const data = await response.json();
        return { response, data };
    };

    // 1. Add to Cart Handler
    const handleAddToCart = async () => {
        if (!inStock) return;
        if (!checkAuthAndRedirect()) return;

        setLoading(true);
        try {
            const { response, data } = await sendAddToCartRequest();

            if (response.ok) {
                toast.success("Added to cart successfully! 🛒");
            } else {
                toast.error(data.message || "Failed to add product to cart");
            }
        } catch (error) {
            console.error("Cart error:", error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    // 2. Buy Now Handler
    const handleBuyNow = async () => {
        if (!inStock) return;
        if (!checkAuthAndRedirect()) return;

        setBuyNowLoading(true);
        try {
            const { response, data } = await sendAddToCartRequest();

            if (response.ok) {
                toast.success("Redirecting to checkout...");
                router.push('/checkout');
            } else {
                toast.error(data.message || "Failed to process buy now");
            }
        } catch (error) {
            console.error("Buy now error:", error);
            toast.error("Something went wrong!");
        } finally {
            setBuyNowLoading(false);
        }
    };

    return (
        <div className="space-y-3 pt-2">
            <div className="flex sm:flex-row flex-col gap-3">
                {/* Add to Cart Button */}
                <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={!inStock || loading || buyNowLoading}
                    className="flex flex-1 justify-center items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50 shadow-lg shadow-primary/25 py-3.5 rounded-xl font-bold text-white text-base active:scale-[0.99] transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                    {loading ? (
                        <>
                            <FaSpinner className="text-lg animate-spin" />
                            <span>Adding...</span>
                        </>
                    ) : (
                        <>
                            <FaShoppingBag className="text-lg" />
                            <span>Add to Cart</span>
                        </>
                    )}
                </button>

                {/* Buy Now Button */}
                <button
                    type="button"
                    onClick={handleBuyNow}
                    disabled={!inStock || loading || buyNowLoading}
                    className="flex flex-1 justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 shadow-lg shadow-slate-900/10 py-3.5 rounded-xl font-bold text-white text-base active:scale-[0.99] transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                    {buyNowLoading ? (
                        <>
                            <FaSpinner className="text-lg animate-spin" />
                            <span>Processing...</span>
                        </>
                    ) : (
                        <>
                            <FaBolt className="text-amber-400 text-lg" />
                            <span>Buy Now</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default AddToCartSection;