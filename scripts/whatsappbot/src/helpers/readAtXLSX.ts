import XLSX from "xlsx";
export interface Contact {
  number: string;
  message: string;
  status: string;
}
export default function readAtXLSX(file: string) {
  const workbook = XLSX.readFile(file);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const contacts: Contact[] = XLSX.utils.sheet_to_json(sheet);
  return contacts;
}
