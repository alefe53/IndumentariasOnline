// src/services/producto.service.js

import { ProductRepository } from "../repositories/producto.repository.js";

export const getAllProductosService = async () => {
  try {
    return await ProductRepository.getAll();
  } catch (error) {
    const err = new Error(
      "Servicio: Error al obtener todos los productos: " + error.message
    );
    err.name = "InternalServerError";
    throw err;
  }
};

export const createProductoService = async (productoData) => {
  try {
    return await ProductRepository.createOne(productoData);
  } catch (error) {
    if (error.name === "ValidationError") throw error;
    const err = new Error(
      "Servicio: Error al crear producto: " + error.message
    );
    err.name = "InternalServerError";
    throw err;
  }
};

export const getProductosDestacados = async () => {
  console.log("Servicio: Solicitando productos destacados al repositorio...");

  try {
    const productosDesdeDB =
      await ProductRepository.findProductosDestacadosDB();
    console.log("Servicio: Productos recibidos del repositorio.");

    return productosDesdeDB;
  } catch (error) {
    const err = new Error(
      "Servicio: Error al obtener productos destacados: " + error.message
    );
    err.name = "InternalServerError";
    throw err;
  }
};
