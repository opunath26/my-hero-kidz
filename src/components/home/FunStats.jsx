import React from 'react';
import { FiSmile, FiShield, FiAward, FiStar } from 'react-icons/fi';

const FunStats = () => {
  const stats = [
    {
      id: 1,
      icon: <FiSmile className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />,
      count: "10,000+",
      title: "Happy Smiles",
      subtitle: "Delivered Packages of Joy",
      bgColor: "bg-primary/10 text-primary",
      borderColor: "hover:border-primary/20",
    },
    {
      id: 2,
      icon: <FiShield className="w-8 h-8 text-success group-hover:scale-110 transition-transform duration-300" />,
      count: "100%",
      title: "Child-Safe",
      subtitle: "Non-Toxic Certified Toys",
      bgColor: "bg-success/10 text-success",
      borderColor: "hover:border-success/20",
    },
    {
      id: 3,
      icon: <FiAward className="w-8 h-8 text-warning group-hover:scale-110 transition-transform duration-300" />,
      count: "500+",
      title: "Hero Products",
      subtitle: "Expertly Curated Items",
      bgColor: "bg-warning/10 text-warning",
      borderColor: "hover:border-warning/20",
    },
    {
      id: 4,
      icon: <FiStar className="w-8 h-8 text-error group-hover:scale-110 transition-transform duration-300" />,
      count: "4.9/5",
      title: "Parents Rating",
      subtitle: "Top Rated on Reviews",
      bgColor: "bg-error/10 text-error",
      borderColor: "hover:border-error/20",
    },
  ];

  return (
    <section className="bg-base-200/30 py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-6xl container">
        {/* Stats Grid */}
        <div className="gap-6 grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className={`group flex flex-col items-center bg-base-100 hover:shadow-xl p-6 border border-base-300/80 ${stat.borderColor} rounded-[2rem] text-center transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 active:scale-95 cursor-pointer card`}
            >
              {/* Floating Icon Wrapper with bounce animation on group-hover */}
              <div className={`p-4 rounded-2xl ${stat.bgColor} mb-5 flex items-center justify-center transition-all duration-300 group-hover:animate-bounce shadow-inner`}>
                {stat.icon}
              </div>
              
              {/* Stat Number with slight scaling on hover */}
              <div className="font-black text-base-content text-3xl md:text-4xl tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.count}
              </div>
              
              {/* Title */}
              <h3 className="mt-2 font-extrabold group-hover:text-primary text-sm text-base-content/95 md:text-base transition-colors duration-200">
                {stat.title}
              </h3>
              
              {/* Fun Subtitle */}
              <p className="mt-1 px-2 font-medium text-xs text-base-content/50 leading-snug">
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