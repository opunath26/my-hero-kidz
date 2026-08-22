import React from "react";
import Link from "next/link";
import ProductCard from "../cards/ProductCard";
import { FaArrowRight } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { TbDeviceGamepad2 } from "react-icons/tb";

const HomeProducts = ({ products = [] }) => {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl container">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 mb-3 px-4 py-1.5 border border-amber-200/80 rounded-full font-bold text-amber-800 text-xs sm:text-sm">
            <HiSparkles className="text-amber-500 animate-pulse" />
            <span className="font-bangla">সেরা খেলনার কালেকশন</span>
          </div>

          <h2 className="font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl tracking-tight">
            Discover Our <span className="bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 text-transparent">Hero Toys</span>
          </h2>

          <p className="mt-2 max-w-md font-bangla text-slate-600 text-sm md:text-base">
            বাচ্চাদের মেধা বিকাশ ও নিরাপদ আনন্দের জন্য বাছাইকৃত সেরা খেলনাসমূহ।
          </p>
        </div>

        {/* Product Cards Grid (Up to 8 Products) */}
        {featuredProducts.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center bg-slate-50 py-16 border border-slate-200/80 rounded-3xl text-center">
            <div className="flex justify-center items-center bg-amber-100 mb-4 rounded-full w-16 h-16 text-amber-600 text-2xl">
              <TbDeviceGamepad2 />
            </div>
            <h3 className="font-bold text-slate-800 text-lg">
              কোনো প্রোডাক্ট পাওয়া যায়নি
            </h3>
            <p className="mt-1 font-bangla text-slate-500 text-sm">
              খুব শীঘ্রই নতুন খেলনা যুক্ত করা হবে।
            </p>
          </div>
        )}

        {/* "See All Products" Button */}
        {featuredProducts.length > 0 && (
          <div className="mt-12 text-center">
            <Link href="/products" className="inline-block">
              <button className="group flex items-center gap-2.5 bg-gradient-to-r from-amber-500 hover:from-amber-600 to-amber-600 hover:to-amber-700 shadow-amber-200 shadow-lg px-8 py-3.5 rounded-full font-extrabold text-slate-950 text-sm active:scale-95 transition-all duration-200 cursor-pointer">
                <span>Explore All Products</span>
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1 duration-200" />
              </button>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default HomeProducts;