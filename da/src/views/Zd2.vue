<template>
  <div class="container mx-auto px-4 py-4">
    <div class="flex flex-wrap gap-3 justify-center">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="flex-shrink-0 group relative overflow-hidden rounded-md shadow-sm hover:shadow transition-shadow duration-200 cursor-pointer"
        @click="openModal(image)"
      >
        <img 
          :src="image.url" 
          :alt="'Image ' + (index + 1)"
          class="w-[300px] h-[300px] object-cover group-hover:scale-105 transition-transform duration-200"
        >
        <div v-if="image.title" class="absolute inset-x-0 bottom-0 bg-black/50 p-2">
          <p class="text-white text-sm truncate">{{ image.title }}</p>
        </div>
      </div>
    </div>

    <!-- Модальное окно -->
    <div v-if="selectedImage" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" @click.self="closeModal">
      <div class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div class="relative">
          <button 
            @click="closeModal"
            class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img 
            :src="selectedImage.url" 
            :alt="selectedImage.title"
            class="w-full h-auto max-h-[70vh] object-contain"
          >
        </div>
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-2">{{ selectedImage.title }}</h2>
          <div v-if="selectedImage.description" class="text-gray-700 mb-4">
            {{ selectedImage.description }}
          </div>
          <div class="flex justify-between items-center text-sm text-gray-500">
            <span>Изображение {{ currentIndex + 1 }} из {{ images.length }}</span>
            <div class="flex gap-2">
              <button 
                @click.stop="prevImage"
                :disabled="currentIndex === 0"
                class="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                @click.stop="nextImage"
                :disabled="currentIndex === images.length - 1"
                class="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const images = ref([
  { 
    url: 'https://cs10.pikabu.ru/post_img/2019/12/28/7/1577531889179623112.jpg', 
    title: 'Котик с усами', 
    description: 'Милый котик с забавными усами позирует для фото' 
  },
  { 
    url: 'https://memepedia.ru/wp-content/uploads/2023/01/kot-dingus-mem-360x270.jpg', 
    title: 'Кот Дингус', 
    description: 'Знаменитый интернет-мем с удивлённым котом' 
  },
  { 
    url: 'https://memchik.ru/images/templates/silniy_kot.jpg', 
    title: 'Сильный кот', 
    description: 'Кот демонстрирует свою силу и мощь' 
  },
  { 
    url: 'https://media.2x2tv.ru/content/images/2021/12/bender.jpg', 
    title: 'Бендер', 
    description: 'Легендарный персонаж из Футурамы' 
  },
  { 
    url: 'https://memchik.ru/images/templates/plachuschiy_kot.jpg', 
    title: 'Плачущий кот', 
    description: 'Грустный котик, который растрогал миллионы' 
  },
  { 
    url: 'https://s.ura.news/760/images/news/upload/news/831/917/1052831917/e95ebd2482d0ba5fc53da5233b4066e8_250x0_2386.1356.0.0.jpg', 
    title: 'Удивлённый кот', 
    description: 'Кот в момент крайнего удивления' 
  },
  { 
    url: 'https://i.pinimg.com/564x/c0/f8/2a/c0f82a9aeaf56ddc433b81b09026511f.jpg', 
    title: 'Сердитый кот', 
    description: 'Кот явно не в настроении для фотосессии' 
  },
  { 
    url: 'https://s4-frame.ozstatic.by/1000/97/376/101/101376097_3.jpg', 
    title: 'Кот в шляпе', 
    description: 'Стильный кот в модной шляпе' 
  },
]);
const selectedImage = ref(null);
const currentIndex = ref(0);

const openModal = (image) => {
  currentIndex.value = images.value.findIndex(img => img.url === image.url);
  selectedImage.value = image;
};

const closeModal = () => {
  selectedImage.value = null;
};

const nextImage = () => {
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++;
    selectedImage.value = images.value[currentIndex.value];
  }
};

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    selectedImage.value = images.value[currentIndex.value];
  }
};
</script>