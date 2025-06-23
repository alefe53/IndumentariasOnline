import { createRouter, createWebHistory } from 'vue-router';
import HomepageView from '../Views/HomepageView.vue';
import CargarProducto from '../views/CargarProducto.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';

const router = createRouter({
  history: createWebHistory(), 
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomepageView,
    },
    {
      path: '/cargar-producto', 
      name: 'CargarProducto',
      component: CargarProducto,
    },
    { path: '/register', component: RegisterView },
    { path: '/login', component: LoginView },
  ],
});

export default router;