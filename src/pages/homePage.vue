<template>
  <div class="homePage">
    <index-header :list="list" :message="message"></index-header>
    <router-view></router-view>
    <tabBar></tabBar>
  </div>
</template>

<script>
import indexHeader from "@/components/index-header";
import tabBar from '@/components/tabBar'
import $axios from "../plugin/$axios";
export default {
  components: {
    indexHeader,
    tabBar
  },
  data() {
    return {
      list: [],
      message: ""
    };
  },
  created() {
    let goodList = $axios.get("/goodList");
    let Typeone = $axios.get("/getTypeone");
    (async () => {
      let res = await Promise.all([goodList, Typeone]);
      this.data = res[0].data;
      this.list = res[1].data;
      this.message = `搜索商品，共条${this.data.length}好物`;
      this.$store.dispatch('updated_list_async',this.list);
      this.$store.dispatch('updated_data_async',this.data);
    })();
  }
};
</script>

<style>
.homePage{
  height: 100%;
  width: 100%;
}
</style>