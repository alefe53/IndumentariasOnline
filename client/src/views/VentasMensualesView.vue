<template>
  <div v-if="isAdmin">
    <VentasMensuales />
  </div>
  <div v-else class="no-admin">
    Acceso solo para administradores.
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthUser } from "../useAuthUser";
import VentasMensuales from "../components/VentasMensuales.vue";
const { user } = useAuthUser();
const isAdmin = ref(
  user.value && (user.value.rol === "admin" || user.value.rol === "administrador")
);
</script>

<style scoped>
.no-admin {
  color: #e53e3e;
  background: #fff0f0;
  border-radius: 10px;
  padding: 18px;
  margin: 30px auto 0 auto;
  font-size: 1.15rem;
  font-weight: 600;
  max-width: 400px;
  text-align: center;
}
</style>
