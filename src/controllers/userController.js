// src/controllers/userController.js
import { connectToDatabase } from "../config/database.js";

export const createUser = async (req, res) => {
  try {
    const { nome, senha, email } = req.body;
    const db = await connectToDatabase();

    await db.run(
      "INSERT INTO usuarios (nome, senha, email) VALUES (?, ?, ?)",
      [nome, senha, email]
    );

    res.status(201).json({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
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

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};