// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import popout from '@/components/PopoutDialog/Index' //弹框组件
import sysTable from "@/components/Table/Index"; //表格组件
import axios from 'axios'
import echarts from 'echarts'

Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.component('popout', popout);
Vue.component('sysTable', sysTable);
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
