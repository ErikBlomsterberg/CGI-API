// excelData.js: Extends Data class to handle Excel file data using XLSX library

import XLSX from "xlsx";
import Data from "./Data.js";

/**
 * Class for reading and parsing Excel file data.
 * @extends Data
 */
class ExcelData extends Data {
  /**
   * Creates an ExcelData instance and parses the Excel file.
   * @param {string} filePath - Path to the Excel file.
   */
  constructor(filePath) {
    // Call parent class constructor
    super(filePath);
    try {
      // Read the Excel file
      const workbook = XLSX.readFile(this.filePath);
      // Get the first sheet name
      const sheetName = workbook.SheetNames[0];
      // Convert the first sheet to JSON format
      this.data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    } catch (error) {
      // Set data to null if file reading fails
      this.data = null;
    }
  }
}

export default ExcelData;
