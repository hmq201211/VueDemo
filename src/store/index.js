import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        add: function (state, payload) {
            state.count += payload
        },
        reduce: function (state, payload) {
            state.count -= payload
        }
    }
});
export default store;
