<template>
<div class="goods-list">
    <div class="goods-item">
        <img src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/c9d245cb48ccbebe38d7f93802316cc0_259_194.jpg" alt="">
        <h1 class="title">【魅族官网】魅族 17  系列 5G 梦想旗舰</h1>
        <div class="info">
            <p class="price">
                <span class="new">￥3299</span>
                <span class="old">￥3499</span>

            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩10件</span>
            </p>
        </div>
    </div>
    <div class="goods-item">
        <img src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/c9d245cb48ccbebe38d7f93802316cc0_259_194.jpg" alt="">
        <h1 class="title">【魅族官网】魅族 17  系列 5G 梦想旗舰【魅族官网】魅族 17  系列 5G 梦想旗舰【魅族官网】魅族 17  系列 5G 梦想旗舰</h1>
        <div class="info">
            <p class="price">
                <span class="new">￥3299</span>
                <span class="old">￥3499</span>

            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩10件</span>
            </p>
        </div>
    </div>
    <div class="goods-item">
        <img src="https://dss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/c9d245cb48ccbebe38d7f93802316cc0_259_194.jpg" alt="">
        <h1 class="title">【魅族官网】魅族 17  系列 5G 梦想旗舰</h1>
        <div class="info">
            <p class="price">
                <span class="new">￥3299</span>
                <span class="old">￥3499</span>

            </p>
            <p class="sell">
                <span>热卖中</span>
                <span>剩10件</span>
            </p>
        </div>
    </div>
</div>
</template>
<script>
</script>
<style lang="scss" scoped>
.goods-list{
    display:flex;
    flex-wrap:wrap;
    padding:7px;
    justify-content: space-between;
    .goods-item{
        width:49%;
        border:1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin:3.5px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 290px;
        img{
            width:100%
        }
        .title{
            font-size:14px;
        }
        .info{
            background-color: #ddd;
            .price{
                .new{
                    color:red;
                    font-weight:bold;
                    font-size: 16px
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left:10px
                }
            }
            .sell{
                margin-bottom:0;
                display: flex;
                justify-content: space-between;
                font-size: 13px
            }
        }
    }
}
</style>