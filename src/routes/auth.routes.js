import express from "express";
import { signup, login } from "../controller/auth.controller.js";
import { authLimiter } from "../middleware/rate.limiter.middleware.js";

const router = express.Router();

router.post("/signup", authLimiter, signup);
router.post("/login", authLimiter, login);

export default router;