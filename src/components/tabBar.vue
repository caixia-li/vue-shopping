<template>
  <div class="tabBar">
      <ul>
          <li>
              <router-link :to="{path:'/'}">首页</router-link>
          </li>
          <li>
              <router-link :to="{path:'/classify'}">分类</router-link>
          </li>
          <li>
              <router-link :to="{path:'/cart'}">购物车</router-link>
          </li>
          <li>
              <router-link :to="{path:'/myCenter'}">我的</router-link>
          </li>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.tabBar{
    height: 50px;
    width: 100%;
    background-color: rgb(247, 245, 245);
    border-top: 1px solid #ccc;
    position: fixed;
    bottom: 0;
}
.tabBar ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.tabBar li{
    width: 25%;
    height: 100%;
    line-height: 50px;
    text-align: center;
}
.tabBar li a{
    text-decoration: none;
    color: black;
}
.tabBar li .router-link-exact-active{
    color: blueviolet;
}
</style>