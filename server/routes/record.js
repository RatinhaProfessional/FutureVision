import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get all records
router.get("/", async (req, res) => {
  try {
    let collection = db.collection("products"); 
    let results = await collection.find({}).toArray();
    res.status(200).send(results); 
  } catch (err) {
    res.status(500).send({ error: "Failed to fetch records" });
  }
});

// Get a record by Tag
router.get("/NewIn", async (req, res) => {
  try {
    let collection = db.collection("products");
    let query = { tag: "NewIn" };
    let result = await collection.find(query).toArray();

    if (!result) {
      res.status(404).send("Not found");
    } else {
      res.status(200).send(result);
    }
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).send({ error: "Failed to fetch record" });
}
});

export default router;
