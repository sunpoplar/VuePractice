<template>
    <div>
        <button @click="show">show</button>
        <mt-button plain size="small" type="default" @click="show">default</mt-button>
        <mt-button type="primary" icon="back">primary</mt-button>
        <mt-button  size="large" type="danger" disabled>danger</mt-button>
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
                duration:10000,
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