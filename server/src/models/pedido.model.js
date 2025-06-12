//src/models/pedido.model.js

const Direccion = require("./direccion.model");
const DetallePedido = require("./detallePedido.model");

class Pedido {
	constructor({
		id_pedido,
		id_usuario,
		items = [], // Array de objetos DetallePedido
		fecha_pedido,
		// importe_subtotal, // Podría calcularse desde los items o pasarse
		// importe_total, // Podría calcularse desde los items o pasarse
		importe_descuento = 0,
		importe_envio = 0,
		estado_pedido = "Pendiente de Pago",
		direccion_envio = {},
		direccion_facturacion,
		metodo_pago_utilizado = "",
		id_transaccion_pago = "",
		notas_cliente = "",
		fecha_actualizacion_estado,
	}) {
		this.id_pedido = id_pedido;
		this.id_usuario = id_usuario;
		this.items = items.map((item) => new DetallePedido(item)); // Asegura instancias de DetallePedido
		this.fecha_pedido = fecha_pedido || new Date();

		// --- Consideración sobre los importes ---
		// Opción 1: Calcularlos aquí (si no se pasan pre-calculados)
		this.importe_subtotal = this.items.reduce(
			(sum, item) => sum + item.subtotal_linea,
			0,
		);
		this.importe_total =
			this.importe_subtotal - importe_descuento + importe_envio;
		// Opción 2: Si se recibe ya calculado, simplemente asignarlos.
		// this.importe_subtotal = importe_subtotal_recibido;
		// this.importe_total = importe_total_recibido;

		this.importe_descuento = importe_descuento;
		this.importe_envio = importe_envio;
		this.estado_pedido = estado_pedido;

		// Manejo para direccion_envio
		if (direccion_envio && !(direccion_envio instanceof Direccion)) {
			this.direccion_envio = new Direccion(direccion_envio);
		} else if (direccion_envio instanceof Direccion) {
			this.direccion_envio = direccion_envio;
		} else {
			this.direccion_envio = new Direccion();
		}

		// Manejo para direccion_facturacion
		if (direccion_facturacion === undefined) {
			this.direccion_facturacion = new Direccion(this.direccion_envio);
		} else if (
			direccion_facturacion &&
			!(direccion_facturacion instanceof Direccion)
		) {
			this.direccion_facturacion = new Direccion(direccion_facturacion);
		} else if (direccion_facturacion instanceof Direccion) {
			this.direccion_facturacion = direccion_facturacion;
		} else {
			this.direccion_facturacion = new Direccion();
		}

		this.metodo_pago_utilizado = metodo_pago_utilizado;
		this.id_transaccion_pago = id_transaccion_pago;
		this.notas_cliente = notas_cliente;
		this.fecha_actualizacion_estado = fecha_actualizacion_estado || new Date();
	}
}

module.exports = Pedido;
