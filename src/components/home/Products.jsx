import React from 'react';
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/product'

const Products = async () => {
    const products = (await getProducts()) || [];
    return (
        <div>
            <h2 className='font-bold text-slate-800 text-3xl text-center'>Our Products</h2>
            <div className='gap-5 grid grid-cols-1 md:grid-cols-4 mt-10'>
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    ); 
};

export default Products;