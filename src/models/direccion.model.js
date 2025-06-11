//src/models/direccion.model.js

class Direccion {
	/**
	 * @param {object} data - Datos iniciales para la dirección.
	 * @param {string} [data.pais='']
	 * @param {string} [data.provincia='']
	 * @param {string} [data.ciudad='']
	 * @param {string} [data.calle='']
	 * @param {string} [data.numero_calle=''] // Puede ser número, o "S/N", etc.
	 * @param {string} [data.codigo_postal='']
	 * @param {string} [data.departamento=''] 
	 * @param {string} [data.referencia=''] // Campo adicional para referencias
	 */
	constructor({
		pais = "",
		provincia = "",
		ciudad = "",
		calle = "",
		numero_calle = "",
		codigo_postal = "",
		departamento = "",
		referencia = "",
	} = {}) {
		this.pais = pais;
		this.provincia = provincia;
		this.ciudad = ciudad;
		this.calle = calle;
		this.numero_calle = numero_calle;
		this.codigo_postal = codigo_postal;
		this.departamento = departamento;
		this.referencia = referencia;
	}

	toString() {
		let direccionCompleta = `${this.calle} ${this.numero_calle}`;
		if (this.departamento) {
			direccionCompleta += `, ${this.departamento}`;
		}
		direccionCompleta += `, ${this.ciudad}, ${this.provincia}, ${this.codigo_postal}, ${this.pais}`;
		return direccionCompleta.replace(/,\s*,/g, ",").replace(/^,\s*|,$/g, "");
	}
}

export default Direccion;
