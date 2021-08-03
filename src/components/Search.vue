<template>
  <section class="jumbotron" @keyup.enter="getUser">
    <h3 class="jumbotron-heading">搜索GitHub用户</h3>
    <div>
      <input
        type="text"
        placeholder="输入搜索名"
        v-model="keyWord"
      />&nbsp;<button @click="getUser">搜索</button>
    </div>
  </section>
</template>

<script>
// 引入pubsub对象
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    getUser() {
      this.$bus.$emit("updataList", {
        isFirst: false,
        isLoading: true,
        userMsg: [],
        errorMsg: "",
      });

      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          // console.log("请求成功", response.data.items);
          this.$bus.$emit("updataList", {
            isLoading: false,
            userMsg: response.data.items,
            errorMsg: "",
          });
        },
        (error) => {
          console.log("请求失败，");
          this.$bus.$emit("updataList", {
            isLoading: false,
            userMsg: [],
            errorMsg: error.message,
          });
        }
      );
    },
  },
};
</script>

<style scoped>
</style>