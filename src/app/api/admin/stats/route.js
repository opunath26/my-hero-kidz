import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect, { collection } from "@/lib/dbConnect";
import { authOptions } from "@/lib/authOption";

const ADMIN_EMAILS = ["admin@gmail.com", "artistop26@gmail.com"];

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email || !ADMIN_EMAILS.includes(session.user.email.toLowerCase())) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const productsColl = await dbConnect(collection.PRODUCTS);
    const usersColl = await dbConnect(collection.USERS);
    const ordersColl = await dbConnect(collection.ORDERS);

    const totalProducts = await productsColl.countDocuments();
    const totalUsers = await usersColl.countDocuments();
    const totalOrders = await ordersColl.countDocuments();

    // Calculate Total Revenue
    const orders = await ordersColl.find({}).toArray();
    const totalRevenue = orders.reduce((sum, order) => sum + (Number(order.totalAmount || order.price) || 0), 0);

    return NextResponse.json(
      { totalProducts, totalUsers, totalOrders, totalRevenue },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Failed to fetch stats" }, { status: 500 });
  }
}