"use server";

import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
    try {
        const { email, password, name } = payload;

        // payload check
        if (!email || !password || !name) {
            return { success: false, message: "All fields are required!" };
        }

        // 1. Get users collection instance
        const usersCollection = await dbConnect("users");

        // 2. Check if user already exists
        const isExist = await usersCollection.findOne({ email });
        if (isExist) {
            return { success: false, message: "Email is already registered!" };
        }

        // 3. Create user object
        const newUser = {
            provider: "credentials",
            name, 
            email, 
            password: await bcrypt.hash(password, 10),
            role: "user",
            createdAt: new Date(),
        };

        // 4. Insert user into database
        const result = await usersCollection.insertOne(newUser);

        if (result.acknowledged) {
            return {
                success: true,
                message: "User registered successfully!",
                insertedId: result.insertedId.toString(),
            };
        }

        return { success: false, message: "Failed to register user." };

    } catch (error) {
        return { success: false, message: error.message || "Something went wrong!" };
    }
};