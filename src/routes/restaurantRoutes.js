// src/routes/restaurantRoutes.js
import { Router } from "express";
import {
  getAllRestaurantes,
  getRestauranteById,
  createRestaurante,
  getRestauranteWithReviews,
} from "../controllers/restaurantController.js";

const restaurantRouter = Router();

restaurantRouter.get("/restaurants", getAllRestaurantes);
restaurantRouter.post("/restaurants", createRestaurante);
restaurantRouter.get("/restaurants/:id", getRestauranteById);
restaurantRouter.get("/restaurants/:id/reviews", getRestauranteWithReviews);

export default restaurantRouter;
