<template>
  <div class="container">
    <Search></Search>
    <List></List>
  </div>
</template>

<script>
// import axios from "axios";

// 引入组件
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  components: {
    Search,
    List,
  },
  methods: {},
};
</script>

<style>
[v-cloak] {
  display: none;
}
</style>
