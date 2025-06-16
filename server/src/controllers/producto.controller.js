// src/controllers/producto.controller.js
import {
  getAllProductosService,
  createProductoService,
} from "../services/producto.service.js";

// Obtener todos los productos
export const getAllProductosController = async (req, res, next) => {
  try {
    const productos = await getAllProductosService();
    res.json({ ok: true, productos });
  } catch (err) {
    next(err);
  }
};

// Crear un producto
export const createProductoController = async (req, res, next) => {
  try {
    const nuevoProducto = await createProductoService(req.body);
    res.status(201).json({ ok: true, producto: nuevoProducto });
  } catch (err) {
    next(err);
  }
};
