import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import RouterLayout from './layout/router-layout.vue'

const pages = import.meta.glob('./pages/**/*.{vue,tsx,jsx}')
const routes: RouteRecordRaw[] = Object.entries(pages).map(
  ([filename, component]) => {
    const componentName = filename
      .split('/')
      .pop()
      ?.replace(/\.(vue|tsx|jsx)$/, '')
    return {
      path: `/${componentName}`,
      name: componentName,
      component,
      meta: { page: true },
    }
  },
)

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes,
    },
  ],
})
