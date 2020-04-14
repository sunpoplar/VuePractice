import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import app from './app.vue'
import router from './router.js'


Vue.use(MintUI)


var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})