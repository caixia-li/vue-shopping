<template>
  <div class="classifyHeader">
    <span class="el-icon-arrow-left" @click="$router.back()"></span>
    <div class="center">
      <el-input v-model="input" placeholder="请输入商品关键词" @keyup.enter.native="searchHandle">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <span @click="cancelHandle">取消</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input:''
    }
  },
  methods: {
    searchHandle(){
      this.$router.push(`/search?word=${this.input}`);
    },
    cancelHandle(){
      this.input = ''
    }
  },
};
</script>

<style>
.classifyHeader {
  height: 45px;
  line-height: 40px;
  width: 100%;
  text-align: center;
  padding: 0px 10px;
  background-color: #fcfcfc;
  border-bottom: 1px solid #cccccc;
}
.classifyHeader .center{
  float: left;
  width: 80%;
  height: 80%;
}
.classifyHeader .center .el-input{
  height: 100%;
}
.classifyHeader .center input{
  border: none;
  background-color: #f0f0f0;
  border-radius: 0px;
  height: 100%;
}
.classifyHeader span{
  float: left;
  height: 100%;
  line-height: 40px;
  padding-left: 6px;
  font-size: 14px;
}
</style>