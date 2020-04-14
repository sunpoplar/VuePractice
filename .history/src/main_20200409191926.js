import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import app from './app.vue'
import router from './router.js'

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
import {Button} from 'mint-ui'
Vue.component(button-name,Button)

var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})