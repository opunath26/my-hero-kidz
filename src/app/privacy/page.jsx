import React from 'react';
import { FaShieldAlt, FaUserLock, FaLock, FaUserCheck, FaShareAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Privacy Policy | HeroKidz',
  description: 'Privacy Policy and data protection guidelines for HeroKidz online store.',
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50/50 px-4 py-12 sm:py-16 min-h-screen">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white shadow-sm hover:shadow-md p-6 sm:p-12 border border-slate-200/80 rounded-3xl transition-shadow duration-300">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-8 pb-6 border-slate-100 border-b">
            <span className="flex justify-center items-center bg-[#FF4500]/10 p-3.5 rounded-2xl text-[#FF4500] text-2xl sm:text-3xl shrink-0">
              <FaShieldAlt />
            </span>
            <div>
              <h1 className="font-extrabold text-slate-900 text-2xl sm:text-4xl tracking-tight">
                Privacy Policy
              </h1>
              <p className="mt-0.5 font-semibold text-slate-400 text-xs sm:text-sm">
                Your data security & privacy is our top priority 🛡️
              </p>
            </div>
          </div>

          {/* Quick Security Badge */}
          <div className="flex items-center gap-3 bg-emerald-500/10 mb-8 p-4 border border-emerald-500/20 rounded-2xl">
            <FaUserLock className="text-emerald-600 text-xl shrink-0" />
            <p className="font-bold text-emerald-800 text-xs sm:text-sm">
              HeroKidz guarantees that your personal information is encrypted and strictly protected.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
            <section className="bg-slate-50/50 p-5 border border-slate-100/80 hover:border-orange-500/20 rounded-2xl transition-colors">
              <h2 className="flex items-center gap-2 mb-2 font-bold text-slate-800 text-base sm:text-lg">
                <FaUserCheck className="text-orange-500 text-sm" /> 1. Information We Collect
              </h2>
              <p>
                We collect essential personal information such as your full name, email address, phone number, and shipping address when you register an account or complete an order on HeroKidz.
              </p>
            </section>

            <section className="bg-slate-50/50 p-5 border border-slate-100/80 hover:border-orange-500/20 rounded-2xl transition-colors">
              <h2 className="flex items-center gap-2 mb-2 font-bold text-slate-800 text-base sm:text-lg">
                <FaShieldAlt className="text-emerald-500 text-sm" /> 2. How We Use Your Information
              </h2>
              <p>
                Your details are strictly used for order processing, account management, customer service support, and delivery fulfillment. We may send promotional updates only if you opt-in.
              </p>
            </section>

            <section className="bg-slate-50/50 p-5 border border-slate-100/80 hover:border-orange-500/20 rounded-2xl transition-colors">
              <h2 className="flex items-center gap-2 mb-2 font-bold text-slate-800 text-base sm:text-lg">
                <FaLock className="text-sky-500 text-sm" /> 3. Data Security & Encryption
              </h2>
              <p>
                We employ modern encryption protocols and secure database architectures to protect your credentials, payment records, and personal profiles against unauthorized access or disclosure.
              </p>
            </section>

            <section className="bg-slate-50/50 p-5 border border-slate-100/80 hover:border-orange-500/20 rounded-2xl transition-colors">
              <h2 className="flex items-center gap-2 mb-2 font-bold text-slate-800 text-base sm:text-lg">
                <FaShareAlt className="text-amber-500 text-sm" /> 4. Third-Party Sharing
              </h2>
              <p>
                We never sell, rent, or trade your personal data to third-party advertisers. Information is shared strictly with trusted logistics partners solely to facilitate fast product delivery.
              </p>
            </section>
          </div>

          {/* Footer Note */}
          <div className="mt-8 pt-6 border-slate-100 border-t text-center">
            <p className="font-medium text-slate-400 text-xs">
              Last updated: August 2026 • HeroKidz Security Team
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;