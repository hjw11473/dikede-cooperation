import layout from '@/layout'

export default {
    path: '/Point',
    name: 'Point',
    component: layout,
    meta: { title: '点位管理', icon: 'lock' },
    children: [{
        path: 'quyu',
        component: () => import('@/views/Point-management/components/quyu'),
        meta: { title: '区域管理' }
    },
    {
        path: 'dianwei',
        component: () => import('@/views/Point-management/components/dianwei'),
        meta: { title: '点位管理'}
    },
    {
        path: 'hezuo',
        component: () => import('@/views/Point-management/components/hezuo'),
        meta: { title: '合作商管理' }
    }
    ]
}
