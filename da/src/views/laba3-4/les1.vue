<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

// npm install chart.js воть ето для работы

 
Chart.register(...registerables);

 
type ChartData = {
  labels: string[];
  values: number[];
};

const chartRef = ref<HTMLCanvasElement | null>(null);
const chartInstance = ref<Chart | null>(null);

 
const data = ref<ChartData>({
  labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'],
  values: [12, 19, 3, 5, 7],
});
 
const updateData = () => {
  data.value.values = data.value.values.map((value) => value + Math.floor(Math.random() * 10) - 5);

  if (chartInstance.value) {
    chartInstance.value.data.datasets[0].data = data.value.values;
    chartInstance.value.update();
  }
};
 
onMounted(() => {
  if (chartRef.value) {
    chartInstance.value = new Chart(chartRef.value, {
      type: 'line',
      data: {
        labels: data.value.labels,
        datasets: [
          {
            label: 'Статистика продаж',
            data: data.value.values,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
        },
      },
    });
  }
});
</script>

<template>
  <div class="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4 text-gray-700">График статистики</h2>
    
    <canvas ref="chartRef" class="w-full max-w-lg"></canvas>
    
    <button @click="updateData" 
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition-all duration-200">
      Обновить данные
    </button>
  </div>
</template>