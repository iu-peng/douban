<template>
    <div id="hotfilm">
        <h2>
            {{hotFilmTitle}}
            <router-link :to="{name:'hotfilm'}" tag="span">更多</router-link>
        </h2>
        <ul class="focus-box clearfix">
            <li v-for="item,index in playingArr" key="index">
                <img :src="item.cover.url" alt="">
                <h3>{{item.title}}</h3>
                <p>
                    <star v-if="item.rating" :starval="item.rating"></star>
                    {{item.rating?item.rating.value:'暂无评分'}}
                </p>
            </li>
        </ul>
        <h2>
            {{freeFilmTitle}}
            <router-link :to="{name:'freefilm'}" tag="span">更多</router-link>
        </h2>
        <ul class="focus-box clearfix">
            <li v-for="item,index in freeFilmArr" key="index">
                <img :src="item.cover.url" alt="">
                <h3>{{item.title}}</h3>
                <p>
                    <star v-if="item.rating" :starval="item.rating"></star>
                    {{item.rating?item.rating.value:'暂无评分'}}
                </p>
            </li>
        </ul>
        <h2>
            {{newFilmTitle}}
            <router-link :to="{name:'newfilm'}" tag="span">更多</router-link>
        </h2>
        <ul class="focus-box clearfix">
            <li v-for="item,index in newFilmArr" key="index">
                <img :src="item.cover.url" alt="">
                <h3>{{item.title}}</h3>
                <p>
                    <star v-if="item.rating" :starval="item.rating"></star>
                    {{item.rating?item.rating.value:'暂无评分'}}
                </p>
            </li>
        </ul>
        <!-- <h2>
            免费在线观看影片
            <router-link :to="{name:'freefilm'}" tag="span">更多</router-link>
        </h2>
        <ul class="focus-box clearfix">
            <li v-for="item,index in playingArr" key="index">
                <img :src="item.images.medium" alt="">
                <h3>{{item.title}}</h3>
                <p>
                    <star v-if="item.rating.average" :starval="item.rating"></star>
                    {{item.rating.average?item.rating.average:'暂无评分'}}</p>
            </li>
        </ul> -->
    </div>
</template>

<script>
    import Star from '@/components/common/star'
    import axios from 'axios'
    var jsonp = require('jsonp')

    export default {
        data () {
            return {
                hotFilmTitle:'',
                playingArr:[],//正在热映

                freeFilmTitle:'',
                freeFilmArr:[],//免费观看影片

                newFilmTitle:'',
                newFilmArr:[]//新影片
            }
        },
        components:{
            Star
        },
        mounted(){
            jsonp(
                'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=ios&for_mobile=1&start=0&count=10&loc_id=108288&_=1508344422235',
                {param:'callback'},
                (err,data)=>{
                    this.hotFilmTitle = data.subject_collection.name
                    this.playingArr = data.subject_collection_items
                }
            )
            jsonp(
                'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=ios&for_mobile=1&start=0&count=10&loc_id=108288&_=1508412206602',
                {param:'callback'},
                (err,data)=>{
                    this.freeFilmTitle = data.subject_collection.name
                    this.freeFilmArr = data.subject_collection_items
                }
            )
            jsonp(
                'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=ios&start=0&count=10&loc_id=108288&_=1508419435006',
                {param:'callback'},
                (err,data)=>{
                    this.newFilmTitle = data.subject_collection.name
                    this.newFilmArr = data.subject_collection_items
                }
            )
            /*axios.get('http://localhost:3200/api/aaa')
            .then((data)=>{
                this.playingArr = data.data.list.subjects
            })*/
        }
    }
</script>

<style scoped>
    #hotfilm{
        width:100%;
        overflow:hidden;
    }
    h2{
        font-size:.55rem;
        height:1.5rem;
        line-height:1.5rem;
    }
    h2 span{
        float:right;
        color:green;
        font-size:.45rem;
        padding-right:.5rem;
    }
    .focus-box{
        height:5.7rem;
        overflow-x:scroll;
        white-space:nowrap;
    }
    .focus-box li{
        display:inline-block;
        width:2.64rem;
        height:5.7rem;
        margin:0 .2rem;
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
