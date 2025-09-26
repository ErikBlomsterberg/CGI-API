import express from "express";
import dataController from "../controllerClasses/dataController.js";

const router = express.Router();

router.get("/", dataController.getData);

export default router;
