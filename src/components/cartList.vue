<template>
  <div class="cartList">
    <ul>
      <li v-for="(item,index) in list" :key="item.goodId">
        <input type="checkbox" :value="index" v-model="checkList" />
        <img :src="item.img_list_url" alt />
        <div class="right">
          <p class="title">{{item.title}}</p>
          <div class="message">
            <span class="price">{{item.price}}</span>
            <p>
              <el-button @click="reduce(item.Id)" class="el-icon-minus btn" size="mini"></el-button>
              <span class="count">{{item.count}}</span>
              <el-button @click="add(item.Id)" class="el-icon-plus btn" size="mini"></el-button>
              <el-button type="text" @click="del(item.Id)">删除</el-button>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div class="total" v-if='checkList.length'>
      <div class="right">
        <span>合计：<span style="color:red">￥{{price}}</span></span>
        <button>结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import $axios from "../plugin/$axios";
export default {
  props: ["list"],
  data() {
    return {
      checkList: [],
      num: 0,
      price: 0
    };
  },
  watch: {
    checkList: {
      deep: true,
      handler: function() {
          this.num = 0;
          this.price = 0;
        this.checkList.forEach(item => {
          this.num += this.list[item].count;
          this.price += this.list[item].count * this.list[item].price;
        });
      }
    }
  },
  methods: {
    reduce(goodId) {
      let { token } = this.$store.state;
      $axios.get(`/remove?token=${token}&goodId=${goodId}`).then(({ data }) => {
        let code = data.code;
        if (code == 0) {
          this.$message({
            type: "warning",
            message: "无效登录，请重新登录"
          });
          setTimeout(
            function() {
              this.$router.push("/login");
            }.bind(this),
            500
          );
        } else if (code == 1) {
          this.$message({
            type: "success",
            message: "成功"
          });
          setTimeout(
            function() {
              this.getData();
            }.bind(this),
            500
          );
        } else {
          this.$message({
            type: "error",
            message: "失败"
          });
        }
      });
    },
    add(goodId) {
      let { token } = this.$store.state;
      $axios.get(`/add?token=${token}&goodId=${goodId}`).then(({ data }) => {
        let code = data.code;
        if (code == 0) {
          this.$message({
            type: "warning",
            message: "无效登录，请重新登录"
          });
          setTimeout(
            function() {
              this.$router.push("/login");
            }.bind(this),
            500
          );
        } else if (code == 1) {
          this.$message({
            type: "success",
            message: "添加成功"
          });
          setTimeout(
            function() {
              this.getData();
            }.bind(this),
            500
          );
        } else {
          this.$message({
            type: "error",
            message: "添加失败"
          });
        }
      });
    },
    del(goodId) {
      let { token } = this.$store.state;
      $axios.get(`/del?token=${token}&goodId=${goodId}`).then(({ data }) => {
        let code = data.code;
        if (code == 0) {
          this.$message({
            type: "warning",
            message: "无效登录，请重新登录"
          });
          setTimeout(
            function() {
              this.$router.push("/login");
            }.bind(this),
            500
          );
        } else if (code == 1) {
          this.$message({
            type: "success",
            message: "添加成功"
          });
          setTimeout(
            function() {
              this.getData();
            }.bind(this),
            500
          );
        } else {
          this.$message({
            type: "error",
            message: "添加失败"
          });
        }
      });
    },
    getData() {
      this.$parent.getData();
    }
  }
};
</script>

<style>
.cartList ul li {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border: 1px solid #cccccc;
  padding: 10px;
}
.cartList ul li img {
  height: 80px;
  width: 20%;
  vertical-align: middle;
}
.cartList ul li .right {
  float: right;
  width: 70%;
  height: 100%;
}
.cartList ul li .title {
  display: inline-block;
  padding: 0px 20px;
  font-weight: bolder;
}
.cartList ul li .title:hover {
  text-decoration: underline;
}
.cartList ul li .message {
  display: flex;
  justify-content: space-between;
}
.cartList ul li .right .price {
  padding: 0px 20px;
  display: inline-block;
  line-height: 40px;
}
/* .cartList ul li .right p {
  margin-bottom: 20px;
} */
.cartList ul li .right .btn {
  padding: 2px;
}
.cartList .total{
    height: 40px;
    width: 100%;
    line-height: 40px;
    position: fixed;
    bottom: 50px;
    padding: 0px 10px;
    border-top: 1px solid #cccccc;
    background-color: #fff;
}
.cartList .total .right{
    position: absolute;
    right: 10px;
    font-size: 14px;
}
.cartList .total .right button{
    outline: none;
    border: none;
    background-color: #67C23A;
    color: #fff;
    padding: 5px 10px;
    border-radius: 23px;
}
</style>