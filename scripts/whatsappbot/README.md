# WhatsApp Auto Message Bot

A simple yet powerful automation tool for sending bulk messages on WhatsApp using Puppeteer and TypeScript. This bot allows users to send automated messages to contacts on WhatsApp, making communication more efficient.

## Features

- **Automated Message Sending**: Send predefined messages to a list of contacts automatically.
- **Bulk Messaging**: Upload contact lists (in formats like CSV or Excel) and send messages to multiple people at once.
- **Customizable Messages**: Personalize your messages with dynamic placeholders (e.g., name, custom message).

## Prerequisites

Before running the bot, make sure you have the following installed:

- **Node.js** (version 16.x or higher)
- **npm** (Node package manager)
- **Google Chrome** or **Chromium** installed on your system (Puppeteer will download the required version).

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/whatsapp-bot.git
cd whatsapp-bot
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

This will install Puppeteer, TypeScript, and other required dependencies listed in `package.json`.

## Configuration

### Setting Up Browser Path

In the `launchBrowser` function of the source code, you need to specify the path to your default browser. This step ensures that Puppeteer uses the correct browser instance for automation.

Find and update the path in the configuration:

```typescript
const browser = await puppeteer.launch({
  executablePath: "/path/to/your/browser", // Replace this with the correct browser path
  headless: false, // Make sure the browser window is visible
});
```

Make sure to replace `'/path/to/your/browser'` with the actual path to the browser executable on your machine (for example, Chrome or Chromium).

## Usage

### 1. Configure the Bot

- Ensure that the bot is configured to use your WhatsApp account. This is done by logging in to WhatsApp Web using Puppeteer, which will open a browser window where you can scan the QR code.

### 2. Running the Bot

Once everything is set up, you can start the bot using:

```bash
npm start
```

### 3. Sending Messages

The bot can send messages to individual or groups of contacts. You can specify a list of contacts (using Excel or CSV format) and a message to be sent.

### 4. Additional Options

The bot allows for several configurations and optimizations. You can:

- Set a delay between messages to avoid being flagged as spam.
- Customize the message format (add personalized placeholders).

## Files

- `src/`: Contains the source code for the bot.
- `package.json`: Defines the dependencies and scripts for the bot.
- `tsconfig.json`: The TypeScript configuration file.
- `package-lock.json`: A snapshot of the exact versions of dependencies.

## Troubleshooting

- **Issue with QR Code Scanning**: If you’re facing issues with the QR code not being scanned, ensure that you have the latest version of WhatsApp Web and a stable internet connection.
- **Bot Not Sending Messages**: Check that your contact list is correctly formatted, and that WhatsApp Web is loaded properly.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
