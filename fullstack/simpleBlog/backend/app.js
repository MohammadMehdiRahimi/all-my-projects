import express from "express";
import router from "./routes/router.js";
import cors from "cors";

import path from "path";

import { fileURLToPath } from "url";
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  "/profileImage",
  express.static(path.join(__dirname, "File", "ProfileImage"))
);
app.use(
  "/postImage",
  express.static(path.join(__dirname, "File", "PostImage"))
);
app.use(router);
const { PORT } = process.env;
app.listen(PORT, () => console.log("listen at : http://localhost:" + PORT));
