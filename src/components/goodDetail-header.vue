<template>
  <div class="goodHeader">
      <div class="left">
          <span class="el-icon-arrow-left" @click="$router.back()"></span>
      </div>
      <span>商品详情</span>
      <div class="right">
          <img :src="cart" alt="" @click="goCart">
          <span class="el-icon-upload2"></span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cart:"../static/images/cart.jpg"
        }
    },
    methods: {
        goCart(){
            let {token} = this.$store.state;
            this.$router.push('/cart')
        }
    },

}
</script>

<style>
.goodHeader{
    height: 40px;
    line-height: 40px;
    width: 100%;
    text-align: center;
    padding: 0px 10px;
}
.goodHeader .left{
    float: left;
}
.goodHeader .right{
    float: right;
    height: 100%;
}
.goodHeader .right img{
    height: 20px;
    width: 20px;
}
.goodHeader .right span{
    display: inline-block;
    height: 20px;
    width: 20px;
    font-size: 20px;
}
</style>