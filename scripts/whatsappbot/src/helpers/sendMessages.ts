import { Page } from "puppeteer-core";
import wait from "./wait.js";
import { Contact } from "./readAtXLSX.js";
import saveToExcel from "./saveToExcel.js";

export default async function sendMessages(
  contacts: Contact[],
  page: Page
): Promise<void> {
  for (const contact of contacts) {
    try {
      if (contact.status === "done") continue;
      console.log(contact.number);
      await wait(2000);
      const chatUrl = `https://web.whatsapp.com/send?phone=${contact.number}`;
      await page.goto(chatUrl, { waitUntil: "networkidle2" });
      await wait(4000);
      const p = await page.$('div[aria-label="Type a message"] > p');
      await page.type(
        'div[aria-label="Type a message"] > p',
        `${contact.message}`,
        { delay: 10 }
      );
      await wait(2000);
      await page.keyboard.press("Enter");
      console.log("send message");
      contact.status = "done";
      await wait(2000);
    } catch (error) {
      console.log(error);
      contact.status = "failed";
    }
  }
  console.log("send all message done");
}
