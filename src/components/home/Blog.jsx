import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaArrowRight, FaChild } from 'react-icons/fa';

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "How to Choose the Right Educational Toys for Toddlers",
            desc: "Discover how carefully selected toys can enhance your toddler's cognitive abilities, fine motor skills, and creative thinking starting from an early age.",
            image: "https://images.unsplash.com/photo-1515488042361-404e9250afef?q=80&w=600",
            date: "July 05, 2026",
            author: "Sarah Rahman",
            category: "Toy Guide"
        },
        {
            id: 2,
            title: "The Importance of Safe, Non-Toxic Materials in Kids' Products",
            desc: "As a parent, your child's health is paramount. Learn why choosing certified non-toxic and organic materials for toys makes a lifelong difference.",
            image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600",
            date: "June 28, 2026",
            author: "Dr. Anisur Ahmed",
            category: "Child Safety"
        },
        {
            id: 3,
            title: "5 Fun Brain Games to Play with Your Children at Home",
            desc: "Keep your little heroes engaged with these simple, screen-free cognitive games that boost memory, attention span, and family bonding time.",
            image: "https://images.unsplash.com/photo-1537655780520-1e392edd816a?q=80&w=600",
            date: "June 15, 2026",
            author: "Nabila Kabir",
            category: "Parenting Tips"
        }
    ];

    return (
        <div className="py-12 text-slate-800">
            {/* Header Section */}
            <div className="space-y-4 mx-auto mb-16 max-w-2xl text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full font-bold text-primary text-sm">
                    <FaChild /> Our Parenting Blog
                </div>
                <h1 className="font-black text-slate-900 text-3xl md:text-5xl leading-tight">
                    Insights, Tips & Guides <br />
                    <span className="text-primary">For Every Super Parent!</span>
                </h1>
                <p className="text-slate-500">
                    Explore our expert articles on early child development, toy safety standards, and fun learning activities to try right at home.
                </p>
            </div>

            {/* Blog Grid */}
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <article 
                        key={blog.id} 
                        className="group flex flex-col justify-between bg-white shadow-sm hover:shadow-xl border border-slate-100 rounded-3xl overflow-hidden transition-all duration-300"
                    >
                        {/* Image Cover */}
                        <div className="relative bg-slate-50 w-full aspect-[16/10] overflow-hidden">
                            <span className="top-4 left-4 z-10 absolute bg-primary shadow-sm px-3 py-1 rounded-lg font-bold text-white text-xs">
                                {blog.category}
                            </span>
                            <Image 
                                src={blog.image} 
                                alt={blog.title}
                                fill
                                sizes="(max-w-7xl) 33vw, 100vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Card Content */}
                        <div className="flex flex-col flex-grow justify-between space-y-5 p-6">
                            <div className="space-y-3">
                                {/* Meta Data */}
                                <div className="flex items-center space-x-4 font-medium text-slate-400 text-xs">
                                    <div className="flex items-center gap-1.5">
                                        <FaCalendarAlt />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <FaUser />
                                        <span>{blog.author}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="font-bold text-slate-900 group-hover:text-primary text-xl line-clamp-2 leading-snug transition-colors">
                                    {blog.title}
                                </h2>

                                {/* Short Description */}
                                <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed">
                                    {blog.desc}
                                </p>
                            </div>

                            {/* Action Link */}
                            <div className="pt-2">
                                <Link 
                                    href={`/blog/${blog.id}`}
                                    className="group/link inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 text-sm transition-colors"
                                >
                                    Read Full Article
                                    <FaArrowRight className="text-xs transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Blog;