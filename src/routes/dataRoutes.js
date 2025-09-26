// dataRoutes.js: Defines API routes for data-related operations

import express from "express";
import DataController from "../controllers/dataController.js";

// Create Express router instance
const router = express.Router();

// Initialize DataController with path to users.xlsx file
const controller = new DataController(
  "C:/Users/Asus/Desktop/CGI-API/data/users.xlsx"
);

// Define GET route for fetching data
router.get("/", controller.getData);

export default router;
