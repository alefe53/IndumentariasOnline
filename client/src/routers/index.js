import { createRouter, createWebHistory } from "vue-router";
import HomepageView from "../views/HomepageView.vue";
import CargarProducto from "../views/CargarProducto.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import VentasMensualesView from "../views/VentasMensualesView.vue";
import EliminarProducto from "../views/EliminarProducto.vue";
import EditarProducto from "../views/EditarProducto.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomepageView,
    },
    {
      path: "/cargar-producto",
      name: "CargarProducto",
      component: CargarProducto,
    },
    { path: "/register", component: RegisterView },
    { path: "/login", component: LoginView },
    {
      path: "/ventas-mensuales",
      name: "VentasMensuales",
      component: VentasMensualesView,
    },
    {
      path: "/eliminar-producto",
      name: "EliminarProducto",
      component: EliminarProducto,
    },
    {
      path: "/editar-producto",
      name: "EditarProducto",
      component: EditarProducto,
    },
  ],
});

export default router;
