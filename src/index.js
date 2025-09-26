// index.js: Initializes the Express server and sets up routes and middleware

import express from "express";
import dataRoutes from "./routes/dataRoutes.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create Express application instance
const app = express();
// Set port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Enable JSON body parsing for incoming requests
app.use(express.json());
// Mount data routes under /api/data
app.use("/api/data", dataRoutes);

// Start the server and log the port it's running on
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
