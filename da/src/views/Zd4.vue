<script setup>
import { ref } from 'vue';

const tasks = ref([]);
const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim() === '') {
    alert('Введите задачу!');
    return;
  }
  tasks.value.push({
    text: newTask.value.trim(),
    completed: false
  });
  newTask.value = '';
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-purple-500 p-6">
    <div class="bg-white p-6 rounded-lg shadow-lg w-80">
      <div class="text-2xl font-bold mb-4 text-center text-gray-700">Мои задачи</div>

      <div class="flex gap-2 mb-4">
        <input 
          v-model="newTask" 
          type="text" 
          placeholder="Новая задача"
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
          @keyup.enter="addTask"
        >
        <button 
          @click="addTask" 
          class="px-4 py-2 bg-purple-500 text-white rounded-md shadow-sm hover:bg-purple-600 transition-all duration-200"
        >
          +
        </button>
      </div>

      <ul v-if="tasks.length > 0" class="space-y-2">
        <li 
          v-for="(task, index) in tasks" 
          :key="index" 
          class="flex items-center gap-3 p-2 bg-gray-100 rounded-md transition-transform transform hover:scale-105 shadow-sm"
        >
          <input 
            type="checkbox" 
            v-model="task.completed" 
            class="form-checkbox h-5 w-5 text-purple-500 rounded focus:ring-purple-500"
          >
          <span :class="{ 'line-through text-gray-500': task.completed }" class="text-gray-700">
            {{ task.text }}
          </span>
          <button 
            @click="removeTask(index)" 
            class="ml-auto text-red-500 hover:text-red-700 transition-colors"
          >
            x
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

