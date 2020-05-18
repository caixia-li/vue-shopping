<template>
  <div class="myArticle">
    <div class="myArticleHeader">
      <div class="left">
        <span class="el-icon-arrow-left" @click="$router.back()"></span>
      </div>
      <span>我的地址</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.myArticleHeader {
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: center;
  padding: 0px 10px;
  background-color: #fcfcfc;
  border-bottom: 1px solid #cccccc;
}
.myArticleHeader .left {
  float: left;
  height: 40px;
  line-height: 40px;
}
</style>