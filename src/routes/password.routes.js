import express from "express";
import { resetPassword } from "../controller/password.controller.js";

const router = express.Router();

router.put("/reset", resetPassword);

export default router;
