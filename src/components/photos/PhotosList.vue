<template>
    <div>
        <h3>图片列表</h3>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class='["mui-control-item",item.id === 0 ? "mui-active" : ""]' v-for="item in categories" :key="item.id" @click="getPhotoListByCateId(item.id)">
							{{item.title}}
						</a>
						
					</div>
				</div>

			</div>
        <ul class="photo-list">
            <router-link :to="'/home/photoinfo/' + item.id" v-for="item in list" :key="item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title}}</h1>
                    <div class="info-body">
                        {{item.zhaiyao}}
                    </div>

                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js'


export default {
    data(){
        return {
            categories : [],
            list: []
        }
    },
    created(){
        this.getAllCategory(),
        this.getPhotoListByCateId(0)

    },
    mounted(){//dom异步更新

        //this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
        //它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。

        //页面刚挂载，还未完成渲染，获取不到dom节点可以使用this.$nextTick(function(){})在保证页面完成渲染之后进行操作

        //初始化滑动控件
        this.$nextTick(()=>{
            mui('.mui-scroll-wrapper').scroll({
	             deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        })
    },
    methods:{
        getAllCategory(){
            this.$http.get("api/getimgcategory").then(result => {
                if(result.body.status === 0){
                    result.body.message.unshift({
                        title:"全部",
                        id:0
                    })
                    this.categories = result.body.message;
                }else{
                    Toast("图片种类获取失败")
                }
            })
        },
        getPhotoListByCateId(cateId){
            this.$http.get('api/getimages/' + cateId).then(result => {
                if(result.body.status === 0){
                    this.list = result.body.message;
                }else{
                    Toast("图片获取失败")
                }
            })
        }
    },
    
}
</script>
<style lang="scss" scoped>
.photo-list{
    list-style: none;
    margin:0;
    padding:10px;
    padding-bottom: 0;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow:0 0 10px #999;
        position: relative;
        img{
            width:100%;
            vertical-align: middle
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info{
            color:white;
            text-align:left;
            background-color: rgba($color: #000000, $alpha: 0.4);
            position: absolute;
            bottom: 0;
            max-height: 84px;
            .info-title{
                font-size:14px;
        
            }
            .info-body{
                font-size:13px;
            }
        }
    }
}

</style>