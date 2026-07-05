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
                stars.push(<FaRegStar key={i} className="text-slate-300" />);
            }
        }
        return stars;
    };

    return (
        <div className="group flex flex-col justify-between bg-white shadow-sm hover:shadow-xl border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 card">
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

            <div className="flex flex-col flex-grow justify-between space-y-4 p-5">
                <div className="space-y-2">
                    <h3 className="min-h-[48px] font-bold text-slate-800 group-hover:text-primary text-base line-clamp-2 transition-colors">
                        {title}
                    </h3>

                    <div className="flex items-center space-x-2 text-sm">
                        <div className="flex items-center space-x-0.5">{renderStars(ratings)}</div>
                        <span className="font-medium text-slate-500">({reviews})</span>
                        <span className="text-slate-300">|</span>
                        <span className="bg-slate-100 px-2 py-0.5 rounded-md font-semibold text-slate-500 text-xs">
                            {sold} Sold
                        </span>
                    </div>
                </div>

                <div className="space-y-3 pt-2">
                    <div className="flex items-baseline space-x-2">
                        <span className="font-extrabold text-primary text-2xl">৳{discountedPrice}</span>
                        {hasDiscount && (
                            <span className="font-medium text-slate-400 text-sm line-through">৳{price}</span>
                        )}
                    </div>

                    <div className="gap-2 grid grid-cols-2">
                        <Link 
                            href={`/products/${_id}`}
                            className="flex justify-center items-center gap-2 bg-slate-50 hover:bg-primary/5 py-3 border border-slate-200 hover:border-primary/30 rounded-xl font-semibold text-slate-700 hover:text-primary text-sm transition-all"
                        >
                            <FaEye className="text-base" />
                            Details
                        </Link>

                        <button className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 shadow-md shadow-primary/10 py-3 rounded-xl font-semibold text-white text-sm active:scale-95 transition-all">
                            <FaShoppingBag className="text-base" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;