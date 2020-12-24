import FirstPage from '@/page/mainContent/FirstPage/Index' 
import VirtualManage from '@/page/mainContent/VirtualManage/Index' 
import ContainManage from '@/page/mainContent/ContainManage/Index' 
import System from '@/page/mainContent/System/Index' 
import Analyse from '@/page/mainContent/Analyse/Index'
import ConfigManage from '@/page/mainContent/ConfigManage/Index'
export default [
    {
        path: '/FirstPage',
        name: 'FirstPage',
        meta: {title: '服务器管理'},
        component: FirstPage
    }, {
        path: '/VirtualManage',
        name: 'VirtualManage',
        meta: {title: '虚拟机管理'},
        component: VirtualManage
    }, {
        path: '/ContainManage',
        name: 'ContainManage',
        meta: {title: '容器管理'},
        component: ContainManage
    }, {
        path: '/System',
        name: 'System',
        meta: {title: '系统信息'},
        component: System
    }, {
        path: '/Analyse',
        name: 'Analyse',
        meta: {title: '概览分析'},
        component: Analyse
    }, {
        path: '/ConfigManage',
        name: 'ConfigManage',
        meta: {title: '配置管理'},
        component: ConfigManage
    }
]
