<template>
  <div class="cartHeader">
    <span class="el-icon-arrow-left left" @click="$router.back()"></span>
    <span>购物车</span>
  </div>
</template>

<script>
export default {};
</script>

<style>
.cartHeader {
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: center;
  padding: 0px 10px;
  background-color: #fcfcfc;
  border-bottom: 1px solid #cccccc;
}
.cartHeader .left {
  float: left;
  height: 40px;
  line-height: 40px;
}
</style>