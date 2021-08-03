<template>
  <div class="row">
    <!-- 初始请求前 -->
    <h1 v-show="userInfo.isFirst">欢迎使用</h1>
    <!-- 请求中 -->
    <h1 v-show="userInfo.isLoading">请稍等...</h1>
    <!-- 请求成功 -->
    <div
      v-show="userInfo.userMsg.length"
      class="card"
      v-for="msg in userInfo.userMsg"
      :key="msg.id"
    >
      <a :href="msg.html_url" target="_blank">
        <img :src="msg.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ msg.login }}</p>
    </div>
    <!-- 请求失败 -->
    <h1 v-show="userInfo.errorMsg.length">{{ userInfo.errorMsg }}</h1>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "List",
  data() {
    return {
      userInfo: {
        isFirst: true,
        isLoading: false,
        userMsg: [],
        errorMsg: "",
      },
    };
  },
  methods: {
    updataList(dataObj) {
      this.userInfo = { ...this.userInfo, ...dataObj };
    },
  },
  mounted() {
    this.$bus.$on("updataList", this.updataList);
  },
  beforeDestroy() {
    this.$bus.$off("updataList");
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>