import { createRouter, createWebHistory } from 'vue-router';
import ONE from '@/views/ONE.vue';
import TWO from '@/views/TWO.vue';
import THREE from '@/views/THREE.vue';
import FOUR from '@/views/FOUR.vue';

const routes = [

  {
  path: '/ONE',
  component: ONE,
  children: [
    { path: 'zd1', component: () => import('@/views/laba1/Zd1.vue') },
    { path: 'zd2', component: () => import('@/views/laba1/Zd2.vue') },
    { path: 'zd3', component: () => import('@/views/laba1/Zd3.vue') },
    { path: 'zd4', component: () => import('@/views/laba1/Zd4.vue') }
  ]
},
  {
    path: '/TWO',
    component: TWO,
    children: [
      { path: 'l1', component: () => import('@/views/laba2/l1.vue') },
      { path: 'l2', component: () => import('@/views/laba2/l2.vue') },
      { path: 'l3', component: () => import('@/views/laba2/l3.vue') },
      { path: 'l4', component: () => import('@/views/laba2/l4.vue') },
      { path: 'l5', component: () => import('@/views/laba2/l5.vue') },
      { path: 'l6', component: () => import('@/views/laba2/l6.vue') },
      { path: 'l7', component: () => import('@/views/laba2/l7.vue') },
      { path: 'figma', component: () => import('@/views/laba2/figma.vue') }
    ]
},
  {
    path: '/THREE',
    component: THREE,
    children: [
      { path: 'les1', component: () => import('@/views/laba3-4/les1.vue') },
      { path: 'les2', component: () => import('@/views/laba3-4/les2.vue') },
    ]
  },
    {
    path: '/FOUR',
    component: FOUR,
    children: [
      { path: 'dada1', component: () => import('@/views/dada/dada1.vue') },
      { path: 'dada2', component: () => import('@/views/dada/dada2.vue') },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;