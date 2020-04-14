import Vue from 'vue'
import 'mint-ui/lib/style.css'

import app from './app.vue'
import router from './router.js'

import MintUI from '../node_modules/mint-ui'

Vue.use(MintUI)


var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})