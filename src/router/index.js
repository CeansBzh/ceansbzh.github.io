import { createRouter, createWebHistory } from 'vue-router';

import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/a-propos',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projets/akipaj',
      name: 'akipaj',
      component: () => import('../views/AkipajView.vue')
    },
    {
      path: '/projets/kairos',
      name: 'kairos',
      component: () => import('../views/KairosView.vue')
    }
  ]
});

export default router;
