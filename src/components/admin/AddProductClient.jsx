"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaPlusCircle,
  FaBox,
  FaDollarSign,
  FaTags,
  FaLayerGroup,
  FaImage,
  FaPercent,
  FaLanguage,
  FaSave,
  FaSpinner
} from "react-icons/fa";
import { toast } from "react-hot-toast";

export default function AddProductClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    bangla: "",
    image: "",
    price: "",
    discount: "0",
    category: "Learning",
    stock: "",
    description: "",
  });

  // Toast Styles
  const successToastStyle = {
    borderRadius: '12px',
    background: '#ea580c',
    color: '#fff',
    fontWeight: 'bold',
    padding: '12px 20px',
  };

  const errorToastStyle = {
    borderRadius: '12px',
    background: '#ef4444',
    color: '#fff',
    fontWeight: 'bold',
    padding: '12px 20px',
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Number ডাটাগুলোকে সঠিকভাবে পার্শ করা
    const payload = {
      ...formData,
      price: Number(formData.price),
      discount: Number(formData.discount),
      stock: Number(formData.stock),
    };

    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setFormData({
          title: "",
          bangla: "",
          image: "",
          price: "",
          discount: "0",
          category: "Learning",
          stock: "",
          description: "",
        });
        toast.success("প্রোডাক্ট সফলভাবে যুক্ত হয়েছে!", { style: successToastStyle });
        router.refresh();
      } else {
        toast.error(data.message || "প্রোডাক্ট যুক্ত করা সম্ভব হয়নি!", { style: errorToastStyle });
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("সার্ভারে সমস্যা হয়েছে!", { style: errorToastStyle });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-slate-50 px-4 py-10 min-h-screen overflow-hidden">
      {/* Background Decorators */}
      <div className="top-10 left-10 -z-10 absolute bg-orange-400/20 blur-3xl rounded-full w-72 h-72 animate-pulse" />
      <div className="right-10 bottom-10 -z-10 absolute bg-amber-400/20 blur-3xl rounded-full w-96 h-96 animate-pulse" />

      <div className="space-y-6 mx-auto max-w-4xl">
        <div className="bg-white/70 shadow-xl backdrop-blur-xl p-6 sm:p-8 border border-white/80 rounded-3xl">
          <h1 className="flex items-center gap-3 font-extrabold text-slate-900 text-2xl sm:text-3xl">
            <FaPlusCircle className="text-[#FF4500]" /> নতুন প্রোডাক্ট যুক্ত করুন
          </h1>
          <p className="mt-1 font-medium text-slate-500 text-xs sm:text-sm">
            ডাটাবেজের সঠিক ফরম্যাট অনুযায়ী নতুন প্রোডাক্ট তৈরি করুন।
          </p>
        </div>

        <div className="bg-white/70 shadow-xl backdrop-blur-xl p-6 sm:p-8 border border-white/80 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Title & Bangla Title */}
            <div className="gap-5 grid grid-cols-1 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Product Title (English) *
                </label>
                <div className="relative flex items-center">
                  <FaBox className="left-4 absolute text-slate-400 text-sm" />
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Number and Counting Board"
                    className="bg-white/60 focus:bg-white/90 py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Product Title (Bangla)
                </label>
                <div className="relative flex items-center">
                  <FaLanguage className="left-4 absolute text-slate-400 text-sm" />
                  <input
                    type="text"
                    name="bangla"
                    value={formData.bangla}
                    onChange={handleChange}
                    placeholder="সংখ্যা ও গণনা শেখার বোর্ড"
                    className="bg-white/60 focus:bg-white/90 py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Price, Discount, Stock, Category */}
            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Price (৳) *
                </label>
                <div className="relative flex items-center">
                  <FaDollarSign className="left-4 absolute text-slate-400 text-sm" />
                  <input
                    type="number"
                    name="price"
                    required
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="1250"
                    className="bg-white/60 focus:bg-white/90 py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Discount (%)
                </label>
                <div className="relative flex items-center">
                  <FaPercent className="left-4 absolute text-slate-400 text-sm" />
                  <input
                    type="number"
                    name="discount"
                    value={formData.discount}
                    onChange={handleChange}
                    placeholder="10"
                    className="bg-white/60 focus:bg-white/90 py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Stock *
                </label>
                <div className="relative flex items-center">
                  <FaLayerGroup className="left-4 absolute text-slate-400 text-sm" />
                  <input
                    type="number"
                    name="stock"
                    required
                    value={formData.stock}
                    onChange={handleChange}
                    placeholder="50"
                    className="bg-white/60 focus:bg-white/90 py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                  Category
                </label>
                <div className="relative flex items-center">
                  <FaTags className="left-4 z-10 absolute text-slate-400 text-sm" />
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="bg-white/60 focus:bg-white/90 py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-bold text-slate-800 text-sm transition-all"
                  >
                    <option value="Learning">Learning</option>
                    <option value="Toys">Toys</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Baby Care">Baby Care</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                Image URL *
              </label>
              <div className="relative flex items-center">
                <FaImage className="left-4 absolute text-slate-400 text-sm" />
                <input
                  type="url"
                  name="image"
                  required
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://i.ibb.co.com/..."
                  className="bg-white/60 focus:bg-white/90 py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                Description
              </label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="প্রোডাক্টের বিবরণ লিখুন..."
                className="bg-white/60 focus:bg-white/90 p-4 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="flex justify-center items-center gap-2 bg-[#FF4500] hover:bg-[#e03d00] disabled:opacity-60 shadow-lg shadow-orange-500/30 py-4 rounded-2xl w-full font-extrabold text-white text-sm tracking-wide active:scale-95 transition-all cursor-pointer"
            >
              {loading ? (
                <>
                  <FaSpinner className="text-base animate-spin" />
                  <span>সেভ হচ্ছে...</span>
                </>
              ) : (
                <>
                  <FaSave /> প্রোডাক্ট সেভ করুন
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}