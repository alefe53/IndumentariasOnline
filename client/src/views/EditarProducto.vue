<template>
  <div class="container-abm">
    <h1>Editar Productos</h1>
    <hr />
    <h2>Listado de productos</h2>
    <ul class="lista-productos">
      <li v-for="prod in productos" :key="prod.id || prod.id_producto">
        <template v-if="editandoId === (prod.id || prod.id_producto)">
          <input v-model="editProducto.nombre" placeholder="Nombre" />
          <input
            v-model.number="editProducto.precio"
            type="number"
            placeholder="Precio"
            min="0"
          />
          <input
            v-model.number="editProducto.stock_total"
            type="number"
            placeholder="Stock"
            min="0"
          />
          <input v-model="editProducto.categoria" placeholder="Categoría" />
          <button @click="guardarEdicion(prod.id || prod.id_producto)">
            Guardar
          </button>
          <button @click="cancelarEdicion">Cancelar</button>
        </template>
        <template v-else>
          <strong>{{ prod.nombre }}</strong> - ${{ prod.precio }} - Stock:
          {{ prod.stock || prod.stock_total }} - {{ prod.categoria }}
          <button @click="empezarEdicion(prod)">Editar</button>
        </template>
      </li>
    </ul>
    <div v-if="mensaje" class="mensaje mensaje-abajo">{{ mensaje }}</div>
  </div>
</template>

<script>
export default {
  name: "EditarProducto",
  data() {
    return {
      productos: [],
      mensaje: "",
      editandoId: null,
      editProducto: {
        nombre: "",
        precio: 0,
        stock_total: 0,
        categoria: "",
      },
    };
  },
  mounted() {
    this.cargarProductos();
  },
  methods: {
    async cargarProductos() {
      try {
        const res = await fetch("http://localhost:3001/productos/getAll");
        const data = await res.json();
        this.productos = data.payload || [];
      } catch (e) {
        this.mensaje = "Error al cargar productos";
      }
    },
    empezarEdicion(prod) {
      this.editandoId = prod.id || prod.id_producto;
      this.editProducto = {
        nombre: prod.nombre,
        precio: prod.precio,
        stock_total: prod.stock_total ?? prod.stock ?? 0,
        categoria: prod.categoria,
      };
    },
    cancelarEdicion() {
      this.editandoId = null;
      this.editProducto = {
        nombre: "",
        precio: 0,
        stock_total: 0,
        categoria: "",
      };
    },
    async guardarEdicion(id) {
      const idFinal = id || null;
      if (!idFinal) {
        this.mensaje = "ID de producto no válido";
        return;
      }
      // No enviar el id ni el campo stock en el body
      const { nombre, precio, stock_total, categoria } = this.editProducto;
      const body = { nombre, precio, stock_total, categoria };
      try {
        const res = await fetch(`http://localhost:3001/productos/${idFinal}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        if (!res.ok) {
          let errorText = "";
          try {
            errorText = await res.text();
          } catch (err) {
            errorText = res.statusText || "Error desconocido";
          }
          this.mensaje = `Error al editar producto: ${errorText}`;
          return;
        }
        // Actualizar el producto en el array localmente
        this.productos = this.productos.map((prod) => {
          if ((prod.id || prod.id_producto) === idFinal) {
            return {
              ...prod,
              nombre,
              precio,
              stock_total,
              categoria,
            };
          }
          return prod;
        });
        this.mensaje = "Producto editado con éxito";
        await this.cargarProductos();
        this.cancelarEdicion();
      } catch (e) {
        this.mensaje = `Error al editar producto: ${e.message}`;
        console.error(e);
      }
    },
  },
};
</script>

<style scoped>
.container-abm {
  max-width: 900px;
  margin: 60px auto;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 40px 32px;
  text-align: center;
}
h1 {
  color: #2a4365;
  margin-bottom: 16px;
  font-size: 2.2rem;
}
h2 {
  color: #2a4365;
  margin-bottom: 18px;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.5);
}
.lista-productos {
  list-style: none;
  padding: 0;
  margin: 0;
}
.lista-productos li {
  background: linear-gradient(90deg, #e0e7ff 0%, #f0f4ff 100%);
  margin-bottom: 16px;
  padding: 18px 24px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 16px #6366f122;
  transition: box-shadow 0.2s, transform 0.2s;
  border: 1.5px solid #a5b4fc;
  color: #312e81;
}
.lista-productos li:hover {
  box-shadow: 0 8px 32px #6366f144;
  transform: translateY(-2px) scale(1.01);
}
.lista-productos strong,
.lista-productos span,
.lista-productos .info-producto {
  color: #312e81;
  font-size: 1.15rem;
  font-weight: 700;
  margin-right: 12px;
}
.lista-productos input {
  margin: 0 6px;
  padding: 8px 10px;
  border-radius: 6px;
  border: 1.5px solid #6366f1;
  width: 110px;
  font-size: 1rem;
  background: #f7fafc;
  color: #2a4365;
  transition: border 0.2s;
}
.lista-productos input:focus {
  border: 1.5px solid #312e81;
  outline: none;
}
.lista-productos button {
  background: linear-gradient(90deg, #6366f1 0%, #4a90e2 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  margin-left: 10px;
  box-shadow: 0 2px 8px #6366f122;
}
.lista-productos button:hover {
  background: linear-gradient(90deg, #312e81 0%, #357dc0 100%);
  transform: scale(1.05);
}
.mensaje {
  margin: 10px 0;
  color: #3182ce;
  font-weight: 600;
}
.mensaje-abajo {
  margin-top: 24px;
}
</style>
