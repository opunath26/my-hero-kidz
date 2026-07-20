"use client";

import React, { useState, useMemo } from 'react';
import ProductCard from '../cards/ProductCard';
import { FiSearch, FiFilter, FiPackage, FiGrid } from 'react-icons/fi';
import { FaChild } from 'react-icons/fa';

const Products = ({ initialProducts = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const categories = useMemo(() => {
    const cats = initialProducts.map(p => p.category).filter(Boolean);
    return ['All', ...Array.from(new Set(cats))];
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        const matchesSearch = product.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              product.name?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return (a.price || 0) - (b.price || 0);
        if (sortBy === 'price-high') return (b.price || 0) - (a.price || 0);
        return 0; // Default order
      });
  }, [initialProducts, searchTerm, selectedCategory, sortBy]);

  return (
    <section className="bg-base-100 py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-7xl container">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full font-black text-primary text-sm uppercase tracking-wider animate-pulse">
            <FaChild className="animate-bounce" /> Explore Our Collection 🎁
          </span>
          <h2 className="mt-4 font-black text-base-content text-3xl md:text-5xl leading-none tracking-tight">
            Discover Our <span className="text-primary decoration-warning decoration-wavy underline">Hero Toys</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-base-content/60 md:text-base">
            Carefully curated non-toxic, safe, and brain-boosting toys for your child's creative journey.
          </p>
        </div>

        {/* Filter and Control Bar */}
        <div className="bg-base-200/50 shadow-sm mb-12 p-4 md:p-6 border border-base-300/80 rounded-[2rem]">
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            
            {/* Search Box */}
            <div className="relative w-full md:w-80">
              <span className="top-1/2 left-4 absolute text-base-content/40 -translate-y-1/2">
                <FiSearch className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Search favorite toys..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-base-100 shadow-inner py-3 pr-4 pl-12 border-2 border-transparent focus:border-primary/40 rounded-2xl focus:outline-none w-full font-bold text-sm text-base-content transition-all placeholder-gray-400/80"
              />
            </div>

            {/* Category Filter Badges (Horizontal Scroll on Mobile) */}
            <div className="flex items-center gap-2 pb-2 md:pb-0 w-full md:w-auto overflow-x-auto scrollbar-none">
              <span className="hidden lg:inline-block mr-2 font-black text-xs text-base-content/40 uppercase tracking-widest">
                <FiFilter className="inline mr-1" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-black whitespace-nowrap transition-all duration-300 active:scale-95 ${
                    selectedCategory === cat
                      ? 'bg-primary text-white shadow-md shadow-primary/20 scale-105'
                      : 'bg-base-100 hover:bg-base-300/60 text-base-content/70 border border-base-300/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-between md:justify-end items-center gap-3 w-full md:w-auto">
              <span className="bg-base-300/50 px-3 py-2 rounded-xl font-bold text-xs text-base-content/60">
                Showing: <strong className="text-primary">{filteredProducts.length}</strong> Products
              </span>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-base-100 border-base-300 rounded-xl focus:outline-none font-bold text-xs select-sm select"
              >
                <option value="default">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty State when no product matches search/filter */
          <div className="bg-base-200/20 my-8 py-20 border-2 border-base-300 border-dashed rounded-[2.5rem] text-center">
            <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-full w-20 h-20 text-primary text-3xl">
              <FiPackage />
            </div>
            <h3 className="font-extrabold text-base-content text-2xl">No Hero Toys Found!</h3>
            <p className="mx-auto mt-1 max-w-sm text-sm text-base-content/60">
              We couldn't find anything matching your search or category filter. Try clearing your filters!
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSortBy('default');
              }}
              className="shadow-md mt-6 px-6 rounded-xl font-black text-white btn btn-primary btn-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Products;