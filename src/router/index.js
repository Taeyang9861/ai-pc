import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        name: 'layout',
        path: '/',
        meta: {
            title: '首页'
        },
        component: () => import('../views/home/index.vue'),
        children: [
            // {
            //     name: 'goods',
            //     path: '/goods/index/list',
            //     meta: {
            //         title: '商品管理',
            //     },
            //     component: () => import('@/pages/goods/index/lists.vue')
            // },
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export {router, routes}
