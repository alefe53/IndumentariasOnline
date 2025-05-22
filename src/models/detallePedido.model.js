//src/models/detallePedido.model.js

class DetallePedido {
	/**
	 * @param {object} data
	 * @param {number} data.id_producto - FK al producto.
	 * @param {string} data.nombre_producto_snapshot - Nombre del producto al momento de la compra.
	 * @param {number} data.cantidad_comprada - Cantidad del producto.
	 * @param {string} data.talle_comprado - Talle seleccionado.
	 * @param {string} data.color_comprado - Color seleccionado.
	 * @param {number} data.precio_unitario_compra - Precio del producto al momento de la compra.
	 * @param {number} data.subtotal_linea - Calculado (cantidad * precio_unitario_compra).
	 */
	constructor({
		// id_detalle_pedido, // Generalmente asignado por la BD si es una tabla separada
		id_producto,
		nombre_producto_snapshot,
		cantidad_comprada,
		talle_comprado,
		color_comprado,
		precio_unitario_compra,
		subtotal_linea,
	}) {
		// this.id_detalle_pedido = id_detalle_pedido;
		this.id_producto = id_producto;
		this.nombre_producto_snapshot = nombre_producto_snapshot;
		this.cantidad_comprada = cantidad_comprada;
		this.talle_comprado = talle_comprado;
		this.color_comprado = color_comprado;
		this.precio_unitario_compra = precio_unitario_compra;
		this.subtotal_linea = subtotal_linea;
	}
}

module.exports = DetallePedido;
