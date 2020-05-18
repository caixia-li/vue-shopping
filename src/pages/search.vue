<template>
  <div class="search">
      <list :data="data" v-if='data.length'></list>
      <div class="tip" v-else>
        没有您想要的商品
        <button @click="$router.back()">返回</button>
    </div>
  </div>
</template>

<script>
import $axios from "../plugin/$axios";
import list from "@/components/list";
export default {
    components:{
        list
    },
    data() {
        return {
            data:[]
        }
    },
    beforeRouteEnter (to, from, next) {
        $axios.get(`/search?word=${to.query.word}`).then(({data})=>{
            next(vm=>{
                vm.data = data;
            })
        })
    },
    beforeRouteUpdate(to, from, next){
         $axios.get(`/search?word=${to.query.word}`).then(({data})=>{
            this.data = data;
        })
    }
}
</script>

<style>
.tip{
    text-align: center;
    line-height: 370px;
    background-color: #fff;
    font-size: 20px;
    margin-top: -10px;
}
.tip button{
    color: blue;
    font-size: 20px;
    outline: none;
    border: none;
    background-color: #fff;
}
</style>