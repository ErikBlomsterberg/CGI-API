// CSVController.js: Handles HTTP requests for data operations

import CSVData from "../data/CSVData.js";

/**
 * Controller for handling CSV-related API requests.
 * @class
 */
class CSVController {
  /**
   * Creates a CSVController instance.
   * @param {string} filePath - Path to the Excel file.
   */
  constructor(filePath) {
    // Initialize ExcelData instance with provided file path
    this.dataObj = new CSVData(filePath);
    // Store parsed data
    this.data = this.dataObj.data;
    // Bind getData method to ensure correct 'this' context chen calling
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

    // Return 204 if no data is available
    if (this.data.length === 0) {
      return res.sendStatus(204);
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

    // Send sliced data based on limit
    res.status(200).json(this.data.slice(0, limit));
  }
}

export default CSVController;
