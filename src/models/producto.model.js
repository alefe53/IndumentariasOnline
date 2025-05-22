//src/models/producto.model.js

class Producto {
	/**
	 * @param {object} data - Datos iniciales para el producto.
	 * @param {string} data.nombre - Nombre del producto.
	 * @param {string} data.descripcion - Descripción detallada del producto.
	 * @param {string} data.material - Material principal del producto.
	 * @param {number} data.precio - Precio de venta del producto.
	 * @param {number} data.stock_total - Cantidad total en stock.
	 * @param {string} data.categoria - Categoría principal (ej: "Remeras", "Pantalones").
	 * @param {string} [data.subcategoria] - Subcategoría (ej: "Manga Corta").
	 * @param {string} [data.marca] - Marca del producto.
	 * @param {string} data.color - Color principal del producto.
	 * @param {string} data.genero - Género al que está orientado (ej: "Hombre", "Mujer", "Unisex").
	 * @param {string[]} data.talles_disponibles - Array de talles disponibles (ej: ['S', 'M', 'L', 'XL', 'XXL']).
	 * @param {string[]} data.imagenes - Array de URLs o rutas a las imágenes.
	 * @param {boolean} [data.publicado=true] - Indica si el producto está visible.
	 */
	constructor({
		id_producto, // Sera autoincremental, asignado por la BD
		nombre,
		descripcion,
		material,
		precio,
		stock_total,
		categoria,
		subcategoria = "",
		marca = "",
		color,
		genero,
		talles_disponibles = [],
		imagenes = [],
		publicado = true,
		fecha_creacion, // Asignado por la BD o en el servicio
		fecha_actualizacion, // Asignado por la BD o en el servicio
	}) {
		this.id_producto = id_producto;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.material = material;
		this.precio = precio;
		this.stock_total = stock_total;
		this.categoria = categoria;
		this.subcategoria = subcategoria;
		this.marca = marca;
		this.color = color;
		this.genero = genero;
		this.talles_disponibles = talles_disponibles; // ej: ['S', 'M', 'L', 'XL', 'XXL']
		this.imagenes = imagenes; // Array de URLs
		this.publicado = publicado;
		this.fecha_creacion = fecha_creacion || new Date();
		this.fecha_actualizacion = fecha_actualizacion || new Date();
	}
}

module.exports = Producto;
