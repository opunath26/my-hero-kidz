import React from 'react';
import { FiShoppingBag, FiCreditCard, FiGift } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FiShoppingBag className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />,
      title: "Discover & Select",
      description: "Browse our child-safe collection and pick the perfect toys or gear based on your kid's age and interests.",
      bgColor: "bg-primary/10 text-primary",
      borderColor: "group-hover:border-primary/30",
    },
    {
      id: 2,
      icon: <FiCreditCard className="w-7 h-7 text-secondary group-hover:scale-110 transition-transform duration-300" />,
      title: "Fast & Secure Checkout",
      description: "Complete your order with our 100% secure payment system. It only takes a few clicks to seal the deal.",
      bgColor: "bg-secondary/10 text-secondary",
      borderColor: "group-hover:border-secondary/30",
    },
    {
      id: 3,
      icon: <FiGift className="w-7 h-7 text-success group-hover:scale-110 transition-transform duration-300" />,
      title: "Box of Joy Arrives!",
      description: "Watch your little hero jump with joy as our super-fast delivery bring happiness straight to your doorstep.",
      bgColor: "bg-success/10 text-success",
      borderColor: "group-hover:border-success/30",
    },
  ];

  return (
    <section className="bg-base-100 py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-5xl container">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="bg-secondary/10 px-4 py-1.5 rounded-full font-bold text-secondary text-sm uppercase tracking-wider animate-pulse">
            Easy Process 🚀
          </span>
          <h2 className="mt-4 font-black text-base-content text-3xl md:text-4xl tracking-tight">
            How It <span className="text-secondary decoration-warning decoration-wavy underline">Works</span>
          </h2>
          <p className="mx-auto mt-2 max-w-sm text-sm text-base-content/60 md:text-base">
            Bringing smiles to your little ones is now as easy as 1-2-3!
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative gap-10 md:gap-6 grid grid-cols-1 md:grid-cols-3">
          
          {/* Connecting Line (Only visible on Desktop) */}
          <div className="hidden md:block top-12 right-[16%] left-[16%] z-0 absolute border-base-300 border-t-2 border-dashed h-0.5"></div>

          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="group z-10 relative flex flex-col items-center bg-base-200/30 hover:bg-base-100 hover:shadow-xl p-6 border border-transparent rounded-[2rem] active:scale-95 transition-all hover:-translate-y-2 duration-300 cursor-pointer"
            >
              {/* Step Number Badge inside the card */}
              <span className="top-4 right-6 absolute font-black text-base-content/10 text-4xl select-none">
                0{index + 1}
              </span>

              {/* Icon / Circle Badge with rotation & pulse glow on hover */}
              <div className={`w-20 h-20 rounded-2xl ${step.bgColor} flex items-center justify-center border-4 border-base-100 shadow-md group-hover:rotate-12 transition-all duration-300 mb-6 relative`}>
                {step.icon}
              </div>

              {/* Step Title */}
              <h3 className="mb-2 font-extrabold group-hover:text-secondary text-base-content text-lg md:text-xl tracking-tight transition-colors duration-200">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="max-w-xs font-medium text-sm text-base-content/60 leading-relaxed">
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