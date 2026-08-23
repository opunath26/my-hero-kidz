"use client";

import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane, FaChild, FaQuestionCircle } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log("Form Submitted Successfully:", formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error("Submission Error:", error);
            alert("দুঃখিত! কোনো সমস্যা হয়েছে। আবার চেষ্টা করুন।");
        } finally {
            setLoading(false);
        }
    };

    const infoCards = [
        {
            id: 1,
            title: "সরাসরি কল করুন",
            detail: "+880 1700-000000",
            subDetail: "Sat - Thu: 9 AM - 8 PM",
            icon: <FaPhoneAlt />,
            badgeBg: "bg-orange-100 text-[#FF4500] border-orange-200"
        },
        {
            id: 2,
            title: "ইমেইল পাঠান",
            detail: "support@herokidz.com",
            subDetail: "২৪ ঘণ্টার মধ্যে রিপ্লাই পাবেন",
            icon: <FaEnvelope />,
            badgeBg: "bg-amber-100 text-amber-600 border-amber-200"
        },
        {
            id: 3,
            title: "আমাদের শোরুম",
            detail: "Level 4, Toy Kingdom Plaza",
            subDetail: "Banani, Dhaka, Bangladesh",
            icon: <FaMapMarkerAlt />,
            badgeBg: "bg-orange-100 text-[#FF4500] border-orange-200"
        }
    ];

    return (
        <section className="bg-[#FFFDF9] py-12 lg:py-16 text-slate-800 overflow-hidden">
            <div className="mx-auto px-4 max-w-6xl container">
                
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <span className="inline-flex items-center gap-2 bg-amber-100/80 px-4 py-1.5 rounded-full font-bold text-amber-800 text-xs sm:text-sm tracking-wider">
                        <FaChild className="text-[#FF4500]" /> যেকোনো প্রয়োজনে কথা বলুন 👋
                    </span>
                    
                    <h2 className="mt-4 font-black text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
                        <span className="text-[#FF4500]">খেলনা বা যেকোনো প্রশ্নের জন্য</span> <br />
                        <span className="text-slate-900 font-extrabold">We'd Love to Hear From You!</span>
                    </h2>
                    
                    <p className="mx-auto mt-3 max-w-xl text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                        স্মার্ট কার্ড, পাজল বা লার্নিং টয় বিষয়ক যেকোনো তথ্য জানতে বা অর্ডারের বিষয়ে আমাদের ফ্রেন্ডলি টিমের সাথে যোগাযোগ করুন।
                    </p>
                </div>

                {/* Info Cards */}
                <div className="gap-6 grid grid-cols-1 md:grid-cols-3 mb-12">
                    {infoCards.map((card) => (
                        <div 
                            key={card.id}
                            className="group flex items-center gap-4 bg-white shadow-sm hover:shadow-xl p-6 border border-orange-100 hover:border-[#FF4500]/40 rounded-3xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                            <div className={`p-4 rounded-2xl border text-xl flex items-center justify-center ${card.badgeBg} group-hover:scale-110 transition-transform`}>
                                {card.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-base sm:text-lg text-slate-900">{card.title}</h3>
                                <p className="mt-0.5 font-bold text-[#FF4500] text-xs sm:text-sm">{card.detail}</p>
                                <p className="mt-0.5 font-medium text-slate-400 text-[11px] sm:text-xs">{card.subDetail}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Section: Form + Map */}
                <div className="gap-8 grid grid-cols-1 lg:grid-cols-12">
                    
                    {/* Contact Form */}
                    <div className="lg:col-span-7 bg-white shadow-sm p-6 sm:p-8 border border-orange-100 rounded-[2rem]">
                        <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900">মেসেজ পাঠান</h3>
                        <p className="mb-6 text-slate-500 text-xs sm:text-sm">নিচের ফর্মটি পূরণ করে আপনার প্রশ্ন বা মতামত জানান।</p>

                        {submitted && (
                            <div className="bg-emerald-50 mb-6 p-4 border border-emerald-200 rounded-2xl text-emerald-800 text-xs sm:text-sm font-bold">
                                🎉 ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা দ্রুত যোগাযোগ করবো।
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <label className="font-bold text-xs text-slate-700">আপনার নাম <span className="text-[#FF4500]">*</span></label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="যেমন: অপূ নাথ" 
                                        className="bg-slate-50 focus:bg-white px-4 py-3 border border-slate-200 focus:border-[#FF4500] rounded-2xl focus:outline-none w-full font-semibold text-xs sm:text-sm transition-all"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="font-bold text-xs text-slate-700">ইমেইল এড্রেস <span className="text-[#FF4500]">*</span></label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="johndoe@example.com" 
                                        className="bg-slate-50 focus:bg-white px-4 py-3 border border-slate-200 focus:border-[#FF4500] rounded-2xl focus:outline-none w-full font-semibold text-xs sm:text-sm transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="font-bold text-xs text-slate-700">বিষয় / Subject <span className="text-[#FF4500]">*</span></label>
                                <input 
                                    type="text" 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help your little hero?" 
                                    className="bg-slate-50 focus:bg-white px-4 py-3 border border-slate-200 focus:border-[#FF4500] rounded-2xl focus:outline-none w-full font-semibold text-xs sm:text-sm transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="font-bold text-xs text-slate-700">আপনার মেসেজ <span className="text-[#FF4500]">*</span></label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="বিস্তারিত এখানে লিখুন..." 
                                    className="bg-slate-50 focus:bg-white px-4 py-3 border border-slate-200 focus:border-[#FF4500] rounded-2xl focus:outline-none w-full font-semibold text-xs sm:text-sm transition-all resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={loading}
                                className="flex justify-center items-center gap-2 bg-[#FF4500] hover:bg-[#e03d00] disabled:opacity-70 shadow-lg shadow-orange-500/20 px-8 py-3.5 rounded-2xl w-full font-black text-white text-xs sm:text-sm tracking-wider active:scale-95 transition-all cursor-pointer"
                            >
                                <span>{loading ? "পাঠানো হচ্ছে..." : "এখনই মেসেজ পাঠান"}</span>
                                <FaPaperPlane className="text-xs" />
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Location Map */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="bg-white border border-orange-100 rounded-[2rem] overflow-hidden shadow-sm">
                            <div className="p-5 border-b border-slate-100">
                                <h4 className="font-extrabold text-base text-slate-900">Our Store Location</h4>
                                <p className="text-slate-500 text-xs">আমাদের আউটলেটে সরাসরি চলে আসতে পারেন।</p>
                            </div>
                            <div className="w-full h-64 sm:h-72">
                                <iframe
                                    title="Store Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.082724458316!2d90.40473217602334!3d23.779932187627448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7715a31b815%3A0x2f90a2a1e3b6a22!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>

                        <div className="bg-[#FF4500] text-white p-6 rounded-[2rem] shadow-lg shadow-orange-500/20">
                            <h4 className="font-extrabold text-lg flex items-center gap-2">
                                <FaQuestionCircle /> দ্রত সাহায্যের প্রয়োজন?
                            </h4>
                            <p className="mt-2 text-xs opacity-90 leading-relaxed">
                                অর্ডারের অবস্থা বা খেলনা সম্পর্কিত জরুরি তথ্যের জন্য আমাদের হটলাইন নম্বরে সরাসরি কল করুন।
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;