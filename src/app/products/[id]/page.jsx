import React from 'react';
import Image from 'next/image';
import { getSingleProduct } from '@/actions/product';
import { FaShoppingBag, FaStar } from 'react-icons/fa';

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    const product = await getSingleProduct(id);

    if (!product || !product.title) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <p className="font-semibold text-slate-600 text-xl">Product not found!</p>
            </div>
        );
    }

    const { title, image, price, discount, ratings, description } = product;
    const hasDiscount = discount > 0;
    const discountedPrice = hasDiscount ? Math.round(price - (price * discount) / 100) : price;

    return (
        <div className="mx-auto my-12 px-4 max-w-7xl">
            <div className="gap-10 grid grid-cols-1 md:grid-cols-2 bg-white shadow-sm p-6 md:p-10 border border-slate-100 rounded-3xl">
                
                <div className="relative flex justify-center items-center bg-slate-50 p-6 rounded-2xl w-full aspect-square overflow-hidden">
                    {hasDiscount && (
                        <div className="top-4 left-4 z-10 absolute bg-red-500 px-3 py-1 rounded-lg font-bold text-white text-sm">
                            {discount}% OFF
                        </div>
                    )}
                    <div className="relative w-full h-full">
                        <Image
                            src={image || "https://placehold.co/600"}
                            alt={title}
                            fill
                            priority
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                        <h1 className="font-extrabold text-slate-800 text-2xl md:text-4xl leading-tight">
                            {title}
                        </h1>

                        <div className="flex items-center space-x-2 text-sm">
                            <div className="flex items-center space-x-1 text-amber-400">
                                <FaStar />
                                <span className="font-bold text-slate-700">{ratings || 0}</span>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        <div className="flex items-baseline space-x-3">
                            <span className="font-black text-primary text-3xl">৳{discountedPrice}</span>
                            {hasDiscount && (
                                <span className="font-medium text-slate-400 text-lg line-through">৳{price}</span>
                            )}
                        </div>

                        <div className="pt-2 text-slate-600 leading-relaxed">
                            <p>{description || "No description available for this product."}</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button className="flex justify-center items-center gap-3 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 py-4 rounded-2xl w-full md:w-2/3 font-bold text-white text-lg active:scale-[0.98] transition-all">
                            <FaShoppingBag />
                            Add to Cart
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetailsPage;