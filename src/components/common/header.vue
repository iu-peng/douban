<template>
    <div id="header">
        <h2 class="fl logo">豆瓣</h2>
        <nav class="fr">
            <ul class="fl head-bt">
                <router-link :to="{name:'films'}" tag="li">电影</router-link>
                <li>图书</li>
            </ul>
            <span class="fl search"></span>
        </nav>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style scoped>
    #header{
        height:1.38rem;
        border-bottom:1px solid #ccc;
        line-height:1.38rem;
        padding:0 .5rem 0;
    }
    .logo{
        height:1.38rem;
        font-size:.66rem;
        line-height:1.38rem;
        color:#08b404;
        font-weight:bolder;
    }
    .head-bt li{
        float:left;
        font-size:.4rem;
        margin-right:.65rem;

    }
    .head-bt li:nth-child(1){
        color:#178fff;
    }
    .head-bt li:nth-child(2){
        color:#93775f;
    }
    .search{
        width:.75rem;
        height:.55rem;
        background:url(../../assets/img/searchicon.png) no-repeat;
        background-size:100% 100%;
        margin-top:.48rem;
    }
</style>
