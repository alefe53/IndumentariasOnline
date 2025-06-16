<template>
  <div class="background-container"></div>
</template>

<script>
export default {
  name: 'FondoDePantallaPrincipal',
};
</script>

<style scoped>
.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  background-image: url('/images/backgrounds/background1.jpg');
  
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  filter: brightness(0.9); 
}
</style>
