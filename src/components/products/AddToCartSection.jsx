"use client";

import React from 'react';
import { FaShoppingBag, FaBolt } from 'react-icons/fa';

const AddToCartSection = ({ product, inStock }) => {
    return (
        <div className="space-y-3 pt-2">
            <div className="flex sm:flex-row flex-col gap-3">
                {/* Add to Cart Button */}
                <button
                    type="button"
                    disabled={!inStock}
                    className="flex flex-1 justify-center items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50 shadow-lg shadow-primary/25 py-3.5 rounded-xl font-bold text-white text-base active:scale-[0.99] transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                    <FaShoppingBag className="text-lg" />
                    <span>Add to Cart</span>
                </button>

                {/* Buy Now Button */}
                <button
                    type="button"
                    disabled={!inStock}
                    className="flex flex-1 justify-center items-center gap-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 shadow-lg shadow-slate-900/10 py-3.5 rounded-xl font-bold text-white text-base active:scale-[0.99] transition-all cursor-pointer disabled:cursor-not-allowed"
                >
                    <FaBolt className="text-amber-400 text-lg" />
                    <span>Buy Now</span>
                </button>
            </div>
        </div>
    );
};

export default AddToCartSection;