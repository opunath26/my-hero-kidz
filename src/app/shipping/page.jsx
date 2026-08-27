import React from 'react';
import { FaTruck, FaMapMarkerAlt, FaBoxOpen, FaClock } from 'react-icons/fa';

export const metadata = {
  title: 'Shipping & Delivery | HeroKidz',
  description: 'Fast, secure, and nationwide delivery policies for HeroKidz toys and kids products.',
};

const ShippingInfo = () => {
  return (
    <div className="bg-slate-50/50 min-h-screen py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-12 border border-slate-200/80 rounded-3xl">
          
          {/* Page Header */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
            <span className="flex justify-center items-center bg-[#FF4500]/10 p-3.5 rounded-2xl text-[#FF4500] text-2xl sm:text-3xl shrink-0">
              <FaTruck />
            </span>
            <div>
              <h1 className="font-extrabold text-slate-900 text-2xl sm:text-4xl tracking-tight">
                Shipping & Delivery
              </h1>
              <p className="font-semibold text-slate-400 text-xs sm:text-sm mt-0.5">
                Fast, secure & reliable delivery across Bangladesh 🚀
              </p>
            </div>
          </div>

          {/* Grid Cards for Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2.5 mb-2 font-bold text-slate-800 text-sm sm:text-base">
                <FaClock className="text-[#FF4500]" />
                <h3>Inside Dhaka</h3>
              </div>
              <p className="text-slate-600 font-extrabold text-lg sm:text-xl">
                24 - 48 Hours
              </p>
              <p className="text-xs text-slate-400 mt-1">Standard Delivery Fee: 60 BDT</p>
            </div>

            <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2.5 mb-2 font-bold text-slate-800 text-sm sm:text-base">
                <FaMapMarkerAlt className="text-emerald-500" />
                <h3>Outside Dhaka</h3>
              </div>
              <p className="text-slate-600 font-extrabold text-lg sm:text-xl">
                2 - 4 Business Days
              </p>
              <p className="text-xs text-slate-400 mt-1">Standard Shipping Fee: 120 BDT</p>
            </div>
          </div>

          {/* Detailed Content Sections */}
          <div className="space-y-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
            <section className="bg-slate-50/50 p-4 sm:p-5 rounded-2xl border border-slate-100/80">
              <h2 className="mb-2 font-bold text-slate-800 text-base sm:text-lg flex items-center gap-2">
                <FaBoxOpen className="text-amber-500 text-sm" /> 1. Order Processing & Packaging
              </h2>
              <p>
                All orders are packed with utmost care using eco-friendly protective packaging to ensure your kids’ items arrive safely without any damage during transit.
              </p>
            </section>

            <section className="bg-slate-50/50 p-4 sm:p-5 rounded-2xl border border-slate-100/80">
              <h2 className="mb-2 font-bold text-slate-800 text-base sm:text-lg flex items-center gap-2">
                <FaTruck className="text-sky-500 text-sm" /> 2. Order Tracking & SMS Notifications
              </h2>
              <p>
                Once your order is dispatched, a tracking code alongside the delivery hero’s phone number will be sent directly to your registered phone number via SMS and email.
              </p>
            </section>

            <section className="bg-slate-50/50 p-4 sm:p-5 rounded-2xl border border-slate-100/80">
              <h2 className="mb-2 font-bold text-slate-800 text-base sm:text-lg">
                3. Cash on Delivery (COD) Policy
              </h2>
              <p>
                We support Cash on Delivery all across Bangladesh. Please inspect the outer parcel before receiving it from our delivery partner.
              </p>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;