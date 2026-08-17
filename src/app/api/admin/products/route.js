import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect, { collection } from "@/lib/dbConnect";
import { authOptions } from "@/lib/authOption";

const ADMIN_EMAILS = ["admin@gmail.com", "artistop26@gmail.com"];

const isAdminUser = (email) => {
  if (!email) return false;
  return ADMIN_EMAILS.some(
    (adminEmail) => adminEmail.trim().toLowerCase() === email.trim().toLowerCase()
  );
};

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email || !isAdminUser(session.user.email)) {
      return NextResponse.json({ message: "Forbidden: Admin access only" }, { status: 403 });
    }

    const body = await req.json();
    const { title, bangla, image, price, discount, category, stock, description, info } = body;

    if (!title || !price || !category || stock === undefined || !image) {
      return NextResponse.json(
        { message: "Required fields are missing" },
        { status: 400 }
      );
    }

    const productsCollection = await dbConnect(collection.PRODUCTS);

    const newProduct = {
      title,
      bangla: bangla || "",
      image,
      price: Number(price),
      discount: Number(discount) || 0,
      category,
      stock: Number(stock),
      description: description || "",
      sizes: [],
      color: [],
      qna: [],
      reviews: 0,
      sold: 0,
      ratings: 0,
      info: info || [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await productsCollection.insertOne(newProduct);

    return NextResponse.json(
      { message: "Product created successfully", productId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Add Product Error:", error);
    return NextResponse.json(
      { message: "Failed to add product", error: error.message },
      { status: 500 }
    );
  }
}