"use client";

import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaChild } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            console.log("Form Submitted Successfully:", formData);
            alert("Thank you for reaching out! Your message has been sent successfully. 🎁");
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const infoCards = [
        {
            id: 1,
            title: "Call Us",
            detail: "+880 1234-567890",
            subDetail: "Sat - Thu: 9 AM - 6 PM",
            icon: <FaPhoneAlt />,
            bgColor: "bg-primary/10 text-primary",
            hoverBorder: "hover:border-primary/30"
        },
        {
            id: 2,
            title: "Email Us",
            detail: "support@herokidz.com",
            subDetail: "Response within 24 hours",
            icon: <FaEnvelope />,
            bgColor: "bg-success/10 text-success",
            hoverBorder: "hover:border-success/30"
        },
        {
            id: 3,
            title: "Our Store",
            detail: "Level 4, Toy Kingdom Plaza",
            subDetail: "Banani, Dhaka, Bangladesh",
            icon: <FaMapMarkerAlt />,
            bgColor: "bg-warning/10 text-warning",
            hoverBorder: "hover:border-warning/30"
        }
    ];

    return (
        <section className="bg-base-100 py-16 overflow-hidden">
            <div className="mx-auto px-4 max-w-6xl container">
                
                {/* Header Section */}
                <div className="mb-14 text-center">
                    <span className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full font-black text-primary text-sm uppercase tracking-wider animate-pulse">
                        <FaChild className="animate-bounce" /> Contact Our Team 👋
                    </span>
                    <h2 className="mt-4 font-black text-base-content text-3xl md:text-5xl leading-none tracking-tight">
                        Have Questions? <br />
                        <span className="text-primary decoration-warning decoration-wavy underline">We'd Love to Hear From You!</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-xl text-sm text-base-content/60 md:text-base">
                        Whether you have a question about our toys, shipping, or anything else, our friendly team is ready to answer all your queries.
                    </p>
                </div>

                <div className="gap-8 grid grid-cols-1 lg:grid-cols-3 px-2">
                    {/* Contact Info Cards */}
                    <div className="space-y-6 lg:col-span-1">
                        {infoCards.map((card) => (
                            <div 
                                key={card.id}
                                className={`group flex items-center gap-5 bg-base-200/40 hover:bg-base-100 shadow-sm border border-base-300/80 ${card.hoverBorder} rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1 hover:shadow-xl cursor-pointer`}
                            >
                                <div className={`p-4 rounded-2xl ${card.bgColor} text-xl flex items-center justify-center shadow-inner transition-all duration-300 group-hover:animate-bounce`}>
                                    {card.icon}
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-base-content text-lg leading-tight">{card.title}</h3>
                                    <p className="mt-1 font-bold text-sm text-base-content/80">{card.detail}</p>
                                    <p className="mt-0.5 font-medium text-xs text-base-content/40">{card.subDetail}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form Container */}
                    <div className="lg:col-span-2 bg-base-200/30 shadow-sm p-6 md:p-8 border border-base-300/60 rounded-[2.5rem]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="px-1 font-extrabold text-sm text-base-content/80">Your Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe" 
                                        className="bg-base-100 shadow-inner px-4 py-3 border-2 border-transparent focus:border-primary/40 rounded-2xl focus:outline-none w-full font-bold text-sm text-base-content transition-all placeholder-gray-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="px-1 font-extrabold text-sm text-base-content/80">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="johndoe@example.com" 
                                        className="bg-base-100 shadow-inner px-4 py-3 border-2 border-transparent focus:border-primary/40 rounded-2xl focus:outline-none w-full font-bold text-sm text-base-content transition-all placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="px-1 font-extrabold text-sm text-base-content/80">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help your little hero?" 
                                    className="bg-base-100 shadow-inner px-4 py-3 border-2 border-transparent focus:border-primary/40 rounded-2xl focus:outline-none w-full font-bold text-sm text-base-content transition-all placeholder-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="px-1 font-extrabold text-sm text-base-content/80">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Write your message here..." 
                                    className="bg-base-100 shadow-inner px-4 py-4 border-2 border-transparent focus:border-primary/40 rounded-2xl focus:outline-none w-full font-bold text-sm text-base-content transition-all resize-none placeholder-gray-400"
                                ></textarea>
                            </div>

                            {/* Submit Button with Hover Action Area */}
                            <div className="group/btn inline-block w-full md:w-auto">
                                <button 
                                    type="submit" 
                                    disabled={loading}
                                    className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-70 shadow-lg shadow-primary/20 px-8 rounded-2xl w-full h-14 font-black text-white text-sm tracking-wider active:scale-95 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed"
                                >
                                    <span>{loading ? "Sending..." : "Send Message"}</span>
                                    <FaPaperPlane className="text-xs transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-1 duration-300" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;