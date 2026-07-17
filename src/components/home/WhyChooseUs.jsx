import React from 'react';
import { FiHeart, FiShield, FiTruck, FiSmile } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FiShield className="w-8 h-8 text-error group-hover:scale-110 transition-transform duration-300" />,
      title: "100% Child Safe",
      description: "Our products and materials are certified non-toxic and absolutely safe for your little heroes.",
      bgColor: "bg-error/10 text-error",
      borderColor: "hover:border-error/20",
    },
    {
      id: 2,
      icon: <FiHeart className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />,
      title: "Made With Love",
      description: "Every item is carefully selected and designed to bring maximum joy and learning to your kids.",
      bgColor: "bg-primary/10 text-primary",
      borderColor: "hover:border-primary/20",
    },
    {
      id: 3,
      icon: <FiTruck className="w-8 h-8 text-success group-hover:scale-110 transition-transform duration-300" />,
      title: "Super Fast Delivery",
      description: "We ensure lightning-fast and secure delivery right to your doorstep, with care.",
      bgColor: "bg-success/10 text-success",
      borderColor: "hover:border-success/20",
    },
    {
      id: 4,
      icon: <FiSmile className="w-8 h-8 text-warning group-hover:scale-110 transition-transform duration-300" />,
      title: "Happy Customers",
      description: "Over 10,000+ parents trust Hero Kidz for their children's daily smiles and growth.",
      bgColor: "bg-warning/10 text-warning",
      borderColor: "hover:border-warning/20",
    },
  ];

  return (
    <section className="bg-base-100 py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-6xl container">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="bg-primary/10 px-4 py-1.5 rounded-full font-bold text-primary text-sm uppercase tracking-wider animate-pulse">
            Why Choose Us? 🤔
          </span>
          <h2 className="mt-4 font-black text-base-content text-3xl md:text-4xl tracking-tight">
            Why Parents Trust <span className="text-primary decoration-success decoration-wavy underline">Hero Kidz</span>
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-base-content/60 md:text-base">
            We provide the best quality and safest experience for your children's happy childhood.
          </p>
        </div>

        {/* Features Grid */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`group flex flex-col items-center bg-base-200/40 hover:bg-base-100 hover:shadow-xl p-6 border border-base-300/80 ${feature.borderColor} rounded-[2rem] text-center transition-all duration-300 hover:-translate-y-2 hover:rotate-1 active:scale-95 cursor-pointer card`}
            >
              {/* Icon Container with bouncy effect on group-hover */}
              <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} mb-5 flex items-center justify-center transition-all duration-300 group-hover:animate-bounce shadow-inner`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="mb-2 font-extrabold group-hover:text-primary text-base-content text-lg transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="px-2 font-medium text-sm text-base-content/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;