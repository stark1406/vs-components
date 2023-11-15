import { defineComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
const index = () => import("@/views/index.vue")
const Button = () => import('@/views/button/default/Button.vue')

interface Route {
  path: string;
  name: string;
  component: ReturnType<typeof defineComponent>;
}

const routes: Array<Route> = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router