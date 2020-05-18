<template>
  <div class="classifyIndex">
    <div v-for="(item,index) in floor_list" :key="index" class="list_view" ref="floor">
      <h4>{{item.type}}</h4>
      <ul class="clearfix">
        <li v-for="el in item.list" :key="el.Id">
          <router-link :to="{path:'/detail',query:{goodId:el.Id}}">
            <img :src="el.img_list_url" alt="">
            <h4>{{el.title}}</h4>
            <p>
              <span>￥{{el.price}}</span>
              <span v-html="el.mack"></span>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $axios from "../plugin/$axios";
export default {
  data() {
    return {
      list: []
    };
  },
  beforeRouteEnter(to, from, next) {
    $axios.get(`/goodList?type_one=${to.query.type_one}`).then(({ data }) => {
      next(vm => {
        vm.list = data;
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    $axios.get(`/goodList?type_one=${to.query.type_one}`).then(({ data }) => {
      this.list = data;
    });
  },
  computed: {
    floor_list: function() {
      let floor_list = [];
      this.list.forEach((item, index) => {
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
  },
};
</script>

<style>
.classifyIndex {
  float: left;
  width: 70%;
  border-left: 1px solid #cccccc;
}

.list_view h4 {
  text-align: center;
}
.list_view>ul {
  width: 100%;
}
.list_view>ul>li {
  width: 100%;
  padding: 5px;
  margin: 5px 10px;
  overflow: hidden;
  background-color: #ffffff;
  float: left;
}
.list_view li a{
  text-decoration: none;
  color: black;
}
.list_view li img {
  width: 100%;
}
.list_view li h4 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  text-align: center;
}
.list_view li p {
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
}
</style>