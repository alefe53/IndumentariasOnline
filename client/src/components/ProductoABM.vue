<template>
  <div class="container-abm">
    <h1>Gestión de Productos</h1>
    <p>Aquí puedes agregar, editar o eliminar productos del catálogo.</p>
  </div>
</template>

<script>
export default {
  name: "ProductoABM",
};
</script>

<style scoped>
.container-abm {
  max-width: 600px;
  margin: 60px auto;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

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
