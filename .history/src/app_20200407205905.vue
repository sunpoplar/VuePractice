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
        return {}
    },
    methods:{
        show(){
            Toast({
                message:"提示信息",
                duration:2000,
                iconClass:"glyphicon glyphicon-ok"
            })
        }
    }
}
</script>
<style scoped>

</style>