import React from 'react';
import Link from 'next/link';
import ProductCard from '../cards/ProductCard';
import { FaChild, FaArrowRight } from 'react-icons/fa';

const HomeProducts = ({ products = [] }) => {
  const featuredProducts = products.slice(0, 8);

  return (
    <section className="bg-base-100 py-12 overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl container">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full font-black text-primary text-sm uppercase tracking-wider animate-pulse">
            <FaChild className="animate-bounce" /> Featured Collection 🎁
          </span>
          <h2 className="mt-4 font-black text-base-content text-3xl md:text-5xl leading-none tracking-tight">
            Discover Our <span className="text-primary decoration-warning decoration-wavy underline">Hero Toys</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-base-content/60 md:text-base">
            Carefully curated non-toxic, safe, and brain-boosting toys for your child's creative journey.
          </p>
        </div>

        {/* Product Cards Grid (8 Products) */}
        {featuredProducts.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-base-200/30 py-12 rounded-3xl text-center">
            <p className="font-bold text-base-content/60">No products available right now.</p>
          </div>
        )}

        {/* "See All Products" Button */}
        <div className="mt-14 text-center">
          <Link href="/products" className="group inline-block">
            <button className="flex items-center gap-3 bg-primary hover:bg-primary/90 shadow-primary/20 shadow-xl px-8 py-4 rounded-2xl font-black text-white text-base active:scale-95 transition-all hover:-translate-y-1 duration-300">
              <span>Explore All Products</span>
              <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1.5 duration-300" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeProducts;