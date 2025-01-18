// src/controllers/reviewController.js
import * as reviewRepository from "../repositories/reviewRepository.js";

export const getUserReviews = async (req, res) => {
  try {
    const reviews = await reviewRepository.getUserReviews(req.params.userId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const { descricao, nota } = req.body;
    await reviewRepository.updateReview(descricao, nota, req.params.id);
    res.status(200).json({ message: "Avaliação atualizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    await reviewRepository.deleteReview(req.params.id);
    res.status(200).json({ message: "Avaliação deletada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRestaurantReviews = async (req, res) => {
  try {
    const reviews = await reviewRepository.getRestaurantReviews(req.params.restaurantId);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createReview = async (req, res) => {
  try {
    const { descricao, nota, id_usuario, id_restaurante } = req.body;
    await reviewRepository.createReview(descricao, nota, id_usuario, id_restaurante);
    res.status(201).json({ message: "Avaliação criada com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};