import Vue from 'vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

import app from './app.vue'

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router
})