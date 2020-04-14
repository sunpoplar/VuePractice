import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
import app from './app.vue'
import router from './router.js'


var vm = new Vue({
    el:"#app",
    render:c=>c(app),
    router
})