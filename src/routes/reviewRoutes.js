// src/routes/reviewRoutes.js
import { Router } from "express";
import {
  getUserReviews,
  updateReview,
  deleteReview,
  getRestaurantReviews,
  createReview,
} from "../controllers/reviewController.js";

const reviewRouter = Router();

reviewRouter.get("/reviews/user/:userId", getUserReviews);
reviewRouter.delete("/reviews/:id", deleteReview);
reviewRouter.post("/reviews", createReview);
reviewRouter.get("/reviews/restaurant/:restaurantId", getRestaurantReviews);
reviewRouter.put("/reviews/:id", updateReview);

export default reviewRouter;