// src/routes/userRoutes.js
import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/users", createUser);
userRouter.post("/users/login", loginUser);

export default userRouter;