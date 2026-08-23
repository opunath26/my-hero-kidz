"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { 
  FaStar, 
  FaTruck, 
  FaShieldAlt, 
  FaUndo, 
  FaChevronRight, 
  FaCheckCircle, 
  FaHeart, 
  FaAward, 
  FaLeaf, 
  FaBoxOpen 
} from 'react-icons/fa';
import AddToCartSection from './AddToCartSection';
import RelatedProducts from './RelatedProducts';
import ProductReviews from './ProductReviews';

export default function ProductDetailsClient({ product, relatedProducts = [], userSession }) {
    const { data: session } = useSession();
    const currentUserSession = userSession || session;
    const [activeTab, setActiveTab] = useState('description');

    if (!product || !product.title) {
        return (
            <div className="flex flex-col justify-center items-center py-20 min-h-[60vh]">
                <h2 className="font-bold text-slate-700 text-2xl">Product Not Found!</h2>
                <p className="mt-2 text-slate-500">The item you are looking for might have been removed or is unavailable.</p>
                <Link href="/" className="bg-[#FF4500] hover:bg-[#e03d00] mt-6 px-6 py-2.5 rounded-xl font-bold text-white transition-all">
                    Back to Home
                </Link>
            </div>
        );
    }

    const { _id, id, title, image, price, discount, ratings, description, inStock = true, reviews = [], category, material, ageGroup } = product;
    const productId = id || _id;
    const hasDiscount = discount > 0;
    const discountedPrice = hasDiscount ? Math.round(price - (price * discount) / 100) : price;

    return (
        <div className="bg-slate-50/50 py-8 min-h-screen">
            <div className="mx-auto px-4 max-w-7xl">

                {/* 1. Breadcrumb Navigation */}
                <nav className="flex items-center gap-2 mb-6 font-medium text-slate-500 text-sm">
                    <Link href="/" className="hover:text-[#FF4500] transition-colors">Home</Link>
                    <FaChevronRight className="text-slate-400 text-xs" />
                    <Link href="/products" className="hover:text-[#FF4500] transition-colors">Products</Link>
                    <FaChevronRight className="text-slate-400 text-xs" />
                    <span className="max-w-[200px] sm:max-w-xs text-slate-800 truncate">{title}</span>
                </nav>

                {/* 2. Main Product Hero Section */}
                <div className="bg-white shadow-sm p-6 md:p-8 border border-slate-200/80 rounded-3xl">
                    <div className="gap-10 md:gap-12 grid grid-cols-1 lg:grid-cols-12">

                        {/* Left: Product Image */}
                        <div className="lg:col-span-5">
                            <div className="group relative flex justify-center items-center bg-orange-50/30 p-6 border border-orange-100/60 rounded-2xl w-full aspect-square overflow-hidden">
                                {hasDiscount && (
                                    <div className="top-4 left-4 z-10 absolute bg-[#FF4500] shadow-md shadow-orange-500/20 px-3 py-1.5 rounded-xl font-extrabold text-white text-xs uppercase tracking-wider">
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
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${inStock ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-rose-50 text-rose-600 border border-rose-200'}`}>
                                        {inStock ? 'In Stock' : 'Out of Stock'}
                                    </span>
                                    {productId && (
                                        <span className="font-semibold text-slate-400 text-xs">SKU: HK-{String(productId).slice(-6).toUpperCase()}</span>
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
                                        <span className="font-extrabold text-slate-800">{ratings || "4.8"}</span>
                                    </div>
                                    <span className="text-slate-300 text-sm">•</span>
                                    <span className="font-bold text-slate-500 text-sm">{reviews.length || 12} Verified Reviews</span>
                                </div>

                                {/* Pricing Card */}
                                <div className="flex items-baseline gap-4 bg-orange-50/50 p-4 border border-orange-100/50 rounded-2xl">
                                    <span className="font-black text-[#FF4500] text-3xl md:text-4xl">৳{discountedPrice}</span>
                                    {hasDiscount && (
                                        <>
                                            <span className="font-bold text-slate-400 text-lg line-through">৳{price}</span>
                                            <span className="font-extrabold text-rose-500 text-sm">
                                                (৳{price - discountedPrice} OFF)
                                            </span>
                                        </>
                                    )}
                                </div>

                                {/* Short Description */}
                                <div className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    <p>{description || "Premium quality product crafted with utmost care to ensure maximum durability, safety, and comfort for everyday use."}</p>
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
                                    <div className="flex justify-center items-center bg-orange-500/10 p-2.5 rounded-xl text-[#FF4500] text-lg">
                                        <FaTruck />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-slate-800 text-xs md:text-sm">Fast Shipping</h4>
                                        <p className="font-medium text-[11px] text-slate-400">Across Bangladesh</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-emerald-500/10 p-2.5 rounded-xl text-emerald-600 text-lg">
                                        <FaShieldAlt />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-slate-800 text-xs md:text-sm">100% Authentic</h4>
                                        <p className="font-medium text-[11px] text-slate-400">Guaranteed Quality</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex justify-center items-center bg-amber-500/10 p-2.5 rounded-xl text-amber-600 text-lg">
                                        <FaUndo />
                                    </div>
                                    <div>
                                        <h4 className="font-extrabold text-slate-800 text-xs md:text-sm">7 Days Return</h4>
                                        <p className="font-medium text-[11px] text-slate-400">Hassle Free Policy</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 3. NEW SECTION: Why Choose & Quality Assurance (Enhances Engagement) */}
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 my-10 p-8 md:p-10 rounded-3xl text-white shadow-lg shadow-orange-500/10">
                    <div className="mb-8 text-center">
                        <span className="bg-white/20 px-3 py-1 rounded-full font-bold text-xs uppercase tracking-widest">
                            Crafted with Care
                        </span>
                        <h2 className="mt-2 font-black text-2xl md:text-3xl">Why You'll Love This Product</h2>
                        <p className="mt-1 text-white/80 text-sm">We ensure top-tier quality standards from manufacturing to delivery.</p>
                    </div>

                    <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="bg-white/10 backdrop-blur-md p-5 border border-white/15 rounded-2xl">
                            <FaAward className="mb-3 text-amber-300 text-2xl" />
                            <h3 className="font-bold text-base">Premium Quality</h3>
                            <p className="mt-1 text-white/80 text-xs">Manufactured using grade-A certified materials built for long durability.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-5 border border-white/15 rounded-2xl">
                            <FaLeaf className="mb-3 text-emerald-300 text-2xl" />
                            <h3 className="font-bold text-base">Eco-Safe Materials</h3>
                            <p className="mt-1 text-white/80 text-xs">100% non-toxic, eco-friendly materials safe for kids and families.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-5 border border-white/15 rounded-2xl">
                            <FaBoxOpen className="mb-3 text-orange-200 text-2xl" />
                            <h3 className="font-bold text-base">Hygienic Packaging</h3>
                            <p className="mt-1 text-white/80 text-xs">Sanitized and double-layered packaging before shipping to your home.</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md p-5 border border-white/15 rounded-2xl">
                            <FaHeart className="mb-3 text-rose-300 text-2xl" />
                            <h3 className="font-bold text-base">Customer Happiness</h3>
                            <p className="mt-1 text-white/80 text-xs">Backed by our dedicated 24/7 support and quick return assurance.</p>
                        </div>
                    </div>
                </div>

                {/* 4. Detailed Product Information Tabs */}
                <div className="bg-white shadow-sm mb-10 border border-slate-200/80 rounded-3xl overflow-hidden">
                    <div className="flex border-slate-100 border-b overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('description')}
                            className={`px-8 py-4 font-bold text-sm transition-all whitespace-nowrap border-b-2 ${
                                activeTab === 'description' 
                                    ? 'border-[#FF4500] text-[#FF4500] bg-orange-50/30' 
                                    : 'border-transparent text-slate-500 hover:text-slate-800'
                            }`}
                        >
                            Full Description
                        </button>
                        <button
                            onClick={() => setActiveTab('specifications')}
                            className={`px-8 py-4 font-bold text-sm transition-all whitespace-nowrap border-b-2 ${
                                activeTab === 'specifications' 
                                    ? 'border-[#FF4500] text-[#FF4500] bg-orange-50/30' 
                                    : 'border-transparent text-slate-500 hover:text-slate-800'
                            }`}
                        >
                            Specifications
                        </button>
                        <button
                            onClick={() => setActiveTab('safety')}
                            className={`px-8 py-4 font-bold text-sm transition-all whitespace-nowrap border-b-2 ${
                                activeTab === 'safety' 
                                    ? 'border-[#FF4500] text-[#FF4500] bg-orange-50/30' 
                                    : 'border-transparent text-slate-500 hover:text-slate-800'
                            }`}
                        >
                            Quality & Safety
                        </button>
                    </div>

                    <div className="p-6 md:p-8">
                        {activeTab === 'description' && (
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <h3 className="font-extrabold text-slate-900 text-lg">Product Overview</h3>
                                <p>{description || "Experience perfection with our meticulously designed product. Built for reliability and efficiency, it blends sleek modern aesthetics with long-lasting functional performance."}</p>
                                <ul className="space-y-2 pt-2">
                                    <li className="flex items-center gap-2 text-sm">
                                        <FaCheckCircle className="text-[#FF4500]" /> High quality standard materials used
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <FaCheckCircle className="text-[#FF4500]" /> Ergonomic design tailored for daily use
                                    </li>
                                    <li className="flex items-center gap-2 text-sm">
                                        <FaCheckCircle className="text-[#FF4500]" /> Thoroughly tested under strict quality guidelines
                                    </li>
                                </ul>
                            </div>
                        )}

                        {activeTab === 'specifications' && (
                            <div className="max-w-2xl">
                                <div className="divide-y divide-slate-100">
                                    <div className="flex justify-between py-3">
                                        <span className="font-bold text-slate-500 text-sm">Category</span>
                                        <span className="font-semibold text-slate-800 text-sm">{category || "General"}</span>
                                    </div>
                                    <div className="flex justify-between py-3">
                                        <span className="font-bold text-slate-500 text-sm">Material</span>
                                        <span className="font-semibold text-slate-800 text-sm">{material || "Premium Grade"}</span>
                                    </div>
                                    <div className="flex justify-between py-3">
                                        <span className="font-bold text-slate-500 text-sm">Recommended Age / Usage</span>
                                        <span className="font-semibold text-slate-800 text-sm">{ageGroup || "All Ages"}</span>
                                    </div>
                                    <div className="flex justify-between py-3">
                                        <span className="font-bold text-slate-500 text-sm">Warranty</span>
                                        <span className="font-semibold text-slate-800 text-sm">7 Days Replacement</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'safety' && (
                            <div className="space-y-3 text-slate-600 text-sm leading-relaxed">
                                <h3 className="font-extrabold text-slate-900 text-lg">Safety & Guarantee Standards</h3>
                                <p>All items undergo a 3-step quality inspection prior to packaging. We guarantee that the item delivered matches the product specifications exactly as listed above.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* 5. Product Reviews & Ratings Section */}
                <ProductReviews
                    productId={productId}
                    reviews={Array.isArray(product?.reviews) ? product.reviews : []}
                    userSession={currentUserSession}
                />

                {/* 6. Related Products Slider */}
                <div className="mt-14">
                    <RelatedProducts products={relatedProducts} />
                </div>

            </div>
        </div>
    );
}