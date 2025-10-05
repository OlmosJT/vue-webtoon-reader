import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/BrowseView.vue'
import MyListView from '../views/MyListView.vue'
import CategoryView from '../views/CategoryView.vue'
import MangaDetailView from '../views/MangaDetailView.vue'
import ChapterView from '../views/ChapterView.vue'
import ProfileView from '../views/ProfileView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'

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
    },
    {
      path: '/category/:categoryName',
      name: 'category',
      component: CategoryView,
      props: true
    },
    {
      path: '/manga/:id',
      name: 'manga-detail',
      component: MangaDetailView,
      props: true
    },
    {
      path: '/manga/:mangaId/chapter/:chapterId',
      name: 'chapter-view',
      component: ChapterView,
      props: true
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
  ]
})

export default router
