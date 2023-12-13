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
  routes: routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router