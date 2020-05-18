<template>
  <div class="detail">
    <goodHeader></goodHeader>
    <detailBanner :imgs="imgs" :msg="message"></detailBanner>
    <detailFooter></detailFooter>
  </div>
</template>

<script>
import goodHeader from "@/components/goodDetail-header";
import detailBanner from "@/components/detailBanner";
import detailFooter from "@/components/detailFooter";
import $axios from "../plugin/$axios";
export default {
  components: {
    goodHeader,
    detailBanner,
    detailFooter
  },
  data() {
    return {
      imgs: [],
      message: {},
      goodID: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    $axios.get(`/detail?goodId=${to.query.goodId}`).then(({ data }) => {
      next(vm => {
        vm.imgs = eval(data[0].imgs);
        vm.message.title = data[0].title;
        vm.message.supplier = data[0].supplier;
        vm.message.type_two = data[0].type_two;
        vm.message.price = data[0].price;
        vm.message.mack = data[0].mack;
        vm.goodID = data[0].Id;
        // console.log(vm.message)
      });
    });
  },
  methods: {
    addCartHandle() {
      //验证用户是否登录
      let { token } = this.$store.state;
      if (token) {
        $axios
          .get(`/add?token=${token}&goodId=${this.goodID}`)
          .then(({ data }) => {
            if (data.code == 2) {
              this.$message({
                type: "error",
                message: "添加失败"
              });
            } else if (data.code == 1) {
              this.$message({
                type: "success",
                message: "添加成功"
              });
            } else {
              this.$message({
                type: "warning",
                message: "无效登录，请重新登录"
              });
              setTimeout(
                function() {
                  this.$router.push("/login");
                }.bind(this),
                1000
              );
            }
          });
      } else {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style>
</style>