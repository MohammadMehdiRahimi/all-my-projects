import puppeteer, { Page } from "puppeteer-core";
import XLSX from "xlsx";
import fs from "fs";
import readAtXLSX from "./helpers/readAtXLSX.js";
import lauchBrowser from "./helpers/launchBrowser.js";
import sendMessages from "./helpers/sendMessages.js";
import saveToExcel from "./helpers/saveToExcel.js";

async function whatsAppBot(): Promise<void> {
  let browser;
  const contacts = readAtXLSX("contacts.xlsx");
  try {
    console.log("contacts loaded");
    browser = await lauchBrowser();
    const page: Page = await browser.newPage();
    await page.goto("https://web.whatsapp.com", { waitUntil: "networkidle2" });
    console.log("scan QR Code");
    await page.waitForSelector(".selectable-text", { timeout: 60000 });
    await sendMessages(contacts, page);
    saveToExcel(contacts);
    console.log("login successfully");
    await browser.close();
    process.exit();
    // console.log(contacts);
  } catch (error) {
    console.log(error);
    saveToExcel(contacts);

    // await browser?.close();
  }
}
whatsAppBot();
