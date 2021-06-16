import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contato from '../views/Contato.vue'
import Palestra from '../views/Palestra.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About        
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  },
  {
    path: '/palestra',
    name: 'Palestra',
    component: Palestra
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
