import layout from '@/layout'

export default {
    path: '/Policy',
    name: 'Policy',
    component: layout,
    children: [{
        path: '',
        component: () => import('@/views/Policy-management'),
        meta: { title:'策略管理',icon:'money' }
    }]
}

