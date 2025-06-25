import { Router } from "express";
import {
  getProductosMasVendidos,
  getVentasPorMes,
} from "../controllers/estadisticas.controller.js";

const estadisticasRouter = Router();

// Productos más vendidos
estadisticasRouter.get("/productos-mas-vendidos", getProductosMasVendidos);
// Ventas por mes
estadisticasRouter.get("/ventas-por-mes", getVentasPorMes);

export default estadisticasRouter;
