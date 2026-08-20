import React from 'react';
import { getSingleProduct, getRelatedProducts } from '@/actions/product';
import ProductDetailsClient from '@/components/products/ProductDetailsClient';

export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    const product = await getSingleProduct(id);

    if (!product || !product.title) {
        return {
            title: "Product Not Found",
            description: "The product you are looking for is not available.",
        };
    }

    const shortDescription = product.description 
        ? `${product.description.substring(0, 160)}...` 
        : "Explore quality and value in our curated selection of premium toys and kids essentials.";

    return {
        title: product.title,
        description: shortDescription,
        openGraph: {
            title: `${product.title} | Hero Kidz`,
            description: shortDescription,
            url: `https://hero-kidz-iota.vercel.app/products/${id}`,
            siteName: "Hero Kidz",
            images: [
                {
                    url: product.image || "https://i.ibb.co.com/N2ww2RBw/product.png",
                    width: 1200,
                    height: 630,
                    alt: product.title,
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: `${product.title} | Hero Kidz`,
            description: shortDescription,
            images: [product.image || "https://i.ibb.co.com/N2ww2RBw/product.png"],
        },
    };
};

const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    const product = await getSingleProduct(id);

    let relatedProducts = [];
    try {
        if (typeof getRelatedProducts === 'function') {
            relatedProducts = await getRelatedProducts(id);
        }
    } catch (error) {
        console.error("Error loading related products:", error);
    }

    return <ProductDetailsClient product={product} relatedProducts={relatedProducts} />;
};

export default ProductDetailsPage;