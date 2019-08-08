import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import './plugins/element.js'
import store from "@/store";
import DemoPropsFrom from '@/components/demo-props/demo-props-from'
import DemoEmitAndListen from '@/components/demo-emit-and-listen/demo-listener'
import DemoElementList from '@/components/demo-element/demo-element-list'
import DemoElementEdit from '@/components/demo-element/demo-element-edit'
import DemoInterpolationExpression from '@/components/demo-interpolation-expression/demo-interpolation-expression'
import DemoWatchMethodsComputed from '@/components/demo-watch-methods-computed/demo-watch-methods-computed'
import DemoClassAndStyle from '@/components/demo-class-and-style/demo-class-and-style'
import DemoVuex from '@/components/demo-vuex/demo-vue'

Vue.use(VueRouter);
Vue.config.productionTip = false
const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/demo-props',
            name: 'DemoPropsFrom',
            component: DemoPropsFrom
        }, {
            path: '/demo-emit-and-listen',
            name: 'DemoEmitAndListen',
            component: DemoEmitAndListen
        }, {
            path: '/demo-element-list',
            name: "DemoElementList",
            component: DemoElementList,
            meta: {
                keepAlive: true
            }
        }, {
            path: '/demo-element-edit',
            name: "DemoElementEdit",
            component: DemoElementEdit
        }, {
            path: '/demo-interpolation-expression',
            name: "DemoInterpolationExpression",
            component: DemoInterpolationExpression
        }
        , {
            path: '/demo-watch-methods-computed',
            name: "DemoWatchMethodsComputed",
            component: DemoWatchMethodsComputed
        }, {
            path: '/demo-class-and-style',
            name: 'DemoClassAndStyle',
            component: DemoClassAndStyle
        }
        , {
            path: '/demo-vuex',
            name: 'DemoVuex',
            component: DemoVuex
        }
    ]
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
