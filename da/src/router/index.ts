import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Zd1 from '../views/Zd1.vue';
import Zd2 from '../views/Zd2.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/zd1', component: Zd1 },
  { path: '/zd2', component: Zd2 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;