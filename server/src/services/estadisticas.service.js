// src/services/estadisticas.service.js
import { EstadisticasRepository } from "../repositories/estadisticas.repository.js";

export const EstadisticasService = {
  getProductosMasVendidos: async (top = 5) => {
    return await EstadisticasRepository.getProductosMasVendidos(top);
  },
  getVentasPorMes: async () => {
    return await EstadisticasRepository.getVentasPorMes();
  },
};
