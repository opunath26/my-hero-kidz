import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect, { collection } from "@/lib/dbConnect";
import { authOptions } from "@/lib/authOption";

const ADMIN_EMAILS = ["admin@gmail.com", "artistop26@gmail.com"];

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userEmail = session.user.email.trim().toLowerCase();
    const isAdmin = ADMIN_EMAILS.some(
      (email) => email.trim().toLowerCase() === userEmail
    );

    if (!isAdmin) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 });
    }

    const usersCollection = await dbConnect(collection.USERS);
    
    const users = await usersCollection
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch users", error: error.message },
      { status: 500 }
    );
  }
}