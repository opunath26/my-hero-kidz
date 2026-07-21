import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingBag, FaEye } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { _id, title, image, price, discount, ratings, reviews, sold } = product;

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
                stars.push(<FaRegStar key={i} className="text-base-content/20" />);
            }
        }
        return stars;
    };

    return (
        <div className="group flex flex-col justify-between bg-base-100 hover:bg-base-100/90 shadow-sm hover:shadow-2xl border border-base-300/80 hover:border-primary/30 rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:rotate-1 cursor-pointer card">
            
            {/* Image Container with Discount Badge */}
            <div className="relative bg-base-200/50 rounded-t-[2rem] w-full aspect-square overflow-hidden">
                {hasDiscount && (
                    <div className="top-4 left-4 z-10 absolute bg-error shadow-md px-3 py-1 rounded-xl font-black text-white text-xs tracking-wider animate-pulse">
                        {discount}% OFF
                    </div>
                )}
                <Image
                    src={image || "https://placehold.co/400"}
                    alt={title || "Product Image"}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    priority
                    className="p-6 object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
                />
            </div>

            {/* Product Info Section */}
            <div className="flex flex-col flex-grow justify-between space-y-4 p-5">
                <div className="space-y-2">
                    <h3 className="min-h-[48px] font-extrabold text-base-content group-hover:text-primary text-base line-clamp-2 leading-snug tracking-tight transition-colors duration-200">
                        {title}
                    </h3>

                    {/* Ratings & Sold Stats */}
                    <div className="flex items-center space-x-2 text-xs">
                        <div className="flex items-center space-x-0.5">{renderStars(ratings || 5)}</div>
                        <span className="font-bold text-base-content/50">({reviews || 0})</span>
                        <span className="text-base-content/20">|</span>
                        <span className="bg-base-200 px-2 py-0.5 rounded-lg font-black text-base-content/60">
                            {sold || 0} Sold
                        </span>
                    </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="space-y-3 pt-1">
                    <div className="flex items-baseline space-x-2">
                        <span className="font-black text-primary text-2xl tracking-tight">৳{discountedPrice}</span>
                        {hasDiscount && (
                            <span className="font-bold text-base-content/40 text-sm line-through">৳{price}</span>
                        )}
                    </div>

                    <div className="gap-2.5 grid grid-cols-2">
                        <Link 
                            href={`/products/${_id}`}
                            className="flex justify-center items-center gap-2 bg-base-200 hover:bg-base-300 py-3 rounded-2xl font-black text-base-content text-xs active:scale-95 transition-all duration-200"
                        >
                            <FaEye className="text-sm opacity-70" />
                            <span>Details</span>
                        </Link>

                        <button className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-md shadow-primary/20 py-3 rounded-2xl font-black text-white text-xs active:scale-95 transition-all duration-200">
                            <FaShoppingBag className="text-sm" />
                            <span>Add</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;