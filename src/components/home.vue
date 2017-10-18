<template>
    <div>
        <t-header></t-header>
        <router-view id="home"></router-view>
    </div>
</template>

<script>
    import tHeader from '@/components/common/header'
    import First from '@/components/views/first/first'
    export default {
        data () {
            return {

            }
        },
        components:{
            tHeader,
            First
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #home{
        padding:0 0 0 .5rem;
    }
</style>
