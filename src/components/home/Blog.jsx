"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaCalendarAlt, 
  FaUser, 
  FaArrowRight, 
  FaClock, 
  FaSearch, 
  FaPaperPlane, 
  FaBookmark,
  FaChild
} from "react-icons/fa";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Toy Guide", "Child Safety", "Parenting Tips", "Early Learning"];

  // Featured Article
  const featuredBlog = {
    id: 1,
    title: "How to Choose the Right Educational Toys for Toddlers",
    desc: "স্মার্ট কার্ড, পাজল এবং লার্নিং টয় কিভাবে ছোট শিশুদের মেধা বিকাশ ও ক্রিয়েটিভিটি বাড়াতে সাহায্য করে জানুন বিশেষজ্ঞদের কাছ থেকে। সন্তানকে সঠিক বয়সে সঠিক খেলনা কিনে দেওয়ার একটি পূর্ণাঙ্গ গাইড।",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop",
    date: "July 05, 2026",
    author: "Sarah Rahman",
    role: "Child Psychologist",
    category: "Toy Guide",
    readTime: "5 min read",
  };

  // Regular Articles
  const blogs = [
    {
      id: 2,
      title: "The Importance of Safe, Non-Toxic Materials in Kids' Toys",
      desc: "শিশুর সুরক্ষায় নন-টক্সিক ও নিরাপদ প্লাস্টিক কেন গুরুত্বপূর্ণ? আপনার বাচ্চার স্বাস্থ্য ঝুঁকিমুক্ত রাখতে খেলনা কেনার সময় যা যা খেয়াল রাখবেন।",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600",
      date: "June 28, 2026",
      author: "Dr. Anisur Ahmed",
      category: "Child Safety",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "5 Fun Brain Games to Play with Your Children at Home",
      desc: "মোবাইল স্ক্রিন ছাড়াই ঘরে বসে শিশুদের ব্রেন ডেভেলপমেন্ট ও স্মৃতিরোধ বাড়ানোর ৫টি মজার মেধা বিকাশমূলক গেম।",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop",
      date: "June 15, 2026",
      author: "Nabila Kabir",
      category: "Parenting Tips",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Sensory Toys: Unlocking Early Neurological Development",
      desc: "সেন্সরি টয় কিভাবে শিশুর স্পর্শ, দৃষ্টি এবং শোনার অনুভূতিগুলোকে দ্রুত তীক্ষ্ণ ও শক্তিশালী করে তোলে।",
      image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=800&auto=format&fit=crop",
      date: "May 20, 2026",
      author: "Tariq Mahmood",
      category: "Early Learning",
      readTime: "3 min read",
    },
  ];

  const filteredBlogs = selectedCategory === "All" 
    ? blogs 
    : blogs.filter(b => b.category === selectedCategory);

  return (
    <section className="bg-[#FFFDF9] py-12 lg:py-16 w-full overflow-hidden text-slate-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        
        {/* Header & Search Bar */}
        <div className="flex lg:flex-row flex-col justify-between lg:items-end gap-6 mb-10 pb-8 border-orange-100 border-b">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-amber-100/80 mb-3 px-3.5 py-1 rounded-full font-bold text-amber-800 text-xs tracking-wider">
              <FaChild className="text-[#FF4500]" /> প্যারেন্টিং ও শিশুর মেধা বিকাশ
            </span>
            <h2 className="font-black text-slate-900 text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              <span className="text-[#FF4500]">বাচ্চাদের হাসিমুখের গল্প</span> <br />
              <span>Latest Insights & Guides</span>
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              আপনার সন্তানের সুস্থ মানসিক ও শারীরিক বিকাশ নিশ্চিত করতে বিশেষজ্ঞদের টিপস এবং খেলনা নির্বাচনের নির্দেশিকা পড়ুন।
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72 shrink-0">
            <input
              type="text"
              placeholder="আর্টিকেল খুঁজুন..."
              className="bg-white shadow-sm py-2.5 pr-4 pl-10 border border-slate-200 focus:border-[#FF4500] rounded-2xl outline-none focus:ring-2 focus:ring-orange-100 w-full font-semibold text-slate-800 text-xs sm:text-sm transition-all"
            />
            <FaSearch className="top-3.5 left-3.5 absolute text-slate-400 text-sm" />
          </div>
        </div>

        {/* Featured Post (Hero Section) */}
        <div className="group relative bg-white shadow-sm hover:shadow-xl mb-12 border border-orange-100 rounded-3xl overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Box */}
            <div className="relative lg:col-span-7 min-h-[260px] sm:min-h-[340px] lg:min-h-full overflow-hidden">
              <Image
                src={featuredBlog.image}
                alt={featuredBlog.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="top-4 left-4 absolute">
                <span className="bg-[#FF4500] shadow-md px-3.5 py-1.5 rounded-full font-extrabold text-white text-xs tracking-wide">
                  ⭐ বিশেষ ফিচারড আর্টিকেল
                </span>
              </div>
            </div>

            {/* Content Box */}
            <div className="flex flex-col justify-between lg:col-span-5 p-6 sm:p-8 lg:p-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-semibold text-xs">
                  <span className="bg-orange-100 px-3 py-1 rounded-full font-bold text-[#FF4500]">{featuredBlog.category}</span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1 text-slate-500"><FaClock className="text-[#FF4500]" /> {featuredBlog.readTime}</span>
                </div>

                <h3 className="font-extrabold text-slate-900 hover:text-[#FF4500] text-xl sm:text-2xl lg:text-3xl leading-snug tracking-tight transition-colors">
                  <Link href={`/blog/${featuredBlog.id}`}>
                    {featuredBlog.title}
                  </Link>
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {featuredBlog.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-slate-100 border-t">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center bg-orange-100 rounded-full w-10 h-10 font-black text-[#FF4500] text-sm">
                      {featuredBlog.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">{featuredBlog.author}</p>
                      <p className="text-[11px] text-slate-500">{featuredBlog.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredBlog.id}`}
                    className="inline-flex items-center gap-2 font-bold text-[#FF4500] text-xs sm:text-sm hover:underline"
                  >
                    <span>সম্পূর্ণ পড়ুন</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-8 pb-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#FF4500] text-white shadow-md shadow-orange-500/20"
                  : "bg-white border border-orange-100 text-slate-600 hover:bg-orange-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid + Newsletter Sidebar */}
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Main Grid */}
          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:col-span-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group flex flex-col justify-between bg-white shadow-sm hover:shadow-xl border border-orange-100 rounded-3xl overflow-hidden transition-all duration-300"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="top-3 left-3 absolute bg-white/90 backdrop-blur-md px-3 py-1 rounded-full font-bold text-[#FF4500] text-xs">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2 font-medium text-[11px] text-slate-400 sm:text-xs">
                      <span className="flex items-center gap-1"><FaCalendarAlt /> {blog.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><FaClock /> {blog.readTime}</span>
                    </div>

                    <h4 className="font-extrabold text-slate-900 group-hover:text-[#FF4500] text-base sm:text-lg line-clamp-2 leading-snug transition-colors">
                      <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h4>

                    <p className="mt-2 text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {blog.desc}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-5 pt-0 border-slate-100">
                  <div className="flex items-center gap-2 font-semibold text-slate-600 text-xs">
                    <FaUser className="text-[#FF4500]" />
                    <span>{blog.author}</span>
                  </div>

                  <Link
                    href={`/blog/${blog.id}`}
                    className="p-2 text-slate-400 hover:text-[#FF4500] transition-colors"
                  >
                    <FaBookmark />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar / Newsletter Section */}
          <div className="space-y-6 lg:col-span-4">
            
            {/* Newsletter Box */}
            <div className="bg-[#FF4500] shadow-lg shadow-orange-500/20 p-6 sm:p-8 rounded-3xl text-white">
              <span className="inline-block bg-white/20 mb-3 px-3 py-1 rounded-full font-extrabold text-white text-xs">
                Weekly Newsletter 📬
              </span>
              <h3 className="font-black text-white text-xl sm:text-2xl leading-tight">
                প্যারেন্টিং গাইড ও নতুন খেলনার আপডেট পেতে যুক্ত থাকুন!
              </h3>
              <p className="mt-2 text-white/90 text-xs leading-relaxed">
                ১০,০০০+ বাবা-মায়ের সাথে যুক্ত হয়ে প্রতি সপ্তাহে বাচ্চার মেধা বিকাশমূলক স্পেশাল অফার ও টিপস নিন।
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3 mt-6">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল দিন..."
                  className="bg-white px-4 py-3 border-none rounded-2xl focus:outline-none w-full font-semibold text-slate-900 text-xs transition-all placeholder-slate-400"
                  required
                />
                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 bg-slate-900 hover:bg-black py-3.5 rounded-2xl w-full font-black text-white text-xs uppercase tracking-wider active:scale-95 transition-all cursor-pointer"
                >
                  <span>সাবস্ক্রাইব করুন</span>
                  <FaPaperPlane className="text-xs" />
                </button>
              </form>
            </div>

            {/* Quick Banner */}
            <div className="relative bg-amber-50 p-6 border border-amber-200/80 rounded-3xl">
              <h4 className="font-extrabold text-amber-900 text-base">প্রামাণিক ও নিরাপদ খেলনা খুঁজছেন?</h4>
              <p className="mt-1 text-amber-800/80 text-xs leading-relaxed">
                আমাদের শপে ঘুরে দেখুন ১০০% বিষাক্তমুক্ত এবং শিক্ষণীয় স্মার্ট লার্নিং টয় ও পাজল।
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#FF4500] hover:bg-[#e03d00] shadow-md shadow-orange-500/20 mt-4 px-5 py-2.5 rounded-2xl font-black text-white text-xs active:scale-95 transition-all"
              >
                <span>এখনই কেনাকাটা করুন</span>
                <FaArrowRight className="text-[10px]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Blog;