// src/services/producto.service.js

import { ProductRepository } from "../repositories/producto.repository.js";

export const ProductoService = {
  getAllProductosService: async () => {
    try {
      return await ProductRepository.getAll();
    } catch (error) {
      const err = new Error(
        "Servicio: Error al obtener todos los productos: " + error.message
      );
      err.name = "InternalServerError";
      throw err;
    }
  },

  createProductoService: async (productoData) => {
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
  },

  getProductosDestacados: async () => {
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
  },
  getProductoPorId: async (id) => {
    try {
      if (!id) {
        const err = new Error("ID de producto no proporcionado");
        err.name = "ValidationError";
        throw err;
      }
      return await ProductRepository.getById(id);
    } catch (error) {
      const err = new Error(
        "Servicio: Error al obtener producto por ID: " + error.message
      );
      err.name = "InternalServerError";
      throw err;
    }
  },

  deleteProductoService: async (id) => {
    try {
      if (!id) {
        const err = new Error("ID de producto no proporcionado");
        err.name = "ValidationError";
        throw err;
      }
      await ProductRepository.deleteOne(id);
      return true;
    } catch (error) {
      const err = new Error(
        "Servicio: Error al eliminar producto: " + error.message
      );
      err.name = "InternalServerError";
      throw err;
    }
  },

  updateById: async (id, data) => {
    try {
      if (!id) {
        const err = new Error("ID de producto no proporcionado");
        err.name = "ValidationError";
        throw err;
      }
      // Solo actualiza los campos permitidos
      return await ProductRepository.updateById(id, data);
    } catch (error) {
      const err = new Error(
        "Servicio: Error al actualizar producto: " + error.message
      );
      err.name = "InternalServerError";
      throw err;
    }
  },
};
