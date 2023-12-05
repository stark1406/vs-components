const index = () => import("@/views/index.vue")
const Button = () => import('@/views/button/default/Button.vue')
const Input = () => import('@/views/input/default/Input.vue')
const Datepicker = () => import('@/views/datepicker/default/Datepicker.vue')
const Card = () => import('@/views/card/default/Card.vue')
const Icon = () => import('@/views/icon/default/Icon.vue')

export const components = [
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