<template>
  <div class="catalogo-container container-abm">
    <h2>Nuestro Catálogo de Productos</h2>
    <div v-if="isLoading" class="estado-feedback">
      <p>Cargando productos...</p>
    </div>
    <div v-else-if="error" class="estado-feedback error">
      <p>Lo sentimos, ocurrió un error al cargar los productos.</p>
      <p class="error-detalle">{{ error }}</p>
    </div>
    <div v-else-if="productos.length === 0" class="estado-feedback">
      <p>No hay productos disponibles en este momento.</p>
    </div>
    <div v-else class="product-grid">
      <div v-for="producto in productos" :key="producto.id_producto" class="product-card">
        <strong>{{ producto.nombre }}</strong>
        <span class="descripcion">{{ producto.descripcion }}</span>
        <span class="categoria">Categoría: {{ producto.categoria }}</span>
        <div class="precio-stock">
          <span class="precio">${{ producto.precio }}</span>
          <span class="stock">Stock: {{ producto.stock }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductosCatalogoTotal",
  data() {
    return {
      productos: [],
      isLoading: true,
      error: null,
    };
  },
  async created() {
    await this.fetchProductos();
  },
  methods: {
    async fetchProductos() {
      try {
        const response = await fetch("http://localhost:3001/productos/getAll");
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        const jsonResponse = await response.json();
        this.productos = jsonResponse.payload;
      } catch (err) {
        console.error("Error al obtener productos:", err);
        this.error = err.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.catalogo-container.container-abm {
  max-width: 1200px;
  margin: 60px auto;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 40px 32px;
  text-align: center;
}

h2 {
  color: #2a4365;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.9);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 28px;
  margin-top: 24px;
}

.product-card {
  background: linear-gradient(90deg, #e0e7ff 0%, #f0f4ff 100%);
  border-radius: 14px;
  box-shadow: 0 4px 16px #6366f122;
  border: 1.5px solid #a5b4fc;
  padding: 24px 20px 18px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.2s, transform 0.2s;
  min-height: 180px;
}

.product-card:hover {
  box-shadow: 0 8px 32px #6366f144;
  transform: translateY(-2px) scale(1.01);
}

.product-card strong {
  color: #312e81;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.descripcion {
  color: #4b5563;
  font-size: 0.98rem;
  margin-bottom: 2px;
}

.categoria {
  color: #6366f1;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.precio-stock {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
}

.precio {
  color: #2a4365;
  font-size: 1.1rem;
  font-weight: bold;
}

.stock {
  color: #357dc0;
  font-size: 0.98rem;
}

.estado-feedback {
  margin: 20px 0;
  color: #3182ce;
  font-weight: 600;
}

.estado-feedback.error {
  color: #e53e3e;
}

.error-detalle {
  font-size: 0.95rem;
  color: #b91c1c;
}
</style>
