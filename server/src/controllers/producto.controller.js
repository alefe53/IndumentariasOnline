// src/controllers/producto.controller.js
import { ProductoService } from "../services/producto.service.js";

export const ProductoController = {
  // Obtener todos los productos
  getAllProductosController: async (req, res, next) => {
    try {
      const productos = await ProductoService.getAllProductosService();
      res.json({ ok: true, productos });
    } catch (err) {
      next(err);
    }
  },

  // Crear un producto
  createProductoController: async (req, res, next) => {
    try {
      const nuevoProducto = await ProductoService.createProductoService(
        req.body
      );
      res.status(201).json({ ok: true, producto: nuevoProducto });
    } catch (err) {
      next(err);
    }
  },
  // Obtener producto por ID
  getProductoByIdController: async (req, res, next) => {
    try {
      const { id } = req.params;
      const producto = await ProductoService.getProductoPorId(id);
      res.status(201).json({ ok: true, producto: producto });
    } catch (err) {
      next(err);
    }
  },

  // Eliminar un producto por ID
  deleteProductoController: async (req, res, next) => {
    try {
      const { id } = req.params;
      await ProductoService.deleteProductoService(id);
      res.json({ ok: true, message: "Producto eliminado correctamente" });
    } catch (err) {
      next(err);
    }
  },
  updateProductoController: async (req, res, next) => {
    try {
      const { id } = req.params;
      // Buscar el producto existente
      const productoViejo = await ProductoService.getProductoPorId(id);
      if (!productoViejo) {
        return res.status(404).json({
          ok: false,
          message: "Producto no encontrado",
        });
      }
      // Actualizar el producto (debes implementar updateById en el service y repository)
      const productoActualizado = await ProductoService.updateById(id, req.body);
      res.json({ ok: true, producto: productoActualizado });
    } catch (error) {
      next(error);
    }
  },
};
