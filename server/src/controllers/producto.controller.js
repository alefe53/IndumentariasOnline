// src/controllers/producto.controller.js
import { ProductoService } from "../services/producto.service.js";

export const ProductoController = {
  // Obtener todos los productos
  getAllProductosController: async (req, res, next) => {
    try {
      const productos = await ProductoService.getAllProductosService();
      res.json({
        ok: true,
        count: productos.data ? productos.data.length : 0,
        productos: productos.data || [],
        payload: (productos.data || []).map((p) => ({
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
  },

  // Crear un producto
  createProductoController: async (req, res, next) => {
    try {
      const nuevoProducto = await ProductoService.createProductoService(
        req.body
      );
      res.status(201).json({
        ok: true,
        producto: nuevoProducto,
        payload: {
          id:
            nuevoProducto.data?.[0]?.id_producto || nuevoProducto.data?.[0]?.id,
          nombre: nuevoProducto.data?.[0]?.nombre,
          precio: nuevoProducto.data?.[0]?.precio,
          categoria: nuevoProducto.data?.[0]?.categoria,
          stock:
            nuevoProducto.data?.[0]?.stock_total ||
            nuevoProducto.data?.[0]?.stock,
        },
      });
    } catch (err) {
      next(err);
    }
  },
  // Obtener producto por ID
  getProductoByIdController: async (req, res, next) => {
    try {
      const { id } = req.params;
      const producto = await ProductoService.getProductoPorId(id);
      if (!producto) {
        return res
          .status(404)
          .json({ ok: false, message: "Producto no encontrado" });
      }
      res.status(200).json({
        ok: true,
        producto,
        payload: {
          id: producto.id_producto || producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          categoria: producto.categoria,
          stock: producto.stock_total || producto.stock,
        },
      });
    } catch (err) {
      next(err);
    }
  },

  // Eliminar un producto por ID
  deleteProductoController: async (req, res, next) => {
    try {
      const { id } = req.params;
      // Buscar el producto antes de eliminarlo para incluirlo en el payload
      const productoEliminado = await ProductoService.getProductoPorId(id);
      await ProductoService.deleteProductoService(id);
      res.json({
        ok: true,
        message: "Producto eliminado correctamente",
        payload: productoEliminado,
      });
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
      const productoActualizado = await ProductoService.updateById(
        id,
        req.body
      );
      res.json({ ok: true, producto: productoActualizado });
    } catch (error) {
      next(error);
    }
  },
};
