// src/controllers/sessionController.js
import * as sessionService from "../services/sessionService.js";
import { serializeUser } from "../models/userModel.js";

export const createSession = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const { token, user } = await sessionService.loginUser(email, senha);

    res.status(200).json({
      message: "Login realizado com sucesso!",
      token, 
      user: serializeUser(user),  
    });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export const deleteSession = async (req, res) => {
  try {
    const { token } = req.params;

    await sessionService.deleteUser(token);

    res.status(200).json({ message: "Sessão encerrada com sucesso!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCurrentSession = async (req, res) => {
  try {
    const { token } = req.headers;

    const session = await sessionService.findSessions();

    if (!session) {
      throw new Error("Sessão não encontrada.");
    }

    res.status(200).json({ session });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};