<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

// Типы для задач
type Task = {
  id: number;
  text: string;
  completed: boolean;
};

// Типы для изображений
type Image = {
  id: number;
  url: string;
  title: string;
};

// Данные задач
const tasks = ref<Task[]>([]);
const newTask = ref('');
const searchQuery = ref('');
const filter = ref<'all' | 'active' | 'completed'>('all');

// Данные изображений
const images = ref<Image[]>([]);
const currentImageIndex = ref(0);
const showSlider = ref(false);

// Загрузка данных из JSON
const loadData = async () => {
  try {
    // Загрузка задач
    const tasksResponse = await fetch('/tasks.json');
    tasks.value = await tasksResponse.json();
    
    // Загрузка изображений
    const imagesResponse = await fetch('/images.json');
    images.value = await imagesResponse.json();
  } catch (error) {
    console.error('Ошибка загрузки данных:', error);
  }
};

// Фильтрация и поиск задач
const filteredTasks = computed(() => {
  let result = tasks.value;
  
  // Применяем фильтр
  if (filter.value === 'active') {
    result = result.filter(task => !task.completed);
  } else if (filter.value === 'completed') {
    result = result.filter(task => task.completed);
  }
  
  // Применяем поиск
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(task => 
      task.text.toLowerCase().includes(query)
    );
  }
  
  return result;
});

// Добавление задачи
const addTask = () => {
  if (newTask.value.trim() === '') {
    alert('Введите задачу!');
    return;
  }
  
  tasks.value.push({
    id: Date.now(),
    text: newTask.value.trim(),
    completed: false
  });
  
  newTask.value = '';
};

// Удаление задачи
const removeTask = (id: number) => {
  tasks.value = tasks.value.filter(task => task.id !== id);
};

// Работа с изображениями
const openSlider = (index: number) => {
  currentImageIndex.value = index;
  showSlider.value = true;
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length;
};

const closeSlider = () => {
  showSlider.value = false;
};

// Загружаем данные при монтировании компонента
onMounted(() => {
  loadData();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-purple-500 p-6">
    <!-- Компонент задач -->
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mb-8">
      <div class="text-2xl font-bold mb-4 text-center text-gray-700">Мои задачи</div>

      <!-- Поиск и фильтрация -->
      <div class="flex flex-col sm:flex-row gap-4 mb-4">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Поиск задач..."
          class="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
        >
        
        <select 
          v-model="filter" 
          class="px-4 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
        >
          <option value="all">Все</option>
          <option value="active">Активные</option>
          <option value="completed">Завершенные</option>
        </select>
      </div>

      <!-- Добавление задачи -->
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

      <!-- Список задач -->
      <ul v-if="filteredTasks.length > 0" class="space-y-2 mb-4">
        <li 
          v-for="task in filteredTasks" 
          :key="task.id" 
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
            @click="removeTask(task.id)" 
            class="ml-auto text-red-500 hover:text-red-700 transition-colors"
          >
            x
          </button>
        </li>
      </ul>
      <p v-else class="text-gray-500 text-center">Задачи не найдены</p>
    </div>

    <!-- Галерея изображений -->
    <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
      <h2 class="text-2xl font-bold mb-4 text-center text-gray-700">Галерея изображений</h2>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div 
          v-for="(image, index) in images" 
          :key="image.id"
          @click="openSlider(index)"
          class="cursor-pointer overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <img 
            :src="image.url" 
            :alt="image.title"
            class="w-full h-32 object-cover hover:scale-105 transition-transform duration-200"
          >
          <p class="p-2 text-sm text-gray-700 truncate">{{ image.title }}</p>
        </div>
      </div>
    </div>

    <!-- Слайдер изображений (модальное окно) -->
    <div 
      v-if="showSlider" 
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      @click.self="closeSlider"
    >
      <div class="relative max-w-4xl w-full">
        <button 
          @click="closeSlider"
          class="absolute -top-10 right-0 text-white text-2xl hover:text-purple-300"
        >
          &times;
        </button>
        
        <div class="relative">
          <img 
            :src="images[currentImageIndex]?.url" 
            :alt="images[currentImageIndex]?.title"
            class="w-full max-h-[80vh] object-contain rounded-lg"
          >
          
          <button 
            @click.stop="prevImage"
            class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
          >
            &larr;
          </button>
          
          <button 
            @click.stop="nextImage"
            class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-80"
          >
            &rarr;
          </button>
        </div>
        
        <p class="mt-2 text-center text-white text-lg">
          {{ images[currentImageIndex]?.title }} ({{ currentImageIndex + 1 }}/{{ images.length }})
        </p>
      </div>
    </div>
  </div>
</template>