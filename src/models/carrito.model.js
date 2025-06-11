//src/models/carrito.model.js
class CarritoItem {
	/**
	 * Representa un ítem dentro del carrito.
	 * @param {object} data
	 * @param {number} data.id_producto - FK al producto.
	 * @param {string} data.nombre_producto - Nombre del producto (snapshot o para mostrar).
	 * @param {number} data.cantidad - Cantidad seleccionada.
	 * @param {string} data.color_seleccionado - Color del producto seleccionado.
	 * @param {string} data.talle_seleccionado - Talle del producto seleccionado.
	 * @param {number} data.precio_unitario_snapshot - Precio del producto al momento de agregarlo.
	 * @param {number} data.subtotal_item - Calculado (cantidad * precio_unitario_snapshot).
	 * @param {Date} [data.fecha_agregado] - Fecha en que se agregó el ítem.
	 */
	constructor({
		id_producto,
		nombre_producto,
		cantidad,
		color_seleccionado,
		talle_seleccionado,
		precio_unitario_snapshot,
		subtotal_item,
		fecha_agregado,
	}) {
		this.id_producto = id_producto;
		this.nombre_producto = nombre_producto;
		this.cantidad = cantidad;
		this.color_seleccionado = color_seleccionado;
		this.talle_seleccionado = talle_seleccionado;
		this.precio_unitario_snapshot = precio_unitario_snapshot;
		this.subtotal_item = subtotal_item;
		this.fecha_agregado = fecha_agregado || new Date();
	}
}

class Carrito {
	/**
	 * @param {object} data - Datos iniciales para el carrito.
	 * @param {number} data.id_usuario - FK al usuario dueño del carrito.
	 * @param {CarritoItem[]} [data.items=[]] - Lista de ítems en el carrito.
	 */
	constructor({
		id_carrito, // Será autoincremental, asignado por la BD
		id_usuario,
		items = [], // Array de objetos CarritoItem
		fecha_creacion,
		fecha_actualizacion,
	}) {
		this.id_carrito = id_carrito;
		this.id_usuario = id_usuario; // FK
		this.items = items.map((item) => new CarritoItem(item)); // Array de CarritoItem
		this.fecha_creacion = fecha_creacion || new Date();
		this.fecha_actualizacion = fecha_actualizacion || new Date();
	}
}

export { Carrito, CarritoItem }; // Exportamos ambos para claridad
