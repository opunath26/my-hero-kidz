"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaShoppingBag, FaSave } from "react-icons/fa";

export default function Profile() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

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
    }
  }, [session]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage({ type: "success", text: "Profile updated successfully!" });
      } else {
        setMessage({ type: "error", text: "Failed to update profile." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Something went wrong." });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <span className="text-primary loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-10 max-w-4xl min-h-[80vh]">
      {/* Header Banner */}
      <div className="flex flex-wrap justify-between items-center gap-6 bg-base-100 shadow-sm mb-8 p-6 sm:p-8 border border-base-200 rounded-3xl">
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="relative flex-shrink-0 bg-base-200 border-4 border-primary/20 rounded-full w-20 h-20 overflow-hidden">
            <Image
              src={session?.user?.image || "/placeholder.png"}
              alt={formData.name || "User"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="font-black text-xl sm:text-2xl">{formData.name || "HeroKidz Parent"}</h1>
            <p className="text-xs sm:text-sm text-base-content/70">{formData.email}</p>
          </div>
        </div>

        <Link
          href="/my-orders"
          className="gap-2 rounded-2xl btn-outline font-bold text-xs sm:text-sm btn btn-primary"
        >
          <FaShoppingBag /> View My Orders
        </Link>
      </div>

      {/* Profile Form */}
      <div className="bg-base-100 shadow-sm p-6 sm:p-8 border border-base-200 rounded-3xl">
        <h2 className="flex items-center gap-2 mb-6 pb-3 border-base-200 border-b font-bold text-lg">
          <FaUser className="text-primary" /> Personal & Shipping Info
        </h2>

        {message.text && (
          <div className={`alert ${message.type === "success" ? "alert-success text-white" : "alert-error text-white"} mb-6 text-sm rounded-2xl`}>
            <span>{message.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="form-control">
              <label className="font-bold text-xs text-base-content/80 label">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 rounded-2xl w-full text-sm input input-bordered"
                />
                <FaUser className="top-3.5 left-3.5 absolute text-xs text-base-content/40" />
              </div>
            </div>

            <div className="form-control">
              <label className="font-bold text-xs text-base-content/80 label">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="bg-base-200 pl-10 rounded-2xl w-full text-sm cursor-not-allowed input input-bordered"
                />
                <FaEnvelope className="top-3.5 left-3.5 absolute text-xs text-base-content/40" />
              </div>
            </div>

            <div className="form-control">
              <label className="font-bold text-xs text-base-content/80 label">Phone Number</label>
              <div className="relative">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="017XXXXXXXX"
                  className="pl-10 rounded-2xl w-full text-sm input input-bordered"
                />
                <FaPhone className="top-3.5 left-3.5 absolute text-xs text-base-content/40" />
              </div>
            </div>

            <div className="form-control">
              <label className="font-bold text-xs text-base-content/80 label">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Dhaka / Chittagong"
                className="rounded-2xl w-full text-sm input input-bordered"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="font-bold text-xs text-base-content/80 label">Default Shipping Address</label>
            <div className="relative">
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House No, Road No, Area details..."
                rows={3}
                className="pt-3 pl-10 rounded-2xl w-full text-sm textarea textarea-bordered"
              />
              <FaMapMarkerAlt className="top-3.5 left-3.5 absolute text-xs text-base-content/40" />
            </div>
          </div>

          <div className="flex justify-end pt-3">
            <button
              type="submit"
              disabled={saving}
              className="shadow-lg shadow-primary/25 px-8 rounded-2xl font-bold btn btn-primary"
            >
              {saving ? <span className="loading loading-spinner loading-sm"></span> : <><FaSave /> Save Changes</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}