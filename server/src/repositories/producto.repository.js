// src/repositories/producto.repository.js
import { supabase } from "../database/supabaseClient.js";
import { Producto } from "../models/mysql/Producto.js";

export const ProductRepository = {
  findProductosDestacadosDB: async () => {
    console.log(
      "Repositorio: Consultando 3 productos destacados aleatorios en Supabase vía RPC..."
    );

    if (!supabase) {
      const err = new Error(
        "Repositorio: Cliente de Supabase no está disponible. Asegúrate de que supabaseClient.js esté configurado correctamente y las variables de entorno SUPABASE_URL y SUPABASE_KEY estén definidas."
      );
      err.name = "InternalServerError";
      throw err;
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
        throw err;
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
      throw err;
    }
  },
  getAll: async () => {
    try {
      let { data: productos, error } = await supabase
        .from("productos")
        .select("*");
      if (error) {
        const err = new Error(
          "Error al obtener todos los productos: " + error.message
        );
        err.name = "InternalServerError";
        throw err;
      }
      return { data: productos };
    } catch (error) {
      const err = new Error("Excepción inesperada en getAll: " + error.message);
      err.name = "InternalServerError";
      throw err;
    }
  },
  createOne: async (producto) => {
    const nuevoProducto = await Producto.create(producto);
    const { data, error } = await supabase
      .from("productos")
      .insert([nuevoProducto])
      .select();

    if (error) {
      const err = new Error(
        "Excepción inesperada en createOne: " + error.message
      );
      err.name = "InternalServerError";
      throw err;
    }

    return { data };
  },
};
