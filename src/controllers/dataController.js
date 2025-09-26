// dataController.js: Handles HTTP requests for data operations

import ExcelData from "../data/excelData.js";

/**
 * Controller for handling data-related API requests.
 * @class
 */
class DataController {
  /**
   * Creates a DataController instance.
   * @param {string} filePath - Path to the Excel file.
   */
  constructor(filePath) {
    // Initialize ExcelData instance with provided file path
    this.dataObj = new ExcelData(filePath);
    // Store parsed data
    this.data = this.dataObj.data;
    // Bind getData method to ensure correct 'this' context
    this.getData = this.getData.bind(this);
  }

  /**
   * Handles GET requests to retrieve data.
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   */
  getData(req, res) {
    // Return 500 if data failed to load
    if (this.data === null) {
      return res.sendStatus(500);
    }

    // Parse limit query parameter or default to full data length
    const limit =
      req.query.limit !== undefined
        ? Number(req.query.limit)
        : this.data.length;

    // Validate limit is a positive integer
    if (!Number.isInteger(limit) || limit <= 0) {
      return res.sendStatus(400);
    }

    // Return 204 if no data is available
    if (this.data.length === 0) {
      return res.sendStatus(204);
    }

    // Send sliced data based on limit
    res.status(200).json(this.data.slice(0, limit));
  }
}

export default DataController;
