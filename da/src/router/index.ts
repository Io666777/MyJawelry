import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Zd1 from '../views/Zd1.vue';
import Zd2 from '../views/Zd2.vue';
import Zd3 from '../views/Zd3.vue';
import Zd4 from '../views/Zd4.vue';
import l1 from '../views/l1.vue';
import l2 from '../views/l2.vue';
import l3 from '../views/l3.vue';
import l4 from '../views/l4.vue';
import l5 from '../views/l5.vue';
import l6 from '../views/l6.vue';
import l7 from '../views/l7.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/zd1', component: Zd1 },
  { path: '/zd2', component: Zd2 },
  { path: '/zd3', component: Zd3 },
  { path: '/zd4', component: Zd4 },
  { path: '/l1', component: l1 },
  { path: '/l2', component: l1 },
  { path: '/l1', component: l1 },
  { path: '/l1', component: l1 },
  { path: '/l1', component: l1 },
  { path: '/l1', component: l1 },
  { path: '/l1', component: l1 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;