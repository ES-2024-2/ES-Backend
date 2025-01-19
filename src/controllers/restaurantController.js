// src/controllers/restaurantController.js
import {
  fetchAllRestaurantes,
  fetchRestauranteById,
  insertRestaurante,
  fetchRestauranteWithReviews,
  getAverageRatingByRestaurant
} from "../repositories/restaurantRepository.js";

export const getAllRestaurantes = async (req, res) => {
  try {
    const restaurantes = await fetchAllRestaurantes();
    res.status(200).json(restaurantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRestauranteById = async (req, res) => {
  try {
    const restaurante = await fetchRestauranteById(req.params.id);

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
    const { id_restaurante, cep, endereco, id_usuario, imagem, numero_avaliacoes } = req.body;

    await insertRestaurante(id_restaurante, cep, endereco, id_usuario, imagem, numero_avaliacoes);

    res.status(201).json({ message: "Restaurante criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRestauranteWithReviews = async (req, res) => {
  try {
    const { restaurante, avaliacoes } = await fetchRestauranteWithReviews(req.params.id);

    if (!restaurante) {
      return res.status(404).json({ message: "Restaurante não encontrado" });
    }

    res.status(200).json({ restaurante, avaliacoes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRestaurantAverageRating = async (req, res) => {
  try {
    const averageRating = await getAverageRatingByRestaurant(req.params.restaurantId);
    res.status(200).json({ averageRating });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

