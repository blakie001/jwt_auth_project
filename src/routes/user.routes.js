import express from "express";
import { getUserProfile } from "../controller/user.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile", verifyToken, getUserProfile);

export default router;
