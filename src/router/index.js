import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/BrowseView.vue'
import MyListView from '../views/MyListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse',
      name: 'browse',
      component: BrowseView
    },
    {
      path: '/my-list',
      name: 'my-list',
      component: MyListView
    }
  ]
})

export default router
