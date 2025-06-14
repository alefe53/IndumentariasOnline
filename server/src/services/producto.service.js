// src/services/producto.service.js

import { findProductosDestacadosDB } from "../repositories/producto.repository.js";


export const getProductosDestacados = async () => {
	console.log("Servicio: Solicitando productos destacados al repositorio...");

	try {
		const productosDesdeDB = await findProductosDestacadosDB();
		console.log("Servicio: Productos recibidos del repositorio.");

		return productosDesdeDB;
	} catch (error) {
		console.error(
			"Error en producto.service al obtener productos destacados:",
			error,
		);

		throw error;
	}
};
