// src/config/supabaseClient.js
import { createClient } from "@supabase/supabase-js";
import { config } from "../../config/config.js";

const supabaseUrl = config.paths.SUPABASE_URL;
const supabaseKey = config.paths.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
	console.error(
		"Error: SUPABASE_URL o SUPABASE_KEY no están definidas en la configuración.",
	);
}

export const supabase =
	supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

if (supabase) {
	console.log("Cliente de Supabase inicializado correctamente.");
} else {
	console.warn(
		"Cliente de Supabase NO pudo ser inicializado. Verifica las variables de entorno.",
	);
}
