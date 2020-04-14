<template>
    <div>
        <h1>app组件</h1>
        <router-link to="/accounter?id=10&name=te">accounter</router-link>
        <router-link to="/goodsList">goodsList</router-link>
        <router-view></router-view>
        <buttun @click="show">show</buttun>
        <mt-buttun type="default">default</mt-buttun>
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