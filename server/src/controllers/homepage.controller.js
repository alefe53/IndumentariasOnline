// src/controllers/homepage.controller.js

import { ProductoService } from "../services/producto.service.js";

export const getHomePage = (req, res) => {
  res.render("home");
};

export const getProductosDestacadosController = async (req, res, next) => {
  try {
    const productos = await ProductoService.getProductosDestacados();
    res.json({ ok: true, productos });
  } catch (err) {
    next(err);
  }
};
