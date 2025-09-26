const express = require("express");
const dataRoutes = require("./routes/dataRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/data", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
