import layout from '@/layout'

export default {
    path: '/WorkOrder',
    name: 'WorkOrder',
    component: layout,
    meta: { title: '工单管理', icon: 'table' },
    children: [{
        path: 'yunying',
        component: () => import('@/views/WorkOrder-management/components/yunying'),
        meta: { title: '运营工单' }
    },
    {
        path: 'yunwei',
        component: () => import('@/views/WorkOrder-management/components/yunwei'),
        meta: { title: '运维工单' }
    },
    ]
}

