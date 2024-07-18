import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import createError from "http-errors";
import routes from "./routes/index.js";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/v1", (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: "Hello form the e-commerce app.",
    data: {},
  });
});

// Api
await routes(app);

app.use((req, res, next) => {
  next(createError(404, "Router not found!"));
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: 404,
    message: err.message || "Internal server error.",
  });
});

export default app;
