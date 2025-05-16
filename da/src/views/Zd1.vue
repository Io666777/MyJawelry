<script setup>
import { reactive, computed } from 'vue';

const user = reactive({
  firstName: '',
  lastName: '',
});

const fullName = computed(() => `${user.firstName} ${user.lastName}`.trim());
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-md text-center w-80">
      <h1 class="text-2xl font-bold mb-4">Введите имя и фамилию</h1>
      
      <input 
        v-model="user.firstName"
        type="text"
        placeholder="Имя"
        class="w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      
      <input 
        v-model="user.lastName"
        type="text"
        placeholder="Фамилия"
        class="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
      
      <p class="text-lg font-medium text-gray-700">Полное имя: <span class="text-blue-500">{{ fullName }}</span></p>
    </div>
  </div>
</template>

