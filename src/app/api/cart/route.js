import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { dbConnect } from "@/lib/dbConnect";
import { authOptions } from "@/lib/authOption";

export async function GET(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const cartCollection = await dbConnect("carts");
        const userCart = await cartCollection.findOne({ userEmail: session.user.email });

        return NextResponse.json(userCart || { items: [] }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to fetch cart", error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const { productId, title, image, price, quantity = 1 } = await req.json();
        const userEmail = session.user.email;

        const cartCollection = await dbConnect("carts");
        const existingCart = await cartCollection.findOne({ userEmail });

        if (existingCart) {
            const itemIndex = existingCart.items.findIndex(item => item.productId === productId);

            if (itemIndex > -1) {
                existingCart.items[itemIndex].quantity += quantity;
            } else {
                existingCart.items.push({ productId, title, image, price, quantity });
            }

            await cartCollection.updateOne(
                { userEmail },
                { $set: { items: existingCart.items, updatedAt: new Date() } }
            );
        } else {
            await cartCollection.insertOne({
                userEmail,
                items: [{ productId, title, image, price, quantity }],
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }

        return NextResponse.json({ message: "Added to cart successfully!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Failed to add to cart", error: error.message }, { status: 500 });
    }
}