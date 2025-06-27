<template>
  <div class="informe-admin-container card">
    <h2>Informe administrativo</h2>
    <div v-if="!isAdmin" class="no-admin">
      Acceso solo para administradores.
    </div>
    <div v-else>
      <section style="margin-top: 2.5rem">
        <h3>Productos cargados</h3>
        <div v-if="productos.length === 0">No hay productos cargados.</div>
        <table v-else class="tabla-admin">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in productos" :key="p.id_producto">
              <td>{{ p.id_producto }}</td>
              <td>{{ p.nombre }}</td>
              <td>{{ p.categoria }}</td>
              <td>${{ p.precio }}</td>
              <td>{{ p.stock }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthUser } from "../useAuthUser";
const { user } = useAuthUser();
const usuarios = ref([]);
const productos = ref([]);
const isAdmin = ref(false);

async function fetchUsuarios() {
  try {
    const res = await fetch("http://localhost:3001/usuarios/getAll");
    const data = await res.json();
    usuarios.value = data.payload || [];
  } catch (e) {
    usuarios.value = [];
  }
}
async function fetchProductos() {
  try {
    const res = await fetch("http://localhost:3001/productos/getAll");
    const data = await res.json();
    productos.value = data.payload || [];
  } catch (e) {
    productos.value = [];
  }
}
onMounted(() => {
  isAdmin.value =
    user.value &&
    (user.value.rol === "admin" || user.value.rol === "administrador");
  if (isAdmin.value) {
    fetchUsuarios();
    fetchProductos();
  }
});
</script>

<style scoped>
.informe-admin-container {
  max-width: 1100px;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 40px 32px 32px 32px;
  text-align: center;
}
h2 {
  color: #2a4365;
  margin-bottom: 24px;
  font-size: 2rem;
  font-weight: 700;
}
h3 {
  color: #312e81;
  margin-bottom: 12px;
  font-size: 1.2rem;
  font-weight: 600;
}
.tabla-admin {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto 18px auto;
  background: #f7fafc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px #6366f122;
}
.tabla-admin th,
.tabla-admin td {
  padding: 10px 12px;
  border-bottom: 1px solid #e0e7ff;
  color: #222 !important; /* Color oscuro y legible */
  background: #f7fafc;
  font-size: 1rem;
}
.tabla-admin th {
  background: #e0e7ff;
  color: #1a237e !important; /* Azul oscuro para encabezado */
  font-weight: 700;
}
.tabla-admin tr:last-child td {
  border-bottom: none;
}
.no-admin {
  color: #e53e3e;
  background: #fff0f0;
  border-radius: 10px;
  padding: 18px;
  margin: 30px auto 0 auto;
  font-size: 1.15rem;
  font-weight: 600;
  max-width: 400px;
}
.mensaje-vacio {
  color: #000 !important;
  background: #fff !important;
  font-weight: 600;
  padding: 12px 0;
  border-radius: 8px;
  font-size: 1.1rem;
}
</style>
