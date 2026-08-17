import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect, { collection } from "@/lib/dbConnect";
import { authOptions } from "@/lib/authOption";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const ordersCollection = await dbConnect(collection.ORDERS);
    const orders = await ordersCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error("Admin Fetch Orders Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch orders", error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { orderId, status } = await req.json();

    if (!orderId || !status) {
      return NextResponse.json(
        { message: "Order ID and status are required" },
        { status: 400 }
      );
    }

    const ordersCollection = await dbConnect(collection.ORDERS);
    const { ObjectId } = require("mongodb");

    const result = await ordersCollection.updateOne(
      { _id: new ObjectId(orderId) },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { message: "Order not found or status unchanged" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Order status updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin Update Order Error:", error);
    return NextResponse.json(
      { message: "Failed to update order status", error: error.message },
      { status: 500 }
    );
  }
}