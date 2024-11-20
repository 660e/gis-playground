import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/leaflet',
      name: 'leaflet',
      component: () => import('@/views/leaflet/index.vue'),
    },
    {
      path: '/mapbox',
      name: 'mapbox',
      component: () => import('@/views/mapbox/index.vue'),
    },
  ],
});

export default router;
