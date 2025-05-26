<script>
export default {
  name: 'AppHeader'
};
</script>

<template>
  <div class="flex flex-col gap-5">
  <router-link to="/ONE">1laba</router-link> 
  <router-link to="/TWO">2laba-tyt_stili_perehodov_routera</router-link> 
  <router-link to="/THREE">3laba</router-link> 
  <router-link to="/FOUR">preparation</router-link> 
</div>

<router-view v-slot="{ Component, route }">
  <transition name="fade" mode="out-in">
    <component :is="Component" />
  </transition>
</router-view>


</template>

<style src="@/assets/transitions.css"></style>
