<template>
    <div id="focus">
        <ul class="focus-box">
            <router-link :to="'/hotfilm'" tag="li">影院热映</router-link>
            <li>最受关注图书</li>
            <li>豆瓣时间</li>
            <li>使用豆瓣APP</li>
        </ul>
        <div class="cont">
            <ul class="article">
                <li class="clearfix" 
                    v-for="item,index in allData"
                    key="index"
                >
                    <div class="clearfix art-t">
                        <div class="fl art-lelt">
                            <h3>{{item.title}}</h3>
                            <p>{{item.target.desc}}</p>
                        </div>
                        <div class="fr art-right">
                            <img :src="item.target.cover_url" alt="">
                        </div>
                    </div>
                    <div class="clearfix art-b">
                        <span class="fl">by {{item.target.author.name}}</span>
                        <span class="fr">{{item.source_cn}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data () {
            return {
                allData:[]
            }
        },
        mounted(){
            axios.get('http://localhost:3200/api/home')
            .then((data)=>{
                //console.log( data.data )
                if(data.data.date){
                    console.log(1)
                    this.allData = data.data.recommend_feeds
                }else{
                    console.log(2)
                    let d = data.data.replace(/\\u/g, "%u")
                    d = unescape(d.replace(/\\/g, ""))
                    //d = JSON.stringify(d)
                    d = JSON.parse(d)

                    //d = JSON.parse(data.data)
                    this.allData = d.recommend_feeds
                }
                /*let d = data.data.replace(/\\u/g, "%u")
                let d2 = unescape(d.replace(/\\/g, ""))
                let d3 = JSON.parse(d2)
                this.allData = d3.recommend_feeds*/
                //this.allData = data.data.recommend_feeds
            })
        }
        //https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1
    }
</script>

<style scoped>
    #focus{
        
    }
    .focus-box{
        height:3rem;
        padding:.9rem 0 0;
    }
    .focus-box li{
        width:4.67rem;
        height:1.32rem;
        line-height:1.32rem;
        text-align:center;
        background:#f7f7f7;   
        float:left;
        margin:0 .1rem .1rem; 
        font-size:.4rem;
        color:#353535;  
        border-radius:.06rem;  
    }
    .article li {
        padding:.7rem .5rem .53rem 0;
        border-bottom:1px solid #ccc;
    }
    .art-t{
        -height:3.24rem;
    }
    .art-lelt{
        width:6.5rem;
    }
    .art-lelt h3{
        font-size:.5rem;
        color:#303030;
        line-height:.7rem;
        margin-bottom:.2rem;
    }
    .art-lelt p{
        font-size:.36rem;
        line-height:.55rem;
        color:#a2a2a2;
        width:6.5rem;
        height:1.65rem;
        overflow:hidden;
        white-space: wrap;
        text-overflow: ellipsis;
    }
    .art-right,.art-right img{
        width:2.5rem;
        height:2.5rem;
    }
    .art-b{
        height:.98rem;
        line-height:.98rem;
        color:#a2a2a2;
    }
</style>
