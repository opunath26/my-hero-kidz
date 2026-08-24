"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShoppingBag, FaSave, FaSpinner, FaCity } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Loading from "@/app/loading";



export default function Profile() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  // Toast Custom Styles
  const successToastStyle = {
    borderRadius: '12px',
    background: '#ea580c',
    color: '#fff',
    fontWeight: 'bold',
    padding: '12px 20px',
    boxShadow: '0 10px 15px -3px rgba(234, 88, 12, 0.3)',
  };

  const errorToastStyle = {
    borderRadius: '12px',
    background: '#ef4444',
    color: '#fff',
    fontWeight: 'bold',
    padding: '12px 20px',
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("/api/user/profile");
        const data = await res.json();

        if (res.ok && data.user) {
          const u = data.user;
          setFormData({
            name: u.name || session?.user?.name || "",
            email: u.email || session?.user?.email || "",
            phone: u.phone || "",
            address: u.shippingAddress?.address || "",
            city: u.shippingAddress?.city || "",
            postalCode: u.shippingAddress?.postalCode || "",
          });
        } else {
          setFormData((prev) => ({
            ...prev,
            name: session?.user?.name || "",
            email: session?.user?.email || "",
          }));
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [session]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!", {
          style: successToastStyle,
          iconTheme: { primary: '#fff', secondary: '#ea580c' }
        });
      } else {
        toast.error("প্রোফাইল আপডেট করা সম্ভব হয়নি।", {
          style: errorToastStyle,
          iconTheme: { primary: '#fff', secondary: '#ef4444' }
        });
      }
    } catch (err) {
      console.error(err);
      toast.error("সার্ভারে সমস্যা হয়েছে!", {
        style: errorToastStyle,
        iconTheme: { primary: '#fff', secondary: '#ef4444' }
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <Loading />
        <span className="text-[#FF4500] loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="relative flex justify-center items-center bg-slate-50 px-4 py-12 min-h-screen overflow-hidden">
      {/* Background Decorator Elements */}
      <div className="top-10 left-10 -z-10 absolute bg-orange-400/20 blur-3xl rounded-full w-72 h-72 animate-pulse" />
      <div className="right-10 bottom-10 -z-10 absolute bg-amber-400/20 blur-3xl rounded-full w-96 h-96 animate-pulse" />

      <div className="space-y-6 w-full max-w-4xl">
        {/* Header Banner Section */}
        <div className="flex flex-wrap justify-between items-center gap-6 bg-white/70 shadow-xl backdrop-blur-xl p-6 sm:p-8 border border-white/80 rounded-3xl">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative flex-shrink-0 bg-orange-100 shadow-inner border-[#FF4500]/30 border-4 rounded-full w-20 h-20 overflow-hidden">
              <Image
                src={session?.user?.image || "/placeholder.png"}
                alt={formData.name || "User"}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-extrabold text-slate-900 text-xl sm:text-2xl">
                {formData.name || "ইউজার প্রোফাইল"}
              </h1>
              <p className="font-medium text-slate-500 text-xs sm:text-sm">
                {formData.email}
              </p>
            </div>
          </div>

          <Link
            href="/my-orders"
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 hover:from-orange-600 to-amber-500 hover:to-amber-600 shadow-lg shadow-orange-500/20 px-5 py-3 rounded-2xl font-bold text-white text-xs sm:text-sm active:scale-95 transition-all"
          >
            <FaShoppingBag /> আমার অর্ডারসমূহ
          </Link>
        </div>

        {/* Profile Details Form Card */}
        <div className="bg-white/70 shadow-xl backdrop-blur-xl p-6 sm:p-8 border border-white/80 rounded-3xl">
          <h2 className="flex items-center gap-2.5 mb-6 pb-4 border-slate-200/80 border-b font-extrabold text-slate-800 text-lg sm:text-xl">
            <FaUser className="text-[#FF4500]" /> ব্যক্তিগত ও শিপিং তথ্য
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="gap-5 grid grid-cols-1 sm:grid-cols-2">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                  পুরো নাম (Full Name)
                </label>
                <div className="relative flex items-center">
                  <FaUser className="left-4 absolute text-slate-400 text-sm" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="আপনার নাম লিখুন"
                    className="bg-white/60 focus:bg-white/90 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                  ইমেইল (Email)
                </label>
                <div className="relative flex items-center">
                  <FaEnvelope className="left-4 absolute text-slate-400 text-sm" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    disabled
                    className="bg-slate-100/80 shadow-inner py-3 pr-4 pl-11 border border-slate-200/80 rounded-2xl w-full font-medium text-slate-500 text-sm cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                  ফোন নম্বর (Phone)
                </label>
                <div className="relative flex items-center">
                  <FaPhone className="left-4 absolute text-slate-400 text-sm" />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="017XXXXXXXX"
                    className="bg-white/60 focus:bg-white/90 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
                  />
                </div>
              </div>

              {/* City */}
              <div className="space-y-1.5">
                <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                  সিটি / শহর (City)
                </label>
                <div className="relative flex items-center">
                  <FaCity className="left-4 absolute text-slate-400 text-sm" />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="ঢাকা / চট্টগ্রাম"
                    className="bg-white/60 focus:bg-white/90 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-1.5">
              <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
                শিপিং ঠিকানা (Shipping Address)
              </label>
              <div className="relative flex items-start">
                <FaMapMarkerAlt className="top-4 left-4 absolute text-slate-400 text-sm" />
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="বাসা নম্বর, রোড নম্বর, এলাকার বিস্তারিত তথ্য লিখুন..."
                  rows={3}
                  className="bg-white/60 focus:bg-white/90 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-3">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 bg-[#FF4500] hover:bg-[#e03d00] disabled:opacity-60 shadow-lg shadow-orange-500/30 px-8 py-3.5 rounded-2xl font-extrabold text-white text-sm tracking-wide active:scale-95 transition-all cursor-pointer disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <FaSpinner className="text-base animate-spin" />
                    <span>সেভ হচ্ছে...</span>
                  </>
                ) : (
                  <>
                    <FaSave /> পরিবর্তন সংরক্ষণ করুন
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}