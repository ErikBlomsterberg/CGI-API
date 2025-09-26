// dataRoutes.js: Defines API routes for data-related operations
import express from "express";
import DataController from "../controllers/dataController.js";

// Create Express router instance
const router = express.Router();

// Initialize DataController with path to data.csv file
const filePath = "data/data.csv";
console.log("filePath: ", filePath);
const controller = new DataController(filePath);

// Define GET route for fetching data
router.get("/", controller.getData);

export default router;
