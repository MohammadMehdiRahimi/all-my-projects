import puppeteer, { Browser } from "puppeteer-core";
import path from "path";
import { fileURLToPath } from "url";
export default async function lauchBrowser(): Promise<Browser> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const userDataDir = path.join(__dirname, "whatsapp-session");
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: false,
    args: ["--no-sandbox"],
    userDataDir: userDataDir,
    devtools: true,
  });
  return browser;
}
