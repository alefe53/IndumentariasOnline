// src/services/producto.service.js

import { findProductosDestacadosDB } from "../repositories/producto.repository.js";

export const getProductosDestacados = async (req, res, next) => {
  console.log("Servicio: Solicitando productos destacados al repositorio...");

  try {
    const productosDesdeDB = await findProductosDestacadosDB();
    console.log("Servicio: Productos recibidos del repositorio.");

    return productosDesdeDB;
  } catch (error) {
    const err = new Error(
      "Servicio: Error al obtener productos destacados: " + error.message
    );
    err.name = "InternalServerError";
    return next(err);
  }
};
