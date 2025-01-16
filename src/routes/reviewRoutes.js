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
reviewRouter.put("/reviews/:id", updateReview);
reviewRouter.delete("/reviews/:id", deleteReview);
reviewRouter.get("/reviews/restaurant/:restaurantId", getRestaurantReviews);
reviewRouter.post("/reviews", createReview);

export default reviewRouter;