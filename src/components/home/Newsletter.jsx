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
    <section className="bg-base-100 py-16">
      <div className="mx-auto px-4 max-w-5xl container">
        {/* Main Banner Container */}
        <div className="relative bg-gradient-to-br from-primary to-secondary shadow-xl p-8 md:p-12 rounded-3xl overflow-hidden text-primary-content text-center">
          
          {/* Background Decorative Circles */}
          <div className="-top-10 -left-10 absolute bg-white/10 blur-xl rounded-full w-40 h-40 pointer-events-none"></div>
          <div className="-right-10 -bottom-10 absolute bg-white/15 blur-2xl rounded-full w-52 h-52 pointer-events-none"></div>

          {/* Content */}
          <div className="z-10 relative mx-auto max-w-2xl">
            <span className="inline-block bg-white/20 mb-4 px-4 py-1.5 rounded-full font-bold text-white text-xs md:text-sm uppercase tracking-widest">
              Join the Club
            </span>
            
            <h2 className="mb-3 font-black text-white text-3xl md:text-4xl tracking-tight">
              Get <span className="decoration-warning decoration-wavy underline">10% Off</span> Your First Order!
            </h2>
            
            <p className="mx-auto mb-8 max-w-md text-white/80 text-sm md:text-base leading-relaxed">
              Subscribe to our newsletter to receive weekly safe-play tips, exclusive discounts, and early access to new toys.
            </p>

            {/* Subscription Form */}
            <form onSubmit={handleSubscribe} className="mx-auto max-w-md">
              <div className="form-control">
                <div className="relative flex items-center">
                  {/* Mail Icon */}
                  <span className="left-4 z-20 absolute text-base-content/50">
                    <FiMail className="w-5 h-5 text-gray-400" />
                  </span>
                  
                  {/* Input Box */}
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white shadow-inner pr-32 pl-12 border-none rounded-full focus:outline-none w-full font-medium text-sm text-base-content input input-lg placeholder-gray-400"
                  />
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="hidden right-2 absolute sm:flex items-center gap-2 px-5 rounded-full h-11 font-bold text-white hover:scale-105 transition-transform duration-200 btn btn-warning btn-sm"
                  >
                    Subscribe <FiSend className="w-4 h-4" />
                  </button>
                </div>

                {/* Mobile Screen Support for Button */}
                <button
                  type="submit"
                  className="sm:hidden flex justify-center items-center gap-2 mt-3 rounded-full w-full font-bold text-white btn btn-warning"
                >
                  Subscribe <FiSend className="w-4 h-4" />
                </button>
              </div>
            </form>
            
            <p className="mt-4 text-white/60 text-xs">
              We care about your privacy. Unsubscribe anytime in one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;