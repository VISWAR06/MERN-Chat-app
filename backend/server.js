import express from "express";
import dotenv from "dotenv";
import auth from "./Routes/auth.js";
import message from "./Routes/message.route.js";
import path from "path";
import connect from "./DB/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
const __dirname = path.resolve();
const port = process.env.PORT || 3000;

connect();

app.set("trust proxy", true);
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/api/auth", auth);
app.use("/api/message", message);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });
}

app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
