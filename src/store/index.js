import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        leftMenuMin: false, //左侧菜单最小化
    },
    mutations: {
        SET_leftMenuMin(state, val) {
            state.leftMenuMin = val;
        },
    },
    actions: {

    },
    getters: {

    }
})
                                             