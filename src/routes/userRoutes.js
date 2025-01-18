import { Router } from "express";
import { createUser} from "../controllers/userController.js";

const userRouter = Router();

// POST /api/users - Register a new user
userRouter.post("/users", createUser);


export default userRouter;