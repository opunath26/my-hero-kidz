import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DBNAME || process.env.DB_NAME || "herokidzdb";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

export const collection = {
  PRODUCTS: "products",
  CARTS: "carts",
  ORDERS: "orders",
  USERS: "users",
};

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect(collectionName) {
  if (!cached.conn) {
    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
        dbName: DB_NAME,
      };

      cached.promise = mongoose.connect(MONGODB_URI, opts).then((m) => {
        m.connection.useDb(DB_NAME);
        return m;
      });
    }
    try {
      cached.conn = await cached.promise;
    } catch (e) {
      cached.promise = null;
      throw e;
    }
  }

  if (collectionName) {
    return cached.conn.connection.useDb(DB_NAME).collection(collectionName);
  }

  return cached.conn;
}

export default dbConnect;