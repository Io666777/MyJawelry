<template>
  <div class="container mx-auto px-4 py-4">
    <div class="flex flex-wrap gap-3 justify-center">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="flex-shrink-0 group relative overflow-hidden rounded-md shadow-sm hover:shadow transition-shadow duration-200"
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
  </div>
</template>

<script setup>
const images = [
  { url: 'https://cs10.pikabu.ru/post_img/2019/12/28/7/1577531889179623112.jpg', title: 'Изображение 1' },
  { url: 'https://memepedia.ru/wp-content/uploads/2023/01/kot-dingus-mem-360x270.jpg', title: 'Изображение 2' },
  { url: 'https://memchik.ru/images/templates/silniy_kot.jpg', title: 'Изображение 3' },
  { url: 'https://media.2x2tv.ru/content/images/2021/12/bender.jpg', title: 'Изображение 4' },
  { url: 'https://memchik.ru/images/templates/plachuschiy_kot.jpg', title: 'Изображение 5' },
  { url: 'https://s.ura.news/760/images/news/upload/news/831/917/1052831917/e95ebd2482d0ba5fc53da5233b4066e8_250x0_2386.1356.0.0.jpg', title: 'Изображение 6' },
  { url: 'https://i.pinimg.com/564x/c0/f8/2a/c0f82a9aeaf56ddc433b81b09026511f.jpg', title: 'Изображение 7' },
  { url: 'https://s4-frame.ozstatic.by/1000/97/376/101/101376097_3.jpg', title: 'Изображение 8' },
]
</script>