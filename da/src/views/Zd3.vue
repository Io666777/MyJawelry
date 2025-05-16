<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const message = ref('');

onMounted(() => {
  message.value = 'Всего хорошего';
});

</script>

<template>
  <div class="flex justify-center p-6">
    <p v-if="message" class="text-xl text-green-500 fade-in">{{ message }}</p>
  </div>
</template>


<style>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}
</style>
