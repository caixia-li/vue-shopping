<template>
  <div class="classify">
    <classifyHeader></classifyHeader>
    <main class="clearfix">
      <classifyTab :list="list"></classifyTab>
      <router-view></router-view>
    </main>
    <tabBar></tabBar>
  </div>
</template>

<script>
import classifyHeader from "@/components/classifyHeader";
import classifyTab from "@/components/classifyTab";
import tabBar from "@/components/tabBar";
import $axios from "../plugin/$axios";
export default {
  components: {
    classifyHeader,
    classifyTab,
    tabBar
  },
  data() {
    return {
      list: [],
      data: []
    };
  },
  beforeRouteEnter(to, from, next) {
    $axios.get(`/goodList?type_one=${to.query.type_one}`).then(({ data }) => {
      next(vm => {
        vm.data = data;
      });
    });
  },
  created() {
    this.list = this.$store.state.list;
  },
  computed: {
    floor_list: function() {
      var floor_list = [];
      this.data.forEach((item, index) => {
        var flag = true;
        floor_list.forEach(element => {
          if (element.type == item.type_two) {
            element.list.push(item);
            flag = false;
          }
        });
        if (flag) {
          floor_list.push({
            type: item.type_two,
            list: [item]
          });
        }
      });
      return floor_list;
    }
  }
};
</script>

<style>
</style>