// src/controllers/sessionController.js
import { connectToDatabase } from "../config/database.js";

export const createSession = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const db = await connectToDatabase();

    const user = await db.get(
      "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
      [email, senha]
    );

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Aqui você pode gerar um token de sessão, se necessário
    res.status(200).json({ message: "Login bem-sucedido", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};