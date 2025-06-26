<template>
  <div class="form-container">
    <h2>Cargar Nuevo Producto</h2>
    <p class="subtitle">Completa los datos para añadir un artículo al catálogo.</p>

    <div v-if="successMessage" class="feedback-message success">
      {{ successMessage }}
    </div>
    <div v-if="errorMessage" class="feedback-message error">
      <p><strong>Error al cargar el producto:</strong></p>
      {{ errorMessage }}
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="form-grid">
        
        <div class="form-group span-2">
          <label for="nombre">Nombre del Producto</label>
          <input type="text" id="nombre" v-model="producto.nombre" required />
        </div>

        <div class="form-group span-2">
          <label for="descripcion">Descripción</label>
          <textarea id="descripcion" v-model="producto.descripcion" rows="4" required></textarea>
        </div>

        <div class="form-group">
          <label for="precio">Precio</label>
          <input type="number" id="precio" v-model.number="producto.precio" step="0.01" min="0" required />
        </div>

        <div class="form-group">
          <label for="stock_total">Stock Total</label>
          <input type="number" id="stock_total" v-model.number="producto.stock_total" min="0" required />
        </div>
        
        <div class="form-group">
          <label for="categoria">Categoría</label>
          <input type="text" id="categoria" v-model="producto.categoria" required placeholder="Ej: Remeras, Buzos" />
        </div>

        <div class="form-group">
          <label for="subcategoria">Subcategoría (Opcional)</label>
          <input type="text" id="subcategoria" v-model="producto.subcategoria" placeholder="Ej: Manga Corta" />
        </div>
        
        <div class="form-group">
          <label for="material">Material</label>
          <input type="text" id="material" v-model="producto.material" required placeholder="Ej: Algodón, Poliéster" />
        </div>

        <div class="form-group">
          <label for="marca">Marca (Opcional)</label>
          <input type="text" id="marca" v-model="producto.marca" />
        </div>
        
        <div class="form-group">
          <label for="color">Color</label>
          <input type="text" id="color" v-model="producto.color" required placeholder="Ej: Negro, Azul Marino" />
        </div>

        <div class="form-group">
          <label for="genero">Género</label>
          <select id="genero" v-model="producto.genero" required>
            <option value="Unisex">Unisex</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
          </select>
        </div>

        <div class="form-group-checkbox span-2">
          <input type="checkbox" id="publicado" v-model="producto.publicado" />
          <label for="publicado">Publicar producto al crearlo</label>
        </div>

      </div>

      <button type="submit" class="submit-button" :disabled="isLoading">
        {{ isLoading ? 'Cargando...' : 'Cargar Producto' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const API_URL = 'http://localhost:3001/productos/createOne';

const producto = ref({
  nombre: '',
  descripcion: '',
  material: '',
  precio: null,
  stock_total: null,
  categoria: '',
  subcategoria: '',
  marca: '',
  color: '',
  genero: 'Unisex', 
  publicado: true,
});

const isLoading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');

const resetForm = () => {
  producto.value = {
    nombre: '',
    descripcion: '',
    material: '',
    precio: null,
    stock_total: null,
    categoria: '',
    subcategoria: '',
    marca: '',
    color: '',
    genero: 'Unisex',
    publicado: true,
  };
};

const handleSubmit = async () => {
  isLoading.value = true;
  successMessage.value = '';
  errorMessage.value = '';

  const payload = {
    ...producto.value,
    talles_disponibles: [],
    imagenes: [],
  };
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Error del servidor');
    }

    successMessage.value = `¡Producto "${result.producto.data[0].nombre}" creado exitosamente!`;
    resetForm();

  } catch (error) {
    console.error('Error en handleSubmit:', error);
    errorMessage.value = error.message || 'No se pudo conectar con el servidor. Revisa la consola para más detalles.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.form-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 30px 40px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: left;
}

h2 {
  color: #2a4365;
  text-align: center;
  margin-bottom: 8px;
}

.subtitle {
  text-align: center;
  color: #4a5568;
  margin-top: 0;
  margin-bottom: 30px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group.span-2 {
  grid-column: span 2;
}

label {
  margin-bottom: 8px;
  font-weight: 500;
  color: #2d3748;
}

input[type="text"],
input[type="number"],
textarea,
select {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e0;
  background-color: #fff;
  font-size: 1rem;
  color: #2d3748;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

textarea {
  resize: vertical;
}

.form-group small {
  margin-top: 6px;
  font-size: 0.85rem;
  color: #718096;
}

.form-group-checkbox {
  grid-column: span 2;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(237, 242, 247, 0.5);
  padding: 12px;
  border-radius: 8px;
}

.form-group-checkbox label {
  margin-bottom: 0;
  font-weight: normal;
}

.submit-button {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background-color: #4a90e2;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  margin-top: 30px;
}

.submit-button:hover {
  background-color: #357dc0;
}

.submit-button:disabled {
  background-color: #a0aec0;
  cursor: not-allowed;
}

.feedback-message {
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
}
.feedback-message.success {
  background-color: #38a169;
}
.feedback-message.error {
  background-color: #c53030;
  text-align: left;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .form-group.span-2 {
    grid-column: span 1;
  }
}
</style>