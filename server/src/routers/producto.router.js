import { Router } from "express";
import { getProductosDestacadosController } from "../controllers/homepage.controller.js";
import {
  createProductoController,
  getAllProductosController,
  getProductoByIdController,
  updateProductoController,
  deleteProductoController,
} from "../controllers/producto.controller.js";

const productoRouter = Router();

// Get All - Productos
productoRouter.get("/getAll", getAllProductosController);

// Create One - Producto
productoRouter.post("/createOne", createProductoController);

// Get - ProductosDestacados
productoRouter.get("/destacados", getProductosDestacadosController);

// GET - Buscar un producto
productoRouter.get("/:id", getProductoByIdController);

// PUT - Actualizar un producto
productoRouter.put("/:id", updateProductoController);

// DELETE - Eliminar un producto
productoRouter.delete("/:id", deleteProductoController);


export default productoRouter;
