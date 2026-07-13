import React from 'react';
import { FiHeart, FiShield, FiTruck, FiSmile } from 'react-icons/fi'; // react-icons থেকে ইমপোর্ট করা হয়েছে

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FiShield className="w-8 h-8 text-error" />,
      title: "100% Child Safe",
      description: "Our products and materials are certified non-toxic and absolutely safe for your little heroes.",
      bgColor: "bg-error/10",
    },
    {
      id: 2,
      icon: <FiHeart className="w-8 h-8 text-primary" />,
      title: "Made With Love",
      description: "Every item is carefully selected and designed to bring maximum joy and learning to your kids.",
      bgColor: "bg-primary/10",
    },
    {
      id: 3,
      icon: <FiTruck className="w-8 h-8 text-success" />,
      title: "Super Fast Delivery",
      description: "We ensure lightning-fast and secure delivery right to your doorstep, with care.",
      bgColor: "bg-success/10",
    },
    {
      id: 4,
      icon: <FiSmile className="w-8 h-8 text-warning" />,
      title: "Happy Customers",
      description: "Over 10,000+ parents trust Hero Kidz for their children's daily smiles and growth.",
      bgColor: "bg-warning/10",
    },
  ];

  return (
    <section className="bg-base-100 py-16">
      <div className="mx-auto px-4 max-w-6xl container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="bg-primary/10 px-4 py-1.5 rounded-full font-bold text-primary text-sm uppercase tracking-wider">
            Why Choose Us?
          </span>
          <h2 className="mt-3 font-extrabold text-base-content text-3xl md:text-4xl">
            Why Parents Trust <span className="text-primary">Hero Kidz</span>
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-base-content/70 md:text-base">
            We provide the best quality and safest experience for your children's happy childhood.
          </p>
        </div>

        {/* Features Grid */}
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center bg-base-200 shadow-sm hover:shadow-md p-6 border border-base-300 rounded-3xl text-center transition-all duration-300 card"
            >
              {/* Icon Container */}
              <div className={`p-4 rounded-full ${feature.bgColor} mb-4 flex items-center justify-center`}>
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="mb-2 font-bold text-base-content text-lg">
                {feature.title}
              </h3>
              <p className="text-sm text-base-content/70 leading-relaxed">
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