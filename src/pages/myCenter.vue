<template>
  <div class="myCenter">
    <myCenterHeader></myCenterHeader>
    <div class="empty" v-if="!token">
      <el-link type="primary" @click="loginHandle">您还没有登录，点击登录</el-link>
    </div>
    <div class="profile" v-else>
      <div class="name">
        <div class="clearfix">
          <span class="el-icon-setting"></span>
        </div>
        <div class="message">
          <p class="username">{{$store.state.username}}</p>
          <button>成长值0</button>
        </div>
      </div>
      <div class="strip order">
        <span>我的订单</span>
        <span class="right">
          全部订单
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
      <div class="strip order-detail">
        <ul>
          <li>
            <p class="el-icon-money icon"></p>
            <p class="text">待付款</p>
          </li>
          <li>
            <p class="el-icon-truck icon"></p>
            <p class="text">待收货</p>
          </li>
          <li>
            <p class="el-icon-chat-line-square icon"></p>
            <p class="text">已完成</p>
          </li>
          <li>
            <p class="el-icon-postcard icon"></p>
            <p class="text">售后/退款</p>
          </li>
        </ul>
      </div>
      <ul class="myDetail">
        <li class="strip">
          <span>我的金币</span>
          <span class="right">
            0
            <i class="el-icon-arrow-right"></i>
          </span>
        </li>
        <li class="strip">
          <router-link :to="{path:'/myArticle'}">
            <span>我的地址</span>
            <span class="right">
              <i class="el-icon-arrow-right"></i>
            </span>
          </router-link>
        </li>
        <li class="strip">
          <span>我的客服</span>
          <span class="right">
            4008210369
            <i class="el-icon-arrow-right"></i>
          </span>
        </li>
        <li class="strip">
          <span>系统设置</span>
          <span class="right">
            <i class="el-icon-arrow-right"></i>
          </span>
        </li>
      </ul>
    </div>
    <router-view></router-view>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
import myCenterHeader from "@/components/myCenterHeader";
import $axios from "../plugin/$axios";
export default {
  components: {
    tabBar,
    myCenterHeader
  },
  created() {
    let { token } = this.$store.state;
    this.token = token;
  },
  watch: {
    $route: function() {
      let { token } = this.$store.state;
      this.token = token;
    }
  },
  data() {
    return {
      token: ""
    };
  },
  methods: {
    loginHandle() {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.myCenter .empty {
  width: 100%;
  height: 300px;
  line-height: 300px;
  text-align: center;
}
.myCenter .profile {
  background-color: #cccccc;
}
.myCenter .profile .name {
  background-color: #fff;
  width: 100%;
  height: 200px;
  background-color: blueviolet;
  border-bottom: 1px solid #cccccc;
}
.myCenter .profile .name span {
  float: right;
  padding: 10px;
  line-height: 25px;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
}
.myCenter .profile .name .message {
  width: 100%;
  height: 140px;
  text-align: center;
  padding: 40px 0px;
}
.myCenter .profile .name .message p {
  color: #ffffff;
}
.myCenter .profile .name .message button {
  outline: none;
  border: none;
  background-color: #67c23a;
  color: #ffffff;
  padding: 3px 10px;
  border-radius: 3px;
}
.myCenter .profile .order,
.myCenter .profile .order-detail {
  background-color: #fff;
}
.myCenter .profile .strip {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #cccccc;
  padding: 0px 10px;
}
.myCenter .profile .strip .right {
  float: right;
}
.myCenter .profile .order-detail {
  line-height: 25px;
  padding: 5px 10px;
}
.myCenter .profile .order-detail ul {
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 12px;
}
.myCenter .profile .order-detail ul .icon {
  font-size: 20px;
}
.myCenter .profile .order-detail ul .text {
  margin-top: -5px;
}
.myCenter .profile .myDetail {
  background-color: #fff;
  margin-top: 10px;
}
.myCenter a{
  text-decoration: none;
  color: black;
}
</style> 