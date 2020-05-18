<template>
  <div class="list">
    <ul>
      <li v-for="item in data" :key="item.goodItem">
        <router-link :to="{path:'/detail',query:{goodId:item.Id}}">
          <img :src="item.img_list_url" alt />
          <div class="right">
            <p class="title">{{item.title}}</p>
            <p class="message">
              <span>￥{{item.price}}</span>
              <span v-html="item.mack"></span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style>
.list li {
  width: 100%;
  height: 200px;
  padding: 10px 20px;
  border: 1px solid #cccccc;
}
.list li img {
  display: inline-block;
  width: 50%;
  height: 100%;
}
.list li .right {
  display: inline-block;
  width: 48%;
  height: 100%;
  padding: 5px 10px;
  vertical-align: bottom;
  color: black;
}
.list li .right p {
  height: 50%;
}
.list li .right .title {
  padding-top: 20px;
  white-space: pre-wrap;
}
.list li .right .message {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
}
</style>