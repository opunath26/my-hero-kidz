import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { ObjectId } from "mongodb";
import dbConnect, { collection } from "@/lib/dbConnect";
import { authOptions } from "@/lib/authOption";

const ADMIN_EMAILS = [
  "admin@gmail.com",
  "artistop26@gmail.com",
];

const isAdminUser = (email) => {
  if (!email) return false;
  return ADMIN_EMAILS.some(
    (adminEmail) => adminEmail.trim().toLowerCase() === email.trim().toLowerCase()
  );
};

// GET: All Orders for Admin
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email || !isAdminUser(session.user.email)) {
      return NextResponse.json({ message: "Forbidden: Admin access only" }, { status: 403 });
    }

    const ordersCollection = await dbConnect(collection.ORDERS);
    const orders = await ordersCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error("Admin Fetch Orders Error:", error);
    return NextResponse.json({ message: "Failed to fetch orders" }, { status: 500 });
  }
}

// PATCH: Update orderStatus & paymentStatus
export async function PATCH(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email || !isAdminUser(session.user.email)) {
      return NextResponse.json({ message: "Forbidden: Admin access only" }, { status: 403 });
    }

    const { orderId, orderStatus, paymentStatus } = await req.json();

    if (!orderId) {
      return NextResponse.json(
        { message: "Order ID is required" },
        { status: 400 }
      );
    }

    if (!orderStatus && !paymentStatus) {
      return NextResponse.json(
        { message: "Please provide orderStatus or paymentStatus to update" },
        { status: 400 }
      );
    }

    // Dynamic field update
    const updateFields = {
      updatedAt: new Date(),
    };

    if (orderStatus) updateFields.orderStatus = orderStatus;
    if (paymentStatus) updateFields.paymentStatus = paymentStatus;

    const ordersCollection = await dbConnect(collection.ORDERS);

    // Safe Filter logic (_id or custom orderId string)
    let filter = {};
    if (typeof orderId === "string" && orderId.startsWith("ORD-")) {
      filter = { orderId: orderId };
    } else if (ObjectId.isValid(orderId)) {
      filter = { _id: new ObjectId(orderId) };
    } else {
      filter = { orderId: orderId };
    }

    const result = await ordersCollection.updateOne(filter, {
      $set: updateFields,
    });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Order updated successfully", updatedData: updateFields },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin Update Order Error:", error);
    return NextResponse.json(
      { message: "Failed to update order", error: error.message },
      { status: 500 }
    );
  }
}