// import mongo atlas uri
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI

const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(MONGO_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToDatabase() {
    try {
        // connect the client to the server
        await client.connect();
        // send ping to confirm successful connection
        await client.db('admin').command({ ping: 1});
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // ensure the client will close when you finish/error
        await client.close();
    }
};
connectToDatabase().catch(console.dir);