<template>
  <FondoDePantallaPrincipal />

  <div class="main-layout">
    <header class="header">
      <nav>
        <router-link to="/" class="nav-link">Inicio</router-link>
        <a href="#" class="nav-link">Productos</a>
        <router-link to="/cargar-producto" class="nav-link">Cargar Producto</router-link>
        <router-link to="/login" class ="nav-link">Loguearse</router-link>
        <router-link to="/register" class="nav-link">Registrarse</router-link>
        <a href="#" class="nav-link">Ofertas</a>
        <a href="#" class="nav-link">Contacto</a>
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
import FondoDePantallaPrincipal from './components/FondoDePantallaPrincipal.vue';
import { ref, onMounted } from 'vue';
import { useAuthUser } from './useAuthUser';
import { auth } from './auth';
const { user } = useAuthUser();

onMounted(() => {
  user.value = auth.getUser();
  console.log('Usuario cargado:', user.value);
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
}

.header {
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px); 
  box-shadow: 0 2px 12px rgba(44,62,80,0.06);
}

nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: #2a4365;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #4299e1;
}

.footer {
  margin-top: auto;
  background: #2a4365;
  color: #fff;
  text-align: center;
  padding: 18px 0 10px 0;
  font-size: 1rem;
  letter-spacing: 1px;
}
</style>