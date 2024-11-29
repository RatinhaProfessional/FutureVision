import express from "express";

// This will help connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router to define routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("Products");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("FutureVision");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

export default router;