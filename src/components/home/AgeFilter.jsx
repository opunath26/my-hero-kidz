"use client";
import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';

const AgeFilter = () => {
  const ageGroups = [
    { id: 'baby', label: '0 - 2 Years', badge: 'Infants & Toddlers', color: 'btn-error text-white' },
    { id: 'toddler', label: '3 - 5 Years', badge: 'Preschoolers', color: 'btn-primary' },
    { id: 'kid', label: '6 - 8 Years', badge: 'Early Learners', color: 'btn-success text-white' },
    { id: 'tween', label: '9+ Years', badge: 'Big Heroes', color: 'btn-warning text-white' },
  ];

  const itemsData = {
    baby: [
      { id: 1, title: "Soft Plush Teddy Bear", price: "$15.99", img: "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=300" },
      { id: 2, title: "Colorful Rattle Set", price: "$9.50", img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=300" },
    ],
    toddler: [
      { id: 3, title: "Wooden Building Blocks", price: "$24.99", img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300" },
      { id: 4, title: "Animal Picture Book", price: "$12.00", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300" },
    ],
    kid: [
      { id: 5, title: "Lego Creative Suitcase", price: "$39.99", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=300" },
      { id: 6, title: "Kids Learning Tablet", price: "$59.50", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300" },
    ],
    tween: [
      { id: 7, title: "DIY Science Experiment Kit", price: "$34.99", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300" },
      { id: 8, title: "Remote Control Drone", price: "$79.00", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=300" },
    ],
  };

  const [selectedAge, setSelectedAge] = useState('baby');

  return (
    <section className="bg-base-100 py-16 overflow-hidden">
      <div className="mx-auto px-4 max-w-6xl container">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="bg-error/10 px-4 py-1.5 rounded-full font-bold text-error text-sm uppercase tracking-wider animate-pulse">
            Shop By Age 🎒
          </span>
          <h2 className="mt-4 font-black text-base-content text-3xl md:text-4xl tracking-tight">
            Find the Perfect Toy for Your <span className="text-error decoration-warning decoration-wavy underline">Hero</span>
          </h2>
          <p className="mt-2 text-sm text-base-content/60 md:text-base">
            Tailored learning and play experiences for every growth milestone.
          </p>
        </div>

        {/* Age Buttons Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {ageGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedAge(group.id)}
              className={`btn rounded-full px-6 transition-all duration-300 active:scale-95 ${
                selectedAge === group.id 
                  ? `${group.color} shadow-lg scale-105 border-transparent` 
                  : 'btn-outline border-base-300 hover:bg-base-200 hover:border-base-400 text-base-content/80'
              }`}
            >
              <span className="font-extrabold text-sm md:text-base tracking-wide">{group.label}</span>
            </button>
          ))}
        </div>

        {/* Filtered Items Grid */}
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 mx-auto px-2 max-w-4xl">
          {itemsData[selectedAge].map((item) => (
            <div 
              key={item.id} 
              className="group bg-base-200/50 hover:bg-base-100 hover:shadow-xl border border-base-300/80 rounded-[2rem] overflow-hidden hover:rotate-1 active:scale-[0.99] transition-all hover:-translate-y-1.5 duration-300 cursor-pointer card card-side"
            >
              {/* Image Section with zoom effect */}
              <figure className="relative w-1/3 min-w-[130px] overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
                />
              </figure>
              
              {/* Content Body */}
              <div className="justify-between p-6 w-2/3 card-body">
                <div>
                  <div className="bg-base-300/70 mb-2 px-2.5 py-2 border-none rounded-md font-bold text-base-content/70 badge badge-sm">
                    {ageGroups.find(g => g.id === selectedAge)?.badge}
                  </div>
                  <h3 className="font-extrabold group-hover:text-primary text-base text-base-content line-clamp-2 leading-tight transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
                
                <div className="justify-between items-center mt-4 card-actions">
                  <span className="font-black text-primary text-xl tracking-tight">{item.price}</span>
                  <button className="shadow-sm group-hover:shadow-md transition-all duration-300 btn btn-md btn-circle btn-primary">
                    <FiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300 ease-out" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AgeFilter;