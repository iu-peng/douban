<template>
    <span id="star">
        <span 
            v-for="item,index in starNum" key="index"
        >
            💛
        </span>
        <span 
            v-if="starNum"
            v-for="it,nth in 5-starNum" key="nth"
        >
            💔
        </span>
    </span>
</template>

<script>
    export default {
        props:['starval'],
        data () {
            return {
                
            }
        },
        computed:{
            starNum(){
                let val = Math.round(this.starval.average/this.starval.max*10/2)
                return val
            }
        }
    }
</script>

<style scoped>
  #star{
    font-size:.25rem;
  }
</style>
