import React from 'react';

const ProductSkeleton = () => {
    return (
        <div className="flex flex-col justify-between space-y-4 bg-white shadow-sm p-5 border border-slate-100 rounded-2xl">
            <div className="space-y-4">
                {/* Image Skeleton */}
                <div className="bg-slate-200 rounded-xl w-full aspect-square skeleton"></div>
                
                {/* Title Skeleton */}
                <div className="space-y-2">
                    <div className="bg-slate-200 w-full h-5 skeleton"></div>
                    <div className="bg-slate-200 w-2/3 h-5 skeleton"></div>
                </div>

                {/* Rating Skeleton */}
                <div className="flex items-center space-x-2">
                    <div className="bg-slate-200 w-24 h-4 skeleton"></div>
                    <div className="bg-slate-200 w-8 h-4 skeleton"></div>
                </div>
            </div>

            {/* Price & Button Skeleton */}
            <div className="space-y-3 pt-2">
                <div className="bg-slate-200 w-20 h-7 skeleton"></div>
                <div className="bg-slate-200 rounded-xl w-full h-12 skeleton"></div>
            </div>
        </div>
    );
};

export default ProductSkeleton;