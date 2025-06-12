<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="main-bg">
    <header class="header">
      <img src="/logo.png" alt="Indumentarias Online" class="logo" />
      <nav>
        <a href="#" class="nav-link">Inicio</a>
        <a href="#" class="nav-link">Productos</a>
        <a href="#" class="nav-link">Ofertas</a>
        <a href="#" class="nav-link">Contacto</a>
      </nav>
    </header>
    <section class="hero">
      <h1>Bienvenido a Indumentarias Online</h1>
      <p>Descubrí la mejor moda y los mejores precios en un solo lugar.</p>
      <button class="main-btn">Ver catálogo</button>
    </section>
    <section class="destacados">
      <h2>Productos destacados</h2>
      <div class="productos-grid">
        <div class="producto-card">
          <img src="/images/remera.jpg" alt="Remera" />
          <h3>Remera básica</h3>
          <p>$3.500</p>
        </div>
        <div class="producto-card">
          <img src="/images/campera.jpg" alt="Campera" />
          <h3>Campera urbana</h3>
          <p>$12.900</p>
        </div>
        <div class="producto-card">
          <img src="/images/jean.jpg" alt="Jean" />
          <h3>Jean clásico</h3>
          <p>$8.200</p>
        </div>
      </div>
    </section>
    <footer class="footer">
      <p>&copy; 2024 Indumentarias Online. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
.main-bg {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 48px 16px 48px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(44,62,80,0.06);
}
.logo {
  height: 54px;
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
.hero {
  text-align: center;
  padding: 60px 20px 40px 20px;
  background: linear-gradient(90deg, #e0e7ef 60%, #fff 100%);
}
.hero h1 {
  font-size: 2.7rem;
  color: #2a4365;
  margin-bottom: 18px;
}
.hero p {
  color: #4a5568;
  font-size: 1.25rem;
  margin-bottom: 32px;
}
.main-btn {
  background: linear-gradient(90deg, #2b6cb0 0%, #4299e1 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 36px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  transition: background 0.2s, transform 0.1s;
}
.main-btn:hover {
  background: linear-gradient(90deg, #4299e1 0%, #2b6cb0 100%);
  transform: translateY(-2px) scale(1.03);
}
.destacados {
  padding: 48px 0 32px 0;
  background: #fff;
  text-align: center;
}
.destacados h2 {
  color: #2a4365;
  margin-bottom: 32px;
  font-size: 2rem;
}
.productos-grid {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}
.producto-card {
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(44,62,80,0.06);
  padding: 24px 18px 18px 18px;
  width: 200px;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.1s;
}
.producto-card:hover {
  box-shadow: 0 8px 32px rgba(44,62,80,0.13);
  transform: translateY(-4px) scale(1.04);
}
.producto-card img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 14px;
}
.producto-card h3 {
  color: #2a4365;
  font-size: 1.1rem;
  margin-bottom: 8px;
}
.producto-card p {
  color: #4299e1;
  font-size: 1.1rem;
  font-weight: 600;
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
