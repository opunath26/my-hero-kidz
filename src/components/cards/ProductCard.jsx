import React from 'react';
import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { title, image, price, discount, ratings, reviews, sold } = product;

    const hasDiscount = discount > 0;
    const discountedPrice = hasDiscount ? Math.round(price - (price * discount) / 100) : price;

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
        <div className="group flex flex-col justify-between bg-white shadow-sm hover:shadow-xl border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 card">
            {/* Image Section */}
            <div className="relative bg-slate-50 rounded-t-2xl w-full aspect-square overflow-hidden">
                {hasDiscount && (
                    <div className="top-3 left-3 z-10 absolute bg-red-500 shadow-sm px-2.5 py-1 rounded-lg font-bold text-white text-xs animate-pulse">
                        {discount}% OFF
                    </div>
                )}
                <Image
                    src={image || "https://placehold.co/400"}
                    alt={title}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    priority
                    className="p-4 object-contain group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow justify-between space-y-4 p-5">
                <div className="space-y-2">
                    {/* Title */}
                    <h3 className="min-h-[48px] font-bold text-slate-800 group-hover:text-primary text-base line-clamp-2 transition-colors">
                        {title}
                    </h3>

                    {/* Rating & Reviews */}
                    <div className="flex items-center space-x-2 text-sm">
                        <div className="flex items-center space-x-0.5">{renderStars(ratings)}</div>
                        <span className="font-medium text-slate-500">({reviews})</span>
                        <span className="text-slate-300">|</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded-md font-semibold text-slate-500 text-xs">
                            {sold} Sold
                        </span>
                    </div>
                </div>

                {/* Price and Action Button */}
                <div className="space-y-3 pt-2">
                    <div className="flex items-baseline space-x-2">
                        <span className="font-extrabold text-primary text-2xl">৳{discountedPrice}</span>
                        {hasDiscount && (
                            <span className="font-medium text-slate-400 text-sm line-through">৳{price}</span>
                        )}
                    </div>

                    <button className="gap-2 shadow-md shadow-primary/20 rounded-xl w-full font-semibold text-white normal-case hover:scale-[1.01] active:scale-95 transition-all btn btn-primary">
                        <FaShoppingBag className="text-lg" />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;