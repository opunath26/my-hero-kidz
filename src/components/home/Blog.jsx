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
  FaBookmark 
} from "react-icons/fa";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Toy Guide", "Child Safety", "Parenting Tips", "Early Learning"];

  // Featured Article
  const featuredBlog = {
    id: 1,
    title: "How to Choose the Right Educational Toys for Toddlers in 2026",
    desc: "Discover how carefully selected toys can enhance your toddler's cognitive abilities, fine motor skills, and creative thinking starting from an early age. Expert advice and actionable parenting tips included.",
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
      title: "The Importance of Safe, Non-Toxic Materials in Kids' Products",
      desc: "As a parent, your child's health is paramount. Learn why choosing certified non-toxic and organic materials for toys makes a lifelong difference.",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600",
      date: "June 28, 2026",
      author: "Dr. Anisur Ahmed",
      category: "Child Safety",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "5 Fun Brain Games to Play with Your Children at Home",
      desc: "Keep your little heroes engaged with these simple, screen-free cognitive games that boost memory, attention span, and family bonding time.",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop",
      date: "June 15, 2026",
      author: "Nabila Kabir",
      category: "Parenting Tips",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Sensory Toys: Unlocking Early Neurological Development",
      desc: "Explore how sensory textures, shapes, and sounds accelerate brain neural connection in babies under 2 years old.",
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
    <section className="bg-slate-50/60 py-12 lg:py-16 w-full overflow-hidden text-slate-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl container">
        
        {/* Header & Search Bar */}
        <div className="flex lg:flex-row flex-col justify-between lg:items-end gap-6 mb-10 pb-8 border-slate-200 border-b">
          <div className="max-w-2xl">
            <span className="inline-block bg-indigo-100 mb-2 px-3 py-1 rounded-md font-semibold text-indigo-700 text-xs uppercase tracking-wider">
              Parenting & Child Care Journal
            </span>
            <h2 className="font-extrabold text-slate-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Latest Insights & Guides
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              Expertly curated advice on child development, toy safety standards, and interactive parenting techniques.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72 shrink-0">
            <input
              type="text"
              placeholder="Search articles..."
              className="bg-white shadow-sm py-2.5 pr-4 pl-10 border border-slate-200 focus:border-indigo-500 rounded-xl outline-none focus:ring-2 focus:ring-indigo-100 w-full text-sm transition-all"
            />
            <FaSearch className="top-3.5 left-3.5 absolute text-slate-400 text-sm" />
          </div>
        </div>

        {/* Featured Post (Hero Section) */}
        <div className="group relative bg-white shadow-sm hover:shadow-xl mb-12 border border-slate-200/80 rounded-3xl overflow-hidden transition-all duration-300">
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
                <span className="bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg font-bold text-white text-xs tracking-wide">
                  ⭐ Featured Article
                </span>
              </div>
            </div>

            {/* Content Box */}
            <div className="flex flex-col justify-between lg:col-span-5 p-6 sm:p-8 lg:p-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3 font-semibold text-indigo-600 text-xs">
                  <span className="bg-indigo-50 px-2.5 py-1 rounded-md">{featuredBlog.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-500"><FaClock /> {featuredBlog.readTime}</span>
                </div>

                <h3 className="font-extrabold text-slate-900 hover:text-indigo-600 text-2xl sm:text-3xl leading-snug tracking-tight transition-colors">
                  <Link href={`/blog/${featuredBlog.id}`}>
                    {featuredBlog.title}
                  </Link>
                </h3>

                <p className="text-slate-600 text-sm sm:text-base line-clamp-3 leading-relaxed">
                  {featuredBlog.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-slate-100 border-t">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center bg-indigo-100 rounded-full w-10 h-10 font-bold text-indigo-700 text-sm">
                      {featuredBlog.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{featuredBlog.author}</p>
                      <p className="text-slate-500 text-xs">{featuredBlog.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredBlog.id}`}
                    className="inline-flex items-center gap-2 font-bold text-indigo-600 text-sm hover:underline"
                  >
                    <span>Read Full</span>
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
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
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
                className="group flex flex-col justify-between bg-white shadow-sm hover:shadow-md border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300"
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
                    <span className="top-3 left-3 absolute bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md font-bold text-slate-800 text-xs">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2 font-medium text-slate-400 text-xs">
                      <span className="flex items-center gap-1"><FaCalendarAlt /> {blog.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><FaClock /> {blog.readTime}</span>
                    </div>

                    <h4 className="font-extrabold text-slate-900 group-hover:text-indigo-600 text-lg line-clamp-2 leading-snug transition-colors">
                      <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h4>

                    <p className="mt-2 text-slate-600 text-xs sm:text-sm line-clamp-2">
                      {blog.desc}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-5 pt-0 border-slate-100">
                  <div className="flex items-center gap-2 font-medium text-slate-600 text-xs">
                    <FaUser className="text-slate-400" />
                    <span>{blog.author}</span>
                  </div>

                  <Link
                    href={`/blog/${blog.id}`}
                    className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"
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
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 sm:p-8 rounded-3xl text-white">
              <span className="inline-block bg-indigo-500/30 mb-3 px-3 py-1 rounded-full font-bold text-indigo-300 text-xs">
                Weekly Newsletter
              </span>
              <h3 className="font-extrabold text-white text-2xl">
                Get Parenting Advice Straight to Your Inbox!
              </h3>
              <p className="mt-2 text-indigo-200/80 text-xs leading-relaxed">
                Join over 10,000+ parents getting our weekly digest on child development and toy discounts.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-3 mt-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 focus:bg-white/20 p-3 border border-white/20 rounded-xl outline-none focus:ring-2 focus:ring-indigo-400 w-full text-white text-xs transition-all placeholder-indigo-200/50"
                  required
                />
                <button
                  type="submit"
                  className="flex justify-center items-center gap-2 bg-indigo-500 hover:bg-indigo-400 py-3 rounded-xl w-full font-bold text-white text-xs transition-all"
                >
                  <span>Subscribe Now</span>
                  <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* Quick Banner */}
            <div className="relative bg-amber-50 p-6 border border-amber-200/60 rounded-3xl">
              <h4 className="font-bold text-amber-900 text-base">Looking for Certified Toys?</h4>
              <p className="mt-1 text-amber-800/80 text-xs">
                Check our store for 100% non-toxic, eco-friendly educational toys.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 mt-4 px-4 py-2 rounded-xl font-bold text-white text-xs transition-colors"
              >
                <span>Visit Store</span>
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