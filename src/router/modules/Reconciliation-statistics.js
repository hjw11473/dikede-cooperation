import layout from '@/layout'

export default {
    path: '/Reconciliation',
    name: 'Reconciliation',
    component: layout,
    children: [{
        path: '',
        component: () => import('@/views/Reconciliation-statistics'),
        meta: { title:'对账统计',icon:'setting' }
    }]
}

