import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { regValidation, logValidation } from "../validation.js";
import db from "../db/connection.js";

const router = express.Router();
const userCollection = db.collection("users");

//POST /api/user/register
router.post("/register", async (req, res) => {
  // Input validation
  const { error } = regValidation(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    // Checking if email exists
    const emailRegistered = await userCollection.findOne({ email: req.body.email });
    if (emailRegistered) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Checking if name exists
    const nameRegistered = await userCollection.findOne({ name: req.body.name });
    if (nameRegistered) {
      return res.status(400).json({ error: "Name already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    // Create the user object
    const userObject = {
      name: req.body.name,
      email: req.body.email,
      password,
    };

    // Insert the new user into the collection
    const result = await userCollection.insertOne(userObject);
    res.json({ error: null, data: result.insertedId });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Server error, please try again later." });
  }
});

// POST /api/user/login
router.post("/login", async (req, res) => {
  // Input validation using Joi
  const { error } = logValidation(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    // Find the user by email
    const user = await userCollection.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "Email not found" });
    }

    // Check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "Wrong Password" });
    }

    // Create JWT token
    const token = jwt.sign(
      { name: user.name, id: user._id },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Attach token to response header
    res.header("auth-token", token).json({
      error: null,
      data: { token },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error, please try again later." });
  }
});

export default router;