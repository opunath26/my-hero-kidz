"use client";

import React, { useState } from 'react';
import { FaShoppingBag, FaBolt, FaSpinner } from 'react-icons/fa';

const AddToCartSection = ({ product, inStock }) => {
    const [loading, setLoading] = useState(false);
    const [buyNowLoading, setBuyNowLoading] = useState(false);

    const handleAddToCart = async () => {
        if (!inStock) return;
        setLoading(true);
        
        try {
            console.log("Added to cart:", product);
            
            await new Promise((resolve) => setTimeout(resolve, 800));
        } catch (error) {
            console.error("Failed to add to cart:", error);
        } finally {
            setLoading(false);
        }
    };

    // Buy Now Handler
    const handleBuyNow = async () => {
        if (!inStock) return;
        setBuyNowLoading(true);
        
        try {
            console.log("Buy now pressed for:", product);
            
            await new Promise((resolve) => setTimeout(resolve, 800));
        } catch (error) {
            console.error("Buy now failed:", error);
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