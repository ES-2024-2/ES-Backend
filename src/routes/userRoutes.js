import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController.js";

const userRouter = Router();

// POST /api/users - Register a new user
userRouter.post("/users", createUser);

// POST /api/users/login - Login a user
userRouter.post("/users/login", loginUser);

export default userRouter;