// src/controllers/reviewController.js
import { connectToDatabase } from "../config/database.js";

export const getUserReviews = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const reviews = await db.all(
      "SELECT * FROM avaliacoes WHERE id_usuario = ?",
      [req.params.userId]
    );

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const { descricao, nota } = req.body;
    const db = await connectToDatabase();

    await db.run(
      "UPDATE avaliacoes SET descricao = ?, nota = ? WHERE id_avaliacao = ?",
      [descricao, nota, req.params.id]
    );

    res.status(200).json({ message: "Avaliação atualizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const db = await connectToDatabase();

    await db.run("DELETE FROM avaliacoes WHERE id_avaliacao = ?", [
      req.params.id,
    ]);

    res.status(200).json({ message: "Avaliação deletada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRestaurantReviews = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const reviews = await db.all(
      "SELECT * FROM avaliacoes WHERE id_restaurante = ?",
      [req.params.restaurantId]
    );

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};