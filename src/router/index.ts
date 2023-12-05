import { defineComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import { components } from './components'
interface Route {
  path: string;
  name: string;
  component: ReturnType<typeof defineComponent>;
}

const routes: Array<Route> = components

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router