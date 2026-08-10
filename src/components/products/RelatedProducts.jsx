"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductCard from '../cards/ProductCard';

const RelatedProducts = ({ products = [] }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="my-12 py-6">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-black text-base-content text-2xl md:text-3xl">
            Related Products
          </h2>
          <p className="mt-1 text-zinc-500 text-sm">
            You might also like these awesome products
          </p>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          // Mobile Screen (>= 640px)
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // Tablet Screen (>= 768px)
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // Desktop Screen (>= 1024px)
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        className="!pb-12 related-products-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id || product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelatedProducts;