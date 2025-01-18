import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
import { regValidation, logValidation } from "../validation.js";
import db from "../db/connection.js";

const router = express.Router();
const userCollection = db.collection("users");

//POST /api/user/register
router.post("/register", async (req, res) => {
  //input validation
  const { error } = regValidation(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  //checking if email exists
  const emailRegistered = await user.findOne({ email: req.body.email });

  if (emailRegistered) {
    return res.status(400).json({ error: "Email already exists" });
  }

  //checking if username exists
  const nameRegistered = await user.findOne({ name: req.body.name });

  if (nameRegistered) {
    return res.status(400).json({ error: "Name already exists" });
  }

  //password hashing
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  //create and save the user
  const userObject = new user({
    name: req.body.name,
    email: req.body.email,
    password,
  });

  try {
    const savedUser = await userCollection.insertOne(userObject);
    res.json({ error: null, data: savedUser._id });
  } catch (error) {
    res.status(400).json({ error });
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
    // Find user by email
    const user = await userCollection.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: "Email not found" });
    }

    // Password checking
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ error: "Wrong Password" });
    }

    // Create a JWT token
    const token = jwt.sign(
      { name: user.name, id: user._id },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // Attach token
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
