// src/repositories/menuRepository.js
import { connectToDatabase } from "../config/database.js";

export const getMenusByRestaurantId = async (restaurantId) => {
  const db = await connectToDatabase();
  return db.all("SELECT * FROM menus WHERE id_restaurante = ?", [restaurantId]);
};

export const createMenu = async (menuData) => {
  const { id_restaurante, descricao_menu, id_usuario, preco } = menuData;
  const db = await connectToDatabase();
  return db.run(
    "INSERT INTO menus (id_restaurante, descricao_menu, id_usuario, preco) VALUES (?, ?, ?, ?)",
    [id_restaurante, descricao_menu, id_usuario, preco]
  );
};

export const updateMenu = async (id, menuData) => {
  const { descricao_menu, preco } = menuData;
  const db = await connectToDatabase();
  return db.run(
    "UPDATE menus SET descricao_menu = ?, preco = ? WHERE id_menu = ?",
    [descricao_menu, preco, id]
  );
};

export const deleteMenu = async (id) => {
  const db = await connectToDatabase();
  return db.run("DELETE FROM menus WHERE id_menu = ?", [id]);
};
