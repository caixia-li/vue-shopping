<template>
  <div class="detailFooter">
    <button class="min">
      <i class="el-icon-service"></i>
      <span>客服</span>
    </button>
    <button class="big" @click="addCartHandle">加入购物车</button>
    <button class="big red">立即购买</button>
  </div>
</template>

<script>
export default {
  methods: {
    addCartHandle(){
      this.$parent.addCartHandle()
    }
  }
};
</script>

<style>
.detailFooter {
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  border-top: 1px solid white;
}
.detailFooter button {
  outline: none;
  border: none;
  height: 50px;
  line-height: 50px;
  text-align: center;
  float: left;
}
.detailFooter .min {
  width: 20%;
  background-color: #fff;
}
.detailFooter .big {
  width: 40%;
  color: #fff;
}
.detailFooter .red {
  background-color: red;
}
</style>