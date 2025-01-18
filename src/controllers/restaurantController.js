// src/controllers/restaurantController.js
import {
  fetchAllRestaurantes,
  fetchRestauranteById,
  insertRestaurante,
  fetchRestauranteWithReviews
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
    console.log("Dados recebidos no backend:", req.body);

    const { id_restaurante, cep, endereco, id_usuario, imagem, numero_avaliacoes } = req.body;

    if (!cep) {
      return res.status(400).json({ error: "O campo 'cep' é obrigatório." });
    }

    await insertRestaurante(id_restaurante, cep, endereco, id_usuario, imagem, numero_avaliacoes);

    res.status(201).json({ message: "Restaurante criado com sucesso!" });
  } catch (error) {
    console.error("Erro no createRestaurante:", error.message);
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
