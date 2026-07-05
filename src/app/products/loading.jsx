import ProductSkeleton from '@/components/skeletons/ProductSkeleton';
import React from 'react';

const loading = () => {
    return (
        <div className='gap-5 grid grid-cols-1 md:grid-cols-3 mx-auto my-12 px-4 max-w-7xl'>
            {[...Array(9)].map((_, index) => (
                <ProductSkeleton key={index}></ProductSkeleton>
            ))}            
        </div>
    );
};

export default loading;