const express = require("express");
const router = express.Router();
const userController = require("../controllers/dataControllers");

// API endpoint for fetching data
router.get("/", userController.getData);

module.exports = router;
