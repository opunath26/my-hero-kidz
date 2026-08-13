"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaEye, FaSpinner } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';

const ProductCard = ({ product }) => {
    const { _id, title, image, price, discount, ratings, reviews, sold } = product;

    const [loading, setLoading] = useState(false);
    const { data: session } = useSession();
    const { fetchCartCount } = useCart();
    const router = useRouter();
    const pathname = usePathname();

    const hasDiscount = discount > 0;
    const discountedPrice = hasDiscount ? Math.round(price - (price * discount) / 100) : price;

    // Toast Custom Styles (Matching Brand Orange Theme)
    const successToastStyle = {
        borderRadius: '12px',
        background: '#ea580c', // Orange theme
        color: '#fff',
        fontWeight: 'bold',
        padding: '12px 20px',
        boxShadow: '0 10px 15px -3px rgba(234, 88, 12, 0.3)',
    };

    const errorToastStyle = {
        borderRadius: '12px',
        background: '#ef4444',
        color: '#fff',
        fontWeight: 'bold',
        padding: '12px 20px',
    };

    // Add to Cart Handler with Database Integration
    const handleAddToCart = async () => {
        if (!session) {
            toast.error("Please login first to add items to cart!", {
                style: errorToastStyle,
                iconTheme: { primary: '#fff', secondary: '#ef4444' }
            });
            router.push(`/login?redirectTo=${encodeURIComponent(pathname)}`);
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId: _id,
                    title,
                    image,
                    price: discountedPrice,
                    quantity: 1,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                fetchCartCount();
                toast.success("Added to cart successfully! 🛒", {
                    style: successToastStyle,
                    iconTheme: { primary: '#fff', secondary: '#ea580c' }
                });
            } else {
                toast.error(data.message || "Failed to add product", {
                    style: errorToastStyle,
                    iconTheme: { primary: '#fff', secondary: '#ef4444' }
                });
            }
        } catch (error) {
            console.error("Cart error:", error);
            toast.error("Something went wrong!", {
                style: errorToastStyle,
                iconTheme: { primary: '#fff', secondary: '#ef4444' }
            });
        } finally {
            setLoading(false);
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} className="text-amber-400" />);
            } else if (rating >= i - 0.5) {
                stars.push(<FaStarHalfAlt key={i} className="text-amber-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-base-content/20" />);
            }
        }
        return stars;
    };

    return (
        <div className="group flex flex-col justify-between bg-base-100 hover:bg-base-100/90 shadow-sm hover:shadow-2xl border border-base-300/80 hover:border-primary/30 rounded-[2rem] overflow-hidden hover:rotate-1 transition-all hover:-translate-y-2 duration-300 cursor-pointer card">
            
            {/* Image Container with Discount Badge */}
            <div className="relative bg-base-200/50 rounded-t-[2rem] w-full aspect-square overflow-hidden">
                {hasDiscount && (
                    <div className="top-4 left-4 z-10 absolute bg-error shadow-md px-3 py-1 rounded-xl font-black text-white text-xs tracking-wider animate-pulse">
                        {discount}% OFF
                    </div>
                )}
                <Image
                    src={image || "https://placehold.co/400"}
                    alt={title || "Product Image"}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    priority
                    className="p-6 object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                />
            </div>

            {/* Product Info Section */}
            <div className="flex flex-col flex-grow justify-between space-y-4 p-5">
                <div className="space-y-2">
                    <h3 className="min-h-[48px] font-extrabold group-hover:text-primary text-base text-base-content line-clamp-2 leading-snug tracking-tight transition-colors duration-200">
                        {title}
                    </h3>

                    {/* Ratings & Sold Stats */}
                    <div className="flex items-center space-x-2 text-xs">
                        <div className="flex items-center space-x-0.5">{renderStars(ratings || 5)}</div>
                        <span className="font-bold text-base-content/50">({reviews || 0})</span>
                        <span className="text-base-content/20">|</span>
                        <span className="bg-base-200 px-2 py-0.5 rounded-lg font-black text-base-content/60">
                            {sold || 0} Sold
                        </span>
                    </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="space-y-3 pt-1">
                    <div className="flex items-baseline space-x-2">
                        <span className="font-black text-primary text-2xl tracking-tight">৳{discountedPrice}</span>
                        {hasDiscount && (
                            <span className="font-bold text-sm text-base-content/40 line-through">৳{price}</span>
                        )}
                    </div>

                    <div className="gap-2.5 grid grid-cols-2">
                        <Link 
                            href={`/products/${_id}`}
                            className="flex justify-center items-center gap-2 bg-base-200 hover:bg-base-300 py-3 rounded-2xl font-black text-xs text-base-content active:scale-95 transition-all duration-200"
                        >
                            <FaEye className="opacity-70 text-sm" />
                            <span>Details</span>
                        </Link>

                        <button 
                            onClick={handleAddToCart}
                            disabled={loading}
                            className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-60 shadow-md shadow-primary/20 py-3 rounded-2xl font-black text-white text-xs active:scale-95 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <FaSpinner className="text-sm animate-spin" />
                            ) : (
                                <FaShoppingBag className="text-sm" />
                            )}
                            <span>{loading ? "Adding..." : "Add"}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;