import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import StationSetupView from '../views/StationSetupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'admin-login',
      component: HomeView,
    },
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: DashboardView,
      meta: { requiresAuth: true },
    },
    {
      path: '/admin/station-setup',
      name: 'station-setup',
      component: StationSetupView,
      meta: { requiresAuth: true },
    },
    {
      path: '/',
      redirect: '/admin',
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

router.beforeEach((to) => {
  const isAuthenticated = Boolean(localStorage.getItem('auth_token'))

  if (to.meta.requiresAuth && !isAuthenticated) {
    // return { name: 'admin-login' }
    router.push({ name: 'not-found' })
  }

  if (to.name === 'admin-login' && isAuthenticated) {
    router.push({ name: 'not-found' })
  }
})

export default router
