import { Router } from "express";
import { getProductosDestacadosController } from "../controllers/homepage.controller.js";
import { ProductoController } from "../controllers/producto.controller.js";

const productoRouter = Router();

// Get - ProductosDestacados
productoRouter.get("/destacados", getProductosDestacadosController);

// Get All - Productos
productoRouter.get("/getAll", ProductoController.getAllProductosController);

// Create One - Producto
productoRouter.post("/createOne", ProductoController.createProductoController);

// GET - Buscar un producto
productoRouter.get("/:id", ProductoController.getProductoByIdController);

// PUT - Actualizar un producto
productoRouter.put("/:id", ProductoController.updateProductoController);

// DELETE - Eliminar un producto
productoRouter.delete("/:id", ProductoController.deleteProductoController);

export default productoRouter;
