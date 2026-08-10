"use client";

import React, { useState, useMemo } from 'react';
import ProductCard from '../cards/ProductCard';
import { FiSearch, FiPackage, FiX, FiSliders } from 'react-icons/fi';
import { FaChild } from 'react-icons/fa';

const Products = ({ initialProducts = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    return initialProducts
      .filter((product) => {
        const query = searchTerm.toLowerCase();
        return (
          product.title?.toLowerCase().includes(query) ||
          product.name?.toLowerCase().includes(query) ||
          product.description?.toLowerCase().includes(query)
        );
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return (a.price || 0) - (b.price || 0);
        if (sortBy === 'price-high') return (b.price || 0) - (a.price || 0);
        if (sortBy === 'rating') return (b.ratings || 0) - (a.ratings || 0);
        return 0; // Default order
      });
  }, [initialProducts, searchTerm, sortBy]);

  return (
    <section className="bg-slate-50/50 py-12 md:py-16 min-h-screen">
      <div className="mx-auto px-4 max-w-7xl container">
        
        {/* Header Section */}
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full font-bold text-primary text-xs uppercase tracking-widest">
            <FaChild className="text-sm" /> Hero Kids Collection 🎁
          </span>
          <h2 className="mt-3 font-extrabold text-slate-900 text-3xl md:text-5xl tracking-tight">
            Explore All <span className="text-primary">Hero Toys</span>
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-slate-500 text-sm md:text-base">
            Discover safe, premium, and fun toys designed to bring smiles and inspire creativity.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white shadow-sm mb-8 p-4 md:p-5 border border-slate-200/80 rounded-2xl">
          <div className="flex md:flex-row flex-col justify-between items-center gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <span className="top-1/2 left-4 absolute text-slate-400 -translate-y-1/2">
                <FiSearch className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Search toys by name or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-50 focus:bg-white py-2.5 pr-10 pl-11 border border-slate-200 focus:border-primary/50 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary/10 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="top-1/2 right-3 absolute text-slate-400 hover:text-slate-600 -translate-y-1/2"
                >
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort & Count Controls */}
            <div className="flex sm:flex-row flex-col justify-between sm:items-center gap-3 w-full md:w-auto">
              <span className="font-semibold text-slate-500 text-xs">
                Showing <strong className="text-slate-900">{filteredProducts.length}</strong> of {initialProducts.length} items
              </span>
              
              <div className="flex items-center gap-2">
                <FiSliders className="text-slate-400 text-sm" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-50 hover:bg-slate-100/80 px-3 py-2 border border-slate-200 rounded-xl focus:outline-none font-semibold text-slate-700 text-xs transition-colors cursor-pointer"
                >
                  <option value="default">Sort by: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
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
          /* Empty State */
          <div className="bg-white my-8 py-16 border border-slate-200 border-dashed rounded-3xl text-center">
            <div className="flex justify-center items-center bg-primary/10 mx-auto mb-4 rounded-2xl w-16 h-16 text-primary text-2xl">
              <FiPackage />
            </div>
            <h3 className="font-bold text-slate-800 text-xl">No Toys Found</h3>
            <p className="mx-auto mt-1 max-w-xs text-slate-500 text-sm">
              We couldn't find any products matching "{searchTerm}". Try searching with a different term.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSortBy('default');
              }}
              className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 mt-5 px-5 py-2.5 rounded-xl font-semibold text-white text-xs transition-all"
            >
              Clear Search
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Products;