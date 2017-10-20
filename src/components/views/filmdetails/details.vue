<template>
    <div id="details">
        <h2>{{movieName}}</h2>
        <div class="top-cont clearfix">
            <div class="fl top-left">
                <p>
                    <star v-if="movieItem.rating" :starval="movieItem.rating"></star>
                    <span v-if="movieItem.rating" class="score">{{movieItem.rating.value}}</span>
                    <span v-if="movieItem.rating" class="person-num">{{movieItem.rating.count}}人评价</span>
                </p>
            </div>
            <div class="fr">
                <img class="movie-img" :src="movieItem.cover.url" alt="">
            </div>
            
        </div>
        <p class="small-title">
            影人
        </p>
        <ul class="focus-box clearfix">
            <li v-for="item,index in creditsPersonArr" key="index" :only-id="item.id">
                <img :src="item.cover_url" alt="">
                <h3>{{item.name}}</h3>
                <p>
                    <!-- <star v-if="item.rating" :starval="item.rating"></star> -->
                    {{item.roles[0]}}
                </p>
            </li> 
        </ul>
        <p class="small-title">{{movieName}}的短评( {{commentTotal}} )</p>
        <ul class="comment">
            <li class="clearfix" v-for="item,index in commentArr">
                <div class="fl">
                    <img :src="item.user.avatar" class="user-pic" />
                </div>
                <div class="fl com-cont">
                    <p class="user-name">
                        <b>{{item.user.name}}</b>
                        <star v-if="item.rating" :starval="item.rating"></star>
                    </p>
                    <p class="user-date">
                        {{item.create_time}}
                    </p>
                    <p class="cont">
                        {{item.comment}}
                    </p>
                    <p class="fork">
                        <span class="fl">👍{{item.vote_count}}</span>
                        <span class="fr">· · ·</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Star from '@/components/common/star'
    import axios from 'axios'
    var jsonp = require('jsonp')

    export default {
        data () {
            return {
                movieItem:{},
                movieName:'',//电影名
                commentTotal:0,//总评论数
                commentArr:[],//评论详情
                creditsPersonArr:[] //导演演员
            }
        },
        components:{
            Star
        },
        mounted(){
            let id = this.$route.params.id
            this.movieItem = this.$route.params.movieitem
            this.movieName = this.movieItem.title
            console.log(this.$route.params)
            axios.get('http://localhost:3200/api/filmsHot',{params:{id}})
            .then((data)=>{
                //console.log(data)
                if(typeof data.data === 'string'){
                    console.log(11)
                    //console.log(data)
                    data = unescape(data.data.replace(/\\u/g, "%u"))
                    //data = data.replace(/\\/g,'')
                    //data = JSON.stringify(data.data)
                    //console.log(data.toString())
                    data = data.toString()
                    console.log(JSON.parse(data))
                }else{
                    console.log(22)
                    this.commentTotal = data.data.total
                    this.commentArr = data.data.interests
                }
            })
            axios.get('http://localhost:3200/api/credits',{params:{id}})
            .then((data)=>{
                //console.log(data)
                let d = data.data.credits
                console.log(d)
                let arr = []
                d.forEach((item,index)=>{
                    arr = arr.concat(item.celebrities)
                })
                this.creditsPersonArr = arr
            })
        }
    }
</script>

<style scoped>
    .score,.person-num {
        font-size:.4rem;
        padding-right:.5rem;
    }
    h2{
        font-size:.67rem;
        height:1.5rem;
        line-height:1.5rem;
    }
    .top-cont{
        padding:0 .54rem 1.63rem 0;
    }
    .top-left{
        width:6rem;
    }
    .movie-img{
        width:3rem;
        -height:3.8rem;
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
    .small-title {
        height:1rem;
        line-height:1rem;
        color:#a8a8a8;
        font-size:.45rem;
    }
    .comment{
        -margin-top:.4rem;
        
    }
    .comment li{
        -background:orange;    
        padding:.4rem 0 .3rem;   
    }
    .comment li .com-cont{
         width:8rem;
    }
    .user-pic{
        width:1.08rem;
        height:1.08rem;
        border-radius:50%;
        margin-right:.25rem;
    }
    .user-name{
        height:.6rem;
        line-height:.6rem;
    }
    .user-date{
        height:.75rem;
        line-height:.75rem;
        color:#a8a8a8;
    }
    .cont{
        line-height:.65rem;
        font-size:.4rem;
        width:100%;

    }
    .fork{
        height:1rem;
        line-height:1rem;
        color:#a8a8a8;
    }
</style>
