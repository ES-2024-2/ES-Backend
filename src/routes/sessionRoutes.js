// src/routes/sessionRoutes.js
import { Router } from "express";
import { createSession } from "../controllers/sessionController.js";

const sessionRouter = Router();

sessionRouter.post("/sessions", createSession);

export default sessionRouter;