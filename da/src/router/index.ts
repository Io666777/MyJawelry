import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ONE from '@/views/ONE.vue';
import TWO from '@/views/TWO.vue';

const routes = [
  {
    path: '/',
    component: Home,
    meta: { transition: 'fade' }
  },
  {
    path: '/ONE',
    component: ONE,
    children: [
      { path: 'zd1', component: () => import('@/views/Zd1.vue') },
      { path: 'zd2', component: () => import('@/views/Zd2.vue') },
      { path: 'zd3', component: () => import('@/views/Zd3.vue') },
      { path: 'zd4', component: () => import('@/views/Zd4.vue') }
    ]
  },
  {
    path: '/TWO',
    component: TWO,
    children: [
      { path: 'l1', component: () => import('@/views/l1.vue') },
      { path: 'l2', component: () => import('@/views/l2.vue') },
      { path: 'l3', component: () => import('@/views/l3.vue') },
      { path: 'l4', component: () => import('@/views/l4.vue') },
      { path: 'l5', component: () => import('@/views/l5.vue') },
      { path: 'l6', component: () => import('@/views/l6.vue') },
      { path: 'l7', component: () => import('@/views/l7.vue') },
      { path: 'figma', component: () => import('@/views/figma.vue') }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;