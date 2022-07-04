import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  //   {
  //     path: '/blank',
  //     name: 'Blank',
  //     component: BlankView
  //   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => window.scrollTo(0, 0),
})

export default router
