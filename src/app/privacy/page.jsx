import React from 'react';
import { FaShieldAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Privacy Policy | HeroKidz',
  description: 'Privacy Policy for HeroKidz online store.',
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50/50 py-16 min-h-screen">
      <div className="mx-auto px-4 max-w-4xl container">
        <div className="bg-white shadow-sm p-8 sm:p-12 border border-slate-200/80 rounded-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex justify-center items-center bg-orange-500/10 p-3 rounded-2xl text-[#FF4500] text-2xl">
              <FaShieldAlt />
            </span>
            <div>
              <h1 className="font-extrabold text-slate-900 text-3xl sm:text-4xl">Privacy Policy</h1>
              <p className="font-medium text-slate-400 text-xs">Last updated: August 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">1. Information We Collect</h2>
              <p>We collect personal information such as name, email address, phone number, and delivery address when you place an order or create an account with HeroKidz.</p>
            </section>

            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">2. How We Use Your Information</h2>
              <p>Your details are strictly used for order processing, customer support, delivery fulfillment, and sending promotional offers (if opted in).</p>
            </section>

            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">3. Data Security & Protection</h2>
              <p>We implement robust security measures to safeguard your credentials and personal information against unauthorized access or disclosure.</p>
            </section>

            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">4. Third-Party Sharing</h2>
              <p>We do not sell or trade your data to third parties. Information is only shared with logistics partners solely for delivery purposes.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;