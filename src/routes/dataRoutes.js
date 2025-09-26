// dataRoutes.js: Defines API routes for data-related operations
import express from "express";
import CSVController from "../controllers/CSVController.js";

// Create Express router instance
const router = express.Router();

// Initialize CSVController with path to data.csv file
const filePath = "data/data.csv";
const controller = new CSVController(filePath);

// Define GET route for fetching data
router.get("/", controller.getData);

export default router;
