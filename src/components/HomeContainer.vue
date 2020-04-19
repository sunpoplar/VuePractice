<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipes" :key="item.url">
                <img :src="item.img">
            </mt-swipe-item>
            
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="/src/images/1.png">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="/src/images/2.png">
		                    
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="/src/images/3.png">
		                    
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="/src/images/4.png">
		                    
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="/src/images/5.png">
		                     
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="/src/images/7.png">
		                     
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 

    </div>
</template>
<script>
export default {
    data(){
        return{
            swipes:[]
        }
    },
    created(){
        this.getSwipe();
    },
    methods:{
        getSwipe(){
            this.$http.get("http://www.liulongbin.top:3005/api/getlunbo").then(result=>{
                
                if(result.body.status === 0){
                    this.swipes = result.body.message;
                }else{
                    Toast("加载失败")
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height:200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: rgb(223, 12, 12);
        };
        &:nth-child(2){
            background-color: blue;
        };
        &:nth-child(3){
            background-color: orange;
        };
        img{
            width:100%;
            height:100%;
        }
    }
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:none;
    img{
        width:50%;
        height:50%;
    };
    .mui-media-body{
        font-size: 13px
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0
}
</style>