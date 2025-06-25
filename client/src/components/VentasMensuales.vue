<template>
  <div class="ventas-mensuales-container">
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
          backgroundColor: "#3182ce",
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
  max-width: 700px;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  text-align: center;
}
canvas {
  margin-top: 24px;
  max-width: 100%;
}
</style>
