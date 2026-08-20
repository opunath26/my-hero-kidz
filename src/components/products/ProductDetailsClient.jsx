"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaTruck, FaShieldAlt, FaUndo, FaChevronRight } from 'react-icons/fa';
import AddToCartSection from './AddToCartSection';
import RelatedProducts from './RelatedProducts';
import ProductReviews from './ProductReviews';

export default function ProductDetailsClient({ product, relatedProducts = [] }) {
    if (!product || !product.title) {
        return (
            <div className="flex flex-col justify-center items-center py-20 min-h-[60vh]">
                <h2 className="font-bold text-slate-700 text-2xl">Product not found!</h2>
                <p className="mt-2 text-slate-500">The item you are looking for might have been removed or is unavailable.</p>
                <Link href="/" className="bg-primary mt-6 px-6 py-2.5 rounded-xl font-semibold text-white">
                    Back to Home
                </Link>
            </div>
        );
    }

    const { _id, id, title, image, price, discount, ratings, description, inStock = true, reviews = [] } = product;
    const productId = id || _id;
    const hasDiscount = discount > 0;
    const discountedPrice = hasDiscount ? Math.round(price - (price * discount) / 100) : price;

    return (
        <div className="bg-slate-50/50 py-8 min-h-screen">
            <div className="mx-auto px-4 max-w-7xl">

                {/* 1. Breadcrumb Navigation */}
                <nav className="flex items-center gap-2 mb-6 font-medium text-slate-500 text-sm">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <FaChevronRight className="text-slate-400 text-xs" />
                    <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
                    <FaChevronRight className="text-slate-400 text-xs" />
                    <span className="max-w-[200px] sm:max-w-xs text-slate-800 truncate">{title}</span>
                </nav>

                {/* 2. Main Product Hero Section */}
                <div className="bg-white shadow-sm p-6 md:p-8 border border-slate-200/80 rounded-3xl">
                    <div className="gap-10 md:gap-12 grid grid-cols-1 lg:grid-cols-12">

                        {/* Left: Product Image */}
                        <div className="lg:col-span-5">
                            <div className="group relative flex justify-center items-center bg-slate-50/80 p-6 border border-slate-100 rounded-2xl w-full aspect-square overflow-hidden">
                                {hasDiscount && (
                                    <div className="top-4 left-4 z-10 absolute bg-rose-500 shadow-md shadow-rose-500/20 px-3 py-1.5 rounded-xl font-bold text-white text-xs uppercase tracking-wider">
                                        Save {discount}%
                                    </div>
                                )}
                                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={image || "https://placehold.co/600"}
                                        alt={title}
                                        fill
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Product Info & Actions */}
                        <div className="flex flex-col justify-between lg:col-span-7">
                            <div className="space-y-5">

                                {/* Stock Status Badge */}
                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${inStock ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-rose-50 text-rose-600 border border-rose-200'}`}>
                                        {inStock ? 'In Stock' : 'Out of Stock'}
                                    </span>
                                    {productId && (
                                        <span className="text-slate-400 text-xs">SKU: HK-{String(productId).slice(-6).toUpperCase()}</span>
                                    )}
                                </div>

                                {/* Title */}
                                <h1 className="font-extrabold text-slate-900 text-2xl md:text-3xl lg:text-4xl leading-tight">
                                    {title}
                                </h1>

                                {/* Rating & Reviews */}
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 border border-amber-200/60 rounded-lg text-amber-500 text-sm">
                                        <FaStar />
                                        <span className="font-bold text-slate-800">{ratings || "4.8"}</span>
                                    </div>
                                    <span className="text-slate-400 text-sm">|</span>
                                    <span className="font-medium text-slate-500 text-sm">{reviews.length || 124} Verified Reviews</span>
                                </div>

                                {/* Pricing Card */}
                                <div className="flex items-baseline gap-4 bg-slate-50 p-4 rounded-2xl">
                                    <span className="font-black text-primary text-3xl md:text-4xl">৳{discountedPrice}</span>
                                    {hasDiscount && (
                                        <>
                                            <span className="font-semibold text-slate-400 text-lg line-through">৳{price}</span>
                                            <span className="font-bold text-rose-500 text-sm">
                                                (৳{price - discountedPrice} OFF)
                                            </span>
                                        </>
                                    )}
                                </div>

                                {/* Short Description */}
                                <div className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    <p>{description || "Premium quality product designed to inspire creativity, safety, and endless fun for your little ones."}</p>
                                </div>

                                <hr className="border-slate-100" />

                                {/* Action Buttons Component */}
                                <AddToCartSection
                                    product={{ ...product, discountedPrice }}
                                    inStock={inStock}
                                />
                            </div>

                            {/* Trust Badges */}
                            <div className="gap-4 grid grid-cols-3 mt-6 pt-6 border-slate-100 border-t">
                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-primary/10 p-2.5 rounded-xl text-primary text-lg">
                                        <FaTruck />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-xs md:text-sm">Fast Shipping</h4>
                                        <p className="text-[11px] text-slate-400">Across Bangladesh</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-emerald-500/10 p-2.5 rounded-xl text-emerald-600 text-lg">
                                        <FaShieldAlt />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-xs md:text-sm">100% Authentic</h4>
                                        <p className="text-[11px] text-slate-400">Guaranteed Quality</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-amber-500/10 p-2.5 rounded-xl text-amber-600 text-lg">
                                        <FaUndo />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-xs md:text-sm">7 Days Return</h4>
                                        <p className="text-[11px] text-slate-400">Hassle Free Policy</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 3. Product Reviews & Ratings Section */}
                <ProductReviews
                    productId={productId}
                    reviews={Array.isArray(product?.reviews) ? product.reviews : []}
                    userSession={null}
                />

                {/* 4. Related Products Slider */}
                <div className="mt-14">
                    <RelatedProducts products={relatedProducts} />
                </div>

            </div>
        </div>
    );
}