<template>
  <div class="main-layout">
    <header class="header">
      <nav>
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/cargar-producto" class="nav-link"
          >Cargar Producto</router-link
        >
        <router-link to="/eliminar-producto" class="nav-link"
          >Eliminar Producto</router-link
        >
        <router-link to="/editar-producto" class="nav-link"
          >Editar Producto</router-link
        >
        <router-link to="/ventas-mensuales" class="nav-link"
          >Ventas mensuales</router-link
        >
        <router-link to="/login" class="nav-link">Loguearse</router-link>
        <router-link to="/register" class="nav-link">Registrarse</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="footer">
      <p>&copy; 2024 Indumentarias Online. Todos los derechos reservados.</p>
      <p v-if="user && user.email">Sesión iniciada como: {{ user.email }}</p>
      <p v-else>No has iniciado sesión</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthUser } from "./useAuthUser";
import { auth } from "./auth";
const { user } = useAuthUser();

onMounted(() => {
  user.value = auth.getUser();
  console.log("Usuario cargado:", user.value);
});
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 2rem;
}

.header {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  background-color: transparent;
}

nav {
  display: flex;
  gap: 1.5rem;
  background-color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: #2a4365;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  transition: background-color 0.2s, color 0.2s;
}

.nav-link:hover {
  color: #0077ff;
  background-color: e6f0ff;
}

.footer {
  margin-top: auto;
  background: #f1f5f9;
  color: #2d3748;
  text-align: center;
  padding: 1rem;
  font-size: 1rem;
}
</style>
