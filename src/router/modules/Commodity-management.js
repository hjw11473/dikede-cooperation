import layout from '@/layout'

export default {
    path: '/Commodity',
    name: 'Commodity',
    component: layout,
    meta: { title:'商品管理', icon: 'skill' },
    children: [{
        path: 'leixing',
        component: () => import('@/views/Commodity-management/components/leixing'),
        meta: { title:'商品类型' }
    },
    {
        path: 'guanli',
        component: () => import('@/views/Commodity-management/components/guanli'),
        meta: { title:'商品管理' }
    }
    ]
}

