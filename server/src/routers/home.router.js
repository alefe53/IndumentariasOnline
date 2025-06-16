// src/routes/perfil.router.js

import express from "express";
import { getHomePage } from "../controllers/homepage.controller.js";
import { authMiddleware } from "../middleware/basicAuth.js";

const router = express.Router();

router.get("/", authMiddleware, getHomePage);

export default router;
