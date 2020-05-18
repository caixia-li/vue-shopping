<template>
  <div class="banner">
      <el-carousel trigger="click" height="200px">
      <el-carousel-item v-for="(item,index) in imgs" :key="index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
    data() {
        return {
            imgs: [
        "../static/images/a.jpg",
        "../static/images/b.jpg",
        "../static/images/c.jpg",
        "../static/images/d.jpg",
        "../static/images/e.jpg"
      ]
        }
    },
}
</script>

<style>
.banner{
    height: 200px;
    width:100%;
    padding: 10px 0px;

}
.banner img{
    width: 100%;
    height: 100%;
}
</style>