// src/controllers/homepage.controller.js

import { getProductosDestacados } from "../services/producto.service.js";

export const getHomePage = (req, res) => {
  res.render("home");
};
