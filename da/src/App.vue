<template>
  <header class="flex">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/zd1">Зд1</router-link> |
      <router-link to="/zd2">Зд2</router-link>
    </nav>
  </header>
  <router-view/>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>