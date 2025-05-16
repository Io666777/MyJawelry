<template>
  <header class="flex">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/zd1">Зд1 сетка изобр с адаптив располож с эффектами наведения с разным кол-вом колононок на разных устройствах</router-link> |
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