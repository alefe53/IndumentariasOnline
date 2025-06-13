import { createRouter, createWebHistory } from 'vue-router';
import HomepageView from '../Views/HomepageView.vue';

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomepageView,
    },
  ],
});

export default router;