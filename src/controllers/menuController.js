// src/controllers/menuController.js
import * as menuRepository from "../repositories/menuRepository.js";

export const getMenusByRestaurant = async (req, res) => {
  try {
    const menus = await menuRepository.getMenusByRestaurantId(req.params.restaurantId);
    res.status(200).json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMenu = async (req, res) => {
  try {
    await menuRepository.createMenu(req.body);
    res.status(201).json({ message: "Menu criado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateMenu = async (req, res) => {
  try {
    await menuRepository.updateMenu(req.params.id, req.body);
    res.status(200).json({ message: "Menu atualizado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    await menuRepository.deleteMenu(req.params.id);
    res.status(200).json({ message: "Menu deletado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
