
import VueRouter from 'vue-router'

import HomeContainer from './components/HomeContainer.vue';
import MemberContainer from './components/MemberContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotosList from './components/photos/PhotosList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
       {path:'/home',component:HomeContainer},
       {path:'/member',component:MemberContainer},
       {path:'/shopcar',component:ShopcarContainer},
       {path:'/search',component:SearchContainer},
       {path:'/home/newslist',component:NewsList},
       {path:'/home/newsinfo/:id',component:NewsInfo,name:'aaa'},
       {path:'/home/photoslist',component:PhotosList},
        {path:'/home/photoinfo/:id',component:PhotoInfo},
        {path:'/home/goodslist',component:GoodsList}
    ],
    linkActiveClass:"mui-active"//覆盖默认高亮类
})

export default router 