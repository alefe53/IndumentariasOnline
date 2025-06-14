// src/repositories/producto.repository.js

import { supabase } from "../database/supabaseClient.js";

export const findProductosDestacadosDB = async () => {
  console.log(
    "Repositorio: Consultando 3 productos destacados aleatorios en Supabase vía RPC..."
  );

  if (!supabase) {
    const err = new Error(
      "Repositorio: Cliente de Supabase no está disponible. Asegúrate de que supabaseClient.js esté configurado correctamente y las variables de entorno SUPABASE_URL y SUPABASE_KEY estén definidas."
    );
    err.name = "InternalServerError";
    return next(err);
  }

  try {
    const { data, error } = await supabase.rpc(
      "get_random_published_products",
      {
        limit_count: 3,
      }
    );

    if (error) {
      const err = new Error(
        "Error al llamar a RPC get_random_published_products en Supabase:" +
          error.message
      );
      err.name = "InternalServerError";
      return next(err);
    }

    console.log(
      "Repositorio: Productos destacados obtenidos de Supabase vía RPC:",
      data ? data.length : "ninguno (data es null o undefined)"
    );

    return data || [];
  } catch (error) {
    const err = new Error(
      "Excepción en findProductosDestacadosDB (RPC):",
      err.message
    );
    err.name = "InternalServerError";
    return next(err);
  }
};
