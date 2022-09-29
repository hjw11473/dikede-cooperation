import layout from '@/layout'

export default {
    path: '/Character',
    name: 'Character',
    component: layout,
    meta: { title: '人员管理', icon: 'tree-table' },
    children: [
        {
            path: 'list',
            component: () => import('@/views/Character-management/components/list'),
            meta: { title: '人员列表' }
        },
        {
            path: 'tongji',
            component: () => import('@/views/Character-management/components/tongji'),
            meta: { title: '人效统计' }
        },
        {
            path: 'gongzuoliang',
            component: () => import('@/views/Character-management/components/gongzuoliang'),
            meta: { title: '工作量列表' }
        },
    ]
}

