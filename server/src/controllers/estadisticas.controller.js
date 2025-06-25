// src/controllers/estadisticas.controller.js
import { EstadisticasService } from "../services/estadisticas.service.js";

export const getProductosMasVendidos = async (req, res, next) => {
  try {
    const top = parseInt(req.query.top);
    if (isNaN(top) || top <= 0) {
      return res.status(400).json({
        ok: false,
        message: "El parámetro debe ser un número entero positivo.",
        payload: null,
      });
    }
    const productos = await EstadisticasService.getProductosMasVendidos(top);
    res.json({
      ok: true,
      count: productos.length,
      payload: productos.map((p) => ({
        id: p.id_producto,
        nombre: p.nombre,
        total_vendido: p.total_vendido,
      })),
    });
  } catch (err) {
    next(err);
  }
};

export const getVentasPorMes = async (req, res, next) => {
  try {
    const ventas = await EstadisticasService.getVentasPorMes();
    res.json({
      ok: true,
      payload: ventas.map((v) => ({
        mes: v.mes,
        total_ventas: v.total_ventas,
      })),
    });
  } catch (err) {
    next(err);
  }
};
