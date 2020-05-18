<template>
  <div class="classifyTab">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <router-link :to="{path:'/classifyList',query:{type_one:item}}">{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style>
.classifyTab {
  float: left;
  width: 30%;
}
.classifyTab li {
  text-align: center;
  padding: 10px 0px;
}
.classifyTab li a{
  text-decoration: none;
  color: black;
}
</style>