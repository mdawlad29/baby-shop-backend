import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

const app = express();
dotenv.config();

//Middleware
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    success: true,
    message: "Hello form the e-commerce app.",
    data: {},
  });
});

export default app;
