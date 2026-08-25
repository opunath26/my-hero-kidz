"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle, FaTruck, FaUndo, FaShieldAlt, FaCreditCard } from 'react-icons/fa';

const faqData = [
    {
        category: "Shipping & Delivery",
        icon: <FaTruck className="text-orange-500" />,
        questions: [
            {
                q: "ডেলিভারি করতে কত দিন সময় লাগে?",
                a: "ঢাকা শহরের ভেতরে ২৪ থেকে ৪৮ ঘণ্টার মধ্যে এবং ঢাকার বাইরে ২ থেকে ৪ কার্যদিবসের মধ্যে ডেলিভারি সম্পন্ন করা হয়।"
            },
            {
                q: "ডেলিভারি চার্জ কত?",
                a: "ঢাকা শহরের ভেতরে ডেলিভারি চার্জ ৬০ টাকা এবং ঢাকার বাইরে ১২০ টাকা।"
            }
        ]
    },
    {
        category: "Orders & Returns",
        icon: <FaUndo className="text-emerald-500" />,
        questions: [
            {
                q: "পণ্য পছন্দ না হলে কি রিটার্ন করা যাবে?",
                a: "হ্যাঁ, ডেলিভারি পাওয়ার ৭ দিনের মধ্যে যেকোনো ভাঙা বা ভুল পণ্য পাওয়া গেলে আমাদের রিটার্ন পলিসি অনুযায়ী সহজে রিটার্ন করতে পারবেন।"
            },
            {
                q: "অর্ডার ক্যানসেল করতে চাইলে কি করবো?",
                a: "অর্ডার শিপমেন্টে যাওয়ার আগে আমাদের হটলাইন নম্বরে কল করে বা কন্টাক্ট পেজ থেকে মেসেজ দিয়ে অর্ডার বাতিল করতে পারবেন।"
            }
        ]
    },
    {
        category: "Product Quality",
        icon: <FaShieldAlt className="text-amber-500" />,
        questions: [
            {
                q: "আপনাদের খেলনাগুলো কি বাচ্চাদের জন্য নিরাপদ?",
                a: "অবশ্যই! আমাদের প্রতিটি খেলনা ১০০% নন-টক্সিক ও শিশু-বান্ধব মেটেরিয়াল দিয়ে তৈরি, যা বাচ্চাদের ব্যবহারের জন্য সম্পূর্ণ নিরাপদ।"
            }
        ]
    },
    {
        category: "Payment Methods",
        icon: <FaCreditCard className="text-sky-500" />,
        questions: [
            {
                q: "পেমেন্ট করার কি কি মাধ্যম আছে?",
                a: "আমরা ক্যাশ অন ডেলিভারি (COD), বিকাশ, নগদ, রকেট এবং যেকোনো ডেবিট/ক্রেডিট কার্ডের মাধ্যমে পেমেন্ট গ্রহণ করি।"
            }
        ]
    }
];

const FAQPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    let itemCounter = 0;

    return (
        <div className="bg-slate-50/50 px-4 py-16 min-h-screen">
            <div className="mx-auto max-w-4xl">
                {/* Header */}
                <div className="space-y-3 mb-12 text-center">
                    <span className="inline-flex items-center gap-1.5 bg-orange-500/10 px-4 py-1.5 border border-orange-500/20 rounded-full font-extrabold text-[#FF4500] text-xs">
                        <FaQuestionCircle /> Got Questions?
                    </span>
                    <h1 className="font-black text-slate-900 text-3xl sm:text-4xl tracking-tight">
                        সচরাচর জিজ্ঞাসিত <span className="text-[#FF4500]">প্রশ্নাবলী</span> (FAQ)
                    </h1>
                    <p className="mx-auto max-w-lg font-medium text-slate-500 text-sm sm:text-base">
                        HeroKidz সম্পর্কে আপনার যেকোনো প্রশ্নের উত্তর নিচে সহজেই পেয়ে যাবেন।
                    </p>
                </div>

                {/* FAQ Sections */}
                <div className="space-y-8">
                    {faqData.map((cat, catIdx) => (
                        <div key={catIdx} className="space-y-3">
                            {/* Category Header */}
                            <div className="flex items-center gap-2 pb-2 border-slate-200 border-b font-extrabold text-slate-800 text-base sm:text-lg">
                                <span className="bg-white shadow-sm p-2 border border-slate-100 rounded-xl">{cat.icon}</span>
                                <h3>{cat.category}</h3>
                            </div>

                            {/* Accordion Items */}
                            <div className="space-y-2.5">
                                {cat.questions.map((item) => {
                                    const currentIndex = itemCounter++;
                                    const isOpen = openIndex === currentIndex;

                                    return (
                                        <div 
                                            key={currentIndex} 
                                            className="bg-white shadow-sm border border-slate-200/80 hover:border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-200"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(currentIndex)}
                                                className="flex justify-between items-center gap-4 p-4 sm:p-5 w-full font-bold text-slate-800 text-sm sm:text-base text-left cursor-pointer"
                                            >
                                                <span>{item.q}</span>
                                                <FaChevronDown 
                                                    className={`text-slate-400 text-xs sm:text-sm shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : ""}`} 
                                                />
                                            </button>
                                            {isOpen && (
                                                <div className="bg-slate-50/50 px-4 sm:px-5 pt-3 pb-5 border-slate-100 border-t text-slate-500 text-xs sm:text-sm leading-relaxed">
                                                    {item.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;