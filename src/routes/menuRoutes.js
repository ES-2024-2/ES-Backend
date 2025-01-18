// src/routes/menuRoutes.js
import { Router } from "express";
import {
  getMenusByRestaurant,
  createMenu,
  updateMenu,
  deleteMenu,
} from "../controllers/menuController.js";

const menuRouter = Router();

menuRouter.get("/menus/:restaurantId", getMenusByRestaurant);
menuRouter.post("/menus", createMenu);
menuRouter.put("/menus/:id", updateMenu);
menuRouter.delete("/menus/:id", deleteMenu);

export default menuRouter;
