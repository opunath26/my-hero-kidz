import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect, { collection } from "@/lib/dbConnect";
import Order from "@/models/Order"; 
import Cart from "@/models/Cart"; 
import Product from "@/models/Product";
import { authOptions } from "@/lib/authOption";
import { transporter, generateOrderEmailHTML } from "@/lib/nodemailer";

// ----------------------------------------------------------------------
// 1. POST: Place a new order, update stock, clear cart & send email
// ----------------------------------------------------------------------
export async function POST(req) {
    try {
        await dbConnect();

        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return NextResponse.json(
                { message: "Unauthorized. Please log in first." },
                { status: 401 }
            );
        }

        const userEmail = session.user.email;
        const body = await req.json();
        const {
            items,
            shippingAddress,
            deliveryArea,
            shippingFee,
            subtotal,
            totalAmount,
            paymentMethod,
            orderNotes,
        } = body;

        if (!items || items.length === 0 || !shippingAddress) {
            return NextResponse.json(
                { message: "Invalid order data." },
                { status: 400 }
            );
        }

        const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

        const newOrder = await Order.create({
            orderId,
            userEmail,
            items,
            shippingAddress,
            deliveryArea,
            shippingFee,
            subtotal,
            totalAmount,
            paymentMethod,
            paymentStatus: paymentMethod === "cod" ? "Pending" : "Paid",
            orderStatus: "Pending",
            orderNotes: orderNotes || "",
        });

        // Product Stock Decrement Logic
        try {
            const stockUpdatePromises = items.map((item) => {
                const pId = item.productId || item._id;
                return Product.findByIdAndUpdate(
                    pId,
                    { $inc: { stock: -item.quantity } },
                    { new: true }
                );
            });
            await Promise.all(stockUpdatePromises);
        } catch (stockErr) {
            console.error("Failed to update product stock:", stockErr.message);
        }

        // Mongoose Clear Cart
        await Cart.findOneAndUpdate(
            { userEmail },
            { $set: { items: [] } }
        );

        // Native MongoDB Collection Clear Cart Fallback
        try {
            const cartsCollection = await dbConnect(collection.CARTS);
            await cartsCollection.updateOne(
                { userEmail },
                { $set: { items: [] } }
            );
        } catch (nativeErr) {
            console.log("Native cart update fallback skipped:", nativeErr.message);
        }

        // Send Order Confirmation Email
        try {
            await transporter.sendMail({
                from: `"HeroKidz" <${process.env.EMAIL_USER}>`,
                to: userEmail,
                subject: `Order Confirmation - #${newOrder.orderId}`,
                html: generateOrderEmailHTML(newOrder),
            });
            console.log(`Order confirmation email sent to ${userEmail}`);
        } catch (emailError) {
            console.error("Failed to send order email:", emailError.message);
        }

        return NextResponse.json(
            {
                message: "Order placed successfully",
                orderId: newOrder.orderId,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Order Creation Error:", error);
        return NextResponse.json(
            { message: "Failed to process order", error: error.message },
            { status: 500 }
        );
    }
}

// ----------------------------------------------------------------------
// 2. GET: Fetch all orders for the logged-in user
// ----------------------------------------------------------------------
export async function GET(req) {
    try {
        await dbConnect();

        const session = await getServerSession(authOptions);

        if (!session?.user?.email) {
            return NextResponse.json(
                { message: "Unauthorized. Please log in first." },
                { status: 401 }
            );
        }

        const userEmail = session.user.email;

        const orders = await Order.find({ userEmail }).sort({ createdAt: -1 });

        return NextResponse.json({ orders }, { status: 200 });
    } catch (error) {
        console.error("Fetch Orders Error:", error);
        return NextResponse.json(
            { message: "Failed to fetch orders", error: error.message },
            { status: 500 }
        );
    }
}