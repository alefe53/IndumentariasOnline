// src/config/supabaseClient.js
import { createClient } from "@supabase/supabase-js";
import { config } from "../../config/config.js";

const supabaseUrl = config.paths.SUPABASE_URL;
const supabaseKey = config.paths.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  const err = new Error(
    "SUPABASE_URL o SUPABASE_KEY no están definidas en la configuración."
  );
  err.name = "SupabaseConfigError";
  throw err;
}

export const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

if (supabase) {
  console.log("Cliente de Supabase inicializado correctamente.");
} else {
  const err = new Error(
    "Cliente de Supabase NO pudo ser inicializado. Verifica las variables de entorno."
  );
  err.name = "SupabaseClientInitError";
  throw err;
}
