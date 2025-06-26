<template>
  <div class="ventas-mensuales-container card">
    <h2>Ventas mensuales</h2>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const chartCanvas = ref(null);
let chartInstance = null;

async function fetchVentasPorMes() {
  try {
    const res = await fetch(
      "http://localhost:3001/estadisticas/ventas-por-mes"
    );
    const data = await res.json();
    if (data.ok && Array.isArray(data.payload)) {
      return data.payload;
    }
    return [];
  } catch (e) {
    return [];
  }
}

onMounted(async () => {
  const ventas = await fetchVentasPorMes();
  const labels = ventas.map((v) => v.mes);
  const values = ventas.map((v) => v.total_ventas);
  if (chartInstance) chartInstance.destroy();
  chartInstance = new Chart(chartCanvas.value, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Total ventas",
          data: values,
          backgroundColor: "#4a90e2",
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: { display: false },
      },
    },
  });
});
</script>

<style scoped>
.ventas-mensuales-container {
  max-width: 800px;
  margin: 40px auto;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
}
canvas {
  margin-top: 20px;
  max-width: 100%;
}

h2 {
  font-size: 1.8rem;
  color: #2a2a2a;
  margin-bottom: 1.5rem;
}

</style>
