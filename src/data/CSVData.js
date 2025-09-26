import { parse } from "csv-parse/sync";
import fs from "fs";
import Data from "./Data.js";

/**
 * Class for reading and parsing CSV file data.
 * @extends Data
 */
class CSVData extends Data {
  /**
   * Creates a CSVData instance and parses the CSV file.
   * @param {string} filePath - Path to the CSV file.
   */
  constructor(filePath) {
    // Call parent class constructor
    super(filePath);
    try {
      // Read the CSV file
      const fileContent = fs.readFileSync(this.filePath, "utf-8");
      // Parse CSV content
      this.data = parse(fileContent, {
        columns: true, // Treat first row as headers
        delimiter: ";",
        skip_empty_lines: true,
      });
    } catch (error) {
      // Set data to null if file reading or parsing fails
      this.data = null;
      console.error("Error reading or parsing CSV file:", error.message);
    }
  }
}

export default CSVData;
