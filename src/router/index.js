import Vue from 'vue'
import Router from 'vue-router'
// 引入多个模块的规则
import Character from './modules/Character-management'
import Commodity from './modules/Commodity-management'
import device from './modules/device-management'
import Order from './modules/Order-management'
import Point from './modules/Point-management'
import Policy from './modules/Policy-management'
import WorkOrder from './modules/WorkOrder-management'
import Reconciliation from './modules/Reconciliation-statistics'
const asyncRoutes = [WorkOrder,Point,device,Character,Commodity,Policy,Order,Reconciliation]



Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '帝可得', icon: 'dashboard' }
    }]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [...constantRoutes,...asyncRoutes]
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
