// src/repositories/reviewRepository.js
import { connectToDatabase } from "../config/database.js";

export const getUserReviews = async (userId) => {
  const db = await connectToDatabase();
  return db.all("SELECT * FROM avaliacoes WHERE id_usuario = ?", [userId]);
};

export const updateReview = async (descricao, nota, id) => {
  const db = await connectToDatabase();
  return db.run(
    "UPDATE avaliacoes SET descricao = ?, nota = ? WHERE id_avaliacao = ?",
    [descricao, nota, id]
  );
};

export const deleteReview = async (id) => {
  const db = await connectToDatabase();
  return db.run("DELETE FROM avaliacoes WHERE id_avaliacao = ?", [id]);
};

export const getRestaurantReviews = async (restaurantId) => {
  const db = await connectToDatabase();
  return db.all("SELECT * FROM avaliacoes WHERE id_restaurante = ?", [restaurantId]);
};

export const createReview = async (descricao, nota, id_usuario, id_restaurante) => {
    const db = await connectToDatabase();
    return await db.run(
      "INSERT INTO avaliacoes (descricao, nota, id_usuario, id_restaurante) VALUES (?, ?, ?, ?)",
      [descricao, nota, id_usuario, id_restaurante]
    );
  };