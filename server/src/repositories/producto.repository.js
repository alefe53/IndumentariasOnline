// src/repositories/producto.repository.js
import { supabase } from "../database/supabaseClient.js";

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
    // Validación básica (puedes mejorarla con Joi u otra librería si lo deseas)
    if (!producto || typeof producto !== "object") {
      const err = new Error("Datos de producto inválidos");
      err.name = "ValidationError";
      throw err;
    }

    // Insertar directamente en Supabase
    const { data, error } = await supabase
      .from("productos")
      .insert([producto])
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
  deleteOne: async (id) => {
    const { error } = await supabase
      .from("productos")
      .delete()
      .eq("id_producto", id);

    if (error) {
      const err = new Error(
        "Excepción inesperada en deleteOne: " + error.message
      );
      err.name = "InternalServerError";
      throw err;
    }
  },
  getById: async (id) => {
    const { data, error } = await supabase
      .from("productos")
      .select("*")
      .eq("id_producto", id)
      .single();

    if (error) {
      const err = new Error(
        "Excepción inesperada en getById: " + error.message
      );
      err.name = "InternalServerError";
      throw err;
    }
    return data;
  },
  updateById: async (id, data) => {
    // Validación básica
    if (!data || typeof data !== "object") {
      const err = new Error("ID o datos inválidos para actualizar producto");
      err.name = "ValidationError";
      throw err;
    }
    // Actualiza el producto y retorna el actualizado
    const { data: updated, error } = await supabase
      .from("productos")
      .update(data)
      .eq("id_producto", id)
      .select()
      .single();

    if (error) {
      const err = new Error(
        "Excepción inesperada en updateById: " + error.message
      );
      err.name = "InternalServerError";
      throw err;
    }
    return updated;
  },
};
