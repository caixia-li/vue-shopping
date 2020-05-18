<template>
  <div class="index-header">
    <div class="ipt">
      <el-input v-model="input" :placeholder="message" @keyup.enter.native="searchHandle">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="nav">
      <ul>
          <li>
            <router-link :to="{path:'/'}">首页</router-link>
          </li>
          <li v-for="(item,index) in list" :key="index">
            <router-link :to="{path:'/list',query:{type_one:item}}">{{item}}</router-link>
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
      input: "",
    };
  },
  props:['list','message'],
  methods: {
    searchHandle(){
      this.$router.push(`/search?word=${this.input}`);
    }
  },
  };
</script>

<style>
.index-header .ipt {
  width: 80%;
  margin: 0 auto;
  padding: 10px 0px;
}
.index-header .ipt input {
  text-align: center;
}
.index-header .nav{
    padding: 10px;
}
.index-header .nav ul{
    display: flex;
    justify-content: space-around;
}
.index-header .nav li a{
  text-decoration: none;
  color: black;
}
</style>