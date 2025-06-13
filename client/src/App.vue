<template>
  <div class="main-bg">
    <header class="header">
      <nav>
        <router-link to="/" class="nav-link">Inicio</router-link>
        <a href="#" class="nav-link">Productos</a>
        <a href="#" class="nav-link">Ofertas</a>
        <a href="#" class="nav-link">Contacto</a>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer class="footer">
      <p>&copy; 2024 Indumentarias Online. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>

.main-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
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
  padding: 24px 48px 16px 48px;
  background: #fff;
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