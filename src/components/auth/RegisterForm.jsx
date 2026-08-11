"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { postUser } from "@/actions/server/auth";
import { FaUser, FaEnvelope, FaLock, FaCamera, FaTrash } from "react-icons/fa";
import Image from "next/image";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError("Image size should be less than 2MB");
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setError("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    let uploadedImageUrl = "";

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
          setError("Failed to upload image. Please try again.");
          setLoading(false);
          return;
        }
      } catch (err) {
        console.error("ImgBB Upload Error:", err);
        setError("Image upload failed!");
        setLoading(false);
        return;
      }
    }

    const res = await postUser({
      name,
      email,
      image: uploadedImageUrl,
      password,
    });

    setLoading(false);

    if (res?.success) {
      router.push("/login");
    } else {
      setError(res?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4 w-full">
      {error && (
        <div className="bg-red-50 p-3 border border-red-200 rounded-xl font-medium text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      {/* Profile Photo File Upload Field */}
      <div className="flex flex-col justify-center items-center pb-2">
        <label className="mb-2 font-semibold text-slate-700 text-sm">Profile Photo</label>
        <div className="group relative cursor-pointer">
          <div className="relative flex justify-center items-center bg-slate-100 shadow-sm border-2 border-slate-200 group-hover:border-primary rounded-full w-24 h-24 overflow-hidden transition-all">
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="Profile Preview"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex flex-col items-center text-slate-400">
                <FaCamera className="mb-1 text-2xl" />
                <span className="font-medium text-[10px]">Upload</span>
              </div>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
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
        <span className="mt-1 text-slate-400 text-xs">Click to select photo</span>
      </div>

      {/* Full Name */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700 text-sm">Full Name</label>
        <div className="relative flex items-center">
          <FaUser className="left-4 absolute text-slate-400" />
          <input
            name="name"
            type="text"
            placeholder="Enter your full name"
            className="bg-slate-50 focus:bg-white py-3 pr-4 pl-11 border border-slate-200 focus:border-primary rounded-2xl focus:outline-none w-full text-slate-800 text-sm transition-all placeholder-slate-400"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700 text-sm">Email Address</label>
        <div className="relative flex items-center">
          <FaEnvelope className="left-4 absolute text-slate-400" />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="bg-slate-50 focus:bg-white py-3 pr-4 pl-11 border border-slate-200 focus:border-primary rounded-2xl focus:outline-none w-full text-slate-800 text-sm transition-all placeholder-slate-400"
            required
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700 text-sm">Password</label>
        <div className="relative flex items-center">
          <FaLock className="left-4 absolute text-slate-400" />
          <input
            name="password"
            type="password"
            placeholder="Create a password"
            className="bg-slate-50 focus:bg-white py-3 pr-4 pl-11 border border-slate-200 focus:border-primary rounded-2xl focus:outline-none w-full text-slate-800 text-sm transition-all placeholder-slate-400"
            required
          />
        </div>
      </div>

      {/* Confirm Password */}
      <div className="space-y-1">
        <label className="font-semibold text-slate-700 text-sm">Confirm Password</label>
        <div className="relative flex items-center">
          <FaLock className="left-4 absolute text-slate-400" />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="bg-slate-50 focus:bg-white py-3 pr-4 pl-11 border border-slate-200 focus:border-primary rounded-2xl focus:outline-none w-full text-slate-800 text-sm transition-all placeholder-slate-400"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-primary hover:bg-primary/90 disabled:opacity-50 shadow-lg shadow-primary/10 mt-4 py-3.5 rounded-2xl w-full font-bold text-white text-base active:scale-[0.98] transition-all"
      >
        {loading ? "Uploading image & creating account..." : "Sign Up"}
      </button>
    </form>
  );
};

export default RegisterForm;