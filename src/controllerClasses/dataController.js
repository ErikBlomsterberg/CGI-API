// DataController.js
// This file defines the DataController class, which manages and serves data from an Excel file
// using the ExcelData class. It provides a method to retrieve data with optional pagination.

import { ExcelData } from "../dataClasses/dataClasses.js";

class DataController {
  constructor() {
    this.dataObj = new ExcelData(
      "C:/Users/Asus/Desktop/CGI-API/data/users.xlsx"
    );

    this.data = this.dataObj.data;
    this.getData = this.getData.bind(this);
  }

  getData(req, res) {
    if (this.data === null) {
      return res.sendStatus(500);
    }

    const limit =
      req.query.limit !== undefined
        ? Number(req.query.limit)
        : this.data.length;

    if (!Number.isInteger(limit) || limit <= 0) {
      return res.sendStatus(400);
    }

    if (this.data.length === 0) {
      return res.sendStatus(204);
    }

    res.status(200).json(this.data.slice(0, limit));
  }
}

export default new DataController();
