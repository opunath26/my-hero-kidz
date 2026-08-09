"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { postUser } from "@/actions/server/auth";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

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

    const res = await postUser({ name, email, password });
    setLoading(false);

    if (res?.success) {
      router.push("/login");
    } else {
      setError(res?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4 w-full">
      {/* এরর মেসেজ */}
      {error && (
        <div className="bg-red-50 p-3 border border-red-200 rounded-xl font-medium text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      {/* Name Field */}
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

      {/* Email Field */}
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

      {/* Password Field */}
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

      {/* Confirm Password Field */}
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
        {loading ? "Creating account..." : "Sign Up"}
      </button>
    </form>
  );
};

export default RegisterForm;