import { RouteRecordRaw } from 'vue-router';

export default {
    path: '/detail',
    component: () => import('@/views/detail/index.vue'),
    meta: { menu: { title: '商品详情', icon: 'fab fa-audible' } },
} as RouteRecordRaw 