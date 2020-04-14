
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import goodsList from './main/goodsList.vue'
import accounter from './main/accounter.vue'
import login from './main/login.vue'
var router = new VueRouter({
    routes:[
        {path:'/accounter',component:accounter,children:[{path:'/accounter/login',component:login}]},
        {path:'/goodsList',component:goodsList},

    ]
})

export default router 