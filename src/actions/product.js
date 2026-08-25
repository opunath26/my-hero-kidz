"use server";

import { collection, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";

export const getProducts = async () => {
    try {
        const db = await dbConnect(collection.PRODUCTS); 
        const products = await db.find().sort({ createdAt: -1 }).toArray(); 
        
        return products.map(product => ({
            ...product,
            ... (product.createdAt && { createdAt: product.createdAt.toString() }),
            ... (product.updatedAt && { updatedAt: product.updatedAt.toString() }),
            _id: product._id.toString()
        }));
    } catch (error) {
        console.error(error);
        return []; 
    }
};

export const getSingleProduct = async (id) => {
    if (!id || id.length !== 24) {
        return {};
    }
    
    try {
        const query = { _id: new ObjectId(id) };
        const db = await dbConnect(collection.PRODUCTS); 
        const product = await db.findOne(query);

        if (product) {
            product._id = product._id.toString(); 
            if (product.createdAt) product.createdAt = product.createdAt.toString();
            if (product.updatedAt) product.updatedAt = product.updatedAt.toString();
        }
        return product || {};
    } catch (error) {
        console.error(error);
        return {};
    }
};

export const getRelatedProducts = async (currentProductId) => {
    if (!currentProductId || currentProductId.length !== 24) {
        return [];
    }

    try {
        const db = await dbConnect(collection.PRODUCTS);
        
        const query = {
            _id: { $ne: new ObjectId(currentProductId) }
        };

        const products = await db.find(query).limit(8).toArray();

        return products.map(product => ({
            ...product,
            ... (product.createdAt && { createdAt: product.createdAt.toString() }),
            ... (product.updatedAt && { updatedAt: product.updatedAt.toString() }),
            _id: product._id.toString()
        }));
    } catch (error) {
        console.error("Error fetching related products:", error);
        return [];
    }
};