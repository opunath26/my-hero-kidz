import React from 'react';
import { FaFileContract } from 'react-icons/fa';

export const metadata = {
  title: 'Terms & Conditions | HeroKidz',
  description: 'Terms and Conditions of service for HeroKidz.',
};

const TermsAndConditions = () => {
  return (
    <div className="bg-slate-50/50 py-16 min-h-screen">
      <div className="mx-auto px-4 max-w-4xl container">
        <div className="bg-white shadow-sm p-8 sm:p-12 border border-slate-200/80 rounded-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex justify-center items-center bg-amber-500/10 p-3 rounded-2xl text-amber-600 text-2xl">
              <FaFileContract />
            </span>
            <div>
              <h1 className="font-extrabold text-slate-900 text-3xl sm:text-4xl">Terms & Conditions</h1>
              <p className="font-medium text-slate-400 text-xs">Last updated: August 2026</p>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">1. User Account & Responsibilities</h2>
              <p>Users are responsible for maintaining the confidentiality of their account credentials and for all activities under their account.</p>
            </section>

            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">2. Product Pricing & Availability</h2>
              <p>Prices and stock availability are subject to change without prior notice. HeroKidz reserves the right to cancel orders in case of pricing errors.</p>
            </section>

            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">3. Return & Refund Policy</h2>
              <p>Products can be returned within 7 days of delivery if damaged or incorrect. Returned items must be unused and in original packaging.</p>
            </section>

            <section>
              <h2 className="mb-2 font-bold text-slate-800 text-lg">4. Governing Law</h2>
              <p>These terms are governed by and construed in accordance with the laws of Bangladesh.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;