<template>
  <div class="shopCart">
    <tabBar></tabBar>
    <cartHeader></cartHeader>
    <div class="empty-box" v-if="!token">
      <el-link type="primary" @click="loginHandle">您还没有登录，点击登录</el-link>
    </div>
    <div v-else>
      <cartList :list="list" v-if="list.length"></cartList>
      <div class="empty" v-else>
        <img :src="cart" alt />
        <p>购物车空空如也，快来挑选好物呗~</p>
        <button @click="$router.push('/')">逛逛今日特卖</button>
      </div>
    </div>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
import cartHeader from "@/components/cartHeader";
import cartList from "@/components/cartList";
import $axios from "../plugin/$axios";
export default {
  components: {
    tabBar,
    cartHeader,
    cartList
  },
  data() {
    return {
      list: [],
      cart: "../static/images/cart.jpg",
      token: ""
    };
  },
  created() {
    let { token } = this.$store.state;
    this.token = token;
    this.getData();
  },
  watch: {
    $route: function() {
      this.getData();
    }
  },
  methods: {
    getData() {
      let { token } = this.$store.state;
      $axios.get(`/shoplist?token=${token}`).then(({ data }) => {
        this.list = data;
      });
    },
    loginHandle(){
      this.$router.push("/login");
    }
  }
};
</script>

<style>
.shopCart .empty-box {
  width: 100%;
  height: 300px;
  line-height: 300px;
  text-align: center;
}
.shopCart .empty {
  width: 100%;
  height: 300px;
  text-align: center;
  background-color: #f6f6f6;
}
.shopCart .empty img {
  width: 50%;
}
.shopCart .empty p {
  padding: 5px;
  color: gray;
}
.shopCart .empty button {
  outline: none;
  border: 1px solid #cccccc;
  padding: 5px 10px;
  color: gray;
}
</style>