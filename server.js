import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

// routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";
// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const __dirname = dirname(fileURLToPath(import.meta.url));
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.static(path.resolve(__dirname, "./client/dist")));
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("/api/v1/jobs", authenticateUser, jobRouter);
app.use("/api/v1/users", authenticateUser, userRouter);
app.use("/api/v1/auth", authRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
// do not delete
// sudo lsof -i :PORT
// kill -9 <PID>
//
//
//
// import "express-async-errors";
// import * as dotenv from "dotenv";
// dotenv.config();
// import express from "express";
// import morgan from "morgan";
// import jobRouter from "./routes/jobRouter.js";
// import mongoose from "mongoose";
// import helmet from "helmet";
// import mongoSanitize from "express-mongo-sanitize";
// import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
// import { authenticateUser } from "./middleware/authMiddleware.js";

// import authRouter from "./routes/authRouter.js";
// import cookieParser from "cookie-parser";
// import userRouter from "./routes/userRouter.js";

// const app = express();

// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import path from "path";
// import { v2 as cloudinary } from "cloudinary";
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

// const __dirname = dirname(fileURLToPath(import.meta.url));
// app.use(express.static(path.resolve(__dirname, "./public")));

// app.use(errorHandlerMiddleware);
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
// // app.use(express.static(path.resolve(__dirname, "./client/dist")));
// app.use(cookieParser());
// app.use(express.json());
// app.use(helmet());
// app.use(mongoSanitize());

// app.use("/api/v1/jobs", authenticateUser, jobRouter);
// app.use("/api/v1/users", authenticateUser, userRouter);
// app.use("/api/v1/auth", authRouter);

// app.use("*", (req, res) => {
//   // res.status(404).json({ msg: "not found" });
//   res.sendFile(path.resolve(__dirname, "./public", "index.html"));
// });

// const port = process.env.PORT || 5100;

// try {
//   await mongoose.connect(process.env.MONGO_URL);
//   app.listen(port, () => {
//     console.log(`server running on PORT:${port}`);
//   });
// } catch (err) {
//   console.log(err, "problems");
//   process.exit(1);
// }
