import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: 'layout',
        path: '/',
        meta: {
            title: '首页'
        },
        redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        meta: {
            title: '首页'
        },
        component: () => import('../views/home/index.vue'),
    },
    {
        name: 'ai',
        path: '/ai',
        meta: {
            title: 'AI创作'
        },
        component: () => import('../views/ai/index.vue'),
    },
    {
        name: 'integral',
        path: '/integral',
        meta: {
            title: '我的积分'
        },
        component: () => import('../views/integral/index.vue'),
    },
    {
        name: 'user',
        path: '/user',
        meta: {
            title: '个人主页'
        },
        component: () => import('../views/user/index.vue'),
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    // 网页标题
    document.title = to.meta.title + ' | 无界AI'
    next();
})

export {router, routes}
