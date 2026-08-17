import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { ObjectId } from "mongodb";
import dbConnect, { collection } from "@/lib/dbConnect";
import { authOptions } from "@/lib/authOption";

const ADMIN_EMAILS = ["admin@gmail.com", "artistop26@gmail.com"];

const isAdminUser = (email) => {
  if (!email) return false;
  return ADMIN_EMAILS.some(
    (adminEmail) => adminEmail.trim().toLowerCase() === email.trim().toLowerCase()
  );
};

// 1. GET: Fetch all products for admin
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email || !isAdminUser(session.user.email)) {
      return NextResponse.json({ message: "Forbidden: Admin access only" }, { status: 403 });
    }

    const productsCollection = await dbConnect(collection.PRODUCTS);
    const products = await productsCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Fetch Products Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch products", error: error.message },
      { status: 500 }
    );
  }
}

// 2. POST: Create a new product
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

// 3. PATCH: Quick update product price, stock, or discount
export async function PATCH(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email || !isAdminUser(session.user.email)) {
      return NextResponse.json({ message: "Forbidden: Admin access only" }, { status: 403 });
    }

    const { productId, price, stock, discount } = await req.json();

    if (!productId) {
      return NextResponse.json({ message: "Product ID is required" }, { status: 400 });
    }

    const productsCollection = await dbConnect(collection.PRODUCTS);

    const result = await productsCollection.updateOne(
      { _id: new ObjectId(productId) },
      {
        $set: {
          price: Number(price),
          stock: Number(stock),
          discount: Number(discount || 0),
          updatedAt: new Date(),
        },
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { message: "Product not found or unchanged" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Product updated successfully" }, { status: 200 });
  } catch (error) {
    console.error("Update Product Error:", error);
    return NextResponse.json(
      { message: "Failed to update product", error: error.message },
      { status: 500 }
    );
  }
}

// 4. DELETE: Remove product by ID
export async function DELETE(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email || !isAdminUser(session.user.email)) {
      return NextResponse.json({ message: "Forbidden: Admin access only" }, { status: 403 });
    }

    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("id");

    if (!productId) {
      return NextResponse.json({ message: "Product ID is required" }, { status: 400 });
    }

    const productsCollection = await dbConnect(collection.PRODUCTS);
    const result = await productsCollection.deleteOne({ _id: new ObjectId(productId) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Delete Product Error:", error);
    return NextResponse.json(
      { message: "Failed to delete product", error: error.message },
      { status: 500 }
    );
  }
}