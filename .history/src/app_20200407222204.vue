<template>
    <div>
        <button @click="show">show</button>
        <mt-button type="default">default</mt-button>
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
            var that=this;
            setTimeout(() => {
                that.instance.close();

                console.log(this);
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