
import VueRouter from 'vue-router'

import HomeContainer from './components/HomeContainer.vue';
import MemberContainer from './components/MemberContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'
import SearchContainer from './components/SearchContainer.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
       {path:'/home',component:HomeContainer},
       {path:'/member',component:MemberContainer},
       {path:'/shopcar',component:ShopcarContainer},
       {path:'/search',component:SearchContainer},

    ],
    linkActiveClass:"mui-active"//覆盖默认高亮类
})

export default router 