import express from "express";
import { createReview, getReviews, getReview, deleteReview } from "../controllers/review.js"
const router = express.Router();


router.get("/", getReviews);
router.get("/:id", getReview);
router.post("/", createReview);
router.delete("/:id", deleteReview); 


export default router;