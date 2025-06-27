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
        <router-link
          v-if="user && (user.rol === 'admin' || user.rol === 'administrador')"
          to="/informe-admin"
          class="nav-link"
          >Informe Admin</router-link
        >
        <router-link to="/login" class="nav-link">Loguearse</router-link>
        <router-link to="/register" class="nav-link">Registrarse</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="footer">
      <div class="footer-content">
        <span class="footer-text"
          >&copy; 2024 Indumentarias Online. Todos los derechos
          reservados.</span
        >
        <span v-if="user && user.email" class="footer-status"
          >Sesión iniciada como: {{ user.email }}</span
        >
        <span v-else class="footer-status no-session"
          >No has iniciado sesión</span
        >
      </div>
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
  background: linear-gradient(90deg, #6366f1 0%, #4a90e2 100%);
  color: #fff;
  text-align: center;
  padding: 1.1rem 0 1rem 0;
  font-size: 1.08rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  box-shadow: 0 -2px 12px #6366f122;
  z-index: 10;
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-text {
  margin-right: 10px;
  font-size: 1.05rem;
  color: #e0e7ff;
  letter-spacing: 0.2px;
}

.footer-status {
  background: rgba(255, 255, 255, 0.13);
  color: #fff;
  border-radius: 8px;
  padding: 3px 12px;
  margin-left: 8px;
  font-size: 0.98rem;
  font-weight: 500;
  box-shadow: 0 1px 4px #6366f122;
}

.footer-status.no-session {
  color: #ffe4e6;
  background: rgba(255, 71, 87, 0.18);
}

@media (max-width: 700px) {
  .footer {
    font-size: 0.98rem;
    padding: 12px 0 10px 0;
  }
}
</style>
