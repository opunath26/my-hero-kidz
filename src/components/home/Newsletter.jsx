"use client";
import React, { useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you! ${email} has been successfully added to our Hero Kidz Club! 🎁`);
    setEmail('');
  };

  return (
    <section className="bg-base-100 py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-5xl container">
        {/* Main Banner Container with playful tilt and shadow depth */}
        <div className="group relative bg-gradient-to-br from-primary via-primary to-secondary shadow-xl hover:shadow-2xl p-8 md:p-12 border border-white/10 rounded-[2.5rem] overflow-hidden text-primary-content text-center transition-all duration-500">
          
          {/* Background Decorative Circles with subtle pulse animations */}
          <div className="-top-12 -left-12 absolute bg-white/10 blur-xl rounded-full w-44 h-44 animate-pulse duration-3000 pointer-events-none"></div>
          <div className="-right-12 -bottom-12 absolute bg-white/15 blur-2xl rounded-full w-56 h-56 group-hover:scale-110 transition-transform duration-700 pointer-events-none"></div>

          {/* Content */}
          <div className="z-10 relative mx-auto max-w-2xl">
            <span className="inline-block bg-white/20 mb-4 px-4 py-1.5 rounded-full font-bold text-white text-xs md:text-sm uppercase tracking-widest animate-pulse">
              Join the Club 🥳
            </span>
            
            <h2 className="mb-4 font-black text-white text-3xl md:text-5xl leading-none tracking-tight">
              Get <span className="decoration-warning decoration-wavy underline">10% Off</span> Your First Order!
            </h2>
            
            <p className="mx-auto mb-8 max-w-md font-medium text-white/90 text-sm md:text-base leading-relaxed">
              Subscribe to our newsletter to receive weekly safe-play tips, exclusive discounts, and early access to new toys.
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubscribe} className="mx-auto max-w-md active:scale-[0.99] transition-transform">
              <div className="form-control">
                <div className="group/btn relative flex items-center">
                  {/* Mail Icon */}
                  <span className="left-4 z-20 absolute text-base-content/40">
                    <FiMail className="w-5 h-5 group-focus-within/btn:text-primary transition-colors" />
                  </span>
                  
                  {/* Input Box */}
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white shadow-inner pr-36 pl-12 border-2 border-transparent focus:border-warning/50 rounded-full focus:outline-none w-full h-14 font-bold text-sm text-base-content transition-all placeholder-gray-400/80"
                  />
                  
                  {/* Submit Button (Desktop) with paper-plane launch effect */}
                  <button
                    type="submit"
                    className="hidden right-2 absolute sm:flex items-center gap-2 shadow-md px-6 rounded-full h-10 font-black text-white hover:scale-105 active:scale-95 transition-all hover:-translate-y-0.5 duration-200 btn btn-warning btn-sm"
                  >
                    <span>Subscribe</span> 
                    <FiSend className="w-4 h-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-1 duration-300" />
                  </button>
                </div>

                {/* Mobile Screen Support for Button */}
                <button
                  type="submit"
                  className="sm:hidden flex justify-center items-center gap-2 shadow-md mt-4 rounded-full h-12 font-black text-white active:scale-95 transition-transform btn btn-warning"
                >
                  <span>Subscribe</span> 
                  <FiSend className="w-4 h-4" />
                </button>
              </div>
            </form>
            
            <p className="mt-5 font-medium text-white/70 text-xs">
              We care about your privacy. Unsubscribe anytime in one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;