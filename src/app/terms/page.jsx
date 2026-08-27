import React from 'react';
import { FaFileContract, FaUserCheck, FaTag, FaUndo, FaGavel } from 'react-icons/fa';

export const metadata = {
  title: 'Terms & Conditions | HeroKidz',
  description: 'Terms and Conditions of service for HeroKidz online store.',
};

const TermsAndConditions = () => {
  return (
    <div className="bg-slate-50/50 px-4 py-12 sm:py-16 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white shadow-sm hover:shadow-md p-6 sm:p-12 border border-slate-200/80 rounded-3xl transition-shadow duration-300">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-slate-100 border-b">
            <span className="flex justify-center items-center bg-amber-500/10 p-3.5 rounded-2xl text-amber-600 text-2xl sm:text-3xl shrink-0">
              <FaFileContract />
            </span>
            <div>
              <h1 className="font-extrabold text-slate-900 text-2xl sm:text-4xl tracking-tight">
                Terms & Conditions
              </h1>
              <p className="mt-0.5 font-semibold text-slate-400 text-xs sm:text-sm">
                Rules & guidelines for using HeroKidz 📜
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
            <section className="bg-slate-50/50 p-5 border border-slate-100/80 hover:border-amber-500/20 rounded-2xl transition-colors">
              <h2 className="flex items-center gap-2 mb-2 font-bold text-slate-800 text-base sm:text-lg">
                <FaUserCheck className="text-amber-500 text-sm" /> 1. User Account & Responsibilities
              </h2>
              <p>
                Users are responsible for maintaining the confidentiality of their account credentials and for all activities under their account. HeroKidz reserves the right to suspend accounts providing misleading information.
              </p>
            </section>

            <section className="bg-slate-50/50 p-5 border border-slate-100/80 hover:border-amber-500/20 rounded-2xl transition-colors">
              <h2 className="flex items-center gap-2 mb-2 font-bold text-slate-800 text-base sm:text-lg">
                <FaTag className="text-[#FF4500] text-sm" /> 2. Product Pricing & Availability
              </h2>
              <p>
                Prices and stock availability are subject to change without prior notice. HeroKidz reserves the right to cancel orders or refund payments in case of technical or pricing errors.
              </p>
            </section>

            <section className="bg-slate-50/50 p-5 border border-slate-100/80 hover:border-amber-500/20 rounded-2xl transition-colors">
              <h2 className="flex items-center gap-2 mb-2 font-bold text-slate-800 text-base sm:text-lg">
                <FaUndo className="text-sky-500 text-sm" /> 3. Return & Refund Policy
              </h2>
              <p>
                Products can be returned within 7 days of delivery if received damaged, defective, or incorrect. Returned items must be unused, unwashed, and kept in their original packaging.
              </p>
            </section>

            <section className="bg-slate-50/50 p-5 border border-slate-100/80 hover:border-amber-500/20 rounded-2xl transition-colors">
              <h2 className="flex items-center gap-2 mb-2 font-bold text-slate-800 text-base sm:text-lg">
                <FaGavel className="text-emerald-500 text-sm" /> 4. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the legal framework and laws of Bangladesh.
              </p>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-slate-100 border-t text-center">
            <p className="font-medium text-slate-400 text-xs">
              Last updated: August 2026 • HeroKidz Legal Team
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;