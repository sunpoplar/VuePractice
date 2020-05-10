<template>
    <div class="photoinfo-container">
        <h3>{{photoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
            <span>点击{{photoinfo.click}}次</span>
        </p>
        <hr>
        <!-- 缩略图 -->
          <vue-preview :slides="slide" @close="handleClose"></vue-preview>

        <div class="content" v-html="photoinfo.content">
        </div>
        <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>
import comment from "../subcomponents/comment.vue"

export default {
    data(){
        return {
            photoinfo:{},
            id:this.$route.params.id,
            slide: []
        }
    },
    created(){
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods:{
        getPhotoInfo(){
            this.$http.get('api/getimageInfo/' + this.id).then(result => {
                if(result.body.status === 0){
                    this.photoinfo = result.body.message[0];
                }else{}
            })
        },
        getThumbs(){
            this.$http.get('api/getthumimages/' + this.id).then(result => {
                if(result.body.status === 0){
                    for(let item of result.body.message){
                        item.msrc = item.src;
                        item.w = 600;
                        item.h = 400;

                    }
                    this.slide = result.body.message;
                }
            })
        },
        handleClose () {
            console.log('close event')
      }
    },
    components:{
        'cmt-box':comment
    }
}
</script>
<style lang="scss" scoped>
.photoinfo-container{
    padding:3px;
    h3{
        font-size:15px;
        color:#26a2ff;
        text-align:center;
        margin:15px 0

    };
    .subtitle{
        font-size:13px;
        display:flex;
        justify-content:space-between
    };
    .content{
        font-size:13px;
        line-height:30px
    }
    //父类有deep后子类自动也会深度选择 
    /deep/ .my-gallery{   //vue组件中，在style设置为scoped的时候，里面在写样式对子组件是不生效的，如果想让某些样式对所以子组件都生效，可以使用 /deep/ 深度选择器。
              display: flex;
              flex-wrap:wrap;//默认换行
              figure{
                  width: 30%;  
                  margin: 5px; 
                  img{
                      width: 100%;
                      box-shadow: 0 0 8px #999;  
                      border-radius: 5px;
                  }
              }
          }
};

</style>