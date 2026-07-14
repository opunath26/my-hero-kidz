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
    <section className="bg-base-100 py-16">
      <div className="mx-auto px-4 max-w-6xl container">
        
        {/* Section Header */}
        <div className="mb-10 text-center">
          <span className="bg-error/10 px-4 py-1.5 rounded-full font-bold text-error text-sm uppercase tracking-wider">
            Shop By Age
          </span>
          <h2 className="mt-3 font-extrabold text-base-content text-3xl md:text-4xl">
            Find the Perfect Toy for Your <span className="text-error">Hero</span>
          </h2>
        </div>

        {/* Age Buttons Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ageGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedAge(group.id)}
              className={`btn rounded-full px-6 transition-all duration-300 ${
                selectedAge === group.id 
                  ? `${group.color} shadow-lg scale-105` 
                  : 'btn-outline border-base-300 hover:bg-base-200'
              }`}
            >
              <div className="text-left">
                <p className="font-bold text-sm md:text-base">{group.label}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Filtered Items Grid */}
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 mx-auto max-w-3xl">
          {itemsData[selectedAge].map((item) => (
            <div 
              key={item.id} 
              className="bg-base-200 shadow-sm hover:shadow-md border border-base-300 rounded-3xl overflow-hidden transition-all duration-300 card card-side"
            >
              <figure className="w-1/3 min-w-[120px]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </figure>
              
              <div className="justify-between p-5 w-2/3 card-body">
                <div>
                  <div className="bg-base-300 mb-1 border-none text-base-content/70 badge badge-sm">
                    {ageGroups.find(g => g.id === selectedAge)?.badge}
                  </div>
                  <h3 className="font-bold text-base text-base-content line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                </div>
                
                <div className="justify-between items-center mt-2 card-actions">
                  <span className="font-extrabold text-primary text-lg">{item.price}</span>
                  <button className="btn btn-sm btn-circle btn-primary">
                    <FiArrowRight className="w-4 h-4" />
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