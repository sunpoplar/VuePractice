<template>
    <div>
        <button @click="show">show</button>
        <mt-button size="small" type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button  size="large" type="danger" disable>danger</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';

export default {
    data(){
        return {
            instance:null
        };
    },
    created(){
        this.getList();
    },
    methods:{
        getList(){
            this.show();
            setTimeout(() => {
                this.instance.close();//箭头函数里this指外面的this
            },3000);
        },
        show(){
            this.instance = Toast({
                message:"提示信息",
                duration:-1,
                iconClass:"glyphicon glyphicon-ok",
                className:'mytoast'
            });
        }
    }
}
</script>
<style >
i{
    color:red !important
}
</style>