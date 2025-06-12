// src/repositories/producto.repository.js

import { supabase } from "../database/supabaseClient.js";

export const findProductosDestacadosDB = async () => {
	console.log(
		"Repositorio: Consultando 3 productos destacados aleatorios en Supabase vía RPC...",
	);

	if (!supabase) {
		console.error(
			"Repositorio: Cliente de Supabase no está disponible. Asegúrate de que supabaseClient.js esté configurado correctamente y las variables de entorno SUPABASE_URL y SUPABASE_KEY estén definidas.",
		);
		return [];
	}

	try {
		const { data, error } = await supabase.rpc(
			"get_random_published_products",
			{
				limit_count: 3,
			},
		);

		if (error) {
			console.error(
				"Error al llamar a RPC get_random_published_products en Supabase:",
				error.message,
			);
			throw error;
		}

		console.log(
			"Repositorio: Productos destacados obtenidos de Supabase vía RPC:",
			data ? data.length : "ninguno (data es null o undefined)",
		);

		return data || [];
	} catch (err) {
		console.error("Excepción en findProductosDestacadosDB (RPC):", err.message);
		throw err;
	}
};
