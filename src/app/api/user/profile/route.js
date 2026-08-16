import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect, { collection } from "@/lib/dbConnect";
import { authOptions } from "@/lib/authOption";

// GET: Fetch user profile data
export async function GET() {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const usersCollection = await dbConnect(collection.USERS);
    const user = await usersCollection.findOne({ email: session.user.email });

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Fetch Profile Error:", error);
    return NextResponse.json(
      { message: "Failed to fetch profile", error: error.message },
      { status: 500 }
    );
  }
}

// PATCH: Update user profile / default address
export async function PATCH(req) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, phone, address, city, postalCode } = body;

    const usersCollection = await dbConnect(collection.USERS);
    const updateResult = await usersCollection.updateOne(
      { email: session.user.email },
      {
        $set: {
          name,
          phone,
          shippingAddress: { address, city, postalCode },
          updatedAt: new Date(),
        },
      }
    );

    if (updateResult.modifiedCount === 0 && updateResult.matchedCount === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Profile updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Update Profile Error:", error);
    return NextResponse.json(
      { message: "Failed to update profile", error: error.message },
      { status: 500 }
    );
  }
}