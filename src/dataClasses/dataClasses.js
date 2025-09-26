import XLSX from "xlsx";

// Superclass Data
class Data {
  constructor(filePath) {
    this.filePath = filePath;
  }
}

// Subclass ExcelData extending Data
class ExcelData extends Data {
  constructor(filePath) {
    super(filePath); // Call the parent class constructor
    try {
      const workbook = XLSX.readFile(this.filePath);
      const sheetName = workbook.SheetNames[0];
      this.data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    } catch (error) {
      this.data = null;
    }
  }
}

export { ExcelData };
