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
            category: "Toy Guide",
            themeColor: "hover:border-primary/30",
            badgeColor: "bg-primary text-white"
        },
        {
            id: 2,
            title: "The Importance of Safe, Non-Toxic Materials in Kids' Products",
            desc: "As a parent, your child's health is paramount. Learn why choosing certified non-toxic and organic materials for toys makes a lifelong difference.",
            image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600",
            date: "June 28, 2026",
            author: "Dr. Anisur Ahmed",
            category: "Child Safety",
            themeColor: "hover:border-success/30",
            badgeColor: "bg-success text-white"
        },
        {
            id: 3,
            title: "5 Fun Brain Games to Play with Your Children at Home",
            desc: "Keep your little heroes engaged with these simple, screen-free cognitive games that boost memory, attention span, and family bonding time.",
            image: "https://images.unsplash.com/photo-1537655780520-1e392edd816a?q=80&w=600",
            date: "June 15, 2026",
            author: "Nabila Kabir",
            category: "Parenting Tips",
            themeColor: "hover:border-warning/30",
            badgeColor: "bg-warning text-white"
        }
    ];

    return (
        <section className="bg-base-100 py-16 overflow-hidden">
            <div className="mx-auto px-4 max-w-6xl container">
                
                {/* Header Section */}
                <div className="mb-14 text-center">
                    <span className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full font-black text-primary text-sm uppercase tracking-wider animate-pulse">
                        <FaChild className="animate-bounce" /> Our Parenting Blog 📝
                    </span>
                    <h2 className="mt-4 font-black text-base-content text-3xl md:text-5xl leading-none tracking-tight">
                        Insights, Tips & Guides <br />
                        <span className="text-primary decoration-warning decoration-wavy underline">For Every Super Parent!</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm text-base-content/60 md:text-base">
                        Explore our expert articles on early child development, toy safety standards, and fun learning activities to try right at home.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2">
                    {blogs.map((blog) => (
                        <article 
                            key={blog.id} 
                            className={`group flex flex-col justify-between bg-base-100 hover:shadow-2xl border border-base-300/80 ${blog.themeColor} rounded-[2rem] p-4 transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 active:scale-[0.99] cursor-pointer card`}
                        >
                            {/* Image Frame with Asymmetric Playful Radius */}
                            <div className="relative bg-base-200 shadow-inner rounded-[1.7rem] w-full aspect-[16/11] overflow-hidden">
                                <span className={`top-4 left-4 z-10 absolute ${blog.badgeColor} shadow-md px-3.5 py-1.5 rounded-xl font-extrabold text-xs tracking-wide`}>
                                    {blog.category}
                                </span>
                                <Image 
                                    src={blog.image} 
                                    alt={blog.title}
                                    fill
                                    sizes="(max-w-7xl) 33vw, 100vw"
                                    className="object-cover group-hover:rotate-1 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col flex-grow justify-between px-2 pt-5 pb-2">
                                <div className="space-y-3">
                                    {/* Meta Data */}
                                    <div className="flex items-center space-x-4 font-bold text-xs text-base-content/50">
                                        <div className="flex items-center gap-1.5 group-hover:text-primary transition-colors">
                                            <FaCalendarAlt className="opacity-70" />
                                            <span>{blog.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <FaUser className="opacity-70" />
                                            <span>{blog.author}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-black group-hover:text-primary text-base-content text-xl line-clamp-2 leading-snug tracking-tight transition-colors duration-200">
                                        {blog.title}
                                    </h3>

                                    {/* Short Description */}
                                    <p className="font-medium text-sm text-base-content/60 line-clamp-3 leading-relaxed">
                                        {blog.desc}
                                    </p>
                                </div>

                                {/* Action Interactive Slide Button */}
                                <div className="flex justify-between items-center mt-4 pt-5 border-base-200 border-t">
                                    <Link 
                                        href={`/blog/${blog.id}`}
                                        className="group/btn inline-flex items-center gap-2 bg-base-200 hover:bg-primary py-2 pr-2 pl-4 rounded-full font-black hover:text-white text-xs text-base-content tracking-wider transition-all duration-300"
                                    >
                                        <span>Read Article</span>
                                        <div className="bg-white group-hover/btn:bg-white shadow-sm p-2 rounded-full text-primary transition-colors">
                                            <FaArrowRight className="text-xs transition-transform group-hover/btn:translate-x-0.5" />
                                        </div>
                                    </Link>

                                    {/* Cute decorative tiny tag */}
                                    <span className="font-black group-hover:text-primary/20 text-base-content/15 text-2xl transition-colors select-none">
                                        ✨
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;