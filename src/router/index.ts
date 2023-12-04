import { defineComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
const index = () => import("@/views/index.vue")
const Button = () => import('@/views/button/default/Button.vue')
const Input = () => import('@/views/input/default/Input.vue')
const Datepicker = () => import('@/views/datepicker/default/Datepicker.vue')
const Card = () => import('@/views/card/default/Card.vue')
const Icon = () => import('@/views/icon/default/Icon.vue')

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
  },
  {
    path: '/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/datepicker',
    name: 'Datepicker',
    component: Datepicker
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/icon',
    name: 'Icon',
    component: Icon
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router