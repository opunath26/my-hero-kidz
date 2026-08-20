"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaStar, FaRegStar, FaCamera, FaCheckCircle, FaUserCircle } from "react-icons/fa";

export default function ProductReviews({ productId, reviews = [], userSession }) {
  const [reviewList, setReviewList] = useState(Array.isArray(reviews) ? reviews : []);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    if (Array.isArray(reviews)) {
      setReviewList(reviews);
    }
  }, [reviews]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedImages.length > 3) {
      alert("You can upload a maximum of 3 images.");
      return;
    }

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setSelectedImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      alert("Please write a comment for your review.");
      return;
    }

    setIsSubmitting(true);

    try {
      const imageUrls = selectedImages.map((img) => img.preview);

      const newReviewPayload = {
        productId,
        rating,
        comment,
        images: imageUrls,
        userName: userSession?.user?.name || "Verified Customer",
        userImage: userSession?.user?.image || "",
        createdAt: new Date().toISOString(),
      };

      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReviewPayload),
      });

      if (res.ok) {
        const savedReview = await res.json();
        setReviewList((prev) => [savedReview.review || newReviewPayload, ...prev]);
      } else {
        setReviewList((prev) => [newReviewPayload, ...prev]);
      }

      setComment("");
      setSelectedImages([]);
      setRating(5);
      alert("Thank you! Your review has been added.");
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ২. Safe Array variables
  const safeReviews = Array.isArray(reviewList) ? reviewList : [];
  const totalReviews = safeReviews.length;
  const avgRating = totalReviews
    ? (safeReviews.reduce((acc, curr) => acc + (curr.rating || 0), 0) / totalReviews).toFixed(1)
    : "0.0";

  const getStarCount = (star) => safeReviews.filter((r) => Math.round(r.rating) === star).length;

  // ৩. Safe Filtering
  const filteredReviews = safeReviews.filter((r) => {
    if (activeFilter === "with-media") return r.images && r.images.length > 0;
    if (activeFilter === "5-star") return r.rating === 5;
    if (activeFilter === "4-star") return r.rating === 4;
    return true;
  });

  return (
    <div className="bg-white shadow-sm mt-10 p-6 md:p-8 border border-slate-200/80 rounded-3xl">
      <h3 className="mb-6 font-black text-slate-800 text-xl md:text-2xl">
        Customer Reviews & Ratings
      </h3>

      {/* Summary Section */}
      <div className="items-center gap-6 grid grid-cols-1 md:grid-cols-12 bg-slate-50 mb-8 p-6 border border-slate-100 rounded-2xl">
        <div className="flex flex-col justify-center items-center md:col-span-4 pr-0 md:pr-6 border-slate-200 md:border-r text-center">
          <span className="font-black text-slate-900 text-5xl">{avgRating}</span>
          <div className="flex gap-1 my-2 text-amber-400 text-lg">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className={star <= Math.round(Number(avgRating)) ? "text-amber-400" : "text-slate-300"} />
            ))}
          </div>
          <p className="font-semibold text-slate-500 text-xs">Based on {totalReviews} reviews</p>
        </div>

        <div className="space-y-2 md:col-span-8">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = getStarCount(star);
            const percentage = totalReviews ? Math.round((count / totalReviews) * 100) : 0;
            return (
              <div key={star} className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1 w-12 font-bold text-slate-600">
                  {star} <FaStar className="text-[10px] text-amber-400" />
                </span>
                <div className="flex-1 bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-amber-400 rounded-full h-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="w-10 font-medium text-slate-400 text-right">{percentage}%</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-slate-50/50 mb-10 p-5 md:p-6 border border-slate-200/60 rounded-2xl">
        <h4 className="mb-3 font-bold text-slate-800 text-base">Write a Product Review</h4>

        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-600 text-xs">Your Rating:</span>
            <div className="flex gap-1 text-amber-400 text-2xl cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none hover:scale-110 transition-transform"
                >
                  {star <= (hoverRating || rating) ? <FaStar /> : <FaRegStar className="text-slate-300" />}
                </button>
              ))}
            </div>
          </div>

          <div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="What did you like or dislike about this product? How is the quality?"
              rows="3"
              className="bg-white p-3 border border-slate-200 focus:border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 w-full text-sm transition-all"
              required
            ></textarea>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-2 bg-white hover:bg-slate-100 px-4 py-2 border border-slate-200 rounded-xl font-bold text-slate-700 text-xs transition-colors cursor-pointer">
                <FaCamera className="text-primary text-sm" />
                Add Photos (Max 3)
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={selectedImages.length >= 3}
                />
              </label>

              {selectedImages.map((img, idx) => (
                <div key={idx} className="group relative border rounded-lg w-12 h-12 overflow-hidden">
                  <Image src={img.preview} alt="preview" fill className="object-cover" />
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute inset-0 flex justify-center items-center bg-black/60 opacity-0 group-hover:opacity-100 text-white text-xs transition-opacity"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary hover:opacity-90 disabled:opacity-50 shadow-md shadow-primary/20 px-6 py-2.5 rounded-xl font-bold text-white text-xs md:text-sm transition-all"
            >
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-6 pb-4 border-slate-100 border-b">
        <span className="mr-2 font-bold text-slate-500 text-xs">Filter Reviews:</span>
        {[
          { id: "all", label: `All (${totalReviews})` },
          { id: "with-media", label: "With Photos" },
          { id: "5-star", label: "5 Stars" },
          { id: "4-star", label: "4 Stars" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeFilter === tab.id
                ? "bg-primary text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Review List */}
      <div className="space-y-6">
        {filteredReviews.length === 0 ? (
          <p className="py-8 font-medium text-slate-400 text-xs text-center">
            No reviews match the selected filter.
          </p>
        ) : (
          filteredReviews.map((rev, idx) => (
            <div key={idx} className="pb-6 border-slate-100 border-b last:border-b-0">
              <div className="flex justify-between items-start gap-3">
                <div className="flex items-center gap-3">
                  {rev.userImage ? (
                    <Image
                      src={rev.userImage}
                      alt={rev.userName || "User"}
                      width={38}
                      height={38}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <FaUserCircle className="text-slate-300 text-3xl" />
                  )}
                  <div>
                    <h5 className="flex items-center gap-1.5 font-bold text-slate-800 text-sm">
                      {rev.userName || "Verified Customer"}
                      <span className="flex items-center gap-0.5 bg-emerald-50 px-1.5 py-0.5 rounded font-semibold text-[10px] text-emerald-600">
                        <FaCheckCircle className="text-[9px]" /> Verified Purchase
                      </span>
                    </h5>
                    <p className="text-[11px] text-slate-400">
                      {rev.createdAt ? new Date(rev.createdAt).toLocaleDateString() : "Recently"}
                    </p>
                  </div>
                </div>

                <div className="flex gap-0.5 text-amber-400 text-xs">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={star <= rev.rating ? "text-amber-400" : "text-slate-200"}
                    />
                  ))}
                </div>
              </div>

              <p className="mt-3 text-slate-700 text-xs md:text-sm leading-relaxed">
                {rev.comment}
              </p>

              {rev.images && rev.images.length > 0 && (
                <div className="flex items-center gap-2 mt-3">
                  {rev.images.map((imgUrl, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative hover:opacity-90 border rounded-xl w-16 h-16 overflow-hidden cursor-pointer"
                    >
                      <Image src={imgUrl} alt="Review attachment" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}