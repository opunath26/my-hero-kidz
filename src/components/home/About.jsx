import React from 'react';
import Image from 'next/image';
import { FaRocket, FaSmile, FaShieldAlt, FaChild } from 'react-icons/fa';

const About = () => {
    const stats = [
        { id: 1, value: "10,000+", label: "Happy Kids & Parents" },
        { id: 2, value: "1,500+", label: "Unique Toys & Products" },
        { id: 3, value: "100%", label: "Non-Toxic & Safe" },
        { id: 4, value: "24/7", label: "Easy Returns & Support" }
    ];

    const values = [
        {
            id: 1,
            icon: <FaShieldAlt className="text-emerald-500 text-3xl" />,
            title: "100% Safe & Non-Toxic",
            desc: "Children's health is our top priority. Every toy we offer meets international quality standards, is free from harmful chemicals, and is completely safe for your little ones."
        },
        {
            id: 2,
            icon: <FaRocket className="text-purple-500 text-3xl" />,
            title: "Skill & Brain Development",
            desc: "We provide educational and fun toys designed to stimulate creativity, problem-solving skills, and cognitive development in children while they play."
        },
        {
            id: 3,
            icon: <FaSmile className="text-amber-500 text-3xl" />,
            title: "Guaranteed Pure Smiles",
            desc: "Our ultimate mission and inspiration is to bring genuine joy and a bright smile to the face of every child across the country."
        }
    ];

    return (
        <div className="py-12 text-slate-800">
            {/* Hero Section */}
            <div className="items-center gap-12 grid grid-cols-1 md:grid-cols-2 mb-20">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full font-bold text-primary text-sm">
                        <FaChild /> Learn About Hero Kidz
                    </div>
                    <h1 className="font-black text-slate-900 text-3xl md:text-5xl leading-tight">
                        A Kingdom of Dreams <br />
                        <span className="text-primary">& Joy for Your Little Heroes!</span>
                    </h1>
                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                        Welcome to <strong>Hero Kidz</strong>! We believe that every child is a little hero in their own way. To make their childhood more colorful, joyful, and educational, we bring you a vast collection of premium quality toys, games, and kids' accessories.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                        Our products are carefully selected not just to pass the time, but to help children learn new things and develop their intelligence through play. Combining safe materials with attractive designs, Hero Kidz has become a trusted name for thousands of parents today.
                    </p>
                </div>

                <div className="relative bg-slate-50 shadow-md rounded-3xl w-full aspect-square overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600"
                        alt="Hero Kidz About Banner"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Stats Counter Section */}
            <div className="gap-8 grid grid-cols-2 md:grid-cols-4 bg-slate-50 shadow-sm mb-20 p-8 md:p-12 border border-slate-100 rounded-3xl text-center">
                {stats.map((stat) => (
                    <div key={stat.id} className="space-y-2">
                        <div className="font-black text-primary text-3xl md:text-4xl">{stat.value}</div>
                        <div className="font-medium text-slate-500 text-sm">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Core Values Section */}
            <div className="space-y-12">
                <div className="space-y-4 mx-auto max-w-2xl text-center">
                    <h2 className="font-extrabold text-slate-900 text-2xl md:text-4xl">
                        Why Parents Trust Us
                    </h2>
                    <p className="text-slate-500">
                        We don't just sell toys; we work to build a beautiful, safe, and joyful childhood for every child.
                    </p>
                </div>

                <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
                    {values.map((item) => (
                        <div
                            key={item.id}
                            className="group space-y-4 bg-white shadow-sm hover:shadow-md p-8 border border-slate-100 rounded-2xl transition-all hover:-translate-y-1 duration-300"
                        >
                            <div className="bg-slate-50 group-hover:bg-primary/5 p-4 rounded-xl w-fit transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-slate-800 text-xl">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;