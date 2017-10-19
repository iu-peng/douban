<template>
    <div id="hotfilm">
        <h2>{{filmTitle}}</h2>
        <ul class="focus-box">
            <li v-for="item,index in allData">
                <img :src="item.cover.url" alt="">
                <h3>{{item.title}}</h3>
                <p>
                    <star v-if="item.rating" :starval="item.rating"></star>
                    {{item.rating?item.rating.value:'暂无评分'}}</p>
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
                filmTitle:'',
                allData:[]
            }
        },
        components:{
            Star
        },
        mounted(){
            jsonp('https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=ios&start=0&count=50&loc_id=108288&_=1508419435006',
                {param:'callback'},
                (err,data)=>{
                    this.filmTitle = data.subject_collection.name
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
</style>
