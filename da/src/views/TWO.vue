<template>
  <div class="two-container">
    <nav class="two-nav">
      <router-link to="/TWO/l1">Флексы</router-link> |
      <router-link to="/TWO/l2">Гриды</router-link> |
      <router-link to="/TWO/l3">цвета</router-link> |
      <router-link to="/TWO/l4">текст</router-link> |
      <router-link to="/TWO/l5">бг</router-link> |
      <router-link to="/TWO/l6">линии</router-link> |
      <router-link to="/TWO/l7">отступы</router-link> |
      
      <router-link to="/TWO/figma">Figma</router-link>
    </nav>
    
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>