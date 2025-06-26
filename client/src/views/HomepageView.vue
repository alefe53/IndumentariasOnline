<template>
  <div class="container card">
    <h1>Bienvenido a Indumentarias Online</h1>
    <p>Conocé más sobre nuestros <b>productos</b></p>
  </div>
  <ProductosCatalogoTotal />
</template>

<script>
import ProductosCatalogoTotal from "../components/ProductosCatalogoTotal.vue";

export default {
  components: { ProductosCatalogoTotal },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 60px auto;
  margin-top: 60px;
  background: rgba(255, 255, 255, 0.19);

  backdrop-filter: blur(5px);

  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 40px 32px;
  text-align: center;
}

h1 {
  color: #2a2a2a;
  font-size: 2.4rem;
  margin-bottom: 1rem;
}

p {
  color: #444;
  font-size: 1.2rem;
  margin-bottom: 0;
}

.logo {
  width: 80px;
  margin-bottom: 24px;
}
</style>
