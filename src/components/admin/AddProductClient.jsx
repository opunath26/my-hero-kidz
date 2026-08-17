"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaPlusCircle, FaBox, FaDollarSign, FaTags, FaLayerGroup, FaImage, FaPercent, FaLanguage } from "react-icons/fa";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Product added successfully!");
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
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.message || "Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto p-4 sm:p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="flex items-center gap-2 font-black text-2xl">
          <FaPlusCircle className="text-primary" /> Add New Product
        </h1>
        <p className="text-sm text-base-content/70">
          Create a new product listing matching exact database attributes.
        </p>
      </div>

      <div className="bg-base-100 shadow-sm p-6 sm:p-8 border border-base-200 rounded-3xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title & Bangla Title */}
          <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
            <div className="form-control">
              <label className="font-bold text-xs label">Product Title (English)</label>
              <div className="relative">
                <FaBox className="top-3.5 left-4 absolute text-base-content/40" />
                <input
                  type="text"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Number and Counting Learning Board"
                  className="pl-11 rounded-2xl w-full input input-bordered"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="font-bold text-xs label">Product Title (Bangla)</label>
              <div className="relative">
                <FaLanguage className="top-3.5 left-4 absolute text-base-content/40" />
                <input
                  type="text"
                  name="bangla"
                  value={formData.bangla}
                  onChange={handleChange}
                  placeholder="সংখ্যা ও গণনা শেখার শিক্ষামূলক বোর্ড"
                  className="pl-11 rounded-2xl w-full input input-bordered"
                />
              </div>
            </div>
          </div>

          {/* Price, Discount, Stock, Category */}
          <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
            <div className="form-control">
              <label className="font-bold text-xs label">Price (৳)</label>
              <div className="relative">
                <FaDollarSign className="top-3.5 left-4 absolute text-base-content/40" />
                <input
                  type="number"
                  name="price"
                  required
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="1250"
                  className="pl-11 rounded-2xl w-full input input-bordered"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="font-bold text-xs label">Discount (%)</label>
              <div className="relative">
                <FaPercent className="top-3.5 left-4 absolute text-base-content/40" />
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  placeholder="10"
                  className="pl-11 rounded-2xl w-full input input-bordered"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="font-bold text-xs label">Stock</label>
              <div className="relative">
                <FaLayerGroup className="top-3.5 left-4 absolute text-base-content/40" />
                <input
                  type="number"
                  name="stock"
                  required
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="50"
                  className="pl-11 rounded-2xl w-full input input-bordered"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="font-bold text-xs label">Category</label>
              <div className="relative">
                <FaTags className="top-3.5 left-4 z-10 absolute text-base-content/40" />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="pl-11 rounded-2xl w-full font-bold select-bordered select"
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
          <div className="form-control">
            <label className="font-bold text-xs label">Image URL</label>
            <div className="relative">
              <FaImage className="top-3.5 left-4 absolute text-base-content/40" />
              <input
                type="url"
                name="image"
                required
                value={formData.image}
                onChange={handleChange}
                placeholder="https://i.ibb.co.com/..."
                className="pl-11 rounded-2xl w-full input input-bordered"
              />
            </div>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="font-bold text-xs label">Description</label>
            <textarea
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              placeholder="Number and Counting Learning Board টি শিশুদের প্রাথমিক গণিত শেখার জন্য..."
              className="rounded-2xl w-full textarea textarea-bordered"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 rounded-2xl w-full font-bold text-white btn btn-primary"
          >
            {loading ? <span className="loading loading-spinner"></span> : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}