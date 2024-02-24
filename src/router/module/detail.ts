import { RouteRecordRaw } from 'vue-router';

export default {
    name: 'detail',
    path: '/detail',
    component: () => import('@/layouts/home/home.vue'),
    meta: { menu: { title: '主页', icon: 'fab fa-audible' } },
    children: [
        {
            name: 'gooddetail',
            path: '',
            component: () => import('@/views/detail/index.vue'),
        }
    ]
} as RouteRecordRaw 