<script>
    export default {
      name: 'AppHeader'
    }
    </script>
<template>
  <header class="flex">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/zd1">Зд2 реактивные поля ввода</router-link> |
      <router-link to="/zd2">зд1 3 Кликер +  watch</router-link>  |
      <router-link to="/zd3">зд3 хуки</router-link>  |
      <router-link to="/zd4">зд4 чек лист</router-link>
    </nav>
  </header>
  <router-view/>
</template>
