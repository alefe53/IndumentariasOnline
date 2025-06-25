// src/controllers/homepage.controller.js

import { ProductoService } from "../services/producto.service.js";

export const getHomePage = (req, res) => {
  res.render("home");
};

export const getProductosDestacadosController = async (req, res, next) => {
  try {
    const productos = await ProductoService.getProductosDestacados();
    res.json({
      ok: true,
      count: productos.length,
      productos,
      payload: productos.map((p) => ({
        id: p.id_producto || p.id,
        nombre: p.nombre,
        precio: p.precio,
        categoria: p.categoria,
        stock: p.stock_total || p.stock,
      })),
    });
  } catch (err) {
    next(err);
  }
};
