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
  <div>/////////////////////</div>
      <nav class="flex gap-10">
      <router-link to="/l1">флексы</router-link> |
      <router-link to="/l2">гриды</router-link>  |
      <router-link to="/l3">цвета</router-link>  |
      <router-link to="/l4">стили текста</router-link> |
      <router-link to="/l5">фон</router-link> |
      <router-link to="/l6">границы</router-link> |
      <router-link to="/l7">отступы</router-link> |

    </nav>
  <router-view/>
</template>
