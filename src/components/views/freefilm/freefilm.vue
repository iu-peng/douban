<template>
    <div id="hotfilm">
        <h2>{{hotFilmTitle}}</h2>
        <ul class="focus-box">
            <li v-for="item,index in allData">
                <img :src="item.cover.url" alt="">
                <h3>{{item.title}}</h3>
                <p>
                    <star v-if="item.rating" :starval="item.rating"></star>
                    {{item.rating?item.rating.value:'暂无评分'}}
                </p>
                <span class="or-play">{{item.actions[0]}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import Star from '@/components/common/star'
    var jsonp = require('jsonp')

    export default {
        data () {
            return {
                hotFilmTitle:'',
                allData:[]
            }
        },
        components:{
            Star
        },
        mounted(){
            jsonp(
                'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&for_mobile=1&start=0&count=50&loc_id=108288&_=1508412206602',
                {param:'callback'},
                (err,data)=>{
                    this.hotFilmTitle = data.subject_collection.name
                    this.allData = data.subject_collection_items
                }
            )
        }
    }
</script>

<style scoped>
    h2{
        font-size:.55rem;
        height:1.5rem;
        line-height:1.5rem;
    }
    .focus-box li{
        float:left;
        height:5.7rem;
        width:2.64rem;
        position:relative;
    }
    .focus-box li:nth-child(3n+2){
        margin:0 .8rem;
    }
    .focus-box li img{
        width:2.64rem;
        height:3.75rem;
        display:block;
        -border:1px solid red;
    }
    .focus-box li h3 {
        text-align:center;
        height:.74rem;
        line-height:.74rem;
        color:#414141;
        font-size:.35rem;
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .focus-box li p{
        text-align:center;
        height:.5rem;
        line-height:.4rem;
        color:#414141;
        font-size:.33rem;
    }
    .or-play{
        position:absolute;
        bottom:2.1rem;
        right:.2rem;
        width:1.05rem;
        height:.5rem;
        color:#fff;
        text-align:center;
        line-height:.6rem;
        border-radius:.08rem;
        background:orange;
        border:.04rem solid #fff;
    }
</style>
