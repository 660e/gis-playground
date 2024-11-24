import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/home.vue'),
    },
    {
      path: '/l7',
      component: () => import('@/views/l7/index.vue'),
    },
    {
      path: '/leaflet',
      component: () => import('@/views/leaflet/index.vue'),
    },
    {
      path: '/mapbox',
      component: () => import('@/views/mapbox/index.vue'),
    },
  ],
});

export default router;
