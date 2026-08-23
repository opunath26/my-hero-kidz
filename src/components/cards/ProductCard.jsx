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

  // Toast Custom Styles (HeroKidz Brand Theme)
  const successToastStyle = {
    borderRadius: '16px',
    background: '#FF4500',
    color: '#fff',
    fontWeight: 'bold',
    padding: '12px 20px',
    boxShadow: '0 10px 20px -5px rgba(255, 69, 0, 0.4)',
  };

  const errorToastStyle = {
    borderRadius: '16px',
    background: '#ef4444',
    color: '#fff',
    fontWeight: 'bold',
    padding: '12px 20px',
  };

  // Add to Cart Handler
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
          iconTheme: { primary: '#fff', secondary: '#FF4500' }
        });
      } else {
        toast.error(data.message || "Failed to add item to cart!", {
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
        stars.push(<FaRegStar key={i} className="text-slate-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="group flex flex-col justify-between bg-white hover:shadow-xl border border-orange-100 hover:border-orange-300 rounded-3xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 cursor-pointer">
      
      {/* Image Container */}
      <div className="relative bg-orange-50/50 rounded-t-3xl w-full aspect-square overflow-hidden">
        {hasDiscount && (
          <div className="top-3 left-3 z-10 absolute bg-[#FF4500] shadow-md px-3 py-1 rounded-xl font-black text-white text-[11px] tracking-wider">
            {discount}% OFF
          </div>
        )}
        <Image
          src={image || "https://placehold.co/400"}
          alt={title || "Product Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="p-5 object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Product Info Section */}
      <div className="flex flex-col flex-grow justify-between space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="min-h-[44px] font-extrabold text-slate-800 group-hover:text-[#FF4500] text-sm sm:text-base line-clamp-2 leading-snug tracking-tight transition-colors duration-200">
            {title}
          </h3>

          {/* Ratings & Sold Stats */}
          <div className="flex items-center space-x-2 text-xs">
            <div className="flex items-center space-x-0.5">{renderStars(ratings || 5)}</div>
            <span className="font-bold text-slate-400">({reviews || 0})</span>
            <span className="text-slate-200">•</span>
            <span className="bg-amber-50 px-2 py-0.5 rounded-md font-extrabold text-[#FF4500] text-[11px]">
              {sold || 0} Sold
            </span>
          </div>
        </div>

        {/* Price & Action Buttons */}
        <div className="space-y-3 pt-1">
          <div className="flex items-baseline space-x-2">
            <span className="font-black text-[#FF4500] text-xl sm:text-2xl tracking-tight">৳{discountedPrice}</span>
            {hasDiscount && (
              <span className="font-bold text-slate-400 text-xs sm:text-sm line-through">৳{price}</span>
            )}
          </div>

          <div className="gap-2.5 grid grid-cols-2">
            <Link 
              href={`/products/${_id}`}
              className="flex justify-center items-center gap-1.5 bg-slate-100 hover:bg-slate-200 py-2.5 rounded-2xl font-extrabold text-slate-700 text-xs active:scale-95 transition-all"
            >
              <FaEye className="opacity-70 text-xs" />
              <span>Details</span>
            </Link>

            <button 
              onClick={handleAddToCart}
              disabled={loading}
              className="flex justify-center items-center gap-1.5 bg-[#FF4500] hover:bg-[#e03d00] disabled:opacity-60 shadow-md shadow-orange-500/20 py-2.5 rounded-2xl font-extrabold text-xs text-white active:scale-95 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? (
                <FaSpinner className="text-xs animate-spin" />
              ) : (
                <FaShoppingBag className="text-xs" />
              )}
              <span>{loading ? "Adding..." : "Add to Cart"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;