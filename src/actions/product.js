"use server";

import { collection, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getProducts = async () => {
    try {
        // 👈 এখানে অবশ্যই 'await' যুক্ত করতে হবে কারণ dbConnect এখন async
        const db = await dbConnect(collection.PRODUCTS); 
        const products = await db.find().toArray(); 
        
        return products.map(product => ({
            ...product,
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
        // 👈 এখানেও 'await' যুক্ত করতে হবে
        const db = await dbConnect(collection.PRODUCTS); 
        const product = await db.findOne(query);

        if (product) {
            product._id = product._id.toString(); 
        }
        return product || {};
    } catch (error) {
        console.error(error);
        return {};
    }
};