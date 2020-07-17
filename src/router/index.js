import VueRouter from 'vue-router'
import Vue from 'vue'


//导入组件
import Car from '../views/car/car.vue'
import Cate from '../views/cate/cate.vue'
import Index from '../views/index/indes.vue'
import Mine from '../views/mine/mine.vue'
import Search from '../views/search/search.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/index',
    name: 'index',
    component: Index
}, {
    path: '/cate',
    name: 'cate',
    component: Cate
}, {
    path: '/search',
    name: 'search',
    component: Search
}, {
    path: '/mine',
    name: 'mine',
    component: Mine
}, {
    path: '/car',
    name: 'car',
    component: Car
}, {
    path: '/',
    redirect: '/index'
}]

const router = new VueRouter({
    routes,
    linkActiveClass: 'router-isActive'
})

export default router