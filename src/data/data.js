// data.js: Base class for handling data from various sources

/**
 * Base class for data handling.
 * @class
 */
class Data {
  /**
   * Creates a Data instance.
   * @param {string} filePath - Path to the data source file.
   */
  constructor(filePath) {
    // Store the file path for data access
    this.filePath = filePath;
  }
}

export default Data;
