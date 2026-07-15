import React from 'react';
import { FiSmile, FiShield, FiAward, FiStar } from 'react-icons/fi';
const FunStats = () => {
  const stats = [
    {
      id: 1,
      icon: <FiSmile className="w-8 h-8 text-primary" />,
      count: "10,000+",
      title: "Happy Smiles",
      subtitle: "Delivered Packages of Joy",
      bgColor: "bg-primary/10",
    },
    {
      id: 2,
      icon: <FiShield className="w-8 h-8 text-success" />,
      count: "100%",
      title: "Child-Safe",
      subtitle: "Non-Toxic Certified Toys",
      bgColor: "bg-success/10",
    },
    {
      id: 3,
      icon: <FiAward className="w-8 h-8 text-warning" />,
      count: "500+",
      title: "Hero Products",
      subtitle: "Expertly Curated Items",
      bgColor: "bg-warning/10",
    },
    {
      id: 4,
      icon: <FiStar className="w-8 h-8 text-error" />,
      count: "4.9/5",
      title: "Parents Rating",
      subtitle: "Top Rated on Reviews",
      bgColor: "bg-error/10",
    },
  ];

  return (
    <section className="bg-base-200/40 py-12">
      <div className="mx-auto px-4 max-w-6xl container">
        {/* Stats Grid */}
        <div className="gap-6 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center bg-base-100 shadow-sm hover:shadow-md p-6 border border-base-300 rounded-3xl text-center transition-all hover:-translate-y-1 duration-300 card"
            >
              {/* Floating Icon Wrapper */}
              <div className={`p-4 rounded-2xl ${stat.bgColor} mb-4 flex items-center justify-center`}>
                {stat.icon}
              </div>
              
              {/* Stat Number */}
              <div className="font-black text-base-content text-2xl md:text-3xl tracking-tight">
                {stat.count}
              </div>
              
              {/* Title */}
              <h3 className="mt-1 font-bold text-sm text-base-content/90 md:text-base">
                {stat.title}
              </h3>
              
              {/* Fun Subtitle */}
              <p className="mt-0.5 text-xs text-base-content/50 leading-tight">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunStats;