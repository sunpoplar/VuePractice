import Vue from 'vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import {Header,Swipe, SwipeItem,Toast} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Toast.name,Toast)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import app from './app.vue'

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router
})