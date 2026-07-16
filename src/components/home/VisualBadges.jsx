import React from 'react';
import { FiHeart, FiBookOpen, FiActivity, FiSmile } from 'react-icons/fi';

const VisualBadges = () => {
  const categories = [
    {
      id: 1,
      title: "Soft Toys",
      count: "120+ Items",
      icon: <FiHeart className="w-7 h-7 text-error group-hover:scale-110 transition-transform" />,
      bgColor: "bg-error/10 text-error",
      borderColor: "hover:border-error/30",
      badgeColor: "group-hover:bg-error group-hover:text-white",
    },
    {
      id: 2,
      title: "Story Books",
      count: "85+ Items",
      icon: <FiBookOpen className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />,
      bgColor: "bg-primary/10 text-primary",
      borderColor: "hover:border-primary/30",
      badgeColor: "group-hover:bg-primary group-hover:text-white",
    },
    {
      id: 3,
      title: "Puzzles & Games",
      count: "150+ Items",
      icon: <FiActivity className="w-7 h-7 text-success group-hover:scale-110 transition-transform" />,
      bgColor: "bg-success/10 text-success",
      borderColor: "hover:border-success/30",
      badgeColor: "group-hover:bg-success group-hover:text-white",
    },
    {
      id: 4,
      title: "Art & Crafts",
      count: "60+ Items",
      icon: <FiSmile className="w-7 h-7 text-warning group-hover:scale-110 transition-transform" />,
      bgColor: "bg-warning/10 text-warning",
      borderColor: "hover:border-warning/30",
      badgeColor: "group-hover:bg-warning group-hover:text-white",
    },
  ];

  return (
    <section className="bg-base-100 py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-6xl container">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="bg-primary/10 px-4 py-1.5 rounded-full font-bold text-primary text-sm uppercase tracking-wider animate-pulse">
            Our Universe 🌟
          </span>
          <h2 className="mt-4 font-black text-base-content text-3xl md:text-4xl tracking-tight">
            Explore Our <span className="text-primary decoration-warning decoration-wavy underline">Popular</span> Categories
          </h2>
          <p className="mt-2 text-sm text-base-content/60 md:text-base">
            Click on your favorite category to explore exciting items!
          </p>
        </div>

        {/* Badges Grid */}
        <div className="gap-6 grid grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group flex flex-col items-center bg-base-200/40 hover:bg-base-100 p-6 border border-base-300/80 ${category.borderColor} rounded-[2rem] text-center transition-all duration-300 hover:-translate-y-2 hover:rotate-1 hover:shadow-xl active:scale-95 cursor-pointer card`}
            >
              {/* Icon Badge Container with bouncy & pulse glow effect on hover */}
              <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce shadow-inner mb-5`}>
                {category.icon}
              </div>

              {/* Title & Info */}
              <h3 className="font-extrabold group-hover:text-primary text-base text-base-content md:text-lg transition-colors duration-200">
                {category.title}
              </h3>
              
              <p className={`bg-base-300/50 group-hover:shadow-sm mt-3 px-4 py-1 rounded-full font-bold text-xs text-base-content/70 transition-all duration-300 ${category.badgeColor}`}>
                {category.count}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualBadges;