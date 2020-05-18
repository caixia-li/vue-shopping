<template>
  <div class="login">
      <el-input class="ipt" placeholder="用户名" @focus="userErr=''" v-model="userName">
      <i slot="prefix" class="el-input__icon el-icon-user"></i>
    </el-input>
    <span class="err" v-show="userErr">{{userErr}}</span>
    <el-input class="ipt" placeholder="密码" @focus="pwdErr=''" v-model="password" type="password">
      <i slot="prefix" class="el-input__icon el-icon-key"></i>
    </el-input>
    <span class="err" v-show="pwdErr">{{pwdErr}}</span>
    <el-button type="success" @click="login">登录</el-button>
  </div>
</template>

<script>
import $axios from '../plugin/$axios'
export default {
  data() {
    return {
      userName: "",
      password: "",
      userErr: "",
      pwdErr: ""
    };
  },
  methods: {
    login() {
      var reg = /^[\w\u4e00-\u9fad]{6,12}$/;
      if (!reg.test(this.userName)) {
        this.userErr = "用户名不合法,请输入6-12的数字、字母、下划线或汉字";
        return false;
      }
      var reg2 = /^\w{6,12}$/;
      if (!reg2.test(this.password)) {
        this.pwdErr = "密码不合法,密码只能为6-12位的数字，字母，下划线";
        return false;
      }
      if (reg.test(this.userName) && reg2.test(this.password)) {
        $axios
          .get(`/login?userName=${this.userName}&password=${this.password}`)
          .then(res => {
            let data = res.data;
            if (data.code == 0) {
              this.$message({
                type: "warning",
                message: "用户名或密码错误"
              });
            } else if (data.code == 1) {
              this.$message({
                type: "success",
                message: "登录成功"
              });
              //保存token到本地
              localStorage.setItem('token',data.token);
              //保存token到vuex
              this.$store.dispatch('updated_token_async',data.token);
              this.$store.dispatch('updated_username_async',this.userName)
              this.$router.back()
            }
            this.userName = '';
            this.password = '';
          });
      }
    }
  }
};
</script>

<style>
.login{
    height: 100%;
    position: fixed;
    top: 40px;
    background-color: #fff;
    padding: 20px;
}
.login .ipt {
  margin-top: 20px;
}
.login  button {
  margin: 0 auto;
  display: block;
  width: 100%;
  margin-top: 30px;
}
.err {
  color: red;
  font-size: 12px;
}
</style>