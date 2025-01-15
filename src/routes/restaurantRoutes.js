import { Router } from "express";
import {
  getAllRestaurantes,
  getRestauranteById,
  createRestaurante,
} from "../controllers/restaurantController.js";

const router = Router();

router.get("/restaurants", getAllRestaurantes);
router.post("/restaurants", createRestaurante);
router.get("/restaurants/:id", getRestauranteById);

export default restaurantRouter;
