import React from 'react';
import { FiStar } from 'react-icons/fi'; 

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Anika Rahman",
      role: "Mother of 4-year-old",
      comment: "Hero Kidz থেকে কেনা খেলনাগুলো সত্যিই অসাধারণ! প্লাস্টিকের কোয়ালিটি খুবই ভালো এবং কোনো ধারালো কোণা নেই, যা বাচ্চাদের জন্য একদম নিরাপদ।",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      borderColor: "border-primary",
    },
    {
      id: 2,
      name: "Tanvir Ahmed",
      role: "Father of 6-year-old",
      comment: "প্যাকেজিং এবং ডেলিভারি স্পিড দেখে আমি মুগ্ধ। ঢাকার বাইরেও তারা মাত্র ২ দিনে প্রোডাক্ট পৌঁছে দিয়েছে। আমার ছেলে তো গিফটের বক্সটা দেখেই অনেক খুশি!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      borderColor: "border-success",
    },
    {
      id: 3,
      name: "Sultana Kamal",
      role: "Mother of 2-year-old",
      comment: "তাদের কাস্টমার সার্ভিস দারুণ ফ্রেন্ডলি। বাচ্চার বয়স অনুযায়ী কোন জিনিসটা ভালো হবে, সেটা তারা খুব সুন্দর করে বুঝিয়ে দিয়েছে। ধন্যবাদ Hero Kidz!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      borderColor: "border-warning",
    },
  ];

  return (
    <section className="bg-base-200/50 py-16">
      <div className="mx-auto px-4 max-w-6xl container">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="bg-success/10 px-4 py-1.5 rounded-full font-bold text-success text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 font-extrabold text-base-content text-3xl md:text-4xl">
            What <span className="text-success">Parents</span> Say About Us
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-base-content/70 md:text-base">
            Hear from the amazing moms and dads who trusted us for their children's happiness.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className={`card bg-base-100 shadow-sm border-t-4 ${review.borderColor} hover:shadow-md transition-all duration-300 rounded-3xl p-6 relative flex flex-col justify-between`}
            >
              {/* Star Ratings */}
              <div className="flex gap-1 mb-4 text-warning">
                {[...Array(5)].map((_, index) => (
                  <FiStar key={index} className="fill-current w-4 h-4" />
                ))}
              </div>

              {/* Review Text */}
              <p className="mb-6 text-sm text-base-content/80 italic leading-relaxed">
                "{review.comment}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="avatar">
                  <div className="rounded-full ring-2 ring-base-300 ring-offset-2 ring-offset-base-100 w-12 h-12">
                    <img src={review.image} alt={review.name} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-base-content md:text-base">
                    {review.name}
                  </h4>
                  <p className="text-xs text-base-content/60">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;