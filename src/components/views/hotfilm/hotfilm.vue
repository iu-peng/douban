<template>
    <div id="hotfilm">
        <h2>{{hotFilmTitle}}</h2>
        <ul class="focus-box">
            <li v-for="item,index in allData">
                <img :src="item.cover.url" alt="">
                <h3>{{item.title}}</h3>
                <p>💛{{item.rating?item.rating.value:'暂无评分'}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    var jsonp = require('jsonp')

    export default {
        data () {
            return {
                hotFilmTitle:'',
                allData:[]
            }
        },
        mounted(){
            jsonp(
                'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&for_mobile=1&start=0&count=18&loc_id=108288&_=1508344422235',
                {param:'callback'},
                (err,data)=>{
                    console.log(data)
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

    }
    .focus-box li:nth-child(3n+2){
        margin:0 .8rem;
    }
    .focus-box li img{
        width:2.64rem;
        height:3.75rem;
        display:block;
        border:1px solid red;
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
