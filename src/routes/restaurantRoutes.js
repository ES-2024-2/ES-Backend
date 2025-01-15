import { Router } from "express";
import {
  getAllRestaurantes,
  getRestauranteById,
  createRestaurante,
} from "../controllers/restaurantController.js";

const restaurantRouter = Router();

restaurantRouter.get("/restaurants", getAllRestaurantes);
restaurantRouter.post("/restaurants", createRestaurante);
restaurantRouter.get("/restaurants/:id", getRestauranteById);

export default restaurantRouter;
