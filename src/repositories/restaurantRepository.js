// src/repositories/restaurantRepository.js
import { connectToDatabase } from "../config/database.js";

export const fetchAllRestaurantes = async () => {
  const db = await connectToDatabase();
  return await db.all("SELECT * FROM restaurantes");
};

export const fetchRestauranteById = async (id) => {
  const db = await connectToDatabase();
  return await db.get("SELECT * FROM restaurantes WHERE id_restaurante = ?", [id]);
};

export const insertRestaurante = async (id_restaurante, cep, endereco, id_usuario, imagem, numero_avaliacoes) => {
  const db = await connectToDatabase();
  return await db.run(
    "INSERT INTO restaurantes (id_restaurante, cep, endereco, id_usuario, imagem, numero_avaliacoes) VALUES (?, ?, ?, ?, ?, ?)",
    [id_restaurante, cep, endereco, id_usuario, imagem, numero_avaliacoes]
  );
};

export const fetchRestauranteWithReviews = async (id) => {
  const db = await connectToDatabase();
  const restaurante = await db.get(
    "SELECT * FROM restaurantes WHERE id_restaurante = ?",
    [id]
  );

  const avaliacoes = await db.all(
    "SELECT * FROM avaliacoes WHERE id_restaurante = ?",
    [id]
  );

  return { restaurante, avaliacoes };
};
