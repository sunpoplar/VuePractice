<template>
<div class="cmt-container">

    <h3>发表评论：</h3>
    <hr>
    <textarea placeholder="请输入要bb的内容（最多100字）" maxlength="100" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="cmt-list">
        <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time">
            <div class="cmt-title">
                第{{i + 1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
            </div>
            <div class="cmt-body">
                {{item.content ? item.content : "这个人很懒！没有留下评论" }}
            </div>
        </div>
        
    </div>
    <mt-button type="danger" size="large"  @click="getComments" plain>加载更多</mt-button>
    <!-- getComments()无参数可简写getComments -->
</div>
    

</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            comments : [],
            pageindex : 1,
            msg:""
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            this.$http.get("api/getcomments/" + this.id + "?pageindex=" + (this.pageindex++)).then(result => {
                if(result.body.status === 0 ){
                    this.comments.push(...result.body.message) ;
                    Toast("获取评论成功哦")
                }else{
                    Toast("获取评论失败哦")
                }
            })
        },
        postComment(){
            if(!this.msg.trim()){
                return Toast("评论不能为空")
            }
            this.$http.post("api/postcomment/" + this.id , {content:this.msg.trim()}).then(
                result => {
                    if(result.body.status === 0){
                        
                        let cmt = {
                            user_name:'匿名用户',
                            add_time: Date.now(),
                            content: this.msg.trim()
                        }
                        this.comments.unshift(cmt)
                        Toast('评论发表成功！')
                        this.msg = ''
                    }else{
                        Toast('评论发表失败！')
                    }
                }
            )
        }
    },
    props:["id"]
}
</script>
<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size:18px
    };
    textarea{
        font-size:14px;
        height:85px;
        margin:0
    };
    .cmt-list{
        margin:5px 0;
        .cmt-item{
            font-size:13px;
            .cmt-title{
                background-color: #ccc;
                line-height:30px;
            };
            .cmt-body{
                line-height:35px;
                text-indent:2em;
            }
        }
    }

}
</style>