import router from '@/router'
import store from '@/store'
const whiteList = ['/login', '/404']
// 校验路由
router.beforeEach((to, from, next) => {
    console.log(to.path)
    if (store.getters.token) {
        console.log(store.getters.token)
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        whiteList.includes(to.path)
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    }
})
