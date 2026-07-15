import React from 'react';
import { FiHeart, FiBookOpen, FiActivity, FiSmile } from 'react-icons/fi';

const VisualBadges = () => {
  const categories = [
    {
      id: 1,
      title: "Soft Toys",
      count: "120+ Items",
      icon: <FiHeart className="w-7 h-7 text-error" />,
      bgColor: "bg-error/10",
      hoverColor: "group-hover:bg-error group-hover:text-white",
    },
    {
      id: 2,
      title: "Story Books",
      count: "85+ Items",
      icon: <FiBookOpen className="w-7 h-7 text-primary" />,
      bgColor: "bg-primary/10",
      hoverColor: "group-hover:bg-primary group-hover:text-white",
    },
    {
      id: 3,
      title: "Puzzles & Games",
      count: "150+ Items",
      icon: <FiActivity className="w-7 h-7 text-success" />,
      bgColor: "bg-success/10",
      hoverColor: "group-hover:bg-success group-hover:text-white",
    },
    {
      id: 4,
      title: "Art & Crafts",
      count: "60+ Items",
      icon: <FiSmile className="w-7 h-7 text-warning" />,
      bgColor: "bg-warning/10",
      hoverColor: "group-hover:bg-warning group-hover:text-white",
    },
  ];

  return (
    <section className="bg-base-100 py-10">
      <div className="mx-auto px-4 max-w-6xl container">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="bg-primary/10 px-4 py-1.5 rounded-full font-bold text-primary text-sm uppercase tracking-wider">
            Our Universe
          </span>
          <h2 className="mt-3 font-black text-base-content text-2xl md:text-3xl">
            Explore <span className="text-primary">Popular</span> Categories
          </h2>
        </div>

        {/* Badges Grid */}
        <div className="gap-6 grid grid-cols-2 md:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col items-center bg-base-200/60 hover:bg-base-100 hover:shadow-md p-5 border border-base-300 rounded-3xl text-center transition-all hover:-translate-y-1 duration-300 cursor-pointer card"
            >
              {/* Icon Badge Container */}
              <div className={`w-14 h-14 rounded-full ${category.bgColor} flex items-center justify-center transition-colors duration-300 ${category.hoverColor} mb-4`}>
                {category.icon}
              </div>

              {/* Title & Info */}
              <h3 className="font-bold group-hover:text-primary text-base text-base-content transition-colors duration-200">
                {category.title}
              </h3>
              <p className="bg-base-300/50 mt-1 px-3 py-1 rounded-full font-medium text-xs text-base-content/60">
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