<template>
  <div class="detailBanner">
    <div class="view">
      <el-carousel  height="280px">
        <el-carousel-item v-for="(item,index) in imgs" :key="index">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="message">
        <p>
            <span>【{{msg.type_two}}】</span>
            <span>{{msg.supplier}}</span>
        </p>
        <p class="price">
            <span style="color:red">￥{{msg.price}}</span>
            <span v-html="msg.mack"></span>
        </p>
    </div>
  </div>
</template>

<script>
export default {
    props:['imgs','msg'],
    created() {
      console.log(this.msg)
    },
};
</script>

<style>
.detailBanner .view {
  height: 300px;
  width: 100%;
  padding: 10px 0px;
}
.detailBanner .view img {
  width: 100%;
  height: 100%;
}
.detailBanner .view .el-carousel__button{
    height: 6px;
    width: 6px;
    border-radius: 50%;
}
.detailBanner .message p{
    padding: 2px 12px;
}
.detailBanner .message .price{
    display: flex;
    justify-content: space-between;
}
</style>