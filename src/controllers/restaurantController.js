import { connectToDatabase } from "../config/database.js";

export const getAllRestaurantes = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const restaurantes = await db.all("SELECT * FROM restaurantes");
    res.status(200).json(restaurantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRestauranteById = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const restaurante = await db.get("SELECT * FROM restaurantes WHERE id_restaurante = ?", [
      req.params.id,
    ]);

    if (!restaurante) {
      return res.status(404).json({ message: "Restaurante não encontrado" });
    }

    res.status(200).json(restaurante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createRestaurante = async (req, res) => {
  try {
    const { id_restaurante, cep, endereco, id_usuario } = req.body;
    const db = await connectToDatabase();

    await db.run(
      "INSERT INTO restaurantes (id_restaurante, cep, endereco, id_usuario) VALUES (?, ?, ?, ?)",
      [id_restaurante, cep, endereco, id_usuario]
    );

    res.status(201).json({ message: "Restaurante criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
