import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config({ path: "./config.env" });

// Retrieve the MongoDB URI
const uri = process.env.ATLAS_URI || "";

// Create a new MongoClient instance w
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect the client to the server
try {
  await client.connect();
  await client.db("FutureVision").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

// Access the "FutureVision" database
let db = client.db("FutureVision");

export default db;
