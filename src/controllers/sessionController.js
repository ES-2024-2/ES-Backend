import * as sessionService from "../services/sessionService.js";
import { serializeUser } from "../models/userModel.js";

// Controller for user login (creates a session automatically)
export const createSession = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Delegate to service to handle login and session creation
    const { token, user } = await sessionService.loginUser(email, senha);

    res.status(200).json({
      message: "Login realizado com sucesso!",
      token, // JWT token for the session
      user: serializeUser(user),  // User details (excluding sensitive data like password)
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};



// Controller for deleting a session (logout)
export const deleteSession = async (req, res) => {
  try {
    const { token } = req.params;

    // Delegate to the service layer
    await sessionService.logoutUser(token);

    res.status(200).json({ message: "Sessão encerrada com sucesso!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};