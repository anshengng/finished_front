import { RouteRecordRaw } from 'vue-router';

export default {
    name: 'home_dashboard',
    path: '/home/dashboard',
    component: () => import('@/views/error/404.vue'),
    meta: { menu: { title: '404页面', icon: 'fab fa-audible' } },
} as RouteRecordRaw 