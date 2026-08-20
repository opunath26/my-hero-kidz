import { NextResponse } from "next/server";
import { collection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

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

    // DB Collection
    const reviewsCollection = await collection("reviews");

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

export async function POST(request) {
  try {
    const body = await request.json();
    const { productId, rating, comment, images, userName, userImage } = body;

    // Validation
    if (!productId || !comment || !rating) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const reviewsCollection = await collection("reviews");
    const productsCollection = await collection("products");

    const newReview = {
      productId: String(productId),
      rating: Number(rating),
      comment,
      images: images || [],
      userName: userName || "Anonymous User",
      userImage: userImage || "",
      createdAt: new Date(),
    };

    const result = await reviewsCollection.insertOne(newReview);

    const allReviews = await reviewsCollection
      .find({ productId: String(productId) })
      .toArray();

    const avgRating = (
      allReviews.reduce((acc, curr) => acc + curr.rating, 0) / allReviews.length
    ).toFixed(1);

    try {
      let queryFilter = { _id: String(productId) };
      if (ObjectId.isValid(productId)) {
        queryFilter = { _id: new ObjectId(productId) };
      }

      await productsCollection.updateOne(
        queryFilter,
        { 
          $set: { 
            ratings: Number(avgRating),
            reviewCount: allReviews.length 
          } 
        }
      );
    } catch (dbErr) {
      console.warn("Product average rating update warning:", dbErr);
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
      { error: "Failed to add review" },
      { status: 500 }
    );
  }
}