<template>
  <div class="container">
    <h1>Bienvenido a Indumentarias Online</h1>
    <p>
      ¡Esta es la página de inicio renderizada con <b>Vue</b> y un diseño
      moderno! 
    </p>
  </div>
  <ProductosCatalogoTotal />
  <ProductoABM />
</template>

<script>
import ProductoABM from '../components/ProductoABM.vue'
import ProductosCatalogoTotal from '../components/ProductosCatalogoTotal.vue'

export default {
  components: { ProductoABM, ProductosCatalogoTotal }
}


</script>

<style>
body {
  font-family: "Segoe UI", Arial, sans-serif;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%);
  margin: 0;
  padding: 0;
}
.container {
  max-width: 600px;
  margin: 60px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 40px 32px;
  text-align: center;
}
h1 {
  color: #2a4365;
  margin-bottom: 16px;
  font-size: 2.2rem;
}
p {
  color: #4a5568;
  font-size: 1.1rem;
  margin-bottom: 0;
}
.logo {
  width: 80px;
  margin-bottom: 24px;
}
</style>
