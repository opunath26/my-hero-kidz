import React from 'react';
import { FaTruck } from 'react-icons/fa';

export const metadata = {
  title: 'Shipping Info | HeroKidz',
  description: 'Shipping details and delivery policies for HeroKidz.',
};

const ShippingInfo = () => {
  return (
    <div className="bg-slate-50/50 py-16 min-h-screen">
      <div className="mx-auto px-4 max-w-4xl container">
        <div className="bg-white shadow-sm p-8 sm:p-12 border border-slate-200/80 rounded-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex justify-center items-center bg-emerald-500/10 p-3 rounded-2xl text-emerald-600 text-2xl">
              <FaTruck />
            </span>
            <div>
              <h1 className="font-extrabold text-slate-900 text-3xl sm:text-4xl">Shipping & Delivery</h1>
              <p className="font-medium text-slate-400 text-xs">Fast delivery across Bangladesh</p>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">1. Delivery Timeline</h2>
              <p>Inside Dhaka: 24 - 48 Hours.<br />Outside Dhaka: 2 - 4 Business Days.</p>
            </section>

            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">2. Shipping Charges</h2>
              <p>Inside Dhaka standard delivery fee is 60 BDT. Outside Dhaka standard shipping fee is 120 BDT.</p>
            </section>

            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">3. Order Tracking</h2>
              <p>Once your order is dispatched, a SMS and email containing the tracking code will be sent to your registered contact details.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;