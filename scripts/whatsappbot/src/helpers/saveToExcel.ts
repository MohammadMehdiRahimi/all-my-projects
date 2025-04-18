import { Contact } from "./readAtXLSX.js";
import XLSX from "xlsx";
export default function saveToExcel(contacts: Contact[]) {
  const newSheet = XLSX.utils.json_to_sheet(contacts);
  const newWorkbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(newWorkbook, newSheet, "Contacts");
  XLSX.writeFile(newWorkbook, "contacts.xlsx");
  console.log("updated excel file");
}
