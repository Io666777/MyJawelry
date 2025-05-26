<script setup>
import { ref } from 'vue'
const message = ref('Привет, мир!')
</script>

<template>
  <div class="p-4">
    <input v-model="message" class="border p-2 rounded w-full" />
    <p class="mt-2 text-lg">Вы ввели: {{ message }}</p>
  </div>
</template>