import Products from '@/components/home/Products';
import { getProducts } from '@/actions/product';
import React from 'react';

export const metadata = {
  title: { default: "All Products" },
  description: "Explore our diverse range of products designed to meet your needs. From innovative solutions to everyday essentials, discover quality and value in every item we offer.",
};

const ProductsPage = async () => {
  const products = (await getProducts()) || [];

  return (
    <div>
      <Products initialProducts={products} />
    </div>
  );
};

export default ProductsPage;