<template>
  <div class="goodlist">
      <list :data="data"></list>
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
        $axios.get(`/goodList?type_one=${to.query.type_one}`).then(({data})=>{
            next(vm=>{
                vm.data = data;
            })
        })
    },
    beforeRouteUpdate(to, from, next){
         $axios.get(`/goodList?type_one=${to.query.type_one}`).then(({data})=>{
            this.data = data;
        })
    }
}
</script>

<style>

</style>