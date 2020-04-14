<template>
    <div>
        <button @click="show"></button>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    methods:{
        show(){
            Toast("提示信息")
        }
    }
}
</script>
<style scoped>

</style>