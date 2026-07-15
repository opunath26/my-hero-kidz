import React from 'react';
import { FiShoppingBag, FiCreditCard, FiGift } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FiShoppingBag className="w-6 h-6 text-primary" />,
      title: "1. Discover & Select",
      description: "Browse our child-safe collection and pick the perfect toys or gear based on your kid's age and interests.",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      id: 2,
      icon: <FiCreditCard className="w-6 h-6 text-secondary" />,
      title: "2. Fast & Secure Checkout",
      description: "Complete your order with our 100% secure payment system. It only takes a few clicks to seal the deal.",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary",
    },
    {
      id: 3,
      icon: <FiGift className="w-6 h-6 text-success" />,
      title: "3. Box of Joy Arrives!",
      description: "Watch your little hero jump with joy as our super-fast delivery bring happiness straight to your doorstep.",
      bgColor: "bg-success/10",
      textColor: "text-success",
    },
  ];

  return (
    <section className="bg-base-100 py-16">
      <div className="mx-auto px-4 max-w-5xl container">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="bg-secondary/10 px-4 py-1.5 rounded-full font-bold text-secondary text-sm uppercase tracking-wider">
            Easy Process
          </span>
          <h2 className="mt-3 font-extrabold text-base-content text-3xl md:text-4xl">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-base-content/70 md:text-base">
            Bringing smiles to your little ones is now as easy as 1-2-3!
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative gap-10 md:gap-6 grid grid-cols-1 md:grid-cols-3">
          
          {/* Connecting Line (Only visible on Desktop) */}
          <div className="hidden md:block top-1/4 right-[15%] left-[15%] z-0 absolute border-base-300 border-t-2 border-dashed h-0.5"></div>

          {steps.map((step) => (
            <div 
              key={step.id} 
              className="group z-10 relative flex flex-col items-center px-4 text-center"
            >
              {/* Icon / Circle Badge */}
              <div className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center border-4 border-base-100 shadow-md group-hover:scale-110 transition-transform duration-300 mb-6`}>
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="mb-2 font-black text-base-content text-lg tracking-tight">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="max-w-xs text-sm text-base-content/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;