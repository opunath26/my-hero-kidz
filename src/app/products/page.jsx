import Products from '@/components/home/Products';
import React from 'react';

export const metadata = {
  title: { default: "All Products"},
  description: "Explore our diverse range of products designed to meet your needs. From innovative solutions to everyday essentials, discover quality and value in every item we offer.",
};

const ProductsPage = () => {
    return (
        <div>
            <Products></Products>
        </div>
    );
};

export default ProductsPage;