const uri = process.env.MONGODB_URI;
const dbname = process.env.DBNAME;

export const collection = {
    PRODUCTS: "products",
};

const { MongoClient, ServerApiVersion } = require('mongodb');

if (!uri) {
    throw new Error('Please add your MONGODB_URI to .env.local');
}

let client;

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClient) {
        global._mongoClient = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
    }
    client = global._mongoClient;
} else {
    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
}

export const dbConnect = async (cname) => {
    try {
        await client.connect(); 
        return client.db(dbname).collection(cname);
    } catch (error) {
        console.error("MongoDB Reconnection Failed:", error);
        throw error;
    }
};