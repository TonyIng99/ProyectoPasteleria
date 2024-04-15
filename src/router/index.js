import { createRouter, createWebHistory } from 'vue-router'
import NanBakeryView from '../views/NanBakeryView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: NanBakeryView
    },
    {
      path: '/sesion',
      name: 'sesion',
      component: () => import ('../views/Sesion/InicioSesionView.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import ('../views/Sesion/RegistrarseView.vue')
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: () => import ('../views/Navegacion/CatalogoView.vue')
    },
    {
      path: '/sucursales',
      name: 'sucursales',
      component: () => import ('../views/Navegacion/SucursalesView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import ('../views/Navegacion/BlogView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import ('../views/Navegacion/ContactoView.vue')
    }
  ]
})

export default router
