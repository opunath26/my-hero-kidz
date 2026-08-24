"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react";
import { FaUser, FaEnvelope, FaLock, FaCamera, FaTrash, FaSpinner } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  // Toast Custom Styles (Matching Brand Orange Theme)
  const successToastStyle = {
    borderRadius: '12px',
    background: '#ea580c', // Orange Theme
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("ছবি সাইজ সর্বোচ্চ 2MB হতে পারবে।", {
          style: errorToastStyle,
          iconTheme: { primary: '#fff', secondary: '#ef4444' }
        });
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("পাসওয়ার্ড দুইটি মেলেনি!", {
        style: errorToastStyle,
        iconTheme: { primary: '#fff', secondary: '#ef4444' }
      });
      setLoading(false);
      return;
    }

    let uploadedImageUrl = "";

    // Image Upload Process
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      try {
        const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
        const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (data.success) {
          uploadedImageUrl = data.data.url;
        } else {
          toast.error("ছবি আপলোড হতে সমস্যা হয়েছে, পুনরায় চেষ্টা করুন।", {
            style: errorToastStyle,
            iconTheme: { primary: '#fff', secondary: '#ef4444' }
          });
          setLoading(false);
          return;
        }
      } catch (err) {
        console.error("ImgBB Upload Error:", err);
        toast.error("ছবি আপলোড ব্যর্থ হয়েছে!", {
          style: errorToastStyle,
          iconTheme: { primary: '#fff', secondary: '#ef4444' }
        });
        setLoading(false);
        return;
      }
    }

    // User Registration
    try {
      const res = await postUser({
        name,
        email,
        image: uploadedImageUrl,
        password,
      });

      if (res?.success) {
        toast.success("অভিনন্দন! (Registration Successful)", {
          style: successToastStyle,
          iconTheme: { primary: '#fff', secondary: '#ea580c' }
        });

        // Attempt Auto Login
        const loginRes = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        setLoading(false);

        if (loginRes?.ok) {
          toast.success("হোম পেজে রিডাইরেক্ট করা হচ্ছে...", {
            style: successToastStyle,
            iconTheme: { primary: '#fff', secondary: '#ea580c' }
          });

          setTimeout(() => {
            router.push("/");
            router.refresh();
          }, 2000);
        } else {
          toast.error("রেজিস্ট্রেশন সফল হয়েছে, তবে অটোমেটিক লগইন ব্যর্থ। ম্যানুয়ালি লগইন করুন।", {
            style: errorToastStyle,
            iconTheme: { primary: '#fff', secondary: '#ef4444' }
          });
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        }
      } else {
        setLoading(false);
        toast.error(res?.message || "রেজিস্ট্রেশন সম্পূর্ণ করা সম্ভব হয়নি", {
          style: errorToastStyle,
          iconTheme: { primary: '#fff', secondary: '#ef4444' }
        });
      }
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("সার্ভারে সমস্যা হয়েছে!", {
        style: errorToastStyle,
        iconTheme: { primary: '#fff', secondary: '#ef4444' }
      });
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleRegister} className="space-y-4 w-full">
        {/* Profile Photo File Upload Field */}
        <div className="flex flex-col justify-center items-center pb-2">
          <label className="mb-2 font-bold text-slate-700 text-xs uppercase tracking-wider">
            প্রোফাইল ছবি (Profile Photo)
          </label>
          <div className="group relative cursor-pointer">
            <div className="relative flex justify-center items-center bg-white/60 hover:bg-white/90 shadow-inner backdrop-blur-md border-2 border-slate-300 group-hover:border-[#FF4500] border-dashed rounded-full w-24 h-24 overflow-hidden transition-all">
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="Profile Preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex flex-col items-center text-slate-400 group-hover:text-[#FF4500] transition-colors">
                  <FaCamera className="mb-1 text-2xl" />
                  <span className="font-semibold text-[10px] uppercase">আপলোড করুন</span>
                </div>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={loading}
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer disabled:cursor-not-allowed"
            />

            {imagePreview && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setImagePreview(null);
                  setImageFile(null);
                }}
                className="-top-1 -right-1 z-10 absolute bg-rose-500 hover:bg-rose-600 shadow-md p-1.5 rounded-full text-white text-xs transition-colors"
                title="Remove photo"
              >
                <FaTrash />
              </button>
            )}
          </div>
          <span className="mt-1 font-medium text-[11px] text-slate-400">ছবি নির্বাচন করতে এখানে ক্লিক করুন</span>
        </div>

        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
            পুরো নাম (Full Name)
          </label>
          <div className="relative flex items-center">
            <FaUser className="left-4 absolute text-slate-400 text-sm" />
            <input
              name="name"
              type="text"
              placeholder="আপনার পুরো নাম লিখুন"
              disabled={loading}
              className="bg-white/60 focus:bg-white/90 disabled:opacity-60 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
            ইমেইল অ্যাড্রেস (Email)
          </label>
          <div className="relative flex items-center">
            <FaEnvelope className="left-4 absolute text-slate-400 text-sm" />
            <input
              name="email"
              type="email"
              placeholder="আপনার ইমেইল লিখুন"
              disabled={loading}
              className="bg-white/60 focus:bg-white/90 disabled:opacity-60 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
            পাসওয়ার্ড (Password)
          </label>
          <div className="relative flex items-center">
            <FaLock className="left-4 absolute text-slate-400 text-sm" />
            <input
              name="password"
              type="password"
              placeholder="পাসওয়ার্ড তৈরি করুন"
              disabled={loading}
              className="bg-white/60 focus:bg-white/90 disabled:opacity-60 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
              required
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="space-y-1.5">
          <label className="font-bold text-slate-700 text-xs uppercase tracking-wider">
            পাসওয়ার্ড নিশ্চিত করুন (Confirm Password)
          </label>
          <div className="relative flex items-center">
            <FaLock className="left-4 absolute text-slate-400 text-sm" />
            <input
              name="confirmPassword"
              type="password"
              placeholder="পুনরায় পাসওয়ার্ড লিখুন"
              disabled={loading}
              className="bg-white/60 focus:bg-white/90 disabled:opacity-60 shadow-inner backdrop-blur-md py-3 pr-4 pl-11 border border-white/60 focus:border-[#FF4500] rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/15 w-full font-medium text-slate-800 text-sm transition-all placeholder-slate-400"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="flex justify-center items-center gap-2 bg-[#FF4500] hover:bg-[#e03d00] disabled:opacity-60 shadow-lg shadow-orange-500/30 mt-2 py-3.5 rounded-2xl w-full font-extrabold text-white text-sm tracking-wide active:scale-[0.98] transition-all cursor-pointer disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <FaSpinner className="text-base animate-spin" />
              <span>একাউন্ট তৈরি হচ্ছে...</span>
            </>
          ) : (
            "রেজিস্টার করুন (Sign Up)"
          )}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;