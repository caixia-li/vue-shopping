<template>
  <div class="index">
    <banner></banner>
    <list :data="data"></list>
  </div>
</template>

<script>
import banner from "@/components/banner";
import list from "@/components/list";
import $axios from "../plugin/$axios";
export default {
  components: {
    banner,
    list
  },
  data() {
    return {
      data:[]
    }
  },
  beforeRouteEnter (to, from, next) {
    $axios.get('/goodList').then(({data})=>{
      next(vm=>{
        vm.data = data
      })
    })
  },
  
};
</script>

<style>
</style>