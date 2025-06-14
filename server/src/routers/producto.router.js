import { Router } from "express";
import { getProductosDestacadosController } from "../controllers/homepage.controller.js";
import {
  createProductoController,
  getAllProductosController,
} from "../controllers/producto.controller.js";

const productoRouter = Router();

// Get All - Productos
productoRouter.get("/", getAllProductosController);

// Create One - Producto
productoRouter.post("/", createProductoController);

// Get - ProductosDestacados
productoRouter.get("/destacados", getProductosDestacadosController);

export default productoRouter;
