/*
 ----------------------------------------------------------------------------------------
 Server file specifying routes and server start up  
 ----------------------------------------------------------------------------------------
 Here's specified logic for definition of routs for quotes endpoints and user. 
 Port choice for server start up.
 
*/

import express from "express";
import cors from "cors";
import records from "./routes/record.js";
import authRoutes from "./routes/auth.js"
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", records);
app.use("/users", authRoutes);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
