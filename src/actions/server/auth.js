"use server";

import { collections, dbConnect } from "@/lib/mongo";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
    try {
        const { email, password, name } = payload;

        // payload check
        if (!email || !password || !name) {
            return { success: false, message: "All fields are required!" };
        }

        // check user exist or not
        const isExist = await dbConnect(collections.USERS).findOne({ email });
        if (isExist) {
            return { success: false, message: "Email is already registered!" };
        }

        // create user object
        const newUser = {
            provider: "credentials",
            name, 
            email, 
            password: await bcrypt.hash(password, 10),
            role: "user",
            createdAt: new Date(),
        };

        // insert user into database
        const result = await dbConnect(collections.USERS).insertOne(newUser);

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