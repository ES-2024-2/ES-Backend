// src/routes/reviewRoutes.js
import { Router } from "express";
import {
  getUserReviews,
  updateReview,
  deleteReview,
  getRestaurantReviews,
} from "../controllers/reviewController.js";

const reviewRouter = Router();

reviewRouter.get("/reviews/user/:userId", getUserReviews);
reviewRouter.put("/reviews/:id", updateReview);
reviewRouter.delete("/reviews/:id", deleteReview);
reviewRouter.get("/reviews/restaurant/:restaurantId", getRestaurantReviews);

export default reviewRouter;