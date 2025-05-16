<script setup>
import { ref, watch } from 'vue';

const count = ref(0);
const limitReached = ref(false);

const increaseCount = () => {
  count.value += 1;
};

// Отслеживание изменений счетчика
watch(count, (newValue) => {
  limitReached.value = newValue >= 10;
});

// Функция сброса
const resetCount = () => {
  count.value = 0;
  limitReached.value = false;
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md text-center">
      <div class="text-2xl font-bold mb-4">Счетчик</div>
      <p class="text-lg font-semibold mb-4"><span class="text-blue-500">{{ count }}</span></p>

      <!-- Кнопка увеличения -->
      <button 
        @click="increaseCount"
        class="px-6 py-3 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 transition-all duration-200 mb-4"
      >
        Кликкликлик
      </button>

      <!-- Уведомление о достижении лимита -->
      <p v-if="limitReached" class="text-red-500 font-medium mb-4">Лимит достигнут!</p>

      <!-- Кнопка сброса -->
      <button 
        @click="resetCount"
        class="px-6 py-3 bg-gray-500 text-white rounded-md shadow-sm hover:bg-gray-600 transition-all duration-200"
      >
        Сбросить
      </button>
    </div>
  </div>
</template>
