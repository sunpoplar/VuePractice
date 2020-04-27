import Vue from 'vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import {Header,Swipe, SwipeItem,Toast,Button} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Toast.name,Toast)
Vue.component(Button.name,Button)

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'


//全局时间过滤器
import moment from 'moment'
Vue.filter("dateFormat",function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(pattern)
})


import app from './app.vue'

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router
})