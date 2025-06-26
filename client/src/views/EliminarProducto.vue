<template>
  <div class="container-abm">
    <h1>Eliminar Productos</h1>
    <div v-if="mensaje" class="mensaje mensaje-abajo">{{ mensaje }}</div>
    <hr />
    <h2>Listado de productos</h2>
    <ul class="lista-productos">
      <li v-for="prod in productos" :key="prod.id || prod.id_producto">
        <strong>{{ prod.nombre }}</strong> - ${{ prod.precio }} - Stock:
        {{ prod.stock || prod.stock_total }} - {{ prod.categoria }}
        <button @click="eliminarProducto(prod.id || prod.id_producto)">
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EliminarProducto",
  data() {
    return {
      productos: [],
      mensaje: "",
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
    async eliminarProducto(id) {
      const idFinal = id || null;
      if (!idFinal) {
        this.mensaje = "ID de producto no válido";
        return;
      }
      this.mensaje = "Eliminando producto...";
      try {
        const res = await fetch(`http://localhost:3001/productos/${idFinal}`, {
          method: "DELETE",
        });
        if (!res.ok) {
          let errorText = "";
          try {
            errorText = await res.text();
          } catch (err) {
            errorText = res.statusText || "Error desconocido";
          }
          this.mensaje = `Error al eliminar producto: ${errorText}`;
          return;
        }
        this.productos = this.productos.filter(
          (prod) => (prod.id || prod.id_producto) !== idFinal
        );
        this.mensaje = "Producto eliminado con éxito";
      } catch (e) {
        this.mensaje = `Error al eliminar producto: ${e.message}`;
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
.lista-productos strong {
  color: #312e81;
  font-size: 1.15rem;
  font-weight: 700;
  margin-right: 12px;
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
