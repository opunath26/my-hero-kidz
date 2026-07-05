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
            alert("Thank you for reaching out! Your message has been sent successfully.");
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error("Submission Error:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-12 text-slate-800">
            {/* Header Section */}
            <div className="space-y-4 mx-auto mb-16 max-w-2xl text-center">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full font-bold text-primary text-sm">
                    <FaChild /> Contact Our Team
                </div>
                <h1 className="font-black text-slate-900 text-3xl md:text-5xl leading-tight">
                    Have Questions? <br />
                    <span className="text-primary">We'd Love to Hear From You!</span>
                </h1>
                <p className="text-slate-500">
                    Whether you have a question about our toys, shipping, returns, or anything else, our friendly team is ready to answer all your queries.
                </p>
            </div>

            <div className="gap-10 grid grid-cols-1 lg:grid-cols-3">
                {/* Contact Info Cards */}
                <div className="space-y-6 lg:col-span-1">
                    <div className="flex items-start gap-4 bg-white shadow-sm p-6 border border-slate-100 rounded-2xl">
                        <div className="bg-primary/10 p-4 rounded-xl text-primary text-xl">
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <h3 className="mb-1 font-bold text-slate-900 text-lg">Call Us</h3>
                            <p className="text-slate-600 text-sm">+880 1234-567890</p>
                            <p className="text-slate-400 text-xs">Sat - Thu: 9 AM - 6 PM</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-white shadow-sm p-6 border border-slate-100 rounded-2xl">
                        <div className="bg-emerald-500/10 p-4 rounded-xl text-emerald-500 text-xl">
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className="mb-1 font-bold text-slate-900 text-lg">Email Us</h3>
                            <p className="text-slate-600 text-sm">support@herokidz.com</p>
                            <p className="text-slate-400 text-xs">Response within 24 hours</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 bg-white shadow-sm p-6 border border-slate-100 rounded-2xl">
                        <div className="bg-purple-500/10 p-4 rounded-xl text-purple-500 text-xl">
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 className="mb-1 font-bold text-slate-900 text-lg">Our Store</h3>
                            <p className="text-slate-600 text-sm">Level 4, Toy Kingdom Plaza</p>
                            <p className="text-slate-400 text-xs">Banani, Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 bg-white shadow-sm p-8 border border-slate-100 rounded-3xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="gap-6 grid grid-cols-1 md:grid-cols-2">
                            <div className="space-y-2">
                                <label className="font-bold text-slate-700 text-sm">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe" 
                                    className="bg-slate-50 focus:bg-white px-4 py-3 border border-slate-100 focus:border-primary/50 rounded-xl focus:outline-none w-full text-sm transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="font-bold text-slate-700 text-sm">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="johndoe@example.com" 
                                    className="bg-slate-50 focus:bg-white px-4 py-3 border border-slate-100 focus:border-primary/50 rounded-xl focus:outline-none w-full text-sm transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="font-bold text-slate-700 text-sm">Subject</label>
                            <input 
                                type="text" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="How can we help your little hero?" 
                                className="bg-slate-50 focus:bg-white px-4 py-3 border border-slate-100 focus:border-primary/50 rounded-xl focus:outline-none w-full text-sm transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="font-bold text-slate-700 text-sm">Message</label>
                            <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Write your message here..." 
                                className="bg-slate-50 focus:bg-white px-4 py-3 border border-slate-100 focus:border-primary/50 rounded-xl focus:outline-none w-full text-sm transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="flex justify-center items-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-70 shadow-lg shadow-primary/10 px-8 py-3.5 rounded-xl w-full md:w-fit font-bold text-white active:scale-[0.98] transition-all disabled:cursor-not-allowed"
                        >
                            <FaPaperPlane className="text-sm" />
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;