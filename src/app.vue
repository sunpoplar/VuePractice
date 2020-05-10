<template>
    <div class="app-container">
        <!-- header -->
        <mt-header fixed title="固定在顶部"></mt-header>
        <!-- view -->
		<transition>
			<router-view></router-view>
		</transition>
        <!-- tabber -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-zhy" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-zhy" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-zhy" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-zhy" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
        
    </div>
</template>
<script>
// for(let {item,index} of document.getElementsByClassName("mui-tab-item")){
// 	// item.style = document.getElementsByClassName("mui-tab-item")[index].style;
// 	document.getElementsByClassName("mui-tab-item-zhy")[index].style = item.style;
// 	item.classList.remove("mui-tab-item");
// }
</script>
<style lang="scss" scoped>
.app-container{
    padding-top: 40px;
	padding-bottom: 50px;
	overflow: hidden;
}
.v-enter{
	transform: translateX(100%);
	opacity: 0;
}
.v-leave-to{
	transform: translateX(-100%);
	opacity: 0;
	position:absolute

}
.v-enter-to{
// padding-top: 100px;
// position:absolute
}
.v-enter-active,
.v-leave-active{
	transition: all 1s ease
}
// 这样任何触摸事件都不会产生默认行为，但是 touch 事件照样触发
* {touch-action:none;}

//解决tabbar点击无法切换问题
.mui-bar-tab .mui-tab-item-zhy.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-zhy {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-zhy .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-zhy .mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-zhy .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mint-header{
	z-index: 99;
}
</style>