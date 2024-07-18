import express from "express";
import { createUser } from "../users/controller/index.js";
const userRouter = express.Router();

userRouter.get("/users", createUser);

export default userRouter;
