import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import page from './page' 
import LeftMenuData from '@/components/LeftMenu/LeftMenuData' //左侧菜单数据
import ConfigManage from '@/page/mainContent/ConfigManage/Index'

export let getRoutePages = () => {//根据左侧菜单数据和登录状态 获取路由
    let childrenRoute = [];//登陆后能访问的子路由
        childrenRoute = getRouteData(LeftMenuData);//获取菜单的路由信息
    return {
        path: '/',
        name: 'MainPage',
        redirect: '/Login',
        component: () => import("@/page/MainPage"),
        children: childrenRoute
    }
}

//实例化路由
export default new Router({
    routes: [
        getRoutePages(), 
        {
            path: '/Login',
            name: 'Login',
            component: () => import("@/page/Login")
        },  {
            path: '/ConfigManage',
            name: 'ConfigManage',
            meta: {title: '配置管理'},
            component: ConfigManage
        }
    ]
})
function getRouteData(menuData, routeData) {//获取菜单 的路由信息
    routeData = routeData ? routeData : [];
    for (let i = 0; i < menuData.length; i++) {
        if (menuData[i].children) {//如果存在子
            getRouteData(menuData[i].children, routeData);
        } else {
            if (menuData[i].name) {//存在路由名称
                for (let j = 0; j < page.length; j++) {
                    if (page[j].name == menuData[i].name) {//找到路由添加进去
                        routeData.push(page[j]);
                        break;
                    }
                }
            }
        }
    }
    return routeData;
}