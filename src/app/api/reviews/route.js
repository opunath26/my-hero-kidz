import { NextResponse } from "next/server";
import dbConnect, { collection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// 1. GET Method
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const reviewsCollection = await dbConnect(collection.REVIEWS || "reviews");

    const reviews = await reviewsCollection
      .find({ productId: String(productId) })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ success: true, reviews }, { status: 200 });
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

// 2. POST Method
export async function POST(request) {
  try {
    const body = await request.json();
    const { productId, rating, comment, images, userName, userImage } = body;

    if (!productId || !comment || !rating) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const reviewsCollection = await dbConnect(collection.REVIEWS || "reviews");

    const newReview = {
      productId: String(productId),
      rating: Number(rating),
      comment,
      images: Array.isArray(images) ? images : [],
      userName: userName || "Verified Customer",
      userImage: userImage || "",
      createdAt: new Date(),
    };

    const result = await reviewsCollection.insertOne(newReview);

    try {
      const productsCollection = await dbConnect(collection.PRODUCTS);

      const allReviews = await reviewsCollection
        .find({ productId: String(productId) })
        .toArray();

      const avgRating = (
        allReviews.reduce((acc, curr) => acc + (Number(curr.rating) || 0), 0) / allReviews.length
      ).toFixed(1);

      let queryFilter = { _id: String(productId) };
      if (ObjectId.isValid(productId) && String(new ObjectId(productId)) === String(productId)) {
        queryFilter = { _id: new ObjectId(productId) };
      }

      await productsCollection.updateOne(queryFilter, {
        $set: {
          ratings: Number(avgRating),
          reviewCount: allReviews.length,
        },
      });
    } catch (productUpdateErr) {
      console.warn("Product rating update failed:", productUpdateErr.message);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Review added successfully!",
        review: { _id: result.insertedId, ...newReview },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding review:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to add review" },
      { status: 500 }
    );
  }
}