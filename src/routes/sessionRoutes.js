import { Router } from "express";
import { createSession, deleteSession } from "../controllers/sessionController.js";

const sessionRouter = Router();

// POST /api/sessions - Login and automatically create a session
sessionRouter.post("/sessions", createSession);

// DELETE /api/sessions/:token - Logout and delete the session
sessionRouter.delete("/sessions/:token", deleteSession);

export default sessionRouter;
