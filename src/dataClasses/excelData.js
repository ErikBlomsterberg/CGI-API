import XLSX from "xlsx";

class ExcelData {
  constructor(filePath) {
    try {
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      this.data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    } catch (error) {
      this.data = null;
    }
  }
}

export default ExcelData;
