// src/repositories/estadisticas.repository.js
import { supabase } from "../database/supabaseClient.js";

export const EstadisticasRepository = {
  // (requiere tabla 'detalle_pedido' y 'productos')
  getProductosMasVendidos: async (top = 5) => {
    // Supabase SQL: suma cantidad por producto y ordena descendente
    const { data, error } = await supabase.rpc("get_productos_mas_vendidos", {
      top_n: top,
    });
    if (error)
      throw new Error(
        "Error al obtener productos más vendidos: " + error.message
      );
    return data;
  },

  // Devuelve ventas agrupadas por mes (requiere tabla 'pedido')
  getVentasPorMes: async () => {
    const { data, error } = await supabase.rpc("get_ventas_por_mes");
    if (error)
      throw new Error("Error al obtener ventas por mes: " + error.message);
    return data;
  },
};
