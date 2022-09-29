import layout from '@/layout'

export default {
    path: '/device',
    name: 'device',
    component: layout,
    meta: { title:'设备管理',icon:'tree' },
    children: [{
        path: 'guanli',
        component: () => import('@/views/device-management/components/guanli'),
        meta: { title:'设备管理' }
    },
    {
        path: 'zhuangtai',
        component: () => import('@/views/device-management/components/zhuangtai'),
        meta: { title:'设备状态' }
    },{
        path: 'leixing',
        component: () => import('@/views/device-management/components/leixing'),
        meta: { title:'设备类型管理' }
    }]
}

