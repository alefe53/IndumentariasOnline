<template>
  <div class="catalogo-container">
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
        <h3>{{ producto.nombre }}</h3>
        <p class="descripcion">{{ producto.descripcion }}</p>
        <p class="categoria">Categoría: {{ producto.categoria }}</p>
        <div class="precio-stock">
          <span class="precio">${{ producto.precio }}</span>
          <span class="stock">Stock: {{ producto.stock_total }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductosCatalogoTotal',
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
        const response = await fetch('http://localhost:3001/productos/getAll');
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
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
.catalogo-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
}

h2 {
  color: #2a4365;
  margin-bottom: 30px;
  text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.9);
}

.estado-feedback {
  padding: 40px;
  font-size: 1.2rem;
  color: #4a5568;
  background: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(5px);
  border-radius: 12px;
}

.estado-feedback.error {
  color: #c53030;
  background-color: #fed7d7;
  border-radius: 8px;
}
.error-detalle {
    font-size: 0.9rem;
    font-style: italic;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  text-align: left;
}

.product-card {
  background: rgba(255, 255, 255, 0.35); 
  backdrop-filter: blur(8px); 
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.product-card h3 {
  margin-top: 0;
  color: #2d3748;
}

.product-card .descripcion {
  color: #718096;
  flex-grow: 1; 
  margin-bottom: 15px;
}

.product-card .categoria {
    font-size: 0.85rem;
    background-color: rgba(237, 242, 247, 0.3); 
    color: #4a5568;
    padding: 3px 8px;
    border-radius: 99px;
    align-self: flex-start;
    margin-bottom: 15px;
}

.precio-stock {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(226, 232, 240, 0.3);
    padding-top: 15px;
    margin-top: auto;
}

.precio {
  font-size: 1.4rem;
  font-weight: bold;
  color: #2a4365;
}

.stock {
    font-size: 0.9rem;
    color: #a0aec0;
}
</style>
