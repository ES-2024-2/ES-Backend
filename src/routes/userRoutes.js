import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController.js";

const userRouter = Router();

// POST /api/users - Register a new user
userRouter.post("/", createUser);

// POST /api/users/login - Login a user
userRouter.post("/login", loginUser);

export default userRouter;