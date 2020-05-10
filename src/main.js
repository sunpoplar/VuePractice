import Vue from 'vue'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//按需加载
// import {Header,Swipe, SwipeItem,Toast,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Toast.name,Toast)
// Vue.component(Button.name,Button)
// Vue.use(Lazyload);

import MintUi from 'mint-ui'
Vue.use(MintUi);
import 'mint-ui/lib/style.css'

//缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
// Vue.use(VuePreview, {
//     mainClass: 'pswp--minimal--dark',
//     barsSize: {top: 0, bottom: 0},
//     captionEl: false,
//     fullscreenEl: false,
//     shareEl: false,
//     bgOpacity: 0.85,
//     tapToClose: true,
//     tapToToggleControls: false
//   })

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';
Vue.http.options.emulateJSON = true;

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