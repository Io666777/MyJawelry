<script setup lang="ts">
import { ref } from 'vue';

// Определяем тип изображения
type Image = {
  id: number;
  url: string;
  title: string;
};

// Исходные данные изображений
const images = ref<Image[]>([
  { id: 1, url: 'https://image.newsru.com/v2/02/2019/05/4/4aca639320ed23ab2f856e4384db6372.jpg', title: 'ого' },
  { id: 2, url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9MysBCEN2LD7eEGfyANPQdXGJbXbONzfww&s', title: 'оно' },
  { id: 3, url: 'https://cdn.fishki.net/upload/post/201601/26/1827133/tn/368ff444f081f80b9c958e4163a18f73.jpg', title: 'работает' },
  { id: 4, url: 'https://cdn.tvc.ru/pictures/o/225/578.jpg', title: '!!!!' }
]);

const currentImageIndex = ref(0);
const showSlider = ref(false);

// Открытие слайдера с выбранным изображением
const openSlider = (index: number) => {
  currentImageIndex.value = index;
  showSlider.value = true;
};

// Перелистывание изображений
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length;
};

const closeSlider = () => {
  showSlider.value = false;
};
</script>

<template>
  <div class="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-4 text-gray-700">Галерея изображений</h2>

    <!-- Галерея -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
      <div v-for="(image, index) in images" :key="image.id"
           @click="openSlider(index)"
           class="cursor-pointer overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-200">
        <img :src="image.url" :alt="image.title"
             class="w-full h-32 object-cover hover:scale-105 transition-transform duration-200">
        <p class="p-2 text-sm text-gray-700 truncate">{{ image.title }}</p>
      </div>
    </div>

    <!-- Слайдер изображений (модальное окно) -->
    <div v-if="showSlider"
         class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
         @click.self="closeSlider">
      <div class="relative max-w-lg w-full">
        <button @click="closeSlider"
                class="absolute -top-10 right-0 text-white text-2xl hover:text-purple-300">
          &times;
        </button>

        <div class="relative">
          <img :src="images[currentImageIndex]?.url" :alt="images[currentImageIndex]?.title"
               class="w-full max-h-[80vh] object-contain rounded-lg">
          
          <button @click.stop="prevImage"
                  class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-80">
            &larr;
          </button>
          
          <button @click.stop="nextImage"
                  class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-80">
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
